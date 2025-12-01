import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Notfound from "./pages/Notfound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Women from "./pages/Women";
import Courses from "./pages/Courses";
import CoursesDetail from "./pages/CoursesDetail";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div className="bg-black text-white h-screen  ">
      <Navbar />
      <Navbar2 />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/courses/:CourseId" element={<CoursesDetail />}></Route>
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />}></Route>
          <Route path="women" element={<Women />}></Route>
          <Route path="kids" element={<Kids />}></Route>
        </Route>

        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
