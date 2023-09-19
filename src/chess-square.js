// The 8 possible moves a knight can take
const movements = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];

export const chessSquare = (position, parent) => {
  const possibleMoves = [];
  // Create and array of all possible moves from this square
  const createMovesArray = () => {
    movements.forEach((movement) => {
      // Checks to see if any move is off of the board
      if (
        position[0] + movement[0] >= 0 &&
        position[0] + movement[0] <= 7 &&
        position[1] + movement[1] >= 0 &&
        position[1] + movement[1] <= 7
      ) {
        const move = [position[0] + movement[0], position[1] + movement[1]];
        possibleMoves.push(move);
      }
    });
  };
  return {
    get position() {
      return position;
    },
    get parent() {
      return parent;
    },
    get possibleMoves() {
      return possibleMoves;
    },
    createMovesArray,
  };
};
