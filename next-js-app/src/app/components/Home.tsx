"use client";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";
import { BackgroundBeams } from "./BackgroundBeams";
import { Typography } from "@mui/material";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] w-full">
      <BackgroundBeams />
      <TextRevealCard text="Ready to Explore?" revealText="Ghantaa oga!">
        <TextRevealCardTitle>
          <Typography
            fontWeight={800}
            fontFamily={
              'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
            }
          >
            Sometimes, you just need to see it.
          </Typography>
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
