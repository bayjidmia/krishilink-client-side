import React from "react";
import { motion } from "framer-motion";

const Displaylates = ({ latestProduct }) => {
  console.log(latestProduct);

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 4, y: 4 }}
      transition={{ duration: 2 }}
    >
      <div className="card hover:shadow-2xl transition-shadow duration-300 p-5 rounded-xl  bg-base-100 w-auto shadow-sm">
        <figure className="  bg-white shadow rounded overflow-hidden">
          <img className=" w-full h-60" src={latestProduct.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {latestProduct.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Displaylates;
