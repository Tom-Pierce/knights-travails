import { samePos } from "./chess-board";
import { chessSquare } from "./chess-square";

export const getShortestKnightPath = (end, current, queue = [current]) => {
  if (samePos(current.position, end)) {
    const path = [current.position];
    while (current.parent) {
      path.push(current.parent.position);
      current = current.parent;
    }
    return path;
  }
  current.createMovesArray();
  current.possibleMoves.forEach((move) => {
    const square = chessSquare(move, current);
    queue.push(square);
  });
  queue.shift();
  return getShortestKnightPath(end, queue[0], queue);
};