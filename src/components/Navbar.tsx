'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';

interface NavbarProps {
  links: { label: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 shadow-lg backdrop-blur-sm">
      {/* Subtle background pattern matching footer */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2)_0%,transparent_50%)] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="group">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-800 transition-all duration-300 group-hover:scale-105">
              Soul Relay
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-blue-900 font-medium hover:text-blue-700 transition-all duration-300 group overflow-hidden rounded-lg hover:bg-white/20 backdrop-blur-sm"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-blue-600/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
            >
              <div className="absolute inset-0 bg-blue-600/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
              {isOpen ? (
                <Cross1Icon className="relative z-10 w-6 h-6 text-blue-900 group-hover:text-blue-700 transition-colors duration-300" />
              ) : (
                <HamburgerMenuIcon className="relative z-10 w-6 h-6 text-blue-900 group-hover:text-blue-700 transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden relative z-10 bg-gradient-to-br from-yellow-300/95 via-yellow-400/95 to-amber-500/95 backdrop-blur-md border-t border-blue-900/20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col space-y-1 py-4">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-3 text-blue-900 font-medium hover:text-blue-700 transition-all duration-300 group rounded-lg hover:bg-white/20 backdrop-blur-sm"
                  onClick={() => setIsOpen(false)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'slideIn 0.3s ease-out forwards'
                  }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-blue-600/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
                  <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300 transform -translate-y-1/2"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Bottom glow effect matching footer */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-700/50 to-transparent"></div>
      
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;