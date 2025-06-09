import React from "react";
import { useSelector } from "react-redux";
import { Posts } from "./components/Posts/Posts";
import "./App.css";

function App() {
  const topPosts = useSelector((state) => state.posts.posts.slice(0, 3));

  return (
    <>
      <h1>Let Blog</h1>
      <h3>Top posts:</h3>
      <Posts posts={topPosts} />
    </>
  );
}

export default App;
