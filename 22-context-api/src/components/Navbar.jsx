import { useContext } from "react";
import Nav2 from "./Nav2";
import { themeDataContext } from "../context/Themecontext";

const Navbar = () => {
  const [theme] = useContext(themeDataContext);
  return (
    <div className={theme}>
      <h1>Sheryians</h1>
      <Nav2 />
    </div>
  );
};

export default Navbar;
