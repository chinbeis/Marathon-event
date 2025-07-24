'use client';
import React, { useState } from 'react';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';

interface NavbarProps {
  links: { label: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-blue-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-yellow-400">
            Soul Relay 2025
          </div>
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-yellow-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <Cross1Icon className="w-6 h-6 text-yellow-400" />
              ) : (
                <HamburgerMenuIcon className="w-6 h-6 text-yellow-400" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-800">
          <div className="flex flex-col items-center space-y-4 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-yellow-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
