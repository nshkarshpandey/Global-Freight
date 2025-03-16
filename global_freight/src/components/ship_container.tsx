"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useState, useEffect } from "react";
import clsx from "clsx"; // To conditionally apply animation class

const ShipContainer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div className="flex flex-col space-y-10 relative top-[169px] ship-cont-main">
      {/* The Container Image with Drop & Bounce Animation */}
      <div
        ref={ref}
        className={clsx(
          "w-full max-w-2xl mx-auto flex justify-center ship-cont-1",
          hasAnimated && "animate-drop-bounce"
        )}
      >
        <Image
          src="/images/cont.png"
          alt="Shipping Container"
          width={800}
          height={400}
          className="w-full h-auto ship-cont-1"
        />
      </div>

      {/* Another Image Below */}
      <div className="relative -top-[509px] ship-cont-2">
        <Image
          src="/images/ship-cont.png"
          alt="Below Image"
          width={800}
          height={400}
          className="w-full h-auto ship-cont-2"
        />
      </div>
    </div>
  );
};

export default ShipContainer;
