import React from "react";
import { Form } from "./Form";
import { useTheme } from "../provider/useTheme";

export function Settings() {
  const { theme } = useTheme();
  return (
    <div
      className="settings"
      style={{
        background: theme === "light" ? "#ffffff " : "orange",
        color: theme === "light" ? "#000000" : "#ffffff",
      }}
    >
      {theme}
      <h2>Settings</h2>
      <p>Settings page content goes here.</p>
      <Form />
      <button>Save Settings</button>
      <button>Cancel</button>
    </div>
  );
}
