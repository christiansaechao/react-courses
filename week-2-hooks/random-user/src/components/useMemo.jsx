import React, { useState, useMemo } from "react";

export default function ExpensiveComponent() {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log("Calculating expensive value...");
    let total = 0;
    for (let i = 0; i < 10000; i++) {
      total += i;
    }
    return total + count;
  }, [count]);

  return (
    <div>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
    </div>
  );
}
