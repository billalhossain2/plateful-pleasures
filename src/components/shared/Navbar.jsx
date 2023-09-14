import React from "react";

const Navbar = () => {
  return (
    <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center mt-10">
      <h3 className="font-bold lg:text-3xl md:text-3xl text-2xl text-[#5F8D0A]">
        Plateful Pleasures
      </h3>
      <ul className="flex lg:flex-row md:flex-row flex-col gap-8 font-semibold lg:mt-0 md:mt-0 mt-5">
        <li>
          <a className="hover:text-[#5F8D0A] hover:text-bold" href="/home">Home</a>
        </li>
        <li>
          <a className="hover:text-[#5F8D0A] hover:text-bold" href="/blog">Blog</a>
        </li>
        <li>
          <a className="hover:text-[#5F8D0A] hover:text-bold" href="/user">User</a>
        </li>
        <li>
          <a className="hover:text-[#5F8D0A] hover:text-bold" href="/login">Login</a>
        </li>
        <li>
          <a className="hover:text-[#5F8D0A] hover:text-bold" href="/register">Register</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
