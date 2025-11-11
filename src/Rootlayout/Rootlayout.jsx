import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Component/Footer/Footer";

const Rootlayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Rootlayout;
