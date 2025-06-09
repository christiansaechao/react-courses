import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        id: 1,
        likes: 0,
        comments: [],
        title: "initial",
        content: "initial",
      },
    ],
  },
  reducers: {
    createPost: (state, action) => {
      state.posts.push({
        id: Math.floor(Math.random() * 10000000),
        likes: 0,
        comments: [],
        ...action.payload,
      });
    },
    updatePost: (state, action) => {
      const postIdx = state.posts.findIndex(
        (post) => post.id == action.payload.id
      );

      state.posts[postIdx] = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id != action.payload);
    },
    updateLikes: (state, action) => {
      const postIdx = state.posts.findIndex(
        (post) => post.id == action.payload
      );
      state.posts[postIdx].likes += 1;
    },
    updateComments: (state, action) => {
      const postId = parseInt(action.payload.postId);
      const newComment = action.payload.comment;

      const postIdx = state.posts.findIndex((post) => post.id == postId);
      console.log("postIdx", postIdx);
      state.posts[postIdx].comments.push(newComment);
    },
  },
});

export const selectPostById = (state, postId) => {
  return state.posts.posts.find((post) => post.id == postId);
};

export const searchPost = (state, searchQuery) => {
  if (searchQuery == "" || searchQuery == null) {
    return [];
  } else {
    return state.posts.posts.filter(
      (post) =>
        post.title.includes(searchQuery) || post.content.includes(searchQuery)
    );
  }
};

export const postActions = postSlice.actions;

export default postSlice.reducer;
