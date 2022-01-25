import { BookSharp } from "@material-ui/icons";
import React, { useState } from "react";
import { calculateWinner } from "../calculateWinner";
import Board from "./Board";
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [xIsNext, setXisNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    // if user clicks on occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put X or O in a clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };
  const jumpTo = () => {};
  const renderMoves = () => {};
  return <Board squares={board} onClick={handleClick} />;
};

export default Game;
