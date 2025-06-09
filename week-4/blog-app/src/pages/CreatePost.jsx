import React from "react";
import { useDispatch } from "react-redux";
import { postActions } from "../store/postSlice";
import { useNavigate } from "react-router";

export default function CreatePost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleCreatePost(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    dispatch(postActions.createPost(data));
    navigate("/posts");
  }

  return (
    <div>
      <h1>Create Post</h1>
      <div className="d-flex flex-column mb-3 align-items-center">
        <form
          onSubmit={handleCreatePost}
          className="form-group w-50 d-flex flex-column gap-2"
        >
          <input
            class="form-control"
            type="text"
            name="title"
            placeholder="Title"
            required
          ></input>
          <textarea
            name="content"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="Post text here.."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
}
