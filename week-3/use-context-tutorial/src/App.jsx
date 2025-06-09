import { useState, useContext } from "react";
import { Form } from "./components/Form";
import { Settings } from "./components/Settings";
import "./App.css";
import { useTheme } from "./provider/useTheme";

function App() {
  const { toggleTheme } = useTheme();

  return (
    <div className="container">
      <h1>Example app</h1>
      <button
        onClick={toggleTheme}
        style={{
          marginBottom: "10px",
        }}
      >
        Toggle theme
      </button>
      <Settings />
    </div>
  );
}

export default App;
