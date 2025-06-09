import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

export default function ViewPost() {
  const posts = useSelector((state) => state.posts);
  const { postId } = useParams();
  const post = viewPost();

  function viewPost() {
    const post = posts.find((element) => element.id == postId);
    return post;
  }

  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </>
  );
}
