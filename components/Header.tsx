
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#services', text: 'সার্ভিসসমূহ' },
    { href: '#testimonials', text: 'প্রশংসাপত্র' },
    { href: '#pricing', text: 'মূল্য তালিকা' },
    { href: '#contact', text: 'যোগাযোগ' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-teal-600">
            ডিজিটাল<span className="text-gray-800">সেবা</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-teal-600 font-medium transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-teal-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-teal-600 py-2 px-4 rounded-md text-center bg-gray-50 font-medium transition-colors duration-300"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
