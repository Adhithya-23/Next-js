"use client";
import anime from "animejs";
import React, { useEffect } from "react";
import "./StaggeredGrid.scss";
import Lottie from "lottie-react";
import animationData from "../../assets/lotties/BroomGirl.json";
export const StaggeredGrid = () => {
  useEffect(() => {
    createGrid();
  });

  let columns: any = 0,
    rows: any = 0,
    toggled = true;

  const toggle = () => {
    toggled = !toggled;
    if (typeof window !== "undefined") {
      document.body.classList.toggle("toggled");
    }
  };

  const handleOnClick = (index: any) => {
    //toggle();

    anime({
      targets: ".tile",
      opacity: toggled ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index,
      }),
    });
  };

  const createTile = (index: any) => {
    if (typeof window !== "undefined") {
      const tile = document.createElement("div");

      tile.classList.add("tile");

      tile.style.opacity = toggled ? "0" : "1";

      tile.onclick = (e) => handleOnClick(index);

      return tile;
    }
  };

  const createTiles = (quantity: number, wrapper: any) => {
    Array.from(Array(quantity)).map((tile, index) => {
      wrapper?.appendChild(createTile(index));
    });
  };

  const createGrid = () => {
    if (typeof window !== "undefined") {
      const wrapper = document.getElementById("tiles");
      if (wrapper) wrapper.innerHTML = "";

      const size = document.body.clientWidth > 800 ? 100 : 50;

      columns = Math.floor(document.body.clientWidth / size);
      rows = Math.floor(document.body.clientHeight / size);

      wrapper?.style.setProperty("--columns", columns);
      wrapper?.style.setProperty("--rows", rows);

      createTiles(columns * rows, wrapper);
    }
  };

  createGrid();
  if (typeof window !== "undefined") {
    window.onresize = () => createGrid();
  }
  return (
    <div>
      <div id="tiles"></div>
      <div id="title" className="centered">
        The name of the game is
        <span className="fancy">Chess</span>.
        <Lottie style={{ height: 500 }} animationData={animationData}></Lottie>
      </div>
    </div>
  );
};
