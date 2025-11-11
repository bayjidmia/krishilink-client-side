import React from "react";
import logo from "../../assets/image.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="navbar container mx-auto px-4 py-2">
        {/* Left: Logo + Brand Name */}
        <div className="navbar-start flex items-center gap-3">
          <img
            src={logo}
            alt="KrishiLink logo"
            className="w-[48px] h-[48px] object-contain rounded-full border-2 border-white/70 shadow-md"
          />
          <a className="text-2xl md:text-3xl font-bold tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
            Krishi<span className="text-yellow-200">Link</span>
          </a>
        </div>

        {/* Center: Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allproducts">All Crops</NavLink>
            </li>
          </ul>
        </div>
        {/* Right: Button */}
        <div className="navbar-end gap-2 ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar hidden sm:block "
          >
            <div className="w-10 rounded-full  ">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div>
            <h1 className="  lg:font-bold text-xl">
              <NavLink to={"/login"}>
                <button className="px-5 py-2 rounded-lg bg-green-700 text-white font-semibold border border-white/50 hover:bg-green-800 hover:scale-105 transition duration-300">
                  <a href="">Login</a>
                </button>
              </NavLink>
            </h1>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className="lg:hidden ml-auto">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-700/90 rounded-box w-52"
            ></ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
