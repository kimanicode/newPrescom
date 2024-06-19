// components/ContactInformation.js
import React from 'react';
import { Card, Button } from '@nextui-org/react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ContactInformation() {
  const navigate = useNavigate()
  const handleClick =()=>{
    navigate('/contact-us')
  }
  return (
    <section id="contact-information" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">Contact Information</h2>
        <Card className="max-w-3xl mx-auto p-6 ">
          <div className="flex flex-col items-center  justify-center gap-3">
                <div className="flex items-center justify-start gap-4 md:w-1/2">
                <Phone className="text-primary" size={30} />
                <p className="text-gray-600 text-lg">0722-614-589 | 0723-716-940</p>
                </div>


                <div className="flex items-center justify-start gap-4  md:w-1/2">
                <Mail className="text-primary" size={30} />
                <p className="text-gray-600 text-lg">info@prescom.co.ke</p>
                </div>


                <div className="flex items-center justify-start gap-4 md:w-1/2">
                <MapPin className="text-primary" size={30} />
                <p className="text-gray-600 text-lg">Nairobi, Kenya</p>
                </div>

                <Button auto flat color="secondary" className="mt-6" 
                onClick={handleClick}>
                    Contact Us
                </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
