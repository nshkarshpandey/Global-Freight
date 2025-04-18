import React from "react";
import Image from "next/image"; // Import Next.js Image component for optimized images

const ScrollCard = () => {
  // Dummy data for the cards with unique image icons
  const cards = [
    {
      id: 1,
      iconSrc: "/images/ico-1.png", // Replace with your image paths
      description: "Customs Compliance Team",
    },
    {
      id: 2,
      iconSrc: "/images/ico-2.png",
      description: "Proactive Documentation Mngt.",
    },
    {
      id: 3,
      iconSrc: "/images/ico-3.png",
      description: "Engagement with Customs Broker",
    },
    {
      id: 4,
      iconSrc: "/images/ico-4.png",
      description: "Classification and Valuation Expertise",
    },
    {
      id: 5,
      iconSrc: "/images/ico-5.png",
      description: "Advance Technology Adoption",
    },
    {
      id: 6,
      iconSrc: "/images/ico-6.png",
      description: "Global Trade Management System",
    },
    {
      id: 7,
      iconSrc: "/images/ico-7.png",
      description: "Strategic Use of Free Trade Agreement",
    },
    {
      id: 8,
      iconSrc: "/images/ico-8.png",
      description: "Continuous Improvement & Training",
    },
  ];

  return (
    <>
      <div className="relative top-[33px] overflow-x-visiblew">
        {/* Heading Section */}
        <div className="relative mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ec7620] font-['Gilroy-Bold',_sans-serif] scro-head">
            Strategies and Best Practices Employed
          </h2>
        </div>

        {/* Scrollable Cards Section */}
        <div className="flex overflow-x-auto scrollbar-hide space-x-4 p-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-48 h-36 sm:w-56 sm:h-44 md:w-[22rem] md:h-[17rem] bg-white rounded-lg shadow-md p-4 relative ico-card"
            >
              {/* Icon on the top left */}
              <div className="absolute top-2 left-2 w-[70px] h-[70px] sm:w-10 sm:h-10 overflow-x-visible">
                <Image
                  src={card.iconSrc}
                  alt={`Icon for card ${card.id}`}
                  width={70}
                  height={70}
                  className="rounded-full scro-ico overflow-x-visible" // Optional: Add rounded corners to the icon
                />
              </div>
              {/* Description on the bottom left */}
              <div className="absolute bottom-2 left-2 text-[25px] font-bold text-[#4A4A4A] ico-des">
                {card.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollCard;
