import React from "react";
import Group3 from "../assets/Group 3.svg";

const About = () => {
  return (
    <div className="max-w-[100%] mx-auto grid md:grid-cols-2 bg-[#F8F8F8]">
      <div className="flex flex-col justify-center ml-[120px]">
        <p className="text-[#1A1E3F] text-[60px] font-bold">About Us</p>
        <p className="my-[20px]">
          Lorem Ipsum is simply dummy text of the printing <br /> and
          typesetting industry. Lorem Ipsum has been the <br /> industry's
          standard dummy text ever since the 1500s, <br /> when an unknown
          printer took a galley of type and <br />
          scrambled it to make a type specimen book. It has <br /> survived not
          only five centuries, but also the leap into <br /> electronic
          typesetting, remaining essentially unchanged.
        </p>
        <button className="bg-[#0B72FE] text-white w-[200px] rounded-[23px] my-4 md:mx-0 py-3">
          Explore More
        </button>
      </div>
      <img className="w-[500px] mx-auto my-4" src={Group3} alt="artboard" />
    </div>
  );
};

export default About;
