import React from "react";
import { calculateWinner } from "../calculateWinner";
function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
}

export default Game;
