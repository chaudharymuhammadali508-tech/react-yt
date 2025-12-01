import React from "react";

const App = () => {
  const person = {
    userName: "ali",
    age: 24,
    city: "jhelum",
  };
  localStorage.setItem("person", JSON.stringify(person));
  const getUser = localStorage.getItem("person", person);
  console.log("getUser from person", getUser);
  const getUserObj = JSON.parse(getUser);
  console.log(getUserObj);

  return <div>App</div>;
};

export default App;
