"use client";
import Lottie from "lottie-react";
import { BackgroundBeams } from "./components/BackgroundBeams";
import { StaggeredGrid } from "./components/StaggeredGrid/StaggeredGrid";
import StarsCanvas from "./components/StarsBackGround";
import animationData from "../app/assets/lotties/BroomGirl.json";
import { MovingButton } from "./components/MovingButton/MovingButton";

export default function HomePage() {
  return (
    <>
      <MovingButton></MovingButton>
      <BackgroundBeams />
      <StarsCanvas />
      {/* <div className="z-20 h-full flex items-center justify-center">
        <Lottie animationData={animationData}></Lottie>
      </div> */}
    </>
  );
}
