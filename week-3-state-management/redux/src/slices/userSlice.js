import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userCount: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    decrement: (state) => {
      state.userCount -= 1;
    },
    increment: (state) => {
      state.userCount + 1;
    },
    incrementByAmount: (state, action) => {
      state.userCount += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.userCount += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } = userSlice.actions;

export default userSlice.reducer; 