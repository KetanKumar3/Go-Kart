import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const ShopDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProductDetails = async () => {
    const res = await fetch(`http://localhost:3000/shop/${id}`);
    const data = await res.json();
    setProduct(data.product);
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  if (!product)
    return <p className="text-center mt-20 text-xl">Loading...</p>;

  return (
    <>
    <Navbar />
    <div className="max-w-4xl mx-auto p-10 mt-10 bg-white shadow-xl rounded-xl">
      <div className="flex gap-10">

        <img
          src={`http://localhost:3000/uploads/${product.image}`}
          className="w-80 h-80 object-contain rounded-lg shadow"
        />

        <div>
          <h1 className="text-3xl font-bold mb-5">{product.name}</h1>
          <p className="text-2xl font-semibold mb-5">₹ {product.price}</p>

          <p className="text-gray-600 leading-relaxed">
            {product.description || "No description available."}
          </p>
        </div>

      </div>
    </div>
    </>
  );
};

export default ShopDescription;