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

  // I can see a counter that shows how many guesses I have left. The counter
  // starts at five and decrements one every time I click on a square that is
  // not the treasure nor the bomb.
  const [counter, setCounter] = useState(5);

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
      setCounter(counter - 1);
    }
  };

  const handleReset = () => {
    setBoard(["?", "?", "?", "?", "?", "?", "?", "?", "?"]);
    setTreasureLocation(Math.floor(Math.random() * board.length));
    setBombLocation(Math.floor(Math.random() * board.length));
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
      <button className="btn" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
};

export default App;
