// components/RecentProjects.js
import React from 'react';
import { Card, CardHeader, CardFooter, Image, Button } from '@nextui-org/react';
import project1 from '../assets/cbk.png';
import fibre from '../assets/fibre.jpg'
import ap from '../assets/ap.jpg'

const projects = [
  {
    id: 1,
    title: 'Network Installation - CBK Pension Towers',
    description: 'Structured cabling,sale and mounting of Cisco Switches',
    image: project1,
  },
  {
    id: 2,
    title: 'Fibre Installation at JKIA',
    description: 'Upgraded JKIA data network by installing cutting-edge fiber optic cables.',
    image: fibre,
  },
  {
    id: 3,
    title: 'WiFI installation - Phoenix Aviation ',
    description: 'Equipped Phoenix Aviation  with a high-performance Wi-Fi for boosted connectivity. ',
    image: ap,
  },
  // Add more projects as needed
];

export default function RecentProjects() {
  return (
    <section id="recent-projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">Recent Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center p-4">
              <CardHeader className="p-0 flex justify-center w-full">
                <Image src={project.image} alt={project.title} objectFit="cover" width="100%" height={200} className="rounded-t-lg bg-gray-800 max-h-40 max-w-fit " />
              </CardHeader>
              <CardFooter className="flex flex-col items-start p-6">
                <h4 className="text-gray-800 font-bold mb-2">{project.title}</h4>
                <p className="text-gray-600">{project.description}</p>
              </CardFooter>
            </Card>
          ))}

        </div>
        <div className='flex justify-center py-14'>
          <Button color='secondary'> More Projects</Button>
        </div>
      </div>
    </section>
  );
}
