import React from "react";

const Card = ({ image, name, price }) => {
  return (
    <div className="w-full p-4 rounded-2xl bg-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer">
      {/* Product Image */}
      <div className="h-40 flex justify-center items-center relative">
        <img src={image} alt={name} className="w-32 object-contain" />
      </div>

      {/* Product Info */}
      <div className="flex justify-between items-center mt-4">
        <p className="font-medium">{name}</p>
        <p className="font-bold">{price}</p>
      </div>
    </div>
  );
};

export default Card;
