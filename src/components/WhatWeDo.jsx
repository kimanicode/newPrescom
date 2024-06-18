// components/WhatWeDo.js
import React from 'react';
import Slider from 'react-slick';
import { Card, CardFooter, CardBody, Image } from '@nextui-org/react';
import fibre from '../assets/cable.jpeg';
import cbk from '../assets/pull3.jpeg';
import server from '../assets/pull.jpeg';
import wan from '../assets/pull2.jpeg';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const projectProgress = [
  {
    id: 1,
    title: "Cabling",
    image: fibre,
  },
  {
    id: 2,
    title: "Fibre Pulling",
    image: cbk,
  },
  {
    id: 3,
    title: "Cable pulling",
    image: server,
  },
  {
    id: 4,
    title: "Men at Work",
    image: wan,
  },
];

export default function WhatWeDo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="what-we-do" className="py-16 bg-gray-800 w-full flex justify-center">
      <div className=" w-[90%] px-3">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">What We Do</h2>
        <Slider {...settings}>
          {projectProgress.map((project) => (
            <div key={project.id} className="px-3">
              <Card className="h-full shadow-lg">
                <CardBody className="p-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    objectFit="cover"
                    width="100%"
                    height={400}
                    className="rounded-none h-64" // Ensure all images have the same height
                  />
                </CardBody>
                <CardFooter className="flex flex-col items-center p-4">
                  <h3 className="text-xl font-bold text-secondary mb-2">{project.title}</h3>
                </CardFooter>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
