import React from "react";

function ProductCard({ image, name, price }) {
  return (
    <div className="border rounded-2xl shadow-md overflow-hidden p-4 text-center bg-white hover:shadow-xl transition h-96">
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover rounded-lg mb-3"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-700">₹ {price}</p>
    </div>
  );
}

export default ProductCard;
