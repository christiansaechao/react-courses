import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";
import { counterActions } from "./store/counterSlice";
import "./App.css";

function App() {
  const topPosts = useSelector((state) => state.posts.posts.slice(0, 3));
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);

  return (
    <>
      <h1>Let Blog</h1>
      <h3>Top posts:</h3>
      <ul className="d-flex gap-2">
        {topPosts.map((post, idx) => (
          <li key={idx} className="card w-25">
            <div className="card-body">
              <h3 className="card-title">{post.title}</h3>
              <p className="card-text">{post.content}</p>
            </div>
            <div className="d-flex gap-2 m-2">
              <Link to={`/posts/${post.id}`} class="btn btn-primary w-100">
                View post
              </Link>
              <Link to={`/posts/${post.id}/edit`} class="btn btn-primary w-100">
                Edit
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <h3>Counter</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        Counter: {counter} <br />
        increment value: {increment} <br />
        decrement value: {decrement} <br />
        <input
          type="number"
          onChange={(e) => {
            setIncrement(e.target.value);
          }}
        />
        <input
          type="number"
          onChange={(e) => {
            setDecrement(e.target.value);
          }}
        />
        <button
          onClick={() => dispatch(counterActions.incrementByValue(increment))}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(counterActions.decrementByValue(decrement))}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
