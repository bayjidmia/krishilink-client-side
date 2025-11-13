import React, { useEffect, useState, useContext } from "react";

import { motion } from "framer-motion";
import { AuthContext } from "../../Authprovider/Context/Context";
import { useParams } from "react-router";
import { useRef } from "react";
import { toast } from "react-toastify";
import ReceivedInterests from "./ReceivedInterests";
import Loading from "../../Component/Loading/Loading";

const CropsDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { user } = useContext(AuthContext);
  const [crop, setCrop] = useState(null);
  const [loading, setLoading] = useState(true);
  const modalRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/allproducts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCrop(data);
        setLoading(false);
      });
  }, [id]);
  console.log(crop);

  if (loading) return <Loading></Loading>;
  if (!crop)
    return (
      <div className="text-center mt-20 text-red-500">Crop not found!</div>
    );

  const isOwner = user?.email === crop?.owner?.ownerEmail;
  const totalPrice = quantity * crop.pricePerUnit;
  const hasInterest = crop?.interests?.some((i) => i.userEmail === user?.email);
  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("After set true:", true);
    if (quantity < 1) {
      toast.error(" Quantity must be at least 1");
      return;
    }

    const newInterest = {
      cropId: crop._id,
      userEmail: user.email,
      userName: user.displayName,
      quantity: Number(quantity),
      message,
      status: "pending",
    };

    try {
      const res = await fetch("http://localhost:3000/interests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newInterest),
      });

      if (res.ok) {
        toast.success(" Interest submitted successfully!");
        setTimeout(() => {
          modalRef.current.close();
          setIsSubmitting(false);
        }, 1000);

        setQuantity("");
        setMessage("");
      } else {
        toast.error(" Failed to submit interest");
      }
    } catch (err) {
      toast.error("Server error occurred");
      console.error(err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto my-10 bg-white rounded-3xl shadow-xl border border-green-100 p-6 flex flex-col md:flex-row gap-6"
    >
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

        <div className="mt-6">
          {!isOwner ? (
            <div>
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl shadow-md transition-all duration-300"
                onClick={() => modalRef.current.showModal()}
              >
                Send Interest
              </button>

              <dialog
                ref={modalRef}
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-xl mb-4 text-green-700">
                    Express Interest
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
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
                          disabled={hasInterest}
                          className={`px-4 py-2 rounded text-white transition-all duration-300 ${
                            hasInterest
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-green-600 hover:bg-green-700"
                          }`}
                        >
                          {hasInterest ? "Interest Submitted" : "Send Interest"}
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="modal-action">
                    <button
                      type="button"
                      onClick={() => modalRef.current.close()}
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

        {isOwner && <ReceivedInterests crop={crop} setCrop={setCrop} />}
      </div>
    </motion.div>
  );
};

export default CropsDetails;
