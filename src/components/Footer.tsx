import React from 'react';
import { TwitterLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 text-blue-900 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2)_0%,transparent_50%)] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Company Info */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent">
              Soul Relay
            </h3>
            <div className="space-y-2 text-sm">
              <p className="font-medium">&copy; 2025 Soul Relay. All rights reserved.</p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="opacity-75">Contact us:</span>
                <a 
                  href="mailto:info@marathon.com" 
                  className="font-medium hover:text-blue-700 transition-all duration-300 hover:scale-105 underline decoration-2 decoration-blue-700/30 hover:decoration-blue-700"
                >
                  info@marathon.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Media - Centered */}
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="group relative p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <TwitterLogoIcon className="w-6 h-6 group-hover:text-blue-700 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-blue-600/20 scale-0 group-hover:scale-110 transition-transform duration-300"></div>
              </a>
              <a 
                href="#" 
                className="group relative p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <InstagramLogoIcon className="w-6 h-6 group-hover:text-blue-700 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-blue-600/20 scale-0 group-hover:scale-110 transition-transform duration-300"></div>
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center md:text-right space-y-3">
            <h4 className="text-sm font-semibold opacity-75 uppercase tracking-wider">Legal</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a 
                href="#" 
                className="hover:text-blue-700 transition-all duration-300 hover:translate-x-1 inline-block font-medium underline decoration-2 decoration-transparent hover:decoration-blue-700"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="hover:text-blue-700 transition-all duration-300 hover:translate-x-1 inline-block font-medium underline decoration-2 decoration-transparent hover:decoration-blue-700"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom border accent */}
        <div className="mt-8 pt-6 border-t border-blue-900/20">
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-800 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;