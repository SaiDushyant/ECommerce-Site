import React from "react";
import { Link, Links, useNavigate } from "react-router-dom";
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
          <Link to="/home">
            <div className="text-2xl font-bold tracking-wider">COMMODITY</div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/explore"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              Explore
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
            <User className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
            <Heart className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
            <ShoppingBag
              className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors"
              onClick={() => navigate("/cart")}
            />
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
