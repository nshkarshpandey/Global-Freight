import React from 'react';
import Image from 'next/image';

export default function OutlineText() {
  return (
    <div className="items-center relative top-[127px] req-img">
            <Image
              src="/images/req.png" // Replace with your logo path
              alt="Requirements"
              width={600}
              height={300}
              className="w-[100%] h-auto "
            />
          </div>
  );
}
