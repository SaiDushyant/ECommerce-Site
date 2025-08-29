import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold tracking-wider mb-4">
              COMMMODITY
            </h3>
            <p className="text-gray-600">
              Minimalist essentials for modern living
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">SHOP</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Sale
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">SUPPORT</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">CONNECT</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>&copy; 2025 COMMMODITY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
