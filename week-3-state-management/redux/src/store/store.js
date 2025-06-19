import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
// https://randomuser.me/

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export default store;