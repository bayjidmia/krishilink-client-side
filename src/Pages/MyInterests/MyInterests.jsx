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
          `https://3d-models-server-xi.vercel.app/api/myinterests?userEmail=${user.email}`
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
    <div className="max-w-6xl mx-auto my-10 px-4">
      <div className="bg-white rounded-2xl shadow-md p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Interests</h1>

          <select
            onChange={handleSort}
            className="select select-bordered w-full sm:w-56"
          >
            <option value="name">Sort by Crop Name</option>
            <option value="quantity">Sort by Quantity</option>
          </select>
        </div>

        {/* Empty State */}
        {interests.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            You have no crop interests yet.
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead className="bg-green-100 text-gray-800">
                  <tr>
                    <th>Crop</th>
                    <th>Owner</th>
                    <th>Quantity</th>
                    <th>Message</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {interests.map((item) => (
                    <tr key={item._id}>
                      <td>{item.cropName}</td>
                      <td>{item.ownerName}</td>
                      <td>{item.quantity}</td>
                      <td className="max-w-xs truncate">{item.message}</td>
                      <td>
                        <span
                          className={`badge font-semibold ${
                            item.status === "accepted"
                              ? "badge-success"
                              : item.status === "rejected"
                              ? "badge-error"
                              : "badge-warning"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {interests.map((item) => (
                <div key={item._id} className="border rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="font-semibold text-lg">{item.cropName}</h2>
                    <span
                      className={`badge ${
                        item.status === "accepted"
                          ? "badge-success"
                          : item.status === "rejected"
                          ? "badge-error"
                          : "badge-warning"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600">
                    <strong>Owner:</strong> {item.ownerName}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Quantity:</strong> {item.quantity}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Message:</strong> {item.message}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyInterests;
