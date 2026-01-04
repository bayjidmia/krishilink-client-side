import axios from "axios";
import React from "react";

const axiosSecure = axios.create({
  baseURL: "https://3d-models-server-xi.vercel.app/", // তোমার backend URL
});

const useAxiossecure = () => {
  return axiosSecure;
};

export default useAxiossecure;
