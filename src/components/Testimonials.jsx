import { Image } from "@nextui-org/react";
import banner from '../assets/kim.jpeg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {

 


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Adjusted to show one testimonial at a time for better readability
    slidesToScroll: 1,
   
  };

  const testimonials = [
    {
      id: 1,
      text: "Prescom's expertise in data center solutions was invaluable for Phoenix Aviation. They helped us design and implement a system that meets our growing needs while staying agile and secure. We appreciate their commitment to understanding our specific requirements and budget constraints..",
      name: "Dickson",
      position: "CBK Pension Towers",
      image: banner
    },
    {
      id: 2,
      text: "We were impressed with Prescom's technical knowledge and professionalism during the maintenance of our ICT equipment at Kiambu County Government. Their prompt response and ability to solve problems quickly minimized downtime and ensured our operations continued uninterrupted",
      name: "KIambu County Government",
            image: banner
    },
    {
      id: 3,
      text: "Prescom Limited delivered exceptional IP Telephony services to streamline our communication channels at Phoenix Aviation. Their tailored solutions and proactive support have made a substantial difference in our business operations. We highly recommend their services.",
      name: "Phoenix Aviation,Nairobi",
      image: banner
    },

    {
      id: 4,
      text: "Prescom Limited played a crucial role in modernizing our IT infrastructure with their LAN, WiFi, and IP Telephony solutions. Their attention to detail and commitment to client satisfaction are evident in the seamless integration and ongoing support they provide.",
      name: "Kimisitu Sacco,Nairobi",
      image: banner
    },
    {
      id: 5,
      text: "Prescom Limited provided us with robust CCTV surveillance systems across our locations in Karen and Masai Mara. Their expertise and commitment to delivering high-quality equipment and installations have significantly bolstered our security measures. They are our preferred partner for all ICT solutions.",
      name: "Royal Safaris Africa",
      image: banner
    },
    // Add more testimonials as needed
  ];

  return (
    <div className='w-full px-10 py-5 bg-gray-100'>
      <p className='text-4xl text-primary font-semibold text-center'>What They Say About Us</p>
      <div className="mt-10 py-6">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex justify-center">
              <div className="bg-slate-200 rounded-xl flex flex-col md:flex-row items-center p-6 w-full md:w-3/5 mx-auto">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                  <Image
                    isBlurred
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-24 h-24 md:w-48 md:h-48"
                  />
                </div>
                <div className=" text-gray-700 md:text-left">
                  <p className="text-lg font-light mb-4">{testimonial.text}</p>
                  <div className="mt-4">
                    <p className="text-primary font-semibold">{testimonial.name}</p>
                    <span className="text-gray-500 italic">{testimonial.position}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;