import React from 'react';
import { TwitterLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-marathonBlue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2025 [Marathon Name]. All rights reserved.</p>
            <p>Contact us: <a href="mailto:info@marathon.com" className="hover:text-marathonYellow">info@marathon.com</a></p>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <a href="#" className="mx-2 hover:text-marathonYellow"><TwitterLogoIcon className="w-6 h-6" /></a>
            <a href="#" className="mx-2 hover:text-marathonYellow"><InstagramLogoIcon className="w-6 h-6" /></a>
          </div>
          <div>
            <a href="#" className="mx-2 hover:text-marathonYellow">Privacy Policy</a>
            <a href="#" className="mx-2 hover:text-marathonYellow">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
