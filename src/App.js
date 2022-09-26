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
    } else if (clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = "💣";
      setBoard(updateBoard);
      setMessage(<h1 className="message">YOU LOSE!!</h1>);
    } else {
      updateBoard[clickedSquare] = "🌳";
      setBoard(updateBoard);
      setCounter(counter - 1);
    }
  };

  // I can see a message informing me that I won the game if I select the square
  // that contains the treasure.

  const handleReset = () => {
    setBoard(["?", "?", "?", "?", "?", "?", "?", "?", "?"]);
    setTreasureLocation(Math.floor(Math.random() * board.length));
    setBombLocation(Math.floor(Math.random() * board.length));
    setMessage("");
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
