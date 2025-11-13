import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Authprovider/Context/Context";

const MyInterests = () => {
  const { user } = useContext(AuthContext);
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchInterests = async () => {
      try {
        // Replace this with your real API call
        const res = await fetch(
          `http://localhost:3000/api/myinterests?userEmail=${user.email}`
        );
        const data = await res.json();
        console.log("the data is", data);
        setInterests(data);
      } catch (err) {
        console.error(err);
      }
    };
    if (user) fetchInterests();
  }, [user]);

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6">My Interests</h1>

      {interests.length === 0 ? (
        <p className="text-center text-gray-500">
          You have no crop interests yet.
        </p>
      ) : (
        <table className="w-full border border-gray-300">
          <thead className="bg-green-100">
            <tr>
              <th className="border px-4 py-2">Crop</th>
              <th className="border px-4 py-2">Owner</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Message</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {interests.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{item.cropName}</td>
                <td className="border px-4 py-2">{item.ownerName}</td>
                <td className="border px-4 py-2">{item.quantity}</td>
                <td className="border px-4 py-2">{item.message}</td>
                <td
                  className={`border px-4 py-2 font-semibold ${
                    item.status === "accepted"
                      ? "text-green-600"
                      : item.status === "rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyInterests;
