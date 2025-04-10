
import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white py-4 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Mobile Menu Toggle Button (Left on Mobile) */}
        <div className="order-1 md:order-2">
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Website Title (Center on Mobile, Left on Desktop) */}
        <div className="text-center md:text-left order-2 md:order-1 flex-grow md:flex-grow-0 my-2 md:my-0">
          <a href="#" className="text-xl sm:text-2xl font-bold text-white">
            Cuisine Career Job Board
          </a>
        </div>

        {/* Social Media Icons (Right on Mobile, Left on Desktop) */}
        <div className="flex items-center space-x-3 sm:space-x-4 order-3 md:order-3">
          <a href="#" className="hover:opacity-75">
            <Facebook className="w-5 h-5 text-blue-500" />
          </a>
          <a href="#" className="hover:opacity-75">
            <Twitter className="w-5 h-5 text-blue-400" />
          </a>
          <a href="#" className="hover:opacity-75">
            <Instagram className="w-5 h-5 text-pink-500" />
          </a>
        </div>

        {/* Navbar Links (Hidden on Mobile, Visible on Desktop) */}
        <div
          className={`${
            isOpen ? 'flex flex-col mt-4 space-y-2' : 'hidden md:flex space-x-2 lg:space-x-4 xl:space-x-6'
          } order-4 md:order-4 w-full md:w-auto items-center`}
        >
          <a href="#" className="hover:text-gray-300 text-sm md:text-base block md:inline-block">Home</a>
          <a href="#" className="hover:text-gray-300 text-sm md:text-base block md:inline-block">About</a>
          <a href="#" className="hover:text-gray-300 text-sm md:text-base block md:inline-block">Location</a>
          <a href="#" className="hover:text-gray-300 text-sm md:text-base block md:inline-block">Employees</a>
          <a href="#" className="hover:text-gray-300 text-sm md:text-base block md:inline-block">Jobs</a>
          <a href="#" className="hover:text-gray-300 text-sm md:text-base block md:inline-block">Seekers</a>
          <a href="#" className="hover:text-gray-300 text-sm md:text-base block md:inline-block lg:inline-block hidden lg:block">Blog</a>
          <a href="#" className="hover:text-gray-300 text-sm md:text-base block md:inline-block xl:inline-block hidden xl:block">Pricing</a>
          <a href="#" className="hover:text-gray-300 text-sm md:text-base block md:inline-block xl:inline-block hidden xl:block">Contact Us</a>
          <a href="#" className="hover:text-gray-300 text-sm md:text-base block md:inline-block 2xl:inline-block hidden 2xl:block">Career</a>
          <a href="#" className="hover:text-gray-300 text-sm md:text-base block md:inline-block 2xl:inline-block hidden 2xl:block">FAQ</a>
          <a href="#" className="hover:text-gray-300 text-sm md:text-base block md:inline-block 2xl:inline-block hidden 2xl:block">Services</a>
          <a href="#" className="hover:text-gray-300 text-sm md:text-base block md:inline-block 2xl:inline-block hidden 2xl:block">Partners</a>
          <a href="#" className="hover:text-gray-300 text-sm md:text-base block md:inline-block 2xl:inline-block hidden 2xl:block">Resources</a>
        </div>

        {/* Post a Job Button (Always Visible, Adjusts on Mobile) */}
        <div className="order-5 md:order-5 mt-2 md:mt-0">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 sm:px-6 rounded-full transition-colors duration-200 text-sm md:text-base block md:inline-block w-full md:w-auto text-center"
          >
            Post a Job
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;