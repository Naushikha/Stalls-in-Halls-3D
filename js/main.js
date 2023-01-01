import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { degToRad } from "three/src/math/MathUtils";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";

var DEBUG = false;
var containerID = "sih3d-container";
var assetPath = "./assets/"; // Trailing slash is important!
var container = document.getElementById(containerID);

var hallData = {
  hallLength: 5,
  hallWidth: 5,
  walls: [
    [0, 2.5, 2.5, 2.5],
    [-0.5, 2.5, -2.5, 2.5],
    [2.5, 2.5, 2.5, -2.5],
    [2.5, -2.5, -2.5, -2.5],
    [-2.5, -2.5, -2.5, 2.5],
  ],
  entrances: [[-0.5, 2.5, 0, 2.5]],
  stalls: [
    { x: 0, y: 0, rot: -60, id: "A1", availability: "available" },
    { x: 2, y: 2, rot: 180, id: "A2", availability: "available" },
    { x: 2, y: 1, rot: 180, id: "A3", availability: "pending" },
    { x: 2, y: 0, rot: 180, id: "A4", availability: "available" },
    {
      x: 2,
      y: -1,
      rot: 180,
      id: "A5",
      availability: "allocated",
      allocatedTo: "Some Guy Who is Too Damn Rich",
    },
  ],
};

const debugMode = (inTF) => {
  DEBUG = inTF;
};

var onStallClick = (stallID) => {
  DEBUG && console.log(`SiH3D: Clicked on stall id: ${stallID}`);
};

const updateContainerID = (inContainerID) => {
  containerID = inContainerID;
  DEBUG && console.log(`SiH3D: Container ID updated: ${containerID}`);
};
const updateAssetPath = (inAssetPath) => {
  assetPath = inAssetPath;
  DEBUG && console.log(`SiH3D: Asset path updated: ${assetPath}`);
};
const updateOnStallClick = (inOnStallClick) => {
  onStallClick = inOnStallClick;
  DEBUG && console.log(`SiH3D: OnStallClick updated: ${onStallClick}`);
};

// Common variables
var scene, camera, renderer, labelRenderer, mouse, raycaster;
var clickBoxes = [];
var stallOBJs = [];
var walls = [];
var floor = null;
var labelList = [];
var hoverStallID = "";
var animFrameID = "";
var canvasText = null;

const addOnClickBox = (x = 0, y = 0, rot = 0, stall) => {
  let availColor;
  if (stall.availability == "available") availColor = 0x00ff00;
  else if (stall.availability == "pending") availColor = 0xffff00;
  else availColor = 0xff0000;
  const boxGeom = new THREE.BoxGeometry(1, 0.65, 1);
  const boxMat = new THREE.MeshStandardMaterial({
    color: availColor,
    side: THREE.DoubleSide,
    opacity: 0.25,
    transparent: true,
  });
  const box = new THREE.Mesh(boxGeom, boxMat);
  box.position.x = x;
  box.position.y = 0.325;
  box.position.z = y;
  box.rotateY(degToRad(rot));
  box.userData.stallID = stall.id;
  box.userData.availability = stall.availability;
  addLabel(stall.id, box);
  let occupiedText;
  if (stall.availability == "allocated")
    occupiedText = `Occupied: ${stall.allocatedTo}`;
  else if (stall.availability == "pending") occupiedText = "Booked";
  else occupiedText = "Available";
  addOccupied(addLabel(occupiedText, box, 0.6), box);
  scene.add(box);
  clickBoxes.push(box);
};

const loadStallModel = (x = 0, y = 0, rot = 0) => {
  var mtlLoader = new MTLLoader();
  var objLoader = new OBJLoader();
  mtlLoader.setPath(assetPath);
  objLoader.setPath(assetPath);
  mtlLoader.load("stall.mtl", (materials) => {
    materials.preload();
    objLoader.setMaterials(materials);
    objLoader.load("stall.obj", (object) => {
      object.position.x = x;
      object.position.z = y;
      object.rotateY(degToRad(rot));
      scene.add(object);
      stallOBJs.push(object);
    });
  });
};

const addFloor = () => {
  // Add floor
  const floorGeom = new THREE.PlaneGeometry(
    hallData.hallWidth,
    hallData.hallLength
  );
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0xcccccc,
    side: THREE.DoubleSide,
  });
  floor = new THREE.Mesh(floorGeom, floorMat);
  floor.rotateX(Math.PI / 2);
  floor.receiveShadow = true;
  scene.add(floor);
};

const addWall = (
  x1 = 0,
  y1 = 0,
  x2 = 2,
  y2 = 0,
  z = 0,
  height = 0.85,
  thickness = 0.05
) => {
  const fromVec = new THREE.Vector3(x1, 0, y1);
  const toVec = new THREE.Vector3(x2, 0, y2);
  const length = fromVec.distanceTo(toVec);
  const direction = toVec.clone().sub(fromVec).normalize();
  const newOrigin = fromVec.clone().add(direction.multiplyScalar(length / 2));
  const wallGeom = new THREE.BoxGeometry(thickness, height, length);
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const wall = new THREE.Mesh(wallGeom, wallMat);
  wall.position.copy(newOrigin);
  wall.lookAt(toVec);
  wall.position.y = z ? z : height / 2;
  scene.add(wall);
  walls.push(wall);
};

const addEntrance = (x1 = 0, y1 = 0, x2 = 2, y2 = 0) => {
  addWall(x1, y1, x2, y2, 0.7, 0.3);
};

const addLabel = (text = "Label", object, offset = 0) => {
  const labelDiv = document.createElement("div");
  labelDiv.innerText = text;
  labelDiv.style =
    "color: #fff; padding: 2px; background: rgba(0, 0, 0, 0.6); margin-top: -1em;";
  const label = new CSS2DObject(labelDiv);
  label.position.set(0, offset, 0);
  object.add(label);
  labelList.push(labelDiv);
  return label;
};

const addOccupied = (labelObj, object) => {
  object.userData.labelOccupied = labelObj;
  labelObj.visible = false;
};

const setupStalls = () => {
  for (let wall of hallData.walls) addWall(...wall);
  for (let entrace of hallData.entrances) addEntrance(...entrace);
  for (let stall of hallData.stalls) {
    loadStallModel(stall.x, stall.y, stall.rot);
    addOnClickBox(stall.x, stall.y, stall.rot, stall);
  }
};

const onMouseMove = (event) => {
  // https://stackoverflow.com/a/40106019
  var rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / (rect.right - rect.left)) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / (rect.bottom - rect.top)) * 2 + 1;
};

const onMouseDown = () => {
  if (hoverStallID == "") return;
  onStallClick(hoverStallID);
};

const testMouseInteraction = () => {
  raycaster.setFromCamera(mouse, camera);
  var rayResult = [];
  const boxIntersects = raycaster.intersectObjects(clickBoxes, true, rayResult);
  if (boxIntersects.length) {
    for (let clickBox of clickBoxes) {
      clickBox.material.opacity = 0.25;
      clickBox.userData.labelOccupied.visible = false;
    }
    rayResult[0].object.material.opacity = 0.5;
    if (rayResult[0].object.userData.availability == "available") {
      hoverStallID = rayResult[0].object.userData.stallID;
      container.style.cursor = "pointer";
    } else {
      hoverStallID = "";
      container.style.cursor = "default";
    }
    rayResult[0].object.userData.labelOccupied.visible = true;
  } else {
    hoverStallID = "";
    container.style.cursor = "default";
    for (let clickBox of clickBoxes) {
      clickBox.material.opacity = 0.25;
    }
  }
};

const init = (inHallData = hallData) => {
  DEBUG && console.log(`SiH3D: Initiating...`);
  hallData = inHallData;

  // Select container
  container = document.getElementById(containerID);

  // Show FPS stats
  const stats = new Stats();
  stats.domElement.style.position = "relative";
  DEBUG &&
    container.parentNode.insertBefore(stats.domElement, container.nextSibling); // https://stackoverflow.com/a/32135318

  // Setup renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  // Setup label renderer
  labelRenderer = new CSS2DRenderer();
  labelRenderer.setSize(container.offsetWidth, container.offsetHeight);
  // https://stackoverflow.com/a/10487329
  container.style.position = "relative";
  labelRenderer.domElement.style.position = "absolute";
  labelRenderer.domElement.style.top = `0px`;
  container.appendChild(labelRenderer.domElement);

  // Setup scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xcccccc);
  // For debug
  const axesHelper = new THREE.AxesHelper(5);
  DEBUG && scene.add(axesHelper);
  const gridHelper = new THREE.GridHelper(10, 10);
  DEBUG && scene.add(gridHelper);

  // Setup camera
  camera = new THREE.PerspectiveCamera(
    75,
    container.offsetWidth / container.offsetHeight,
    0.1,
    1000
  );
  camera.position.z = hallData.hallLength + 2;
  camera.position.y = 5;

  // Setup lighting
  const light = new THREE.AmbientLight(0x404040); // soft white light
  scene.add(light);
  const dirLight1 = new THREE.DirectionalLight(0xffffff);
  dirLight1.position.set(2, 3, 4);
  scene.add(dirLight1);

  update(hallData);

  const renderLoop = () => {
    animFrameID = requestAnimationFrame(renderLoop);
    controls.update();
    testMouseInteraction();
    DEBUG && stats.update();
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
  };

  // Setup controls
  const controls = new OrbitControls(camera, labelRenderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 2;
  controls.maxDistance = Math.max(hallData.hallLength, hallData.hallWidth) + 1;
  controls.enablePan = false;
  controls.maxPolarAngle = Math.PI / 2.1;

  // Setup interaction
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  container.addEventListener("mousemove", onMouseMove, false);
  container.addEventListener("mousedown", onMouseDown);

  // Run render loop
  renderLoop();

  // Add logo
  displayLogo();
};

const update = (inHallData = hallData) => {
  DEBUG && console.log(`SiH3D: Updating...`);
  hallData = inHallData;
  let tmpClickBoxes = clickBoxes;
  clickBoxes = [];
  for (let clickBox of tmpClickBoxes) {
    scene.remove(clickBox);
  }
  for (let stallOBJ of stallOBJs) {
    scene.remove(stallOBJ);
  }
  for (let wall of walls) {
    scene.remove(wall);
  }
  scene.remove(floor);
  for (let label of labelList) {
    label.remove();
  }
  setupStalls();
  addFloor();
  // Reset camera
  // Assumes a main entrance[0] exists in data
  const vecEntrance = new THREE.Vector2(
    hallData.entrances[0][0],
    hallData.entrances[0][1]
  );
  const vecCam = vecEntrance
    .clone()
    .add(vecEntrance.clone().normalize().multiplyScalar(1.4));
  camera.position.x = vecCam.x;
  camera.position.z = vecCam.y;
  camera.position.y = 2;
};

const destroy = () => {
  DEBUG && console.log(`SiH3D: Destroying...`);
  cancelAnimationFrame(animFrameID);
  renderer.dispose();
  renderer = null;
  labelRenderer = null;
};

const displayCanvasText = (
  inDisplayState = false,
  inText = "Your text",
  inCSS = ""
) => {
  if (inDisplayState) {
    const tmpElem = document.createElement("p");
    tmpElem.innerHTML = inText;
    tmpElem.style = `position: absolute; ${inCSS}`;
    container.appendChild(tmpElem);
    canvasText = tmpElem;
  } else {
    if (canvasText) canvasText.remove();
  }
};

const displayLogo = () => {
  const tmpElem = document.createElement("p");
  tmpElem.innerHTML = `<tt><a style="text-decoration: none; color: black;" href="https://github.com/Naushikha/Stalls-in-Halls-3D" target="_blank">SiH-3D</a><br><small><a style="text-decoration: none; color: #333333;" href="https://naushikha.com" target="_blank">by Naushikha</a></small></tt>`;
  tmpElem.style = `position: absolute; bottom: 0; margin: 0; font-weight: bold; font-size: 0.8rem; border-radius: 0px 10px 0px 0px; padding: 2px 5px; background: linear-gradient(200deg, rgba(173,216,230,1) 0%, rgba(236,232,255,1) 100%);`;
  container.appendChild(tmpElem);
};

const SiH3D = {
  debugMode: debugMode,
  updateContainerID: updateContainerID,
  updateAssetPath: updateAssetPath,
  updateOnStallClick: updateOnStallClick,
  displayCanvasText: displayCanvasText,
  init: init,
  update: update,
  destroy: destroy,
};

export default SiH3D;
