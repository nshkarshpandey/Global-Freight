'use client';

import Image from 'next/image';
import { useState } from 'react';

const images = [
  { default: '/images/ship.png', hover: '/images/ship_hov.png', title: 'Shipping Services', description: 'Efficient freight forwarding and seamless cargo handling for global shipping needs.' },
  { default: '/images/log.png', hover: '/images/log_hov.png', title: 'Logistics and Supply Chain Management', description: 'Efficient warehousing, streamlined distribution, and seamless customs clearance solutions.' },
  { default: '/images/sea.png', hover: '/images/sea_hov.png', title: 'Sea Freight services', description: 'Carrier booking, cargo tracking, transportation, and optimized routing for sea freight.' },
];

export default function Service() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="p-4">
      <div className="relative mb-6">
        <h2 className="text-5xl font-bold text-[#ec7620] font-['Gilroy-Bold',_sans-serif]">Services</h2>
        <div className="relative -top-[19px] left-[14%] w-[84%] h-[2.5px] bg-[#ec7620]"></div>
        <div  className="text-[19px] text-[#4A4A4A] font-normal"><p>We offer a range of services related to Logistics & Operations</p></div>
      </div>
      <div className="flex flex-wrap justify-center gap-52">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-60 flex flex-col items-center transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-[25rem] h-[25rem] ">
              <Image
                src={hoveredIndex === index ? img.hover : img.default}
                alt={img.title}
                layout="fill"
                // objectFit="cover"
                className="rounded-lg "
              />
            </div>
            <div className="text-left mt-2 text-black w-[136%]">
               <h3 className={`text-xl font-semibold transition-colors duration-300 ${hoveredIndex === index ? 'text-[#ec7620]' : 'text-black'}`}>{img.title}</h3>
              <p className="text-sm">{img.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
