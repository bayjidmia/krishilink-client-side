import React from "react";
import { toast } from "react-toastify";

const ReceivedInterests = ({ crop, setCrop }) => {
  if (!crop) return null;

  const handleAction = async (id, status) => {
    try {
      const res = await fetch(
        "https://3d-models-server-xi.vercel.app/api/interests/update",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ interestId: id, cropsId: crop._id, status }),
        }
      );
      const data = await res.json();

      if (data.success) {
        toast.success(data.message || `Interest ${status}!`);
        setCrop((prev) => ({
          ...prev,
          interests: prev.interests.map((i) =>
            i._id === id ? { ...i, status } : i
          ),
          quantity: status === "accepted" ? prev.quantity - 1 : prev.quantity,
        }));
      } else toast.error("Failed to update");
    } catch (err) {
      toast.error("Server error");
      console.error(err);
    }
  };

  if (!crop.interests || crop.interests.length === 0)
    return <p className="text-gray-500 italic mt-4">No interests yet.</p>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-3">Received Interests</h2>
      <table className="w-full border">
        <thead className="bg-green-100">
          <tr>
            <th className="border px-2 py-1">Buyer</th>
            <th className="border px-2 py-1">Qty</th>
            <th className="border px-2 py-1">Message</th>
            <th className="border px-2 py-1">Status</th>
            <th className="border px-2 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {crop.interests.map((i) => (
            <tr key={i._id} className="text-center">
              <td className="border px-2 py-1">{i.userName}</td>
              <td className="border px-2 py-1">{i.quantity}</td>
              <td className="border px-2 py-1">{i.message || "-"}</td>
              <td
                className={`border px-2 py-1 font-semibold ${
                  i.status === "accepted"
                    ? "text-green-600"
                    : i.status === "rejected"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {i.status}
              </td>
              <td className="border px-2 py-1">
                {i.status === "pending" ? (
                  <div className="flex gap-1 justify-center">
                    <button
                      onClick={() => handleAction(i._id, "accepted")}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleAction(i._id, "rejected")}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Reject
                    </button>
                  </div>
                ) : (
                  <span className="text-gray-500">No Action</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReceivedInterests;
