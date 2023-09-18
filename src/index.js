import { createBoard } from "./create-board";
import { Knight } from "./knight";
import { knightMoves } from "./knight-moves";
import "./style.css";

createBoard();
const knight = Knight();
knight.move(3, 3);
knightMoves([knight.x, knight.y], [6, 0]);
