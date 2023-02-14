import { rippleFx } from "./rippleFx.js";
import { setCursor, hideCursor, showCursor } from "./cursor.js";

const button = document.querySelector("button");
const isMobile = window.matchMedia("(max-width: 768px)").matches;

const init = () => {
  if (!isMobile) {
    setCursor();
  }

  button.addEventListener("click", (event) => {
    const button = event.currentTarget;
    rippleFx(button);
  });

  button.addEventListener("mouseover", (e) => {
    hideCursor();
  });

  button.addEventListener("mouseout", (e) => {
    showCursor();
  });
};

init();
