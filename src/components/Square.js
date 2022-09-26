import React from "react";

const Square = ({ boardPiece, handleClick }) => {
  // let boardPiece = props.boardPiece;
  return (
    <>
      <div className="square" onClick={handleClick}>
        {boardPiece}
      </div>
    </>
  );
};
export default Square;
