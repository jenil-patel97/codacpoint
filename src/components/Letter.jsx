import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-5 bg-white text-[#211C58] px-4 lg:col-span-2">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-4">
        <div className=" my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl text-center font-bold py-2">
            9+
          </h1>
          <p className="text-[22px] text-center font-semibold">Years Experience</p>
        </div>
        <div className=" my-4">
          <h1 className="md:text-4xl sm:text-3xl text-center text-2xl font-bold py-2">
            250+
          </h1>
          <p className="text-[22px] text-center font-semibold">Successful Projects</p>
        </div>
        <div className=" my-4">
          <h1 className="md:text-4xl sm:text-3xl text-center text-2xl font-bold py-2">
            80%
          </h1>
          <p className="text-[22px] text-center font-semibold">Repeated Clients</p>
        </div>
        <div className=" my-4">
          <h1 className="md:text-4xl sm:text-3xl text-center text-2xl font-bold py-2">
            10+
          </h1>
          <p className="text-[22px] text-center font-semibold">Employees</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
