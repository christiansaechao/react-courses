import { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <>
      <label>
        Name{": "}
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label>
        Address{": "}
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <p>Address is: {address}</p>
      <DelayedGreeting name={name} />
    </>
  );
}

const DelayedGreeting = ({ name }) => {
  const [delayedName, setDelayedName] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedName(name);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup on unmount or name change
  }, [name]);

  return (
    <h4 style={{ color: "gray" }}>
      {delayedName ? `👋 (Delayed) Hello, ${delayedName}!` : "Waiting..."}
    </h4>
  );
};

const Greeting = function Greeting({ name }) {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());

  return (
    <h3>
      Hello{name && ", "}
      {name}!
    </h3>
  );
};
