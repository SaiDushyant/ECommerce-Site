import React, { useState } from "react";
import { Eye, EyeOff, ArrowLeft, AlertCircle } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage({ onSwitch }) {
  const [currentPage, setCurrentPage] = useState("login"); // 'login' or 'signup'
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-wider mb-2">
              COMMODITY
            </h1>
            <h2 className="text-2xl font-light tracking-wide mb-4">
              Welcome Back
            </h2>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 p-4 flex items-center">
                <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                <span className="text-red-700 text-sm">{error}</span>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium tracking-wide mb-2">
                USERNAME
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors text-sm"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium tracking-wide mb-2">
                PASSWORD
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors text-sm pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 border border-gray-300 focus:border-black"
                />
                <span className="text-gray-600">Remember me</span>
              </label>
              <button
                type="button"
                className="text-black hover:text-gray-600 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300"
            >
              SIGN IN
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full border border-gray-300 py-3 font-medium tracking-wide hover:border-black transition-colors duration-300">
              Continue with Google
            </button>
            <button className="w-full border border-gray-300 py-3 font-medium tracking-wide hover:border-black transition-colors duration-300">
              Continue with Apple
            </button>
          </div>

          {/* Switch to Signup */}
          <p className="text-center mt-8 text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={onSwitch}
              className="text-black hover:text-gray-600 transition-colors font-medium"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>

      {/* Right Side - Image/Branding */}
      <div className="hidden lg:flex flex-1 bg-black items-center justify-center">
        <div className="text-center text-white">
          <h3 className="text-6xl font-light tracking-widest mb-6">
            LESS IS MORE
          </h3>
          <p className="text-xl text-gray-300 max-w-md">
            Discover curated essentials for the modern minimalist lifestyle
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
