import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 shadow-lg fixed top-0 left-0 w-full z-50 bg-[#D9EAFD]">
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1 className="text-2xl p-4">Project Title</h1>

        {/* Menu Icon - Visible on Small Screens */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Navigation Links - Default Column-wise, Changes to Row on Click */}
      <ul className={`flex flex-col items-center gap-6 m-4 md:flex-row transition-all duration-300 ease-in-out ${
        isOpen ? "flex-row" : "hidden md:flex flex-col"
      }`}>
        {["About", "Contact", "Create Events", "Upcoming Events"].map((item, index) => (
          <li key={index} className="relative hover:cursor-pointer before:absolute before:bottom-[-3px] before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full">
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <ul className="flex flex-col md:flex-row items-center gap-4">
          <li className="relative hover:cursor-pointer before:absolute before:bottom-[-3px] before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full">
            <Link to='/login'>
            Login
            </Link>
          </li>

          {/* ✅ Wrap "Sign-Up" inside a <Link> */}
          <li className="relative border border-white rounded-[2%] p-2 text-white bg-black overflow-hidden transition-colors duration-300 ease-in-out 
              before:absolute before:inset-0 before:right-0 before:bg-white before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:text-black 
              before:z-0 z-10 hover:cursor-pointer hover:shadow-lg">
            <Link to="/signup" className="relative z-10 transition-colors duration-0 ease-in-out">
              Sign-Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
