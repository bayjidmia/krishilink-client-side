import React from "react";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-emerald-500 to-green-700 p-6">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white/20 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border border-white/30"
      >
        <h2 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg">
          🌿 Create Your Account
        </h2>

        <form className="space-y-6">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/10 text-white placeholder-transparent border border-white/30 focus:border-green-300 focus:ring-2 focus:ring-green-400 outline-none transition"
              placeholder="Full Name"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-gray-200 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-200"
            >
              Full Name
            </label>
          </div>

          {/* Image URL */}
          <div className="relative">
            <input
              type="text"
              id="image"
              name="image"
              className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/10 text-white placeholder-transparent border border-white/30 focus:border-green-300 focus:ring-2 focus:ring-green-400 outline-none transition"
              placeholder="Image URL"
            />
            <label
              htmlFor="image"
              className="absolute left-4 top-2 text-gray-200 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-200"
            >
              Profile Image URL
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/10 text-white placeholder-transparent border border-white/30 focus:border-green-300 focus:ring-2 focus:ring-green-400 outline-none transition"
              placeholder="email"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-gray-200 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-200"
            >
              Your email
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="text"
              id="password"
              name="password"
              className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/10 text-white placeholder-transparent border border-white/30 focus:border-green-300 focus:ring-2 focus:ring-green-400 outline-none transition"
              placeholder="Image URL"
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-2 text-gray-200 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-200"
            >
              password
            </label>
          </div>

          {/* Register Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #22c55e" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full mt-4 bg-green-500 hover:bg-green-600 transition rounded-xl py-3 font-semibold text-white shadow-lg"
          >
            Register
          </motion.button>
        </form>

        {/* Google Login */}
        <button className="w-full mt-4 bg-green-500 hover:bg-green-600 transition rounded-xl py-3 font-semibold text-white shadow-lg">
          Continue with Google
        </button>

        {/* Already have account */}
        <p className="text-center mt-6 text-sm text-gray-200">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-green-200 hover:underline font-semibold"
          >
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
