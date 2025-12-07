import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("userToken");

  const fetchProfile = async () => {
    try {
      const response = await fetch("http://localhost:3000/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      setName(data.name);
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [token]);

  if (loading) {
    return (
      <div className="flex justify-center mt-20 text-xl font-semibold">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white shadow-xl rounded-2xl text-center">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>

      <div className=" p-4 rounded-xl text-lg font-medium">
        Hey <span className="text-gray-600">{name}</span>, How're You?
      </div>
      <div className=" rounded-xl text-lg font-medium">
         Thankyou for visiting on our website.
      </div>
      <NavLink to="/"><h1 className="pt-4 text-blue-500">Go to HomePage</h1></NavLink>
    </div>
  );
};

export default UserProfile;