import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    incrementByValue: (state, action) => {
      state.value = state.value + parseInt(action.payload);
    },
    decrementByValue: (state, action) => {
      state.value = state.value - parseInt(action.payload);
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
