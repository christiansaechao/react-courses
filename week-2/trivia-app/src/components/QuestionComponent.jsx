import React from "react";

export default function QuestionComponent({ question, onAnswerSelect }) {
  return (
    <div className="question">
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        <button onClick={() => onAnswerSelect("True")}>True</button>
        <button onClick={() => onAnswerSelect("False")}>False</button>
      </div>
    </div>
  );
}
