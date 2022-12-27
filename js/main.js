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
    { x: 2, y: 2, rot: 0, id: "A2", availability: 0 },
  ],
};

var onStallClick = (stall) => {
  console.log("SiH3D: Clicked on stall");
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
var scene;
var mouse = new THREE.Vector2();

const addOnClickBox = (x = 0, y = 0, rot = 0) => {
  const boxGeom = new THREE.BoxGeometry(1, 0.65, 1);
  const boxMat = new THREE.MeshStandardMaterial({
    color: 0xff0000,
    side: THREE.DoubleSide,
    opacity: 0.5,
    transparent: true,
  });
  const box = new THREE.Mesh(boxGeom, boxMat);
  box.position.x = x;
  box.position.y = 0.325;
  box.position.z = y;
  box.rotateY(degToRad(rot));
  scene.add(box);
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
    });
  });
};

const setupStalls = () => {
  for (let stall of hallData.stalls) {
    loadStallModel(stall.x, stall.y, stall.rot);
    addOnClickBox(stall.x, stall.y, stall.rot);
  }
  onStallClick("testing this");
};

const onMouseMove = (event) => {
  this.mouse.x = (event.clientX / container.offsetWidth) * 2 - 1;
  this.mouse.y = -(event.clientY / container.offsetHeight) * 2 + 1;
};

// window.addEventListener("mousemove", this.onMouseMove.bind(this), false);

const init = (inHallData = hallData) => {
  hallData = inHallData;

  // Select container
  container = document.getElementById(containerID);

  // Show FPS stats
  const stats = new Stats();
  stats.domElement.style.position = "relative";
  container.appendChild(stats.domElement);

  // Setup renderer
  const renderer = new THREE.WebGLRenderer({
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
  const camera = new THREE.PerspectiveCamera(
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
