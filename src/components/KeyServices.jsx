
import React from 'react';
import { Card } from '@nextui-org/react';

const services = [
    {
        
        title: "Access Control",
        description: "Reliable access control systems to manage and secure entry to your premises.",
        
      },
      {
        
        title: "Network Solutions",
        description: "Advanced network and telecommunication solutions for seamless communication.",
        
      },
  {
    title: 'Structured Cabling',
    description: 'High-quality structured cabling services for seamless connectivity.',
  },
  {
    title: 'IT Security',
    description: 'Comprehensive IT security solutions to protect your business.',
  },
  {
    title: 'CCTV',
    description: 'Advanced CCTV systems for enhanced security and surveillance.',
  },
  {
    title: 'Data Center Solutions',
    description: 'Reliable and efficient data center solutions tailored to your needs.',
  },
  // Add more services as needed
];

export default function KeyServices() {
  return (
    <section id="key-services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary">Key Services</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <Card key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center p-4 hover:bg-gray-200">
              <h4 className="text-secondary font-bold text-xl mb-2">{service.title}</h4>
              <p className="text-gray-600 text-center">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
