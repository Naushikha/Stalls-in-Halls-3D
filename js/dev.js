import SiH3D from "./main";

SiH3D.debugMode(true);
SiH3D.init();

// Test for update issues
setTimeout(() => {
  SiH3D.update();
}, 5000);
setTimeout(() => {
  SiH3D.update();
}, 10000);
