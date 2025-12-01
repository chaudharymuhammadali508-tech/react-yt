import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <h2>sheryians</h2>
      <div className="link">
        <Link to ='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
          <Link to='/product'>Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
