import React, { useState } from "react";

const Login = () => {
  const [userInformation, setUserInformation] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const userData = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    setUserInformation(userData);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4 w-1/3 h-screen m-auto">
      <h2 className="text-4xl">Sign Up</h2>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 justify-start items-start"
      >
        <label htmlFor="">Username</label>
        <input
          className="w-80 h-10 p-2 rounded-xl"
          type="text"
          placeholder="username"
          name="username"
        />
        <label htmlFor="">Password</label>
        <input
          className="w-80 h-10 p-2 rounded-xl"
          type="password"
          placeholder="password"
          name="password"
        />
        <button
          type="submit"
          className="w-80 h-10 px-4 flex items-center justify-center rounded-xl"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
