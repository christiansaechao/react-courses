import React from "react";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

const User = ({ user }) => {
  const isOnline = useOnlineStatus();

  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex flex-col w-1/4">
      <img src={user.picture.large} alt="user-profile" />
      <div>
        {user.name.title} {user.name.first}, {user.name.last}
      </div>
      Status: {isOnline ? "online" : "offline"}
    </div>
  );
};

export default User;
