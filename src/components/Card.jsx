import React from "react";
import vector from "../assets/Vector.png";
import vector2 from "../assets/Vector-2.png";
import vector3 from "../assets/Vector-3.png";

const Card = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-[#E7E7FE]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-[154px]">
        <div className="w-full bg-white shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-[75px] p-2 mt-3" src={vector} alt="/" />
          <h2 className="text-2xl text-[#0B72FE] font-semibold py-6">
            Web Development
          </h2>
          <div className="w-[300px] text-[15px]">
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              quisquam ex obcaecati ipsa dicta assumenda ipsam perspiciatis
              quis! Dolorum suscipit, illo sapiente quae ipsum est debitis omnis
              consequuntur laborum autem.
            </p>
          </div>
          <button
            style={{ marginLeft: "35px" }}
            className="bg-[#0B72FE] text-white w-[200px] rounded-[23px] my-6 md:mx-0 py-3"
          >
            View More
          </button>
        </div>

        <div className="w-full shadow-xl bg-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-[50px] p-2 mt-3"
            src={vector2}
            alt="/"
          />
          <h2 className="text-2xl text-[#0B72FE]  font-semibold py-6">
            App Development
          </h2>
          <div className="w-[300px] text-[15px]">
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              quisquam ex obcaecati ipsa dicta assumenda ipsam perspiciatis
              quis! Dolorum suscipit, illo sapiente quae ipsum est debitis omnis
              consequuntur laborum autem.
            </p>
          </div>
          <button
            style={{ marginLeft: "35px" }}
            className="bg-[#0B72FE] mt-[45px] text-white w-[200px] rounded-[23px] my-6 md:mx-0 py-3"
          >
            View More
          </button>
        </div>

        <div className="w-full bg-white shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-[60px] p-2 mt-3 " src={vector3} alt="/" />
          <h2 className="text-2xl text-[#0B72FE] font-semibold py-6">
            UI/UX Designing
          </h2>
          <div className="w-[300px] text-[15px]">
            <p className="py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
              iste odio vitae, beatae magnam excepturi exercitationem quisquam
              velit at sint facilis voluptate iure, aut delectus optio. Ipsam
              explicabo dolorem incidunt.
            </p>
          </div>
          <button
            style={{ marginLeft: "35px" }}
            className="bg-[#0B72FE] text-white w-[200px] rounded-[23px] my-6 md:mx-0 py-3"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
