import React from "react";

function Newsletter() {
  return (
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
            className="flex-1 px-6 py-4 text-black text-lg mb-4 sm:mb-0 sm:mr-4 focus:outline-none bg-white"
          />
          <button className="bg-black text-white border-2 border-white px-8 py-4 text-lg font-medium tracking-wide hover:bg-gray-200 transition-colors">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
