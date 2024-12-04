import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PartnerCardProps {
  logo: string;
  name: string;
  description: string;
  icon?: LucideIcon;
}

const PartnerCard = ({ logo, name, description, icon: Icon }: PartnerCardProps) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-center h-20 mb-6">
        <img
          src={logo}
          alt={`${name} logo`}
          className="h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2 group-hover:text-m3-bright transition-colors">
          {name}
        </h3>
        <p className="text-gray-600">{description}</p>
        {Icon && (
          <div className="mt-4 flex justify-center">
            <Icon className="h-6 w-6 text-gray-400 group-hover:text-m3-bright transition-colors" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerCard;