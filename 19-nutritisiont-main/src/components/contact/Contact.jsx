import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import ContactUs from "./ContactUs";
import Email from "./Email";
import JoinUs from "./JoinUs";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div id="top">
      {/* <Navbar /> */}
      <Logo />
      <ContactUs />
      <Email />
      <JoinUs />
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
