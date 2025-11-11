import React from "react";
import { motion } from "framer-motion";

const Showproducts = ({ allProduct }) => {
  console.log(allProduct);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 4, y: 4 }}
        transition={{ duration: 2 }}
      >
        <div className="card hover:shadow-2xl transition-shadow duration-300 p-5 rounded-xl  bg-base-100 w-auto h-100 shadow-sm">
          <figure className="  bg-white shadow rounded overflow-hidden">
            <img className=" w-full h-60" src={allProduct.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {allProduct.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Owner Email: {allProduct.owner.ownerEmail}</p>
            <div className="card-actions mt-2">
              <div className="badge w-full badge-outline hover:bg-green-500 hover:text-white cursor-pointer ">
                View Details{" "}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Showproducts;
