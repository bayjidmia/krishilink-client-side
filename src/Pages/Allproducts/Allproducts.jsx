import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Showproducts from "./Showproducts";
import { useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Context/Context";
import Loading from "../../Component/Loading/Loading";

const Allproducts = () => {
  const { loading } = useContext(AuthContext);
  const [allProducts, setallproduct] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [search, setsearch] = useState("");
  const location = useLocation();
  const addedCrop = location.state?.addedCrop;
  useEffect(() => {
    fetch("https://3d-models-server-xi.vercel.app/allproducts")
      .then((res) => res.json())
      .then((data) => setallproduct(data))
      .catch((err) => console.error(err))
      .finally(() => setDataLoading(false));
  }, []);
  useEffect(() => {
    if (addedCrop) {
      setallproduct((prev) => [...prev, addedCrop]);
    }
  }, [addedCrop]);

  const term = search.trim().toLocaleLowerCase();
  const searchallproduct = term
    ? allProducts.filter(
        (product) =>
          product.name.toLocaleLowerCase().includes(term) ||
          product.location?.toLocaleLowerCase().includes(term) ||
          product.description?.toLocaleLowerCase().includes(term)
      )
    : allProducts;
  if (loading || dataLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-6">
        <div>
          <h1 className="text-2xl text-center font-bold text-green-700">
            Explore All Products
          </h1>

          {/* Search bar */}
          <div className="flex justify-between mt-10 mr-5 ml-5 mb-10 items-center">
            <h1 className="text-gray-600">
              ({allProducts.length}) Crops Found
            </h1>
            <div className="relative w-1/2 lg:w-full max-w-sm">
              <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-[#627382] text-xl pointer-events-none" />
              <input
                className="border border-[#D2D2D2] w-full h-[44px] pl-10 pr-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                type="text"
                placeholder="Search Crops"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* ✅ FIX: map must return something */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {searchallproduct.length > 0 ? (
            searchallproduct.map((allProduct, index) => (
              <Showproducts allProduct={allProduct} key={index} />
            ))
          ) : (
            <div className="col-span-full flex justify-center">
              <div className="border border-gray-300 bg-white shadow-lg rounded-xl p-10 w-full max-w-md text-center">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">
                  No Products Found
                </h2>
                <p className="text-gray-500">
                  Sorry, we couldn't find any products matching your search.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
