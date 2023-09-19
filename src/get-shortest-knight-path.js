import { chessSquare } from "./chess-square";

// Utility function to check if two positions are the same
const samePos = (posOne, posTwo) => {
  if (posOne[0] === posTwo[0] && posOne[1] === posTwo[1]) {
    return true;
  }
  return false;
};

export const getShortestKnightPath = (end, current, queue = [current]) => {
  if (samePos(current.position, end)) {
    const path = [current.position];
    while (current.parent) {
      path.push(current.parent.position);
      current = current.parent;
    }
    // Reverse the path so it is read from start to finish
    path.reverse();
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
