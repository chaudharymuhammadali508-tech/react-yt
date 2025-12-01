import React from "react";
import Navbar from "./Navbar";
import Personalized from "./Personalized";
import Features from "./Features";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Footer from "./Footer";
const Home = () => {
  return (
    <div id="top">
      {/* <Navbar /> */}
      <Personalized />
      <Features />
      <Blog />
      <Testimonials />
      <Pricing />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
