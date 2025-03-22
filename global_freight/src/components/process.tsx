import React from "react";

const Process: React.FC = () => {
  const descriptions = [
    "Booking And Inquiry",
    "Mode of transportation Selection",
    "Carrier Booking",
    "Consolidation & Deconsolidation",
    "Post Shipment Reporting & Invoicing",
    "Customs Documentation & Clearence",
    "Cargo Tracking and monitoring",
    "Cargo insurance",
    "Transportation & Routing",
    "Customs Clearence at Destination",
  ];

  return (
    <>
      <div>
        <div className="relative mb-6">
          <h2 className="text-5xl font-bold text-[#ec7620] font-['Gilroy-Bold',_sans-serif]">
            Process
          </h2>
          <div className="relative -top-[19px] left-[14%] w-[84%] h-[2.5px] bg-[#ec7620] serv-line"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center p-4 md:p-8">
          {/* Images on Top (Mobile) / Left (Desktop) */}
          <div className="w-full md:w-1/2 relative mb-6 md:mb-0">
            <div className="relative w-full md:w-3/4 overflow-hidden mx-auto pro-anim">
              <img
                src="/images/pro-1.png"
                alt="Placeholder 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-[75px] left-[71px] md:left-8 w-3/4 overflow-hidden mx-auto pro-anim-2">
              <img
                src="/images/pro-2.png"
                alt="Placeholder 2"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Scrollable List Below (Mobile) / Right (Desktop) */}
          <div className="w-full md:w-1/2 pl-[0px] relative">
            <div className="h-[686px] overflow-y-auto pr-4 scrollbar-hide pro-list">
              <ul className="space-y-4 text-right pro-uno">
                {descriptions.map((description, index) => (
                  <li
                    key={index}
                    className={`p-4 ${
                      index % 2 === 0 ? "text-[#EC7620]" : "text-[#4A4A4A]"
                    } pro-ord`}
                  >
                    <span className="text-[29px] font-bold pro-text">
                      {index < 9 ? `0${index + 1}` : index + 1}. &nbsp;{" "}
                      {description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
