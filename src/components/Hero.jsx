import React from "react";
import Artboard from "../assets/Artboard.svg";

const Hero = () => {
  return (
    <div className="max-w-[100%] mx-auto grid md:grid-cols-2 header-1">
      <div className="flex flex-col justify-center ml-[120px]">
        <p className="text-[#1A1E3F] text-[60px] font-bold">Web Developer</p>
        <p className="my-[20px]">
          Codacpoint helps you with intutive website solutions to <br /> beacome
          the digital face in the industry and hunt <br /> down the global
          market!
        </p>
        <button className="bg-[#0B72FE] text-white w-[200px] rounded-[23px] my-4 md:mx-0 py-3">
          Explore More
        </button>
      </div>
      <img className="w-[500px] mx-auto my-4" src={Artboard} alt="artboard" />
    </div>
  );
};

export default Hero;
