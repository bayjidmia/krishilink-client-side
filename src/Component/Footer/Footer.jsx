import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { toast } from "react-toastify";
const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault();
    toast("Thankyou!Now You are Connect with us");
  };
  return (
    <div>
      <footer className="bg-green-50 text-gray-700  border-t border-green-200">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* 🥦 Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-3">
              Krisilink
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Connecting farmers and buyers through technology. <br />
              Fresh, local, and sustainable — that's our promise.
            </p>
          </div>

          {/* 🛠 Services */}
          <div>
            <h6 className="text-lg font-semibold text-green-700 mb-3">
              Services
            </h6>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-green-600">Crop Management</a>
              </li>
              <li>
                <a className="hover:text-green-600">Smart Marketplace</a>
              </li>
              <li>
                <a className="hover:text-green-600">Farmer Support</a>
              </li>
              <li>
                <a className="hover:text-green-600">Agri Insights</a>
              </li>
            </ul>
          </div>

          {/* 🏢 Company */}
          <div>
            <h6 className="text-lg font-semibold text-green-700 mb-3">
              Company
            </h6>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-green-600">About Us</a>
              </li>
              <li>
                <a className="hover:text-green-600">Contact</a>
              </li>
              <li>
                <a className="hover:text-green-600">Careers</a>
              </li>
              <li>
                <a className="hover:text-green-600">Press</a>
              </li>
            </ul>
          </div>

          {/* ✉ Newsletter */}
          <div>
            <h6 className="text-lg font-semibold text-green-700 mb-3">
              Join Our Newsletter
            </h6>
            <p className="text-gray-600 mb-3">
              Get updates on latest crops and offers.
            </p>
            <div className="join w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered join-item w-full"
                required
              />
              <button
                onClick={handleClick}
                className="btn bg-green-600 text-white join-item hover:bg-green-700"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* 🌿 Bottom Bar */}
        <div className="border-t border-green-200 py-5">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-gray-600 px-6">
            <p>© {new Date().getFullYear()} Krisilink. All rights reserved.</p>
            <div className="flex gap-4 mt-3 sm:mt-0 text-xl">
              <a
                href="https://www.facebook.com/"
                className="hover:text-green-700"
              >
                <FaFacebook />
              </a>
              <a href="https://x.com/" className="hover:text-green-700">
                <SiX />
              </a>
              <a
                href="https://www.instagram.com/accounts/login/?hl=en"
                className="hover:text-green-700"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/"
                className="hover:text-green-700"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
