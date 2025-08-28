import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        username,
        password,
      });
      localStorage.setItem("userId", res.data.userId);
      console.log("Signed up successfully. Navigating to home");
      navigate("/home");
    } catch (error) {
      setError(error.response?.data?.error || "Signup Failed");
    }
  };
  return (
    <div>
      <div>Sign Up</div>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Signup</button>
      </form>
      <div>
        <p>
          Already a user? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
