import React from "react";
import logoDark from "../assets/Logo-dark.svg";
import { FiMail, FiPhoneIncoming } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-10 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-black">
      <div className="ml-[55px]">
        <img style={{ width: "276px" }} src={logoDark} alt="" />
        <p className="py-4">
          Codacpoint Solutions is recognized <br /> as an eminent company in the
          software <br /> industry that offers the best in class <br /> digital
          solutions and impressive <br /> services that stands out globally.
        </p>
      </div>
      <div className="lg:col-span-2 flex justify-around mt-6 cursor-pointer">
        <div>
          <h6 className="font-bold text-[#0B72FE]">Quick Links</h6>
          <ul>
            <li className="py-2 text-sm">About Us</li>
            <li className="py-2 text-sm">Case Studies</li>
            <li className="py-2 text-sm">Career</li>
            <li className="py-2 text-sm">Blog</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-[#0B72FE]">What we do</h6>
          <ul>
            <li className="py-2 text-sm">Web Development</li>
            <li className="py-2 text-sm">App Development</li>
            <li className="py-2 text-sm">UI/UX Designing</li>
            <li className="py-2 text-sm">Game Development</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-[#0B72FE]">Start A Conversation</h6>
          <ul>
            <li className="py-2 text-base underline flex">
              <FiMail className="mr-3 mt-1" /> codacpoint@gmail.com
            </li>
            <li className="py-2 text-base flex">
              <FiPhoneIncoming className="mr-3 mt-1" /> +9112345678
            </li>
            <li className="py-2 text-base flex">
              <FaLinkedin className="mr-3 mt-1" />
              Codacpoint
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
