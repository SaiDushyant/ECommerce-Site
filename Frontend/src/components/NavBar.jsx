import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };
  return (
    <header className="flex justify-between items-center mx-10">
      <div className="text-4xl font-mono font-bold p-5">COMMODITY</div>
      <nav className="text-2xl flex gap-10">
        <Link>Home</Link>
        <Link>Products</Link>
        <Link>Gifts</Link>
        <Link>New Arrivals</Link>
      </nav>
      <div className="flex flex-row justify-center items-center gap-8">
        <FaShoppingCart size={28} />
        <button
          onClick={handleLogout}
          className="py-2 px-4 text-xl text-white bg-red-500 hover:bg-red-600 rounded-xl"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default NavBar;
