import React from "react";
import { ExtraDetailsForm } from "./ExtraDetailsForm";
import { useTheme } from "../provider/useTheme";

// if theme light make background blue otherwise green
export function Form() {
  const { theme, toggle } = useTheme();
  return (
    <div
      className="form"
      style={{
        background: theme === "light" ? "lightyellow " : " #5F9EA0",
        color: theme === "light" ? "#000000" : "#ffffff",
      }}
    >
      <h2>User details</h2>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="lastname" />
      <ExtraDetailsForm />
    </div>
  );
}
