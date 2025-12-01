import React from "react";
import { Link } from "react-router-dom";
import Nutrisiontlogo from "../../assets/Logo/Nutritionist-Logo.png";
const Navbar = () => {
  return (
    <div>
      {/* <!-- Section 1 Navbar --> */}
      <nav className="bg-[#1A3129] text-white px-6 md:px-10 lg:px-16 py-4 ">
        <div className="flex items-center justify-between">
          {/* <!-- Logo --> */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <img
              src={Nutrisiontlogo}
              alt="Nutritionist Logo"
              className="h-10 w-auto"
            />
          </div>
          {/* 
            <!-- Hamburger (Mobile + Tablet only) --> */}
          <label className="cursor-pointer text-3xl lg:hidden block relative z-50">
            <input type="checkbox" id="menu-toggle" className="hidden peer" />

            {/* <!-- Hamburger & Close Icons --> */}
            <span className="block peer-checked:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </span>
            <span className="hidden peer-checked:block">✕</span>
            {/* 
                <!-- Mobile + Tablet Menu --> */}
            <div className="fixed inset-0 bg-[#1A3129] flex flex-col items-center justify-center space-y-6 text-white font-medium transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-500 ease-in-out lg:hidden">
              <Link to="/" className="hover:text-green-400 underline text-lg">
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-green-400 underline text-lg"
              >
                About
              </Link>
              <Link
                to="/team"
                className="hover:text-green-400 underline text-lg"
              >
                Team
              </Link>
              <Link
                to="/process"
                className="text-green-400 hover:text-green-400 underline text-lg"
              >
                Process
              </Link>
              <Link
                to="/pricing"
                className="hover:text-green-400 underline text-lg"
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="hover:text-green-400 underline text-lg"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="bg-white text-black px-6 py-2 rounded-xl"
              >
                Contact Us
              </Link>
            </div>
          </label>

          {/* <!-- Desktop Menu (Only lg and above) --> */}
          <ul className="hidden lg:flex items-center gap-10 font-medium">
            <li>
              <Link to="/" className="hover:text-green-400 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-green-400 hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-green-400 hover:underline">
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/process"
                className="text-green-400 underline font-semibold"
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-green-400 hover:underline"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-green-400 hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="bg-[#CBEA7B] hover:bg-white text-black px-5 py-2 rounded-lg transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
