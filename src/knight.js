import knightSVG from "./imgs/knight.svg";

export const Knight = () => {
  let x = 0;
  let y = 0;

  const knightImg = document.createElement("img");
  knightImg.src = knightSVG;
  knightImg.classList.add("knight-img");
  document.body.appendChild(knightImg);

  const render = () => {
    const newSquare = document.querySelector(`.square-${x}${y}`);
    newSquare.appendChild(knightImg);
  };
  const move = (newX, newY) => {
    x = newX;
    y = newY;
    render();
  };

  return {
    get x() {
      return x;
    },
    get y() {
      return y;
    },
    move,
  };
};
