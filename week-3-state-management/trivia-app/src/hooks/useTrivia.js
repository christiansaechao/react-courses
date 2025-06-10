import { useState, useEffect } from "react";

const ENDPOINT =
  "https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=boolean";
const REQUEST_TOKEN = "https://opentdb.com/api_token.php?command=request";
const COUNTDOWN_TIME = 6000;

export default function useTrivia() {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [countdown, setCountdown] = useState(COUNTDOWN_TIME);

  async function fetchNextQuestion() {
    console.log(`token: ${token}`);
    setLoading(true);
    const res = await fetch(ENDPOINT + "&token=" + token);
    const data = await res.json();
    console.log("question:", data);
    const question = data.results[0];
    setQuestion(question);
    setLoading(false);
  }

  async function fetchSessionToken() {
    // Implement session token fetch
    if (!token) {
      // assign token
      const res = await fetch(REQUEST_TOKEN);
      const data = await res.json();
      console.log(data.token);
      setToken(data.token);
    }
  }

  useEffect(() => {
    setCountdown(6);
    const mySettimeOut = setTimeout(() => setCountdown(0), [COUNTDOWN_TIME]);
    return () => {
      clearTimeout(mySettimeOut);
    };
  }, [question]);

  useEffect(() => {
    fetchSessionToken();
    return () => {
      // Cleanup
      console.log("clenup");
    };
  }, []);

  return {
    question,
    loading,
    countdown,
    token,
    fetchNextQuestion,
  };
}
