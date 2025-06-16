import { useState, useEffect } from "react";

export function useOnlineStatus(userId) {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnline(Math.random() > 0.5); // randomly flip online status
    }, 4000);

    return () => clearInterval(interval);
  }, [userId]);

  return online;
}