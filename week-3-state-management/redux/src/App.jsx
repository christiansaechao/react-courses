import { useState } from "react";
import "./App.css";
import numberStore from "../zustand/GlobalState.js";
function App() {
  const { name, number } = numberStore(({ person }) => person);

  // const { increment, decrement } = numberStore((state) => {state.increment, state.decrement});
  // const increment = numberStore((state) => state.increment);
  // const decrement = numberStore((state) => state.decrement);

  const { increment, decrement } = numberStore();
  return (
    <>
      {name}
      <div>{number}</div>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </>
  );
}

export default App;
