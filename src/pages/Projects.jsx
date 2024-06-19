import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import project1 from '../assets/cable.jpeg';
import project2 from '../assets/wifi-min.jpg';
import project3 from '../assets/server.jpg';
import project4 from '../assets/cctv-min.jpg';
import project5 from '../assets/ap.jpg';
import project6 from '../assets/wan-min.jpg';

const projects = [
  {
    id: 1,
    title: "Structured Cabling Project",
    description: "Completed a full structured cabling setup for a major corporation.",
    image: project1,
  },
  {
    id: 2,
    title: "IT Security Enhancement",
    description: "Enhanced IT security measures for a leading financial institution.",
    image: project2,
  },
  {
    id: 3,
    title: "Data Center Setup",
    description: "Setup a state-of-the-art data center for a tech company.",
    image: project3,
  },
  {
    id: 4,
    title: "CCTV Installation",
    description: "Installed a comprehensive CCTV system for a large retail store.",
    image: project4,
  },
  {
    id: 5,
    title: "Access Control Implementation",
    description: "Implemented access control systems for a government building.",
    image: project5,
  },
  {
    id: 6,
    title: "Network & Telecommunication",
    description: "Upgraded network and telecommunication systems for a healthcare provider.",
    image: project6,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Projects</h2>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project) => (
            <div key={project.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 ">
              <Card className="flex flex-col  h-[500px] ">
                <CardHeader className="p-0">
                  <div className="h-[400px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="rounded-none bg-gray-800 w-full h-full"
                    />
                  </div>
                </CardHeader>
                <CardBody className="p-4 flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
