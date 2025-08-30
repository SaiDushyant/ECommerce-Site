import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  Search,
  User,
  LogOut,
  Star,
  ArrowLeft,
} from "lucide-react";
import Footer from "../components/Footer";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/product/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async (itemId, navigate) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/login");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/cart/add", {
        userId,
        itemId,
      });
    } catch (err) {
      console.error(
        "❌ Failed to add to cart:",
        err.response?.data || err.message
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate(-1)} // ✅ go back
                className="flex items-center text-gray-600 hover:text-black transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="text-sm">Back</span>
              </button>
              <div className="text-2xl font-bold tracking-wider">COMMODITY</div>
            </div>

            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
              <User className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
              <ShoppingBag
                className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors"
                onClick={() => navigate("/cart")}
              />
              <button
                className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
                onClick={() => handleLogout}
              >
                <LogOut className="w-5 h-5" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Product Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-square bg-gray-100 flex items-center justify-center">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-gray-400 text-8xl font-light">
                  {product.item_id}
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8 flex flex-col justify-center">
            <h1 className="text-4xl font-light tracking-wide">
              {product.name}
            </h1>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-black text-black"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              {product.description}
            </p>

            <div className="text-3xl font-light">${product.price}</div>

            <button
              onClick={() => handleAddToCart(product.item_id, navigate)}
              className="bg-black text-white py-4 px-8 font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300 w-full"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
