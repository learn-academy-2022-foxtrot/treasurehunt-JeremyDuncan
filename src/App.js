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
    } else if (clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = "💣";
      setBoard(updateBoard);
    } else {
      updateBoard[clickedSquare] = "🌳";
      setBoard(updateBoard);
    }
  };

  return (
    <div className="App">
      <h1>Treasure Hunt Game</h1>
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
    </div>
  );
};

export default App;
