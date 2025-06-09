import "./App.css";
import { useState } from "react";
import { Checkbox } from "./components/checkbox";
import { Test } from "./components/test";
import { Message } from "./components/message";

function App() {
  const [checkedStatus, setCheckedStatus] = useState(false);

  return (
    <>
      <h1>Practice</h1>
      <ul>
        <li
          style={{
            display: "flex",
            gap: 5,
          }}
        >
          <Checkbox
            checked={checkedStatus}
            onChange={(e) => setCheckedStatus(e.target.checked)}
          />
          <Message checked={checkedStatus} text="Custom to do thnig" />
        </li>
      </ul>
      <Test />
    </>
  );
}

export default App;
