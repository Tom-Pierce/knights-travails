import { position } from "./position";

export const knightMoves = (start, end) => {
  const knightPos = position(start[0], start[1]);
  knightPos.createMovesArr();
  knightPos.possibleMoves.forEach((move) => {
    if (move[0] === end[0] && move[1] === end[1]) {
      console.log("kinda works lol");
    }
  });
};
