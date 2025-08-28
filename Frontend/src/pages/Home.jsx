import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/");
    }
  }, []);
  return <div>Home</div>;
}

export default Home;
