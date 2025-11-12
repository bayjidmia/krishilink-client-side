import React, { useEffect, useState, useContext } from "react";

import { motion } from "framer-motion";
import { AuthContext } from "../../Authprovider/Context/Context";
import { useParams } from "react-router";
import { useRef } from "react";

const CropsDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { user } = useContext(AuthContext);
  const [crop, setCrop] = useState(null);
  const [loading, setLoading] = useState(true);
  const bidModelref = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const handlebidModel = () => {
    bidModelref.current.showModal();
  };
  const closeModal = () => {
    bidModelref.current.close();
  };

  useEffect(() => {
    fetch(`http://localhost:3000/allproducts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCrop(data);
        setLoading(false);
      });
  }, [id]);
  console.log(crop);

  if (loading)
    return (
      <div className="text-center mt-20 text-gray-500">
        Loading crop details...
      </div>
    );
  if (!crop)
    return (
      <div className="text-center mt-20 text-red-500">Crop not found!</div>
    );

  const isOwner = user?.email === crop?.owner?.ownerEmail;
  const totalPrice = quantity * crop.pricePerUnit;

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity < 1) {
      alert("Quantity must be at least 1");
      return;
    }

    if (
      window.confirm(
        `Are you sure you want to submit interest?\nTotal: ${totalPrice} ৳`
      )
    ) {
      const interestData = {
        cropId: crop._id,
        buyerEmail: user.email,
        quantity,
        message,
        totalPrice,
      };

      console.log("Interest submitted:", interestData);

      alert("Interest submitted successfully!");
      closeModal();
      setQuantity(1);
      setMessage("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto my-10 bg-white rounded-3xl shadow-xl border border-green-100 p-6 flex flex-col md:flex-row gap-6"
    >
      {/* 🖼 Crop Image */}
      <div className="md:w-1/2 relative rounded-2xl overflow-hidden shadow-md">
        <img
          src={crop.image}
          alt={crop.name}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-green-600 text-white px-4 py-1 rounded-full text-sm">
          {crop.type}
        </span>
      </div>

      {/* 🌾 Crop Info */}
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            {crop.name}
          </h1>
          <p className="text-gray-600 mb-6">{crop.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <p>
              <span className="font-semibold">Price per unit:</span>{" "}
              {crop.pricePerUnit} ৳/{crop.unit}
            </p>
            <p>
              <span className="font-semibold">Available Quantity:</span>{" "}
              {crop.quantity} {crop.unit}
            </p>
            <p>
              <span className="font-semibold">Location:</span> {crop.location}
            </p>
            <p>
              <span className="font-semibold">Owner Name:</span>{" "}
              {crop.owner?.ownerName}
            </p>
            <p>
              <span className="font-semibold">Owner Email:</span>{" "}
              {crop.owner?.ownerEmail}
            </p>
          </div>
        </div>

        {/* 🌱 Button / Owner Message */}
        <div className="mt-6">
          {!isOwner ? (
            <div>
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl shadow-md transition-all duration-300"
                onClick={handlebidModel}
              >
                Send Interest
              </button>
              {/* Open the modal using document.getElementById('ID').showModal() method */}

              <dialog
                ref={bidModelref}
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-xl mb-4 text-green-700">
                    Express Interest
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Quantity & Total Price */}
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block mb-1 font-medium">
                          Quantity
                        </label>
                        <input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                          className="w-full border rounded px-3 py-2"
                          required
                        />
                      </div>

                      <div className="flex-1">
                        <label className="block mb-1 font-medium">
                          Total Price
                        </label>
                        <input
                          type="text"
                          value={totalPrice.toFixed(2)}
                          readOnly
                          className="w-full border rounded px-3 py-2 bg-gray-100"
                        />
                      </div>
                    </div>

                    {/* Row 2: Message + Submit */}
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block mb-1 font-medium">
                          Message
                        </label>
                        <input
                          type="text"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Optional message"
                          className="w-full border rounded px-3 py-2"
                        />
                      </div>

                      <div className="flex-1 flex items-end justify-end">
                        <button
                          type="submit"
                          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="modal-action">
                    <button
                      onClick={closeModal}
                      className="btn bg-gray-200 text-gray-700 hover:bg-gray-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </dialog>
            </div>
          ) : (
            <p className="text-gray-500 font-medium italic text-center">
              You are the owner of this crop post.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CropsDetails;
