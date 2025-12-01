import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="flex justify-center gap-10 py-8 underline text-xl font-semibolds">
      <Link to="/product/men">Men</Link>
      <Link to="/product/women">Women</Link>
      <Link to="/product/kids">Kids</Link>
      <Outlet />
    </div>
  );
};

export default Product;
