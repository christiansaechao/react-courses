import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";
import { counterActions } from "./store/counterSlice";
import "./App.css";
import Login from './components/login';

function App() {
  const topPosts = useSelector((state) => state.posts.posts.slice(0, 3));
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);

  return (
    <>
      <Login />
    </>
  );
}

export default App;
