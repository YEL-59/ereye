import { Link } from "react-router-dom";
import navlogo from "../../assets/logo.png";
import { FaShoppingBag } from "react-icons/fa";
import Heart from "../../assets/icons/heart";
import Cart from "../../assets/icons/Cart";
import Notification from "../../assets/icons/Notification";
import Person from "../../assets/icons/Person";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false); // State to toggle mobile menu

  const Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about_us" },
    { name: "Subscription", link: "/service" },
    { name: "Glasses", link: "/contact_us" },
    { name: "Sunglass", link: "/product" },
    { name: "Contact Lenses", link: "/" },
    { name: "Accessories", link: "/about_us" },
    { name: "Offers", link: "/service" },
    { name: "Find A Store", link: "/contact_us" },
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle the dropdown

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="bg-[#05164D]">
      <nav className="container mx-auto flex gap-4 justify-between items-center text-white py-4 ">
        {/* Logo */}
        <div className="flex items-center">
          <img src={navlogo} alt="Main Logo" className="w-28 h-auto" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer md:hidden"
        >
          {open ? "✖" : "☰"}
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:static truncate absolute bg-[#05164D] top-16 left-0 w-full md:w-auto md:h-auto h-screen md:py-0 py-10 md:px-0 px-5 transition-all duration-500 ease-in-out ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-4 text-lg md:my-0 my-4 group relative"
            >
              <Link
                to={link.link}
                className="font-medium hover:text-[#089bab] duration-300"
              >
                {link.name}
              </Link>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#089bab] transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
            </li>
          ))}
          <li className="md:hidden my-3">
            <Link to="/booking" className="hover:text-[#089bab]">
              Booking Now
            </Link>
          </li>
          <li className="md:hidden">
            <Link to="/signup" className="hover:text-[#089bab]">
              Create An Account
            </Link>
          </li>
        </ul>

        {/* Icons and Search Bar */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search Bar */}
          <form className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="px-4 py-2 rounded-full border border-gray-300 focus:ring focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                />
              </svg>
            </button>
          </form>

          {/* Icons */}
          <Link to="/wishlist">
            <Heart />
          </Link>
          <Link to="/cart">
            <Cart />
          </Link>
          <Link to="/notifications">
            <Notification />
          </Link>
          <Link to="/profile">
            <Person />
          </Link>

          {/* Shopping Bag */}
          <button className="relative flex items-center justify-center w-10 h-10 bg-blue-700 rounded-full hover:bg-blue-800">
            <FaShoppingBag className="text-white text-lg" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
