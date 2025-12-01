import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import { Route, Routes } from "react-router-dom";
import Team from "./components/team/Team";
import Process from "./components/process/Process";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Navbar from "./components/home/Navbar";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/process" element={<Process />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
