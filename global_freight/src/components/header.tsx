import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
<section>
    <header className="flex items-center justify-between p-4 bg-white">
      {/* Company Logo */}
      <div className="flex items-center">
        <Image
          src="/images/logo.svg" // Replace with your logo path
          alt="Company Logo"
          width={120}
          height={40}
          className="w-52 h-auto md:w-52"
        />
      </div>

      {/* Contact Us Button */}
      <button className=" bg-color text-black px-4 py-2 rounded-md transition-colors head-button">
        Contact Us  →
      </button>
    </header>
</section>
  );
};

export default Header;