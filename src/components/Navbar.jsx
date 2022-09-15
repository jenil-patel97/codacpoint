import React, { useState } from "react";
import logo from "../assets/Main-Logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
      <img src={logo} alt="logo" width={280} />
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer font-semibold">Projects</li>
        <li className="p-4 cursor-pointer ml-4 font-semibold text-black rounded-3xl hover:bg-[#02DF9B]  hover:text-white">
          Case Studies
        </li>
        <li className="p-4 cursor-pointer ml-4 font-semibold">What We Do</li>
        <li className="p-4 cursor-pointer font-semibold">Blog</li>
        <li className="p-4 cursor-pointer ml-4 text-black rounded-3xl font-semibold hover:bg-[#0B72FE] hover:text-white">
          Career
        </li>
        <li className="p-4 cursor-pointer text-black rounded-3xl hover:border border-sky-600  ml-5  font-semibold">
          Get in touch
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[white] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img src={logo} alt="logo" width={250} className="m-3"></img>
        <ul className="text-black p-4">
          <li className="p-4 border-b border-gray-600">Projects</li>
          <li className="p-4 border-b border-gray-600">Case Studies</li>
          <li className="p-4 border-b border-gray-600">What We Do</li>
          <li className="p-4 border-b border-gray-600">Blog</li>
          <li className="p-4 ">Career</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
