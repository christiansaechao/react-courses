import React, { useState, useEffect } from "react";
import "./styles.css";
import Counter from "./Counter";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = Math.floor((time % 6000) / 100);
  const ms = time % 100;

  const startAndStop = () => {
    setIsRunning((prev) => !prev);
  };

  useEffect(() => {
    let inter;
    if (isRunning) {
      inter = setInterval(() => setTime(time + 1), 10);
    }

    return () => {
      clearInterval(inter);
    };
  }, [isRunning, time]);

  return (
    <div className="flex justify-center items-center flex-col">
      <Counter />
      <h1>Stopwatch</h1>
      <div className="text-xl">
        <p>
          {" "}
          {seconds.toString()} : {ms.toString()}{" "}
        </p>
      </div>
      <div className="flex flex-row p-2">
        <button
          className={`${isRunning ? "bg-red" : "bg-green"} w-64`}
          onClick={startAndStop}
        >
          {isRunning ? "stop" : "start"}
        </button>
        <button className="bg-blue-500 w-64 ml-2" onClick={() => setTime(0)}>
          reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
