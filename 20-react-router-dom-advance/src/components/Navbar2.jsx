import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar2 = () => {
  const navigate = useNavigate();
  console.log("useNavigate:", navigate);
  return (
    <div className="bg-cyan-700 flex w-full py-4 gap-10 px-6 ">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-amber-500 px-4 py-2 rounded "
      >
        Go to Home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-amber-500 px-4 py-2 rounded "
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-amber-500 px-4 py-2 rounded "
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
