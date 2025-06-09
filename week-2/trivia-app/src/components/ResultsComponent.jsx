import React from "react";

export default function ResultsComponent({ result, resetGame }) {
  return (
    <div className="results">
      <p>Result: {result}</p>
      <button onClick={resetGame}>Restart</button>
    </div>
  );
}
