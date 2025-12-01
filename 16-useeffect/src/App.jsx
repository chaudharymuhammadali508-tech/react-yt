import React, { useEffect, useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  function changeA() {
    console.log("value of a is changing");
  }
  function changeB() {
    console.log("value of b is changing");
  }
  useEffect(
    function () {
      changeA();
    },
    [a]
  );
  useEffect(
    function () {
      changeB();
    },
    [b]
  );
  return (
    <div>
      <h1>Count A is {a}</h1>
      <h1>Count B is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        change A
      </button>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        change B
      </button>
    </div>
  );
};

export default App;
