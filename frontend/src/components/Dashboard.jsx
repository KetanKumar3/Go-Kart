import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [fullname, setFullname] = useState(""); // FIXED!
  const [product, setProduct] = useState(false);

  const [addelement, setAddElement] = useState({
    image: null,
    name: "",
    description:"",
    price: "",
  });

  const navigate = useNavigate();

  // Redirect to login if adminToken is removed
  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("adminToken");
      if (!token) navigate("/admin/login");
    };

    window.addEventListener("storage", handleStorageChange);
    handleStorageChange();

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Handles inputs for Add Product
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setAddElement({ ...addelement, image: files[0] });
    } else {
      setAddElement({ ...addelement, [name]: value });
    }
  };

  // Handles Submit for Add Product
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!addelement.image || !addelement.name || !addelement.description || !addelement.price) {
      toast.error("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("image", addelement.image);
    formData.append("name", addelement.name);
    formData.append("description", addelement.description);
    formData.append("price", addelement.price);

    try {
      const res = await fetch("http://localhost:3000/product/add", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success === false) {
        toast.error(data.msg || "Something went wrong");
      } else {
        toast.success(data.msg || "Product Added Successfully!");

        setAddElement({
          image: null,
          name: "",
          description:"",
          price: "",
        });
      }
    } catch (err) {
      toast.error("Server error");
    }
  };

  // Handles Delete Product Input
  const handleDeleteChange = (e) => {
    setFullname(e.target.value);
  };

  // Delete Product Submit
  const handleDeleteSubmit = async (e) => {
    e.preventDefault();

    if (!fullname) {
      toast.error("Enter product name");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/product/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // FIXED
        },
        body: JSON.stringify({ fullname }),
      });

      const data = await response.json();

      if (data.success === false) {
        toast.error(data.msg || "Failed to delete");
      } else {
        toast.success(data.msg || "Product Deleted!");
        setFullname("");
      }
    } catch (error) {
      toast.error("Server Error");
    }
  };

  return (
    <div className="w-full flex justify-center items-center px-6 py-10 bg-gray-50">
      
      {product ? (
        <form
          onSubmit={handleDeleteSubmit}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          <div className="flex justify-between items-center gap-4">
            <p
              onClick={() => setProduct(false)}
              className="text-2xl font-bold cursor-pointer text-black"
            >
              Add Product
            </p>
            <p className="text-2xl font-bold cursor-pointer text-blue-600">
              Delete Product
            </p>
          </div>

          <div>
            <label className="block font-medium mb-1">Product Name</label>
            <input
              name="fullname"
              value={fullname}
              onChange={handleDeleteChange}
              type="text"
              placeholder="Enter product name"
              className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 bg-black text-white rounded-xl hover:bg-gray-800 hover:cursor-pointer transition-all font-semibold"
          >
            Delete
          </button>
        </form>
      ) : (
       
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          <div className="flex justify-between items-center gap-4">
            <p className="text-2xl font-bold cursor-pointer text-blue-600">
              Add Product
            </p>
            <p
              onClick={() => setProduct(true)}
              className="text-2xl font-bold cursor-pointer text-black"
            >
              Delete Product
            </p>
          </div>

          <div>
            <label className="block font-medium mb-1">Upload Product Image</label>
            <input
              name="image"
              onChange={handleChange}
              type="file"
              className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Product Name</label>
            <input
              name="name"
              value={addelement.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter product name"
              className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Product Description</label>
            <input
              name="description"
              value={addelement.description}
              onChange={handleChange}
              type="text"
              placeholder="Enter description"
              className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Price</label>
            <input
              name="price"
              value={addelement.price}
              onChange={handleChange}
              type="text"
              placeholder="Enter price"
              className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 bg-black text-white rounded-xl hover:bg-gray-800 hover:cursor-pointer transition-all font-semibold"
          >
            Add Product
          </button>
        </form>
      )}
    </div>
  );
};

export default Dashboard;