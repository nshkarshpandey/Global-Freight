import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    title: "Complexity Of Customs Clearance",
    src: "/images/con-1.png",
    rotate: "rotate-[14.26deg]",
  },
  {
    title: "Freight Forwarding",
    src: "/images/con-2.png",
    rotate: "-rotate-[3.63deg]",
  },
  {
    title: "Technology Adoption",
    src: "/images/con-3.png",
    rotate: "rotate-[9.45deg]",
  },
  {
    title: "Global Trade Compliance",
    src: "/images/con-4.png",
    rotate: "-rotate-[11.48deg]",
  },
  {
    title: "Logistics Optimization",
    src: "/images/con-5.png",
    rotate: "-rotate-[2.58deg]",
  },
  {
    title: "Future Trends",
    src: "/images/con-6.png",
    rotate: "rotate-[6.36deg]",
  },
];

const Conclusion = () => {
  return (
    <div className="w-full px-4 py-8 bg-[#0B89CC] text-white relative top-[100px] overflow-x-hidden">
      {/* Header section with left-aligned title and right-aligned description */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h2 className="text-[50px] font-bold text-left">Conclusion</h2>
        <p className="max-w-xl text-sm md:text-base text-left md:text-left">
          In conclusion, the customs clearance and freight forwarding processes
          are integral components of international trade, playing a critical
          role in ensuring the smooth and efficient movement of goods across
          borders. Several key points and trends have been highlighted.
        </p>
      </div>

      <div className="relative max-w-[88rem] mx-auto">
        {/* Scrollable container for tilted images */}
        <div className="flex overflow-x-auto scrollbar-hide space-x-16 px-8 py-4 !overflow-y-hidden">
          {images.map((image, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`relative ${image.rotate} transition-all w-64 h-64 md:w-80 md:h-80`}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className={`${image.rotate}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
