import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ id,image, name, price,labels }) => {

  console.log(labels)
  return (
    <>
    {
      labels === "Home" ? (
        <NavLink to={`shop/${id}`}>
    <div className="w-full p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer">
      
      <div className="h-40 flex justify-center items-center relative">
        <img src={`http://localhost:3000/uploads/${image}`} alt={name} className="w-32 object-contain" />
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="font-medium">{name}</p>
        <p className="font-bold">{price}</p>
      </div>
    </div>
    </NavLink>
      ) : (
        <NavLink to={id}>
    <div className="w-full p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer">
      
      <div className="h-40 flex justify-center items-center relative">
        <img src={`http://localhost:3000/uploads/${image}`} alt={name} className="w-32 object-contain" />
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="font-medium">{name}</p>
        <p className="font-bold">{price}</p>
      </div>
    </div>
    </NavLink>
      )

    }
    </>
  );
};

export default Card;
