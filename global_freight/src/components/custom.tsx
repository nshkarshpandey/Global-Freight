import React, { useState } from "react";

export default function CustomsClearance() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    {
      text: "Minimize Delays In Supply Chain",
      image: "/images/cust-1.png",
    },
    {
      text: "Enhancing Overall Business Competitiveness",
      image: "/images/cust-2.png",
    },
    {
      text: "Reducing Costs And Avoiding Penalties",
      image: "/images/cust-3.png",
    },
    {
      text: "Strengthen Communication With Key Stakeholders",
      image: "/images/cust-4.png",
    },
  ];

  return (
    <div className="p-8 bg-[#fdf1e9] relative top-[140px] cust-cont">
      {/* 🔄 Preload hover images (added) */}
      <div className="hidden">
        {items.map((item, index) => (
          <img key={index} src={item.image} alt="" />
        ))}
      </div>

      {/* Heading */}
      <p className="text-[15px] font-bold text-[#EC7620] mb-8 text-left cust-head">
        Why Efficient Customs Clearance Matters?
      </p>

      <div className="relative -top-[43px] left-[22%] w-[74%] h-[1.5px] bg-[#ec7620] cust-line"></div>

      {/* List with Inline Images */}
      <div className="space-y-6 mt-[4%]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center cursor-pointer group relative border-b border-[#4A4A4A]"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Text */}
            <div className="mb-[41px] mt-[10px] cust-text-cont">
              <span
                className={`text-[35px] transition-colors duration-300 text-center font-bold cust-text-1 ${
                  hoveredIndex === index ? "text-[#ec7620]" : "text-[#4A4A4A]"
                }`}
              >
                {item.text}
              </span>
            </div>

            {/* Image (Appears inline on hover) */}
            {hoveredIndex === index && (
              <img
                src={item.image}
                alt="Hover Image"
                className="w-[5rem] h-auto rounded-lg transition-opacity duration-300"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
