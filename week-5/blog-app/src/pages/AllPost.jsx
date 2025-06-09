import React from "react";
import { useSelector } from "react-redux";
import { Posts } from "../components/Posts/Posts";

export default function AllPost() {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <>
      <h1>All posts</h1>
      <Posts posts={posts} />
    </>
  );
}
