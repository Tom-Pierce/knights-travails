export const position = (x, y) => {
  const currentPos = [x, y];
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
  const possibleMoves = [];

  const createMovesArr = () => {
    movements.forEach((movement) => {
      if (
        currentPos[0] + movement[0] >= 0 &&
        currentPos[0] + movement[0] <= 7 &&
        currentPos[1] + movement[1] >= 0 &&
        currentPos[1] + movement[1] <= 7
      ) {
        const move = [currentPos[0] + movement[0], currentPos[1] + movement[1]];
        possibleMoves.push(move);
      }
    });
  };
  return { currentPos, createMovesArr, possibleMoves };
};
