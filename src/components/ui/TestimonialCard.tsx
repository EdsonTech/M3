import React from 'react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  image: string;
}

const TestimonialCard = ({ content, author, role, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">{content}</p>
    </div>
  );
};

export default TestimonialCard;