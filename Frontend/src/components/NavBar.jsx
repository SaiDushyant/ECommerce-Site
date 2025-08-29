import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, Heart, ShoppingBag, LogOut } from "lucide-react";

function NavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wider">COMMODITY</div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              Explore
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
            <User className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
            <Heart className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
