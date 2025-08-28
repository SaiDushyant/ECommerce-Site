import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <div>Sign Up</div>
      <form>
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
    </div>
  );
}

export default Signup;
