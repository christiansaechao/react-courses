import { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "./provider/theme-provider";
import User from "./components/user";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const { theme, toggleTheme } = useTheme();

  const getUserData = async () => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/");
      console.log(data.results[0]);
      setUser(data.results[0]);
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className={`container ${theme === "dark" ? "dark" : "light"}`}>
      <button onClick={() => toggleTheme()}>Change Theme</button>
      <User user={user} />
    </div>
  );
}

export default App;
