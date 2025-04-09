
import React from 'react'
// import {  a href } from 'react-router-dom'; 
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="bg-gray-100 mt-12  py-8 border-t border-gray-200">
      <div className="container mx-auto text-center text-gray-600">
        {/* Copyright Section */}
        <div className="mb-4">
          <p className="text-sm font-medium hover:text-indigo-500 transition duration-300">
            Copyright © {currentYear} Cuisine Careers - All Rights Reserved.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="mb-6">
          <p className="text-sm font-medium">
            Contact us:
            <a
              href="mailto:cuisineCareers@fusion-foodies.com"
              className="text-indigo-500 hover:underline transition duration-300 ml-1"
            >
              cuisineCareers@fusion-foodies.com
            </a>
          </p>
        </div>

        {/* Navigation  a hrefs (assuming these are your main nav  a hrefs) */}
        <nav className="flex justify-center space-x-6 mb-4">
          < a href
            to="/"
            className="text-gray-700 hover:text-indigo-500 transition duration-300 text-sm font-semibold"
          >
            HOME
          </ a >
          < a href
            to="/about"
            className="text-gray-700 hover:text-indigo-500 transition duration-300 text-sm font-semibold"
          >
            ABOUT
          </ a >
          < a href
            to="/view-jobs"
            className="text-gray-700 hover:text-indigo-500 transition duration-300 text-sm font-semibold"
          >
            VIEW JOBS
          </ a >
          < a href
            to="/job-seekers"
            className="text-gray-700 hover:text-indigo-500 transition duration-300 text-sm font-semibold"
          >
            JOB SEEKERS
          </ a >
          < a href
            to="/price"
            className="text-gray-700 hover:text-indigo-500 transition duration-300 text-sm font-semibold"
          >
            PRICE
          </ a >
          < a href
            to="/contact-us"
            className="text-gray-700 hover:text-indigo-500 transition duration-300 text-sm font-semibold"
          >
            CONTACT US
          </ a >
        </nav>

        {/* Subtle Social Icons (Optional - Add your actual icons) */}
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="text-gray-500 hover:text-indigo-500 transition duration-300"
            aria-label="Facebook"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-indigo-500 transition duration-300"
            aria-label="Twitter"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-indigo-500 transition duration-300"
            aria-label=" a hrefedIn"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
