import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      localStorage.setItem("userId", res.data.userId);
      console.log("Login successful, navigating to /home");
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.error || "Login Failed");
    }
  };

  return (
    <div>
      <div>Login</div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded-lg w-40"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded-lg w-40"
        />
        <button type="submit">Login</button>
      </form>
      <div>
        <p>
          New user? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
