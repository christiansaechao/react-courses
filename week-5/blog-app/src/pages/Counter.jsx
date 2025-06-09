import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { increment, decrement } from "../store/counterSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const [incrementValue, setIncrementValue] = useState(0);
  const [decrementValue, setDecrementValue] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <p>{counter}</p>
      <p>Incement value: {incrementValue}</p>

      <input
        type="number"
        onChange={(e) => setIncrementValue(Number(e.target.value))}
        placeholder={incrementValue}
      />
      <button
        onClick={() => {
          dispatch(increment(incrementValue));
        }}
      >
        Increment
      </button>
      <p>Decrement value: {decrementValue}</p>
      <input
        type="number"
        onChange={(e) => setDecrementValue(Number(e.target.value))}
        placeholder={decrementValue}
      />
      <button onClick={() => dispatch(decrement(decrementValue))}>
        Decrement
      </button>
    </>
  );
}
