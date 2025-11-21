import React from "react";
import Card from "./Card";

const LatestProducts = () => {
  const products = [
    {
      image:
        "https://ik.imagekit.io/devtechz/tr:q-auto:f-webp:w-1024/products/product_img11_lM7E_dm0r.png",
      name: "Ergonomic Mouse",
      price: "$99",
    },
    {
      image:
        "https://ik.imagekit.io/devtechz/tr:q-auto:f-webp:w-1024/products/product_img12_o_Scyzqhc.png",
      name: "Smart Home Cleaner",
      price: "$229",
    },
    {
      image:
        "https://ik.imagekit.io/devtechz/tr:q-auto:f-webp:w-1024/products/product_img10_js-tL64N-.png",
      name: "Smart watch",
      price: "$199",
    },
    {
      image:
        "https://ik.imagekit.io/devtechz/tr:q-auto:f-webp:w-1024/products/product_img9_3VdFOIy9U0.png",
      name: "Apple Wireless Earbuds",
      price: "$89",
    },
  ];

  return (
    <div className="w-full px-6 py-10 lg:px-30">
      <h2 className="text-center text-3xl font-bold mb-8">Latest Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item, i) => (
          <Card key={i} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
