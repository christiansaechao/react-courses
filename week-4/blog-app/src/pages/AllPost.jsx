import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function AllPost() {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <>
      <h1>All posts</h1>
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
          </li>
        ))}
      </ul>
    </>
  );
}
