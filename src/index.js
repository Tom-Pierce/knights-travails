import { createBoard } from "./chess-board";
import { Knight } from "./knight";
import { knightMoves } from "./knight-moves";
import "./style.css";

createBoard();
const knight = Knight();
knight.move(7, 7);
knightMoves([0, 7], [knight.x, knight.y]);
