import React from "react";
import { Link } from "@nextui-org/react";
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Prescom Ltd.</h2>
            <p className="text-gray-400">
            Delivering top-notch services in ICT since 2012.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Projects
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-500">
          <p>&copy; {new Date().getFullYear()} Prescom Ltd. All rights reserved.</p>
        </div>
        <div className="text-center py-3 text-secondary">
  Developed by <a href="https://juahub.onrender.com" className="underline font-bold" target="'
  _blank">JuaHub</a>
</div>
      </div>
    </footer>
  );
};

export default Footer;
