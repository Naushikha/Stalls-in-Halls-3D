import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { degToRad } from "three/src/math/MathUtils";

var containerID = "sih3d-container";
var assetPath = "./assets/"; // Trailing slash is important!
var container;

var hallData = {
  hallLength: 5,
  hallWidth: 5,
  stalls: [
    { x: 0, y: 0, rot: 60, id: "A1", availability: 0 },
    { x: 2, y: 2, rot: 0, id: "A2", availability: 1 },
    { x: 2, y: 1, rot: 0, id: "A3", availability: 2 },
  ],
};

var onStallClick = (stallID) => {
  console.log(`SiH3D: Clicked on stall id: ${stallID}`);
};

const updateContainerID = (inContainerID) => {
  containerID = inContainerID;
};
const updateAssetPath = (inAssetPath) => {
  assetPath = inAssetPath;
};
const updateOnStallClick = (inOnStallClick) => {
  onStallClick = inOnStallClick;
};

// Common variables
var scene, camera, renderer, mouse, raycaster;
var clickBoxes = [];
var stallOBJs = [];
var hoverStallID = "";

const addOnClickBox = (x = 0, y = 0, rot = 0, id = "", availability = 0) => {
  let availColor;
  if (availability == 0) availColor = 0x00ff00;
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
  box.userData.stallID = id;
  box.userData.availability = availability;
  scene.add(box);
  clickBoxes.push(box);
};

const loadStallModel = (x = 0, y = 0, rot = 0) => {
  var mtlLoader = new MTLLoader();
  var objLoader = new OBJLoader();
  mtlLoader.setPath(assetPath);
  objLoader.setPath(assetPath);
  console.log(assetPath);
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

const setupStalls = () => {
  for (let stall of hallData.stalls) {
    loadStallModel(stall.x, stall.y, stall.rot);
    addOnClickBox(stall.x, stall.y, stall.rot, stall.id, stall.availability);
  }
  onStallClick("testing this");
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
    }
    rayResult[0].object.material.opacity = 0.5;
    if (rayResult[0].object.userData.availability == 0)
      hoverStallID = rayResult[0].object.userData.stallID;
  } else {
    hoverStallID = "";
    for (let clickBox of clickBoxes) {
      clickBox.material.opacity = 0.1;
    }
  }
};

const init = (inHallData = hallData) => {
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

  setupStalls();

  const renderLoop = () => {
    requestAnimationFrame(renderLoop);
    controls.update();
    testMouseInteraction();
    stats.update();
    renderer.render(scene, camera);
  };

  // Setup controls
  const controls = new OrbitControls(camera, renderer.domElement);
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
  hallData = inHallData;

  console.log(hallStuff);
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
