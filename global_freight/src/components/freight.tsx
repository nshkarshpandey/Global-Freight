import React from 'react';

export default function Freight() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 ">
      <div className="w-full md:w-1/2 p-4 relative fri-txt-1 top-[150px]">
        <p className=" text-lg text-gray-600 leading-[normal]  "> 
           Freight Forwarders Act As Intermediaries Between Shippers And Various transportation Services, Such As Shipping Lines, Airlines, Trucking Companies, And Railroads.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <p className="text-3xl font-bold text-gray-800 mb-4">
          Freight forwarders arrange and manage goods <span className='text-[#ec7620]'>transportation</span> for shippers
        </p>
      </div>
    </div>
  );
}