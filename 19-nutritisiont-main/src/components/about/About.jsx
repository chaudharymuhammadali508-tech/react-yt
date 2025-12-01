import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Welcome from "./Welcome";
import Story from "./Story";
import Acheivements from "./Achievement.jsx";
const About = () => {
  return (
    <div id="top">
      {/* <Navbar /> */}
      <Hero />
      <Welcome />
      <Story />
      <Acheivements />
    </div>
  );
};

export default About;
