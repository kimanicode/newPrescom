// components/Services.js
import React from 'react';
import { Card,CardFooter,CardHeader, Image } from '@nextui-org/react';
import service1 from '../assets/server.jpg';
// import service2 from '../assets/wan-min.jpg';
// import service3 from '../assets/cctv-min.jpg';
// import service4 from '../assets/data_center.jpg';
// import service5 from '../assets/cloud_services.jpg';
// import service6 from '../assets/network_solutions.jpg';

const services = [
  {
    id: 1,
    title: "Structured Cabling",
    description: "High-quality structured cabling solutions for efficient and reliable network infrastructure.",
    image: service1,
  },
  {
    id: 2,
    title: "IT Security",
    description: "Comprehensive IT security services to protect your business from cyber threats.",
    image: service1,
  },
  {
    id: 3,
    title: "CCTV",
    description: "Advanced CCTV systems for enhanced security and surveillance.",
    image: service1,
  },
  {
    id: 4,
    title: "Data Center Solutions",
    description: "Robust data center solutions to ensure your business operations run smoothly.",
    image: service1,
  },
  {
    id: 5,
    title: "Cloud Services",
    description: "Scalable and secure cloud services to enhance your business operations.",
    image: service1,
  },
  {
    id: 6,
    title: "Network Solutions",
    description: "Comprehensive network solutions to keep your business connected.",
    image: service1,
  },
  // Add more services as needed
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        <div className="flex flex-wrap -mx-4">
          {services.map(service => (
            <div key={service.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <Card className="h-full p-6 shadow-lg">
                <CardHeader className="p-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    objectFit="cover"
                    width="100%"
                    height={200}
                    className="rounded-t-lg"
                  />
                </CardHeader>
                <CardFooter className="flex flex-col items-start p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
