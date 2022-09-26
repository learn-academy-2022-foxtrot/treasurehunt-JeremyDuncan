import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);

  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [counter, setCounter] = useState(5);
  const [message, setMessage] = useState("");
  const [gamePlay, setGamePlay] = useState(true);

  const handleGamePlay = (clickedSquare) => {
    // reassigns bomb location if it matches the treasure location
    if (bombLocation === treasureLocation) {
      setBombLocation(Math.floor(Math.random() * board.length));
    }

    //create a copy of the board
    let updateBoard = [...board];

    if (clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "💎";
      setBoard(updateBoard);
      setMessage(<h1 className="message">YOU WIN!!</h1>);
      setGamePlay(false);
    } else if (clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = "💣";
      setBoard(updateBoard);
      setMessage(<h1 className="message">YOU LOSE!!</h1>);
      setGamePlay(false);
    } else {
      updateBoard[clickedSquare] = "🌳";
      setBoard(updateBoard);
    }

    if (
      board[clickedSquare] !== "🌳" &&
      board[clickedSquare] !== "💣" &&
      board[clickedSquare] !== "💎"
    ) {
      setCounter(counter - 1);
    }
    if (gamePlay) {
      if (counter === 0) {
        setMessage(<h1 className="message">You Ran out of Turns!!</h1>);
        setGamePlay(false);
      }
    }
  };

  const handleReset = () => {
    setBoard(["?", "?", "?", "?", "?", "?", "?", "?", "?"]);
    setTreasureLocation(Math.floor(Math.random() * board.length));
    setBombLocation(Math.floor(Math.random() * board.length));
    setGamePlay(true);
    setMessage("");
    setCounter(5);
  };

  return (
    <div className="App">
      <h1>Treasure Hunt Game</h1>
      {message}
      <div className="board">
        {board.map((space, index) => {
          return (
            <Square
              boardPiece={space}
              index={index}
              key={index}
              handleGamePlay={handleGamePlay}
              gamePlay={gamePlay}
            />
          );
        })}
      </div>
      <button className="btn" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
};

export default App;
