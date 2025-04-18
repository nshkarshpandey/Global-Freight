"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    default: "/images/ship.png",
    hover: "/images/ship_hov.png",
    title: "Shipping Services",
    description:
      "Efficient freight forwarding and seamless cargo handling for global shipping needs.",
  },
  {
    default: "/images/log.png",
    hover: "/images/log_hov.png",
    title: "Logistics and Supply Chain Management",
    description:
      "Efficient warehousing, streamlined distribution, and seamless customs clearance solutions.",
  },
  {
    default: "/images/sea.png",
    hover: "/images/sea_hov.png",
    title: "Sea Freight services",
    description:
      "Carrier booking, cargo tracking, transportation, and optimized routing for sea freight.",
  },
];

export default function Service() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="p-4 overflow-hidden">
      <div className="relative mb-6">
        <h2 className="text-5xl font-bold text-[#ec7620] font-['Gilroy-Bold',_sans-serif] overflow-y-hidden">
          Services
        </h2>
        <div className="text-[19px] text-[#4A4A4A] font-normal">
          <p>We offer a range of services related to Logistics & Operations</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full sm:w-[26rem] flex flex-col items-center transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-full aspect-square max-w-[25rem]">
              {/* 
                🔄 BEFORE:
                <Image
                  src={hoveredIndex === index ? img.hover : img.default}
                  alt={img.title}
                  fill
                  className="rounded-lg object-contain"
                /> 
              */}

              {/* ✅ AFTER: Preloaded both images, using opacity toggle */}
              {/* Default Image */}
              <Image
                src={img.default}
                alt={`${img.title} default`}
                fill
                className={`rounded-lg object-contain transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Hover Image */}
              <Image
                src={img.hover}
                alt={`${img.title} hover`}
                fill
                priority
                className={`rounded-lg object-contain transition-opacity duration-300 absolute top-0 left-0 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            <div className="w-full max-w-[25rem] mt-4 text-black px-2">
              <h3
                className={`text-xl font-semibold transition-colors duration-300 ${
                  hoveredIndex === index ? "text-[#ec7620]" : "text-black"
                }`}
              >
                {img.title}
              </h3>
              <p className="text-sm mt-2 min-h-[3.5rem]">{img.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
