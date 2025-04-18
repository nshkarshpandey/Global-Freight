import React from "react";

export default function Freight() {
  return (
    <div className="flex flex-col md:flex-row h-[279px] justify-between p-8 overflow-y-hidden fri-cont">
      <div className="w-full md:w-1/2 p-4 relative fri-txt-1 top-[150px]  overflow-y-hidden ">
        <p className=" text-lg text-gray-600 leading-[normal] overflow-y-hidden ">
          Freight Forwarders Act As Intermediaries Between Shippers And Various
          transportation Services, Such As Shipping Lines, Airlines, Trucking
          Companies, And Railroads.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-4 relative fri-txt-2 overflow-y-hidden ">
        <p className="text-3xl font-bold text-gray-800 mb-4 overflow-y-hidden">
          Freight forwarders arrange and manage goods{" "}
          <span className="text-[#ec7620]">transportation</span> for shippers
        </p>
      </div>
    </div>
  );
}
