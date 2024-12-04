import React from 'react';

interface PartnerLogoProps {
  name: string;
  logo: string;
  tier: string;
}

const PartnerLogo = ({ name, logo, tier }: PartnerLogoProps) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-32 h-32 mb-4 rounded-lg bg-white shadow-md p-4 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
        <img
          src={logo}
          alt={`${name} logo`}
          className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600">{tier}</p>
    </div>
  );
};

export default PartnerLogo;