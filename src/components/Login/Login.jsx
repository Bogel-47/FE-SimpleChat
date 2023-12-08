import React from "react";
import "./Login.css";

export const Login = ({
  room,
  setRoom,
  username,
  setUsername,
  setLoggedIn,
}) => {
  const checkForLogin = (e) => {
    e.preventDefault();
    if (room === "" || username === "") {
      alert("Fill in the required fields");
    } else {
      setLoggedIn(true);
    }
  };

  return (
    <div className="login_root">
      <form className="login_form" onSubmit={checkForLogin}>
        <h2>Welcome to Chat Family</h2>
        <input
          type="text"
          required
          placeholder="Room Name"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
