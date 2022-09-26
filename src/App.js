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

  const handleClick = (e) => {};

  return (
    <div className="App">
      <h1>Treasure Hunt Game</h1>
      <div className="board">
        {board.map((space, index) => {
          return <Square boardPiece={space} handleClick={handleClick} />;
        })}
      </div>
    </div>
  );
};

export default App;
