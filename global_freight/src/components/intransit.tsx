import React from "react";

const InTransit: React.FC = () => {
  return (
    <div
      className="relative h-[503px] bg-cover bg-center flex top-[165px] intran-main !overflow-x-hidden"
      style={{
        backgroundImage: `url('/images/bg-intransit.png')`,
        backgroundSize: "800px 500px", // Adjust this value as needed
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
      }}
    >
      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-[#C76117] bg-opacity-80"></div>

      <div className="relative z-10 max-w-4xl mx-auto p-8 text-white text-left overflow-y-auto scrollbar-hide">
        {/* Heading */}
        <h4 className="text-white  text-sm haz-head-1">IN TRANSIT</h4>
        <h1 className="text-[3.75rem] font-bold mb-6 intran-head">
          Handling Haz and Non Haz Cargo
        </h1>

        {/* Two small images in a row */}
        <div className="flex justify-left space-x-4 mb-6 ">
          <img
            src="/images/intransit-1.png"
            alt="Image 1"
            className="w-24 h-24 object-cover rounded-lg intran-img"
          />
          <img
            src="/images/intransit-2.png"
            alt="Image 2"
            className="w-24 h-24 object-cover rounded-lg intran-img"
          />
        </div>

        {/* Paragraphs */}
        <div className="h-[50px] intran-gap"></div>
        <p className="text-[25px] mb-4 intran-cont">
          At the time of transportation mode by Road and Sea of hazardous
          materials, avoiding taking a route through environmentally sensitive
          places is essential.
        </p>
        <div className="h-[50px] intran-gap"></div>
        <p className="text-[25px] mb-6 intran-cont">
          In this context, environmental sensitivity refers to the vulnerability
          of an area to pollution or damage from individual activities.
        </p>
        <div className="h-[50px] intran-gap"></div>
        {/* Bullet Points */}
        <div className="text-left">
          <h2 className="text-[25px] font-semibold mb-4 intran-cont">To-Do</h2>
          <ul className="list-disc list-inside space-y-2 text-[25px] intran-bullet">
            <li>Avoid sensitive areas to minimize environmental risks.</li>
            <li>
              Take precautions when avoiding sensitive areas is impossible.
            </li>
            <li>Use special tools to prevent spillage effectively.</li>
            <li>Handle materials carefully to reduce environmental impact.</li>
            <li>Comply with guidelines to ensure safety and protection.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InTransit;
