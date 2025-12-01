import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-4 bg-cyan-900 item-center">
      <h3 className="text-2xl font-bold ">Sheryians</h3>
      <ul className="flex gap-10 text-lg font-medium underline">
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/product"> Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
