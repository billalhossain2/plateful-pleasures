import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import { themeContext } from "../../themeContext/ThemeContext";
const Navbar = () => {
  const {isDarkMode, setIsDarkMode} = useContext(themeContext)
    if(isDarkMode){
      document.querySelector('html').setAttribute("data-theme", "dark")
    }else{
      document.querySelector('html').setAttribute("data-theme", "ligth")
    }
  return (
    <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center mt-10">
      <h3 className="font-bold lg:text-3xl md:text-3xl text-2xl text-[#5F8D0A]">
        <Link to="/">Plateful Pleasures</Link>
      </h3>
      <ul className="flex lg:flex-row items-center md:flex-row flex-col gap-8 font-semibold lg:mt-0 md:mt-0 mt-5">
        <li>
          <NavLink className="hover:text-[#5F8D0A] hover:text-bold" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-[#5F8D0A] hover:text-bold" to="/blogs">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-[#5F8D0A] hover:text-bold" to="/user">
            User
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-[#5F8D0A] hover:text-bold" to="/about-us">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-[#5F8D0A] hover:text-bold" to="/favourites">
            Favourites
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-[#5F8D0A] hover:text-bold" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:text-[#5F8D0A] hover:text-bold"
            to="/register"
          >
            Register
          </NavLink>
        </li>
        <li>
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={60}
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
