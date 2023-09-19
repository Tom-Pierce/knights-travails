import { knight, knightMoves } from ".";
import { createDiv } from "./create-dom-elements";

// Creates a chessboard in  the DOM with 8 rows and 8 squares in each row like a 2D array
export const createBoard = () => {
  const board = createDiv("board", "board");
  for (let i = 7; i > -1; i -= 1) {
    const rowDiv = createDiv("", "row");
    for (let j = 0; j < 8; j += 1) {
      const square = createDiv("", "square", `square-${j}${i}`);
      // Event listener to show shortest path to clicked square
      square.addEventListener("click", (event) => {
        // Gets the position of the clicked square by splitting the class name
        const end = [
          parseInt(event.target.classList[1].split("-")[1][0], 10),
          parseInt(event.target.classList[1].split("-")[1][1], 10),
        ];
        knightMoves(end, [knight.x, knight.y]);
      });
      rowDiv.appendChild(square);
    }
    board.appendChild(rowDiv);
  }
  document.body.appendChild(board);
};
