import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      content: "This platform has transformed how we handle our web applications. The security features are outstanding.",
      author: "Sarah Johnson",
      role: "CTO at TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
    },
    {
      content: "The cloud integration capabilities have significantly improved our deployment process.",
      author: "Michael Chen",
      role: "Lead Developer at CloudScale",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
    },
    {
      content: "Exceptional customization options and fantastic support team. Highly recommended!",
      author: "Emily Rodriguez",
      role: "Product Manager at InnovateCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;