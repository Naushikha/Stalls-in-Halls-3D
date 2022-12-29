import SiH3D from "./main";

SiH3D.debugMode(true);
SiH3D.init();

// Test for update issues
setTimeout(() => {
  SiH3D.displayCanvasText(
    true,
    "Please wait, loading...",
    "top: 0; margin: auto; left: 50%; transform: translate(-50%, 50%); font-weight: bold; font-size: 2rem; background-color: lightblue; border-radius: 10px; padding: 5px 10px;"
  );
  SiH3D.update();
  setTimeout(() => {
    SiH3D.displayCanvasText(false);
  }, 500);
}, 5000);
setTimeout(() => {
  SiH3D.update();
}, 10000);
