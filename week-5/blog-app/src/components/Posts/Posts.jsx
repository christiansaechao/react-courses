import React from "react";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { postActions } from "../../store/postSlice";

export function Posts({ posts }) {
  const dispatch = useDispatch();

  function handlePostLike(id) {
    dispatch(postActions.updateLikes(id));
  }
  function handleDeletePost(id) {
    dispatch(postActions.deletePost(id));
  }

  return (
    <ul className="d-flex gap-2">
      {posts.map((post, idx) => (
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
          <button
            onClick={() => handlePostLike(post.id)}
            className="btn btn-success m-2"
          >
            Like {post.likes}
          </button>
          <button
            onClick={() => handleDeletePost(post.id)}
            className="btn btn-danger m-2"
          >
            Delete Post
          </button>
        </li>
      ))}
    </ul>
  );
}
