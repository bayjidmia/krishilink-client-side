import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../Authprovider/Context/Context";
import { useNavigate } from "react-router";

const AddPost = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const type = e.target.type.value;
    const pricePerUnit = e.target.pricePerUnit.value;
    const unit = e.target.unit.value;
    const quantity = e.target.estimatedQuantity.value;
    const description = e.target.description.value;
    const location = e.target.location.value;
    const image = e.target.image.value;
    console.log(
      name,
      type,
      pricePerUnit,
      unit,
      quantity,
      description,
      location,
      image,
      user
    );

    const crops = {
      name: name,
      type: type,
      pricePerUnit: pricePerUnit,
      unit: unit,
      quantity: quantity,
      description: description,
      location: location,
      image: image,
      interests: [],
      owner: {
        ownerEmail: user?.email || "unknown",
        ownerName: user?.displayName || "Anonymous",
      },
    };
    console.log(crops);

    fetch("http://localhost:3000/api/crops", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(crops),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Crop added successfully!");
          e.target.reset();
          navigate("/allproducts", data);
        }
      })
      .catch((err) => {
        console.error("Error adding crop:", err);
        alert("Something went wrong!");
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto my-10 p-8 bg-white rounded-3xl shadow-xl border border-green-100"
    >
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
        🌾 Add Crops
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {/* Crop Name */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter crop name"
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* Type */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">Type</label>
          <select
            name="type"
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-400 outline-none"
          >
            <option value="">Select type</option>
            <option value="Vegetable">Vegetable</option>
            <option value="Fruit">Fruit</option>
            <option value="Grain">Grain</option>
            <option value="Pulse">Pulse</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Price per Unit */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">
            Price per Unit
          </label>
          <input
            type="number"
            name="pricePerUnit"
            placeholder="Enter price"
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* Unit */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">Unit</label>
          <select
            name="unit"
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-400 outline-none"
          >
            <option value="">Select unit</option>
            <option value="kg">kg</option>
            <option value="ton">ton</option>
            <option value="bag">bag</option>
            <option value="dozen">dozen</option>
          </select>
        </div>

        {/* Estimated Quantity */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">
            Estimated Quantity
          </label>
          <input
            type="number"
            name="estimatedQuantity"
            placeholder="Enter estimated quantity"
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-1 text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Write a short description"
            rows="3"
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-400 outline-none"
          ></textarea>
        </div>

        {/* Image URL */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-1 text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            placeholder="Paste image URL"
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-2xl shadow-md transition-all duration-200"
          >
            Add Crop
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddPost;
