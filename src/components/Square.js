import React from "react";

const Square = ({ boardPiece, handleGamePlay, index }) => {
  const handleClick = () => {
    handleGamePlay(index);
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
