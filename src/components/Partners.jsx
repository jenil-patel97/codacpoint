import React from "react";
import Swiggy from "../assets/Swiggy_logo_.svg";
import Zomato from "../assets/Zomato_logo_.svg";
import Ubisoft from "../assets/Ubisoft_logo.svg";
import Paytm from "../assets/Paytm-Logo.svg";

const Hero = () => {
  return (
    <div className="max-w-[100%] mx-auto grid md:grid-cols-2 bg-[#F8F8F8]">
      <div className="flex flex-col justify-center ml-[120px] bg-[#F8F8F8]">
        <p className="ml-[120px] text-[#1A1E3F] text-[28px] mt-[40px] font-bold">
          We work with the Best Partners
        </p>
        <p className="ml-[120px] my-[76px] mt-[35px] text-[22px] text-base">
          Lorem Ipsum is simply dummy text of the printing <br /> and
          typesetting industry. Lorem Ipsum has been the <br /> industry's
          standard dummy text ever since the 1500s, <br /> when an unknown
          printer took a galley of type and <br />
          scrambled it to make a type specimen book. It has <br /> survived not
          only five centuries, but also the leap into <br /> electronic
          typesetting, remaining essentially unchanged.
        </p>
       
      </div>
      <div className="grid grid-cols-2 ">
        <img className="w-[180px] ml-[30px] mt-[40px]" src={Swiggy} alt="swiggy" />
        <img className="mb-[90px] w-[160px]  mt-[40px] ml-[80px]" src={Zomato} alt="zomato" />
        <img className="w-[80px] ml-[85px]" src={Ubisoft} alt="ubi" />
        <img className="w-[160px] ml-[85px]" src={Paytm} alt="paytm" />
      </div>
      
    </div>
  );
};

export default Hero;
