import React, { use } from "react";
const allproducts = fetch("http://localhost:3000/allproducts").then((res) =>
  res.json()
);
const Allproducts = () => {
  const allProducts = use(allproducts);
  console.log(allProducts);
  return (
    <div>
      <div>
        <h1>Explore Our All Products</h1>
      </div>
    </div>
  );
};

export default Allproducts;
