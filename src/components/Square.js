import React from "react";

const Square = ({ boardPiece, handleGamePlay, index, gamePlay }) => {
  const handleClick = () => {
    if (gamePlay) {
      handleGamePlay(index);
    }
  };

  return (
    <>
      <div className="square" onClick={() => handleClick()}>
        {boardPiece}
      </div>
    </>
  );
};
export default Square;
