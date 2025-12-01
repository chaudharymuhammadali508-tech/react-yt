import React, { useContext } from "react";
import { themeDataContext } from "../context/Themecontext";

const Button = () => {
  const [theme, setTheme] = useContext(themeDataContext);
  const changeTheme = () => {
    setTheme("dark");
  };
  return (
    <div className="btn" onClick={changeTheme}>
      Change Theme
    </div>
  );
};

export default Button;
