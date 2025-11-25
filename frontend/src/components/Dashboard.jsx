import React, { useState } from "react";

const Dashboard = () => {
  const [addelement, setAddElement] = useState({
    image: null,
    name: "",
    price: "",
  });

  // Handles both text and file inputs
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // If input type is file
    if (name === "image") {
      setAddElement({ ...addelement, image: files[0] });
    } else {
      setAddElement({ ...addelement, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Uploaded Data:");
    console.log("Image File:", addelement.image);
    console.log("Product Name:", addelement.name);
    console.log("Price:", addelement.price);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center px-6 py-10 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Add New Product</h2>

        {/* File Input */}
        <div>
          <label className="block font-medium mb-1">Upload Product Image</label>
          <input
            name="image"
            onChange={handleChange}
            type="file"
            className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Product Name */}
        <div>
          <label className="block font-medium mb-1">Product Name</label>
          <input
            name="name"
            value={addelement.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter the product name"
            className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1">Price</label>
          <input
            name="price"
            value={addelement.price}
            onChange={handleChange}
            type="text"
            placeholder="Enter the price"
            className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-8 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all font-semibold"
        >
          Done
        </button>
      </form>
    </div>
  );
};

export default Dashboard;