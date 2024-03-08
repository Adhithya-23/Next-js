import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./MovingButton.scss";
import { BubbleText } from "../BubbleText/BubbleText";

export const MovingButton = () => {
  useEffect(() => {
    const button: any = document.getElementById("buttonMoving");

    const distanceBetween = (
      p1x: number,
      p1y: number,
      p2x: number,
      p2y: number
    ) => {
      const dx = p1x - p2x;
      const dy = p1y - p2y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    document.addEventListener("mousemove", (event) => {
      const radius = Math.max(
        button?.offsetWidth * 0.75,
        button?.offsetHeight * 0.75,
        100
      );

      const bx =
        button?.parentNode.offsetLeft +
        button?.offsetLeft +
        button?.offsetWidth / 2;
      const by =
        button?.parentNode.offsetTop +
        button?.offsetTop +
        button?.offsetHeight / 2;

      const dist = distanceBetween(event.clientX, event.clientY, bx, by);
      const angle = Math.atan2(event.clientY - by, event.clientX - bx);

      const ox = -1 * Math.cos(angle) * Math.max(radius - dist, 0);
      const oy = -1 * Math.sin(angle) * Math.max(radius - dist, 0);

      const rx = oy / 2;
      const ry = -ox / 2;

      button.style.transition = `all 0.1s ease`;
      button.style.transform = `translate(${ox}px, ${oy}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      button.style.boxShadow = `0px ${Math.abs(oy)}px ${
        (Math.abs(oy) / radius) * 40
      }px rgba(0,0,0,0.15)`;
    });

    const nocheat = () => (button.textContent = "No cheating 🙅‍♂️");
    const notouch = () =>
      (button.textContent = "This thing doesn't work with touch 😢");

    button.addEventListener(
      "click",
      (event: any) => (button.textContent = "You win 🎉🙃")
    );
    button.addEventListener("keydown", (event: any) => {
      event.preventDefault();
      nocheat();
    });
    button.click = nocheat;

    if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) notouch();
    window.addEventListener("touchstart", notouch);
  });

  return (
    <Container className="w-full h-full flex items-center justify-center">
      <Box component={"div"}>
        <div className="button-wrapper">
          <Button
            color="secondary"
            sx={{ color: "white", width: "200px", height: "50px" }}
            id="buttonMoving"
          >
            Explore
          </Button>
        </div>
      </Box>
    </Container>
  );
};
