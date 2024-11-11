import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";



const BallMobileCanvas = ({ icon }) => {
  return (
    <>
    <img src={icon}/>
    </>
  );
};

export default BallMobileCanvas;