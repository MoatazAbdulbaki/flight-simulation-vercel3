import * as THREE from "three";
import { Airplane } from "./airplane";
import {
  camera,
  controls,
  gui,
  renderer,
  scene,
  sizes,
  MainAnimationLoop,
} from "./init";
import { mainAmbientLights } from "./lights/mainAmbient";
import { mainDirectionalLights } from "./lights/mainDirectional";

scene.add(mainAmbientLights, mainDirectionalLights);
scene.add(Airplane);
MainAnimationLoop();
