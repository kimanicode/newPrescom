import { BadgeCheck, Smile, Sun,  } from "lucide-react";
import { Card, Avatar } from "@nextui-org/react";
import project1 from '../assets/davy.jpg';
import bernard from '../assets/bernard.jpg'// Example image
import james from '../assets/kim.jpeg'
import kimani from '../assets/headshot.jpg'

const teamMembers = [
  {
    name: "James Muthua",
    role: "Director",
    bio: "James has over 13 years of stellar experience in Network Engineering .",
    image: james,
  },
  {
    name: "David Kamau",
    role: "Director",
    bio: "David is a seasoned Network engineer with over 9 years of experience.",
    image: project1,
  },
  {
    name: "Geoffrey Chege",
    role: "Director",
    bio: "Chege is a seasoned Network engineer with over 11 years of experience.",
    image: james,
  },

  {
    name: "Kimani Karaba",
    role: "Software Engineer",
    
    image: kimani,
  },
  {
    name: "Bernard Kariuki",
    role: "Software Engineer",
    
    image: bernard,
  },
  // Add more team members as needed
];

export default function Aboutus() {
  return (
    <div>
      {/* Company History */}
      

      {/* Mission and Values */}
      <section className="py-16 bg-gray-100 flex justify-center flex-col items-center">

        <div className="text-center">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">Mission and Values</h2>
          <p className="text-gray-600 leading-relaxed text-lg text-center max-w-4xl mb-4">
            Our mission is to empower tomorrow's connectivity today by crafting excellence in ICT solutions.
          </p>
        </div>
       
          


        <div className="bg-white my-5 p-10  w-[80%] flex md:flex-row flex-col justify-center md:gap-10 gap-4">
          
       


            <div className=" shadow-xl flex flex-col p-5 gap-3 justify-center items-center rounded-md md:basis-1/4">
              <div className="text-secondary">
                <Sun/>
              </div>
                <div className="text-center font-bold">
                  <p className="text-primary">Innovation</p>
                  
                </div>
            </div>

            <div className=" shadow-xl flex flex-col p-5 gap-3 justify-center items-center rounded-md md:basis-1/4">
              <div className="text-secondary">
                <BadgeCheck/>
              </div>
                <div className="text-center font-bold">
                  <p className="text-primary">Quality</p>
                  
                </div>
            </div>

            <div className=" shadow-xl flex flex-col p-5 gap-3 justify-center items-center rounded-md md:basis-1/4">
              <div className="text-secondary">
                <Smile/>
              </div>
                <div className="text-center font-bold">
                  <p className="text-primary"> Customer Satisfaction</p>
                  
                </div>
            </div>

        </div>
      </section>

      

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center text-primary mb-8">Our Team</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center p-4">
                <Avatar src={member.image} alt={member.name} className="w-24 h-24 mb-4 rounded-full" />
                <h4 className="text-primary font-bold text-xl mb-2">{member.name}</h4>
                <p className="text-secondary mb-1">{member.role}</p>
                <p className="text-gray-600  font-light text-sm text-center">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white flex justify-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center text-primary mb-8">Company History</h2>
          <p className="text-gray-600 leading-relaxed text-lg text-center max-w-4xl">
            Since its inception in 2012, Prescom Ltd has been at the forefront of ICT solutions,
            delivering excellence and innovation.  <br />
            
            Our journey began with a small team of passionate
            individuals and has grown into a leading company in the industry. <br /> Over the years, we have
            achieved numerous milestones, expanded our services, and built a strong reputation for
            reliability and expertise.
          </p>
        </div>
      </section>
    </div>
  );
}
