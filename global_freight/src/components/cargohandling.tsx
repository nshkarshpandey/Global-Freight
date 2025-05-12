import React from "react";

const CargoHandling = () => {
  return (
    <div className="p-10 bg-white flex flex-col custom-992:flex-row items-center custom-992:items-start gap-8 relative top-[140px] main-haz ">
      {/* Left Side */}
      <div className="relative top-[100px] w-full max-w-[988px] custom-992:pr-8 haz-head">
        <h4 className="text-gray-500 text-sm haz-head-1">BEFORE TRANSIT</h4>
        <h2 className="text-3xl text-black font-bold mt-2 mb-6 haz-para-1">
          Handling Haz And Non Haz Cargo
        </h2>
      </div>

      {/* Right Side */}
      <div className="grid grid-cols-1 custom-992:grid-cols-2 gap-8 haz-head-2">
        {/* Left Side of Right Column */}
        <div className="space-y-6 custom-992:border-r custom-992:border-gray-300 custom-992:pr-8 cargo-haz-1">
          <div className="flex items-start gap-4 relative top-[73px] custom-992:flex-row flex-col">
            <img
              src="/images/cargo-1.png"
              alt="Hazardous Goods"
              className="w-12 h-12"
            />
            <div>
              <h3 className="font-semibold text-black">
                Hazardous Goods Transportation Safety:
              </h3>
              <p className="text-gray-600 text-sm">
                Drivers must be fully trained to recognize risks, understand
                emergency procedures, and comply with regulatory requirements
                when transporting hazardous goods.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-6 relative top-[73px]">
            <div className="flex items-start gap-4 custom-992:flex-row flex-col">
              <img
                src="/images/cargo-2.png"
                alt="Container Maintenance"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-semibold text-black">
                  Container Maintenance For Safe Transport:
                </h3>
                <p className="text-gray-600 text-sm">
                  Damaged containers can’t contain hazardous products, posing
                  risks. Always follow manufacturer instructions to ensure
                  safety and reduce accidents.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side of Right Column */}
        <div className="space-y-6 relative cargo-haz-2">
          <div className="flex items-start gap-4 border-t border-gray-300 pt-6 haz-3 custom-992:flex-row flex-col">
            <img
              src="/images/cargo-3.png"
              alt="Hazardous Goods"
              className="w-12 h-12"
            />
            <div>
              <h3 className="font-semibold text-black">
                Non-Hazardous Goods Transportation Safety:
              </h3>
              <p className="text-gray-600 text-sm">
                Drivers must follow safe handling practices, ensure secure
                transport, and comply with regulations when transporting
                non-hazardous goods.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 border-t border-gray-300 pt-6 custom-992:flex-row flex-col">
            <img
              src="/images/cargo-4.png"
              alt="Safe Loading"
              className="w-12 h-12"
            />
            <div>
              <h3 className="font-semibold text-black">
                Driver Responsibilities For Safe Loading:
              </h3>
              <p className="text-gray-600 text-sm">
                Drivers must supervise vehicle loading, inspect containers for
                safety, and ensure caps and lids are secure to prevent accidents
                or spillages during transit.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 border-t border-gray-300 pt-6 custom-992:flex-row flex-col">
            <img
              src="/images/cargo-5.png"
              alt="Proper Loading"
              className="w-12 h-12"
            />
            <div>
              <h3 className="font-semibold text-black">
                Ensure Proper Loading For Safe Transport:
              </h3>
              <p className="text-gray-600 text-sm">
                Ensure even loading to prevent cargo shifting and ensure secure
                delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CargoHandling;
