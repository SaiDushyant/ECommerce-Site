import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/");
    }
  }, []);
  return (
    <main>
      <NavBar />
      <section className="bg-gray-500 pt-20">
        <div className="text-center text-5xl">Trending</div>
        <div>
          <div className="border-[1px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSAQtUPTB1rpeaO1sBrc_i5S4v2zoL2pJ0Xw&s" />
            <h3>Printed shirt</h3>
            <p>₹ 599</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
