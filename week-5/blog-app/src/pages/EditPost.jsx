import React from "react";
import { selectPostById } from "../store/postSlice";
import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../store/postSlice";

export default function EditPost() {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, postId));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleUpdatePost(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      id: postId,
      likes: post.likes,
      title: data.title,
      content: data.content,
    };
    console.log("payload", payload);
    dispatch(postActions.updatePost(payload));
    navigate(-1);
  }

  return (
    <>
      <h1>Edit Post</h1>
      <div className="d-flex flex-column mb-3 align-items-center">
        <form
          onSubmit={handleUpdatePost}
          className="form-group w-50 d-flex flex-column gap-2"
        >
          <input
            defaultValue={post.title}
            class="form-control"
            type="text"
            name="title"
            placeholder="Title"
            required
          ></input>
          <textarea
            defaultValue={post.content}
            name="content"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="Post text here.."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Update Post
          </button>
        </form>
      </div>
    </>
  );
}
