import React from "react";
import Displaylates from "./Displaylates";

const LatestProducts = ({ latestProducts }) => {
  return (
    <div className="grid grid-cols-1 mx-auto max-w-7xl gap-5 mt-10 mb-10 bg-white md:grid-cols-2 lg:grid-cols-3">
      {latestProducts.map((latestProduct, index) => (
        <Displaylates latestProduct={latestProduct} key={index}></Displaylates>
      ))}
    </div>
  );
};

export default LatestProducts;
