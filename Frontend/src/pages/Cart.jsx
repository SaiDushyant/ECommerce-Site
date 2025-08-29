import React, { useState } from "react";
import {
  ShoppingBag,
  Search,
  User,
  LogOut,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
} from "lucide-react";

const Cart = () => {
  // Cart items state (would normally come from context/redux)
  const [cartItems, setCartItems] = useState([
    {
      itemId: "CMD001",
      name: "Essential White Tee",
      description: "Premium cotton basic with perfect fit",
      price: 49.99,
      quantity: 2,
      size: "M",
      color: "White",
    },
    {
      itemId: "CMD002",
      name: "Minimalist Backpack",
      description: "Clean lines meet functionality",
      price: 129.99,
      quantity: 1,
      size: "One Size",
      color: "Black",
    },
    {
      itemId: "CMD005",
      name: "Leather Wallet",
      description: "Handcrafted from full-grain leather",
      price: 79.99,
      quantity: 1,
      size: "One Size",
      color: "Brown",
    },
  ]);

  // Update quantity
  const updateQuantity = (itemId, change) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.itemId === itemId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.itemId !== itemId));
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 75 ? 0 : 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    console.log("Proceeding to checkout with items:", cartItems);
    alert("Proceeding to checkout...");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-black transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="text-sm">Continue Shopping</span>
              </button>
              <div className="text-2xl font-bold tracking-wider">
                COMMMODITY
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                Shop
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

            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
              <User className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
              <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
              <button className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors">
                <LogOut className="w-5 h-5" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Cart Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light tracking-widest mb-4">
            SHOPPING CART
          </h1>
          <div className="w-24 h-px bg-black mx-auto"></div>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-16">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-light text-gray-400 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Discover our curated collection of minimalist essentials
            </p>
            <button className="bg-black text-white px-8 py-3 font-medium tracking-wide hover:bg-gray-800 transition-colors">
              START SHOPPING
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={`${item.itemId}-${item.size}-${item.color}`}
                  className="flex items-center space-x-6 border-b border-gray-200 pb-6"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-400 text-2xl font-light">
                      {item.itemId.slice(-1)}
                    </span>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium tracking-wide mb-1">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {item.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Size: {item.size}</span>
                      <span>Color: {item.color}</span>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border border-gray-300">
                      <button
                        onClick={() => updateQuantity(item.itemId, -1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.itemId, 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Price & Remove */}
                  <div className="text-right">
                    <div className="text-lg font-semibold mb-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      onClick={() => removeItem(item.itemId)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 sticky top-24">
                <h2 className="text-xl font-medium tracking-wide mb-6">
                  ORDER SUMMARY
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {shipping > 0 && (
                  <div className="text-sm text-gray-600 mb-6 p-3 bg-gray-100">
                    Add ${(75 - subtotal).toFixed(2)} more for free shipping
                  </div>
                )}

                <button
                  onClick={handleCheckout}
                  className="w-full bg-black text-white py-4 font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300 mb-4"
                >
                  PROCEED TO CHECKOUT
                </button>

                <button className="w-full border border-gray-300 py-3 font-medium tracking-wide hover:border-black transition-colors duration-300">
                  CONTINUE SHOPPING
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
