import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";
// import counterSlice from "./counterSlice";

export const store = configureStore({
  reducer: {
    posts: postSlice,
    // counter: counterSlice,
  },
});
