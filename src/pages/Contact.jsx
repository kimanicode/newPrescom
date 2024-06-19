import React from 'react';
import { Card, CardBody, CardFooter, Button, Input, Textarea } from '@nextui-org/react';

export default function Contact() {
  return (
    <section id="contact-us" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">Contact Us</h2>
        <Card className="max-w-lg mx-auto shadow-lg">
          <CardBody className="p-6">
            <form className="flex flex-col gap-4">
              <Input
                fullWidth
                label="Name"
                placeholder="Enter your name"
                required
                className="rounded-none"
              />
              <Input
                fullWidth
                label="Email"
                type="email"
                placeholder="Enter your email"
                required
                className="rounded-none"
              />
              <Input
                fullWidth
                label="Phone"
                type="tel"
                placeholder="Enter your phone number"
                required
                className="rounded-none"
              />
              <Textarea
                fullWidth
                label="Message"
                placeholder="Enter your message"
                required
                className="rounded-none"
              />
              <Button type="submit" color="primary" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white rounded-xl">
                Send Message
              </Button>
            </form>
          </CardBody>
          <CardFooter className="flex flex-col items-center gap-2 p-4">
            <p className="text-gray-600">Phone: 0722-614-589 / 0723-716-940</p>
            <p className="text-gray-600">Email: info@prescom.com</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
