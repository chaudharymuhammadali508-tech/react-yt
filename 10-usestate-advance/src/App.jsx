import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState({ user: "ali", age: 24 });
  const change = () => {
    //   const  newNum = {...num};
    //     console.log("newNum",newNum);
    //     newNum.user="akbar"
    //     newNum.age = 20;
    //     setnum(newNum)
    setnum((prev) => ({ ...prev, age: 50 }));
    setnum((prev) => ({ ...prev, user: "akbar" }));
  };
  // const [num, setnum] = useState(10);
  // const change = ()=>{
  //    setTimeout(() => {
  //    setnum((prev)=>(prev+1))
  //    setnum((prev)=>(prev+1))
  //    },1000);
  // }

  return (
    <div>
      <h1>
        {num.user},{num.age}
      </h1>
      <button onClick={change}>Click me</button>
    </div>
  );
};

export default App;
