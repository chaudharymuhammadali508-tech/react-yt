// import React from "react";
// import Nutritionistlogo from "../../assets/Logo/Nutritionist-logo.png";
// import { NavLink } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <div>
//       <nav className="bg-[#1A3129] text-white px-6 md:px-10 lg:px-16 py-4">
//         <div className="flex items-center justify-between">
//           {/* <!-- Logo --> */}
//           <div className="flex items-center space-x-3 cursor-pointer">
//             <img
//               src={Nutritionistlogo}
//               alt="Nutritionist Logo"
//               className="h-10 w-auto"
//             />
//           </div>

//           {/* <!-- Hamburger (Mobile + Tablet only) --> */}
//           <label className="cursor-pointer text-3xl lg:hidden block relative z-50">
//             <input type="checkbox" id="menu-toggle" className="hidden peer" />

//             {/* <!-- Hamburger & Close Icons --> */}
//             <span className="block peer-checked:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-7 w-7"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             </span>
//             <span className="hidden peer-checked:block">✕</span>

//             {/* <!-- Mobile + Tablet Menu --> */}
//             <div className="fixed inset-0 bg-[#1A3129] flex flex-col items-center justify-center space-y-6 text-white font-medium transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-500 ease-in-out lg:hidden">
//               <NavLink
//                 to="/"
//                 // className="text-green-400 hover:text-green-400 underline text-lg"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-green-400"
//                     : "hover:text-green-400 underline text-lg"
//                 }
//               >
//                 Home
//               </NavLink>
//               <NavLink
//                 to="/about"
//                 // className="hover:text-green-400 underline text-lg"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-green-400"
//                     : "hover:text-green-400 underline text-lg"
//                 }
//               >
//                 About
//               </NavLink>
//               <NavLink
//                 to="/team"
//                 // className="hover:text-green-400 underline text-lg"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-green-400"
//                     : "hover:text-green-400 underline text-lg"
//                 }
//               >
//                 Team
//               </NavLink>
//               <NavLink
//                 to="/process"
//                 // className="hover:text-green-400 underline text-lg"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-green-400"
//                     : "hover:text-green-400 underline text-lg"
//                 }
//               >
//                 Process
//               </NavLink>
//               <NavLink
//                 to="/pricing"
//                 // className="hover:text-green-400 underline text-lg"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-green-400"
//                     : "hover:text-green-400 underline text-lg"
//                 }
//               >
//                 Pricing
//               </NavLink>
//               <NavLink
//                 to="/blog"
//                 // className="hover:text-green-400 underline text-lg"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-green-400"
//                     : "hover:text-green-400 underline text-lg"
//                 }
//               >
//                 Blog
//               </NavLink>
//               <NavLink
//                 to="/contact"
//                 className="bg-white text-black px-6 py-2 rounded-xl"
//               >
//                 Contact Us
//               </NavLink>
//             </div>
//           </label>

//           {/* <!-- Desktop Menu (Only lg and above) --> */}
//           <ul className="hidden lg:flex items-center gap-10 font-medium">
//             <li>
//               <NavLink
//                 to="/"
//                 // className="text-green-400 underline font-semibold"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-green-400 underline"
//                     : "hover:text-green-400 underline text-lg"
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/about"
//                 // className="hover:text-green-400 hover:underline"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-green-400 underline"
//                     : "hover:text-green-400 underline text-lg"
//                 }
//               >
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/team"
//                 // className="hover:text-green-400 hover:underline"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-green-400 underline"
//                     : "hover:text-green-400 underline text-lg"
//                 }
//               >
//                 Team
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/process"
//                 // className="hover:text-green-400 hover:underline"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-green-400 underline"
//                     : "hover:text-green-400 underline text-lg"
//                 }
//               >
//                 Process
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/pricing"
//                 // className="hover:text-green-400 hover:underline"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-green-400 underline"
//                     : "hover:text-green-400 underline text-lg"
//                 }
//               >
//                 Pricing
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/blog"
//                 // className="hover:text-green-400 hover:underline"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-green-400 underline"
//                     : "hover:text-green-400 underline text-lg"
//                 }
//               >
//                 Blog
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/contact"
//                 className="bg-[#CBEA7B] hover:bg-white text-black px-5 py-2 rounded-lg transition"
//               >
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import Nutritionistlogo from "../../assets/Logo/Nutritionist-logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      // const currentScrollY = window.scrollY;

      // if (currentScrollY > lastScrollY && currentScrollY > 550) {
      //   // scrolling down
      //   setShow(false);
      // } else {
      //   // scrolling up
      //   setShow(true);
      // }

      // setLastScrollY(currentScrollY);
      setShow(true);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="bg-[#1A3129] text-white px-6 md:px-10 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <img
              src={Nutritionistlogo}
              alt="Nutritionist Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Hamburger Menu */}
          <label className="cursor-pointer text-3xl lg:hidden block relative z-50">
            <input type="checkbox" id="menu-toggle" className="hidden peer" />

            <span className="block peer-checked:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </span>

            <span className="hidden peer-checked:block">✕</span>

            {/* Mobile Menu */}
            <div className="fixed inset-0 bg-[#1A3129] flex flex-col items-center justify-center space-y-6 text-white font-medium transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-500 ease-in-out lg:hidden">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400"
                    : "hover:text-green-400 underline text-lg"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400"
                    : "hover:text-green-400 underline text-lg"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400"
                    : "hover:text-green-400 underline text-lg"
                }
              >
                Team
              </NavLink>
              <NavLink
                to="/process"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400"
                    : "hover:text-green-400 underline text-lg"
                }
              >
                Process
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400"
                    : "hover:text-green-400 underline text-lg"
                }
              >
                Pricing
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400"
                    : "hover:text-green-400 underline text-lg"
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className="bg-white text-black px-6 py-2 rounded-xl"
              >
                Contact Us
              </NavLink>
            </div>
          </label>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 underline"
                    : "hover:text-green-400 underline text-lg"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 underline"
                    : "hover:text-green-400 underline text-lg"
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 underline"
                    : "hover:text-green-400 underline text-lg"
                }
              >
                Team
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/process"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 underline"
                    : "hover:text-green-400 underline text-lg"
                }
              >
                Process
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 underline"
                    : "hover:text-green-400 underline text-lg"
                }
              >
                Pricing
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 underline"
                    : "hover:text-green-400 underline text-lg"
                }
              >
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="bg-[#CBEA7B] hover:bg-white text-black px-5 py-2 rounded-lg transition"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
