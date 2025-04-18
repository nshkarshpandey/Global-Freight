import React from "react";
import Image from "next/image";

export default function OutlineText() {
  return (
    <div className="relative w-full aspect-[2/1]">
      {" "}
      {/* Adjust ratio as needed */}
      <Image
        src="/images/req.png"
        alt="Requirements"
        fill
        className="object-contain" // Preserve full image
        sizes="(max-width: 768px) 100vw, 600px" // Responsive sizing
      />
    </div>
  );
}
