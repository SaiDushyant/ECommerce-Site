import React, { useState, useEffect } from "react";
import { ShoppingBag, Search, User, Heart, Star, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/");
    }
  }, [navigate]);

  // Dummy product data
  const products = [
    {
      itemId: "CMD001",
      name: "Essential White Tee",
      description: "Premium cotton basic with perfect fit and lasting comfort",
      price: 49.99,
      rating: 4.8,
      reviews: 124,
    },
    {
      itemId: "CMD002",
      name: "Minimalist Backpack",
      description:
        "Clean lines meet functionality in this versatile daily companion",
      price: 129.99,
      rating: 4.9,
      reviews: 87,
    },
    {
      itemId: "CMD003",
      name: "Classic Denim",
      description: "Timeless cut crafted from premium selvedge denim",
      price: 189.99,
      rating: 4.7,
      reviews: 203,
    },
    {
      itemId: "CMD004",
      name: "Ceramic Mug Set",
      description: "Hand-thrown ceramics for the perfect morning ritual",
      price: 39.99,
      rating: 4.6,
      reviews: 156,
    },
    {
      itemId: "CMD005",
      name: "Leather Wallet",
      description: "Handcrafted from full-grain leather with minimalist design",
      price: 79.99,
      rating: 4.9,
      reviews: 91,
    },
    {
      itemId: "CMD006",
      name: "Wool Sweater",
      description: "Luxuriously soft merino wool in a contemporary silhouette",
      price: 159.99,
      rating: 4.8,
      reviews: 67,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-light tracking-widest mb-8">
            LESS IS MORE
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-2xl mx-auto">
            Curated essentials for the modern minimalist. Quality over quantity,
            always.
          </p>
          <button className="bg-black text-white px-12 py-4 text-lg font-medium tracking-wide hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            EXPLORE COLLECTION
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light tracking-wider mb-4">
            FEATURED PRODUCTS
          </h2>
          <div className="w-24 h-px bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {products.map((product) => (
            <div
              key={product.itemId}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.itemId)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image Placeholder */}
              <div className="aspect-square bg-gray-100 mb-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-gray-500 text-3xl font-light">
                    {product.itemId.slice(-1)}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center ${
                    hoveredProduct === product.itemId
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <button className="bg-white text-black px-3 py-1 text-xs font-medium tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    QUICK VIEW
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-1">
                <h3 className="text-sm font-medium tracking-wide truncate">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? "fill-black text-black"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="text-sm font-semibold tracking-wide">
                  ${product.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="border-2 border-black text-black px-12 py-4 text-lg font-medium tracking-wide hover:bg-black hover:text-white transition-all duration-300">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-light tracking-wider mb-6">
            STAY UPDATED
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Be the first to know about new arrivals and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 text-black text-lg mb-4 sm:mb-0 sm:mr-4 focus:outline-none"
            />
            <button className="bg-white text-black px-8 py-4 text-lg font-medium tracking-wide hover:bg-gray-200 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
