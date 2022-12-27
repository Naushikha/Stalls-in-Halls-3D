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

var containerID = "sih3d-container";
var assetPath = "./assets/"; // Trailing slash is important!
var container;

var hallData = {
  hallLength: 5,
  hallWidth: 5,
  stalls: [
    { x: 0, y: 0, rot: 60, id: "A1", availability: "available" },
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

var onStallClick = (stallID) => {
  console.log(`SiH3D: Clicked on stall id: ${stallID}`);
};

const updateContainerID = (inContainerID) => {
  containerID = inContainerID;
  console.log(`SiH3D: Container ID updated: ${stallID}`);
};
const updateAssetPath = (inAssetPath) => {
  assetPath = inAssetPath;
  console.log(`SiH3D: Asset path updated: ${stallID}`);
};
const updateOnStallClick = (inOnStallClick) => {
  onStallClick = inOnStallClick;
  console.log(`SiH3D: OnStallClick updated: ${stallID}`);
};

// Common variables
var scene, camera, renderer, mouse, raycaster;
var clickBoxes = [];
var stallOBJs = [];
var labelList = [];
var hoverStallID = "";

const addOnClickBox = (x = 0, y = 0, rot = 0, stall) => {
  let availColor;
  if (stall.availability == "available") availColor = 0x00ff00;
  else availColor = 0xff0000;
  const boxGeom = new THREE.BoxGeometry(1, 0.65, 1);
  const boxMat = new THREE.MeshStandardMaterial({
    color: availColor,
    side: THREE.DoubleSide,
    opacity: 0.1,
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
  addOccupied(addLabel(occupiedText, box, -0.2), box);
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

const addLabel = (text = "Label", object, offset = 0.2) => {
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
      clickBox.material.opacity = 0.1;
      clickBox.userData.labelOccupied.visible = false;
    }
    rayResult[0].object.material.opacity = 0.5;
    if (rayResult[0].object.userData.availability == "available")
      hoverStallID = rayResult[0].object.userData.stallID;
    else hoverStallID = "";
    rayResult[0].object.userData.labelOccupied.visible = true;
  } else {
    hoverStallID = "";
    for (let clickBox of clickBoxes) {
      clickBox.material.opacity = 0.1;
    }
  }
};

const init = (inHallData = hallData) => {
  console.log(`SiH3D: Initiating...`);
  hallData = inHallData;

  // Select container
  container = document.getElementById(containerID);

  // Show FPS stats
  const stats = new Stats();
  stats.domElement.style.position = "relative";
  container.appendChild(stats.domElement);

  // Setup renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  // Setup label renderer
  const labelRenderer = new CSS2DRenderer();
  labelRenderer.setSize(container.offsetWidth, container.offsetHeight);
  labelRenderer.domElement.style.position = "absolute";
  labelRenderer.domElement.style.top = "0px";
  container.appendChild(labelRenderer.domElement);

  // Setup scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xcccccc);
  // For debug
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  // Setup camera
  camera = new THREE.PerspectiveCamera(
    75,
    container.offsetWidth / container.offsetHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Setup lighting
  const light = new THREE.AmbientLight(0x404040); // soft white light
  scene.add(light);
  const dirLight1 = new THREE.DirectionalLight(0xffffff);
  dirLight1.position.set(2, 3, 4);
  scene.add(dirLight1);

  // Add floor
  const floorGeom = new THREE.PlaneGeometry(
    hallData.hallWidth,
    hallData.hallLength
  );
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0xaaaaaa,
    side: THREE.DoubleSide,
  });
  const floor = new THREE.Mesh(floorGeom, floorMat);
  floor.rotateX(Math.PI / 2);
  floor.receiveShadow = true;
  scene.add(floor);

  update(hallData);

  const renderLoop = () => {
    requestAnimationFrame(renderLoop);
    controls.update();
    testMouseInteraction();
    stats.update();
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
  };

  // Setup controls
  const controls = new OrbitControls(camera, labelRenderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 2;
  controls.maxDistance = Math.max(hallData.hallLength, hallData.hallWidth);
  controls.enablePan = false;
  controls.maxPolarAngle = Math.PI / 2.1;

  // Setup interaction
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  container.addEventListener("mousemove", onMouseMove, false);
  container.addEventListener("mousedown", onMouseDown);

  // Run render loop
  renderLoop();
};

const update = (inHallData = hallData) => {
  console.log(`SiH3D: Updating...`);
  hallData = inHallData;
  let tmpClickBoxes = clickBoxes;
  clickBoxes = [];
  for (let clickBox of tmpClickBoxes) {
    scene.remove(clickBox);
  }
  for (let stallOBJ of stallOBJs) {
    scene.remove(stallOBJ);
  }
  for (let label of labelList) {
    label.remove();
  }
  setupStalls();
};

const SiH3D = {
  updateContainerID: updateContainerID,
  updateAssetPath: updateAssetPath,
  updateOnStallClick: updateOnStallClick,
  init: init,
  update: update,
  onStallClick: onStallClick,
};

export default SiH3D;
