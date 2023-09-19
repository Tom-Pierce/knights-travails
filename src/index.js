import { createBoard } from "./chess-board";
import { chessSquare } from "./chess-square";
import { Knight } from "./knight";
import { getShortestKnightPath } from "./get-shortest-knight-path";
import "./style.css";
import {
  createHeader,
  createParagraph,
  createSpan,
} from "./create-dom-elements";

export const knight = Knight();
const init = () => {
  createBoard();
  // Moves the knight to its start of 0, 0
  knight.move(0, 0);

  // Creates and inserts the title and explanation at the top of the page
  document
    .querySelector("#board")
    .insertAdjacentElement(
      "beforebegin",
      createHeader("h1", "Knights Travails", "", "title-header"),
    );
  document
    .querySelector("#board")
    .insertAdjacentElement(
      "beforebegin",
      createParagraph(
        "Click on any square and the knight will show you the shortest path",
        "",
        "explanation-paragraph",
      ),
    );
};

// Create a span that shows the list of moves to the user
const displayKnightPath = (path) => {
  if (document.querySelector(".knight-path")) {
    document.querySelector(".knight-path").remove();
  }

  let pathString = "";
  path.forEach((move, index) => {
    pathString += `[${move}]`;
    // Check if this is not the last move
    if (index < path.length - 1) {
      pathString += " --> ";
    }
  });

  document
    .querySelector("#board")
    .insertAdjacentElement(
      "beforebegin",
      createSpan(pathString, "", "knight-path"),
    );
};

export const knightMoves = (end, start) => {
  const startSquare = chessSquare(start, null);
  const path = getShortestKnightPath(end, startSquare);
  // Display knight path in the DOM
  displayKnightPath(path);
  // For each move in the path, move the knight every one sec
  path.forEach((move, index) => {
    setTimeout(() => {
      knight.move(path[index][0], path[index][1]);
    }, 1000 * index);
  });
};

init();
