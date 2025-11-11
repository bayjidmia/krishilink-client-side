import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-emerald-500 to-green-700 p-6">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white/20 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border border-white/30"
      >
        <h2 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg">
          🌱 Login to KrishiLink
        </h2>

        <form className="space-y-6">
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="image"
              name="password"
              className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/10 text-white placeholder-transparent border border-white/30 focus:border-green-300 focus:ring-2 focus:ring-green-400 outline-none transition"
              placeholder="Image URL"
            />
            <label
              htmlFor="image"
              className="absolute left-4 top-2 text-gray-200 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-200"
            >
              Your email
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="text"
              id=""
              name="password"
              className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/10 text-white placeholder-transparent border border-white/30 focus:border-green-300 focus:ring-2 focus:ring-green-400 outline-none transition"
              placeholder="Image URL"
            />
            <label
              htmlFor="image"
              className="absolute left-4 top-2 text-gray-200 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-200"
            >
              Password
            </label>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-200">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-green-400" /> Remember me
            </label>
            <a href="#" className="hover:text-green-200 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #22c55e" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full mt-4 bg-green-500 hover:bg-green-600 transition rounded-xl py-3 font-semibold text-white shadow-lg"
          >
            Login
          </motion.button>
        </form>

        <button className="w-full mt-4 bg-green-500 hover:bg-green-600 transition rounded-xl py-3 font-semibold text-white shadow-lg ">
          Login With Google
        </button>

        <p className="text-center mt-6 text-sm text-gray-200">
          Don’t have an account?{" "}
          <NavLink to={"/register"}>
            <a
              href="#"
              className="text-green-200 hover:underline font-semibold"
            >
              Register
            </a>
          </NavLink>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
