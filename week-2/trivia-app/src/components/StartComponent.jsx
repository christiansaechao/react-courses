import React from "react";

export default function StartComponent({ onClick }) {
  return (
    <div className="start">
      <p>Press start</p>
      <button onClick={onClick}>Start Game</button>
    </div>
  );
}
