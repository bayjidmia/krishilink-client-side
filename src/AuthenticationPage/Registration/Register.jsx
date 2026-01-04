import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Authprovider/Context/Context";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { createUser, setuser, updateUser, GooglesignIn } =
    useContext(AuthContext);
  const [showpassword, setshowpassword] = useState(false);
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const Photo = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, Photo, email, password);
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters and include both uppercase and lowercase letters.",
        {
          style: {
            color: "red",
            background: "#fff",
            border: "1px solid red",
          },
        }
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: Photo })
          .then(() => {
            setuser({ ...user, displayName: name, photoURL: Photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
    e.target.reset();
    toast("You are SignIn ");
  };

  const handleGooglwsignIn = (e) => {
    e.preventDefault();
    GooglesignIn()
      .then((result) => {
        const user = result.user;
        setuser(user);
        navigate("/");
      })
      .catch((error) => console.log(error));
    toast("You are SignIn ");
  };
  const handlepassword = (e) => {
    e.preventDefault();
    setshowpassword(!showpassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen  p-6">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-gradient-to-br from-green-400 to-green-500  bg-white/20 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border border-white/30"
      >
        <h2 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg">
          🌿 Create Your Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-6">
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
              name="url"
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
              type={showpassword ? "text" : "password"}
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
            <button
              onClick={handlepassword}
              className=" btn-xs absolute top-8 right-6 "
            >
              {showpassword ? <FaRegEye /> : <FaEyeSlash />}
            </button>
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

        <button
          onClick={handleGooglwsignIn}
          className="btn w-full  mt-4  bg-green-500 hover:bg-green-600 transition rounded-xl py-3 font-semibold text-white shadow-lg"
        >
          {" "}
          <FcGoogle size={25} /> Continue with Google{" "}
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
