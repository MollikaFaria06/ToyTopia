import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-yellow-400 text-black mt-8 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div>
          <h4 className="font-bold text-xl mb-2">ToyTopia</h4>
          <p className="text-gray-800">Discover & support local toy sellers.</p>
           <p className="text-gray-800">
    Play, Learn, and Grow with the best toys in Bangladesh! 🎈
  </p>
        </div>

      
        <div>
          <h4 className="font-bold text-xl mb-2">Quick Links</h4>
          <ul className="space-y-1 text-gray-800">
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="/profile" className="hover:underline">Profile</a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-2">Follow Us</h4>
          <div className="flex gap-3 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full hover:bg-blue-700 hover:text-white transition-colors"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full hover:bg-blue-400 hover:text-white transition-colors"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-gray-800">
        © {new Date().getFullYear()} ToyTopia. All rights reserved.
      </div>
    </footer>
  );
}
