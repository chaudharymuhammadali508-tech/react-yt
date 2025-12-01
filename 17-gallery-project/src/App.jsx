import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      ` https://picsum.photos/v2/list?page=${index}&limit=15`
    );
    setUserData(response.data);
    console.log(response);
  };
  let printUSerData = (
    <h3 className="text-gray-300 font-semibold text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h3>
  );
  if (userData.length > 0) {
    printUSerData = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }
  useEffect(() => {
    getData();
  }, [index]);
  return (
    <div className="bg-black h-screen text-white p-4 overflow-auto   ">
      <div className="flex flex-wrap gap-4 p-2 max-lg:justify-center mb-10">
        {printUSerData}
      </div>
      <div className="flex justify-center items-center  gap-4 absolute bottom-4 left-1/2 -translate-x-1/2">
        <button
          // style={{opacity:index==1 ? 0.6:1}}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          disabled={index === 1}
          className={`bg-amber-400 text-black  text-sm  rounded  px-4 py-2 font-semibold transition-transform duration-200 cursor-pointer  ${
            index === 1
              ? "opacity-60 disabled:cursor-not-allowed"
              : "active:scale-95"
          }`}
        >
          Prev
        </button>
        <h4>page{index}</h4>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
          className="bg-amber-400 text-black  cursor-pointer text-sm active:scale-95 rounded px-4 py-2 font-semibold transition-transform duration-200 "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
