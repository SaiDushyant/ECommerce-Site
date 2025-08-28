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
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-fit h-fit border border-black p-8 rounded-2xl">
        <div className="text-5xl font-bold text-center">Login</div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleLogin} className="flex flex-col">
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border text-xl p-2 rounded-lg w-full mt-5 mb-2"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border text-xl p-2 rounded-lg w-full mt-2 mb-5"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 rounded-lg text-2xl p-3"
          >
            Login
          </button>
        </form>
        <div>
          <p className="text-xl mt-4">
            New user?{" "}
            <Link to="/signup" className="text-blue-400 underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
