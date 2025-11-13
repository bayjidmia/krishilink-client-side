import React, { useEffect, useState, useContext } from "react";

import CropRow from "./CropRow";
import { AuthContext } from "../../Authprovider/Context/Context";

const MyCrops = () => {
  const { user } = useContext(AuthContext);
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user?.email) return;

    const fetchCrops = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/crops?userEmail=${encodeURIComponent(
            user.email
          )}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Crops fetched:", data);
        setCrops(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCrops();
  }, [user?.email]);

  if (loading) return <p>Loading...</p>;
  if (!crops.length) return <p>No crops found</p>;

  return (
    <div>
      <tbody className="grid my-10 mx-10 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
        {crops.map((crop) => (
          <CropRow key={crop._id} crop={crop} setCrops={setCrops} />
        ))}
      </tbody>
    </div>
  );
};

export default MyCrops;
