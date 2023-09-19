import { createBoard } from "./chess-board";
import { chessSquare } from "./chess-square";
import { Knight } from "./knight";
import { getShortestKnightPath } from "./get-shortest-knight-path";
import "./style.css";

createBoard();
const knight = Knight();
knight.move(7, 7);

export const knightMoves = (end, start) => {
  const startSquare = chessSquare(start, null);
  const path = getShortestKnightPath(end, startSquare);
  path.reverse();
  path.forEach((move, index) => {
    setTimeout(
      () => {
        knight.move(path[index][0], path[index][1]);
      },
      1000 + 1000 * index,
    );
  });
};

knightMoves([0, 7], [knight.x, knight.y]);
