import Lottie from "lottie-react";
import "./App.scss";
import animationData from "../assets/lotties/cat2- 1708239419000.json";
import { Typography } from "@mui/material";

function LottiePOC() {
  return (
    <>
      <div className="h-full flex-col">
        <Typography
          className="text-3xl font-bold underline text-center"
          variant="h2"
        >
          Watcha Looking at Huuman
        </Typography>
        <Lottie style={{ height: 700 }} animationData={animationData}></Lottie>
      </div>
    </>
  );
}

export default LottiePOC;
