import "./App.css";
import QuestionComponent from "./components/QuestionComponent";
import ResultsComponent from "./components/ResultsComponent";
import StartComponent from "./components/StartComponent";
import { useState, useEffect } from "react";

const ENDPOINT =
  "https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=boolean&toke=sessiontoken";

function App() {
  const [gameState, setGameState] = useState(0); // 0, 1, 2
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [gameScore, setGameScore] = useState(0);

  async function fetchNextQuestion() {
    setLoading(true);
    const res = await fetch(ENDPOINT);
    const data = await res.json();
    console.log("question:", data);
    const question = data.results[0];
    setQuestion(question);
    setLoading(false);
  }

  async function handleAnswerSelect(answer) {
    console.log("User answered", answer);
    console.log("question", question);
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

  useEffect(() => {
    fetchNextQuestion();
    return () => {
      // Cleanup
      console.log("clenup");
    };
  }, []);

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
      {gameState == 0 && <StartComponent onClick={() => setGameState(1)} />}
      {gameState == 1 && (
        <QuestionComponent
          onAnswerSelect={handleAnswerSelect}
          question={question.question}
        />
      )}
      {gameState == 2 && (
        <ResultsComponent result={12} resetGame={() => setGameState(0)} />
      )}
    </div>
  );
}

export default App;
