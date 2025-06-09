import "./App.css";
import { QuestionComponent } from "./components/QuestionComponent";
import { ResultsComponent } from "./components/ResultsComponent";
import { StartComponent } from "./components/StartComponent";
import { useState } from "react";
import useTrivia from "./hooks/useTrivia";

function App() {
  const [gameState, setGameState] = useState(0); // 0, 1, 2
  const [gameScore, setGameScore] = useState(0);
  const { question, countdown, token, loading, fetchNextQuestion } =
    useTrivia();

  async function handleAnswerSelect(answer) {
    if (answer == question.correct_answer) {
      console.log("User guessed right");
      // if user guess correct results + 1 and fetch a new question
      setGameScore((prev) => prev + 1);
      fetchNextQuestion();
    } else {
      console.log("User guessed wrong");
      // change the game state to 2
      setGameState(2);
    }
  }

  if (loading) {
    return (
      <div className="container">
        <h1>Trivia app</h1>
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Trivia app</h1>
      {gameState == 0 && (
        <StartComponent
          token={token}
          onClick={() => {
            setGameState(1);
            fetchNextQuestion();
          }}
        />
      )}
      {gameState == 1 && (
        <QuestionComponent
          counter={countdown}
          onAnswerSelect={handleAnswerSelect}
          question={question.question}
        />
      )}
      {gameState == 2 && (
        <ResultsComponent
          result={gameScore}
          resetGame={() => setGameState(0)}
        />
      )}
    </div>
  );
}

export default App;
