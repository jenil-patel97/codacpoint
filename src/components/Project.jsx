import React from "react";
import Project1 from "../assets/Project-1.svg";
import Droptrim from "../assets/Droptrim.png";

const Hero = () => {
  return (
    <div className="bg-[#F5F5FF] p-[80px]">
      <p className="ml-[80px] text-[#1A1E3F] text-[40px] font-semibold">
        LOOK AT OUR DYNAMIC PORTFOLIO
      </p>
      <p className="ml-[80px] text-[#707070] text-[40px] font-semibold">
        Our Projects
      </p>
      <div className="max-w-[100%] mx-auto grid md:grid-cols-2 bg-[#F5F5FF] mt-[81px]">
        <img className="w-[500px] mx-auto my-4" src={Project1} alt="artboard" />
        <div className="flex flex-col justify-center ml-[120px]">
          <img
            className="w-[183px] ml-[92px] mt-[70px]"
            src={Droptrim}
            alt="droptrim"
          />
          <p className="my-[20px] text-[#1A1E3F] text-[15px] ml-[103px]">
            Web Developement, UI/UX Design
          </p>
          <p className="my-[50px] text-[15px] ml-[103px]">
            Easily track your website`s visitors and replay sessions to analyze
            user behavior and B2B leads. It will provide various services like
            Detail visitor analytics, Record & replay visitor sessions, Visitor
            behaviour, Heatmap tracking, Detect Proxy/VPN/Spam users, B2B Lead
            Generation, etc...
          </p>
          <button style={{marginLeft: '150px'}} className=" text-black w-[200px] border border-orange-500  rounded-[23px] my-4 md:mx-0 py-3">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
