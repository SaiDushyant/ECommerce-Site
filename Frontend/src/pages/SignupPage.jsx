import React, { useState } from "react";
import { Eye, EyeOff, ArrowLeft, AlertCircle } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignupPage({ onSwitch }) {
  const [currentPage, setCurrentPage] = useState("login"); // 'login' or 'signup'
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Image/Branding */}
      <div className="hidden lg:flex flex-1 bg-black items-center justify-center">
        <div className="text-center text-white">
          <h3 className="text-6xl font-light tracking-widest mb-6">JOIN US</h3>
          <p className="text-xl text-gray-300 max-w-md">
            Start your journey towards mindful consumption and timeless style
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <button
            onClick={() => setCurrentPage("login")}
            className="flex items-center text-gray-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </button>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-wider mb-2">
              COMMMODITY
            </h1>
            <h2 className="text-2xl font-light tracking-wide mb-4">
              Create Account
            </h2>
            <p className="text-gray-600">Join our community of minimalists</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-6">
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
                placeholder="Choose a username"
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
                  placeholder="Create a password"
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

            <button
              type="submit"
              className="w-full bg-black text-white py-3 font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300"
            >
              CREATE ACCOUNT
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
              Sign up with Google
            </button>
            <button className="w-full border border-gray-300 py-3 font-medium tracking-wide hover:border-black transition-colors duration-300">
              Sign up with Apple
            </button>
          </div>

          {/* Switch to Login */}
          <p className="text-center mt-8 text-gray-600">
            Already have an account?{" "}
            <button
              onClick={onSwitch}
              className="text-black hover:text-gray-600 transition-colors font-medium"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
