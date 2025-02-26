import React from 'react';
import { useInView } from 'react-intersection-observer';


export default function Freight_Forwarding() {

// Use Intersection Observer to detect when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  return (
<section ref={ref}>
    <div className="flex flex-col md:flex-row p-8 gap-8 relative top-[142px] for-main-cont">
      {/* Left Side - Text and Small Image */}
      <div className="w-full flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 relative left-[10%] for-txt-cont ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold text-black for-txt-1">
          Freight Forwarding Requirements
        </h1>
        
          <img
            src="/images/for-1.png" // Replace with your image path
            alt="Small Image"
           
            className={`w-48 h-auto rounded-lg relative -left-[5%] for-img-1  transition-all duration-1000 ease-out ${
          inView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
          />
      
      </div>

      {/* Right Side - Scrollable Image Cards */}
      <div className="w-full md:w-2/3 h-[400px] md:h-[600px] overflow-y-auto scrollbar-hide">
        <div className="space-y-4">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="w-full h-48 bg-white rounded-lg flex items-center justify-center for-img-cont"
            >
              <img
                src={`/images/req-scr-${index + 1}.png`} // Replace with your image paths
                alt={`Image ${index + 1}`}
                className="h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
</section>
  );
}