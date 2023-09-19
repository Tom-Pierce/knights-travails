import { createBoard } from "./chess-board";
import { chessSquare } from "./chess-square";
import { Knight } from "./knight";
import { getShortestKnightPath } from "./get-shortest-knight-path";
import "./style.css";

// Create the knight and board in the DOM
createBoard();
export const knight = Knight();
// Moves the knight to its start of 0, 0
knight.move(0, 0);

export const knightMoves = (end, start) => {
  const startSquare = chessSquare(start, null);
  const path = getShortestKnightPath(end, startSquare);
  // For each move in the path, move the knight every one sec
  path.forEach((move, index) => {
    setTimeout(() => {
      knight.move(path[index][0], path[index][1]);
    }, 1000 * index);
  });
};

knightMoves([7, 7], [knight.x, knight.y]);
