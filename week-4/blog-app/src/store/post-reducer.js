import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        id: 1,
        title: "initial",
        content: "initial",
      },
    ],
  },
  reducers: {
    createPost: (state, action) => {
      state.posts.push({
        id: Math.floor(Math.random() * 10000000),
        ...action.payload,
      });
    },
  },
});


export const postActions = postSlice.actions;

export default postSlice.reducer;
