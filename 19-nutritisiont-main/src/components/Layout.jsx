import { Outlet } from "react-router-dom";
import Navbar from "./home/Navbar";
import Footer from "./home/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet /> {/* This will load the nested page */}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
