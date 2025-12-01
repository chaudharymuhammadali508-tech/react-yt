import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const getData = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      console.log("response::", response.data);
      setData(response.data);
    } catch (error) {
      console.log("error", error);
      setError(error.message);
    }
  };
  return (
    <div>
      <button onClick={getData}>Click me</button>
      {error && <p className="para">{error}</p>}
      <div>
        {data.map((elem, idx) => {
          return <h1 key={idx}>hello{elem.author}</h1>;
        })}
      </div>
    </div>
  );
};

export default App;
