import React from "react";

export function Button({ count, setCount }) {
  console.log("Rendering button component");
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}
