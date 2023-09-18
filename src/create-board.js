import { createDiv } from "./create-dom-elements";

export const createBoard = () => {
  const board = createDiv("board", "board");
  for (let i = 7; i > -1; i -= 1) {
    const rowDiv = createDiv("", "row");
    for (let j = 0; j < 8; j += 1) {
      const square = createDiv("", "square", `square-${j}${i}`);
      rowDiv.appendChild(square);
    }
    board.appendChild(rowDiv);
  }
  document.body.appendChild(board);
};
