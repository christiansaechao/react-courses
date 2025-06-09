import React from "react";
import { useTheme } from "../provider/useTheme";

// if theme ligt make background pink otherwise red
export function ExtraDetailsForm() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        marginTop: "10px",
        background: theme === "light" ? "#FFB6C1" : " #C9CC3F",
        color: theme === "light" ? "#000000" : "#ffffff",
      }}
    >
      <h2>Extra details</h2>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="email" />
    </div>
  );
}
