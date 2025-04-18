import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between overflow-x-hidden">
      {/* Text on the Left Side */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <p className="text-6xl md:text-6xl font-normal mb-4 text-black hero-txt-1  h-[132px]">
          Strategic Global <span className="text-[#ec7620]">Freight</span>
        </p>
        <p className=" text-[#4A4A4A] mb-6 hero-txt-2 relative ">
          We are Strategic Global Freight Services-FZCO, a leading logistics
          solutions provider headquartered in Dubai, UAE. We specialize in
          international transportation, freight forwarding, and custom clearance
          services. Our comprehensive, high-quality solutions cater to all your
          logistics needs under one roof.
        </p>
      </div>

      {/* Animated Image on the Right Side */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
        animate={{ opacity: 1, x: 0 }} // Slide in to the final position
        transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
      >
        <Image
          src="/images/hero_img.png" // Replace with your image path
          alt="Hero Image"
          width={600}
          height={400}
          className=" rounded-lg hero-img"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
