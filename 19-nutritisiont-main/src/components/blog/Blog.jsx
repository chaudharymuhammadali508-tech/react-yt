import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Catagories from "./Catagories";
import Cards from "./Cards";
import Footer from "./Footer";

const Blog = () => {
  return (
    <div id="top">
      {/* <Navbar /> */}
      <Logo />
      <Catagories />
      <Cards />
      {/* <Footer /> */}
    </div>
  );
};

export default Blog;
