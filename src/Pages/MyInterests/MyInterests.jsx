import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Authprovider/Context/Context";
import Loading from "../../Component/Loading/Loading";

const MyInterests = () => {
  const { user, loading } = useContext(AuthContext);
  const [interests, setInterests] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/myinterests?userEmail=${user.email}`
        );
        const data = await res.json();
        console.log("the data is", data);
        setInterests(data);
      } catch (err) {
        console.error(err);
      } finally {
        setDataLoading(false);
      }
    };
    if (user) fetchInterests();
  }, [user]);
  const handleSort = (e) => {
    const value = e.target.value;
    let sortedData = [...interests];

    if (value === "name") {
      sortedData.sort((a, b) => a.cropName.localeCompare(b.cropName));
    } else if (value === "quantity") {
      sortedData.sort((a, b) => a.quantity - b.quantity);
    }

    setInterests(sortedData);
  };

  if (loading || dataLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-xl shadow-lg">
      <div className="flex justify-between mb-2">
        <h1 className="text-2xl font-bold mb-6">My Interests</h1>
        <select onChange={handleSort} className="btn">
          <option value="name">Sort By name</option>
          <option value="quantity">Sort By Quantity</option>
        </select>
      </div>

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
