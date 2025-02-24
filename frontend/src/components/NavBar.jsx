import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 shadow-lg fixed top-0 left-0 w-full z-50 bg-[#D9EAFD]">
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1 className="text-2xl p-4">Project Title</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex flex-col items-center gap-6 m-4 md:flex-row transition-all duration-300 ease-in-out ${
          isOpen ? "flex-row" : "hidden md:flex flex-col"
        }`}
      >
        {["About", "Home", "Upcoming Events"].map((item, index) => (
          <li key={index}>
            <Link
              to={`/${item.toLowerCase().replace(" ", "-")}`}
              className="relative text-lg font-semibold hover:text-blue-600 transition-colors duration-300
                before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-[2px] before:bg-blue-600 before:transition-all before:duration-300
                hover:before:w-full"
            >
              {item}
            </Link>
          </li>
        ))}
        {user?.role === "organizer" && (
          <li>
            <Link
              to="/create-event"
              className="relative text-lg font-semibold hover:text-blue-600 transition-colors duration-300
                before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-[2px] before:bg-blue-600 before:transition-all before:duration-300
                hover:before:w-full"
            >
              Create Events
            </Link>
          </li>
        )}
      </ul>

      {/* Authentication Section */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <ul className="flex flex-col md:flex-row items-center gap-4">
          {user ? (
            <>
              <li className="text-lg font-semibold">Hello, {user.name}</li>
              <li>
                <button
                  onClick={handleLogout}
                  className="border p-2 bg-red-500 text-white rounded-md hover:bg-red-700 hover:cursor-pointer"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="relative text-lg font-semibold hover:text-blue-600 transition-colors duration-300
                    before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-[2px] before:bg-blue-600 before:transition-all before:duration-300
                    hover:before:w-full"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="relative border border-none p-2 bg-black text-white rounded-md overflow-hidden
                    before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-white before:transition-all before:duration-300
                    hover:before:w-full hover:text-black"
                >
                  <span className="relative z-10">Sign-Up</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
