import React from 'react';
import Image from 'next/image';

const Sponsors: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-marathonRed mb-8">Our Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex justify-center items-center filter grayscale hover:grayscale-0 transition-all duration-300">
            <Image src="/sponsor-1.png" alt="Sponsor 1" width={150} height={50} />
          </div>
          <div className="flex justify-center items-center filter grayscale hover:grayscale-0 transition-all duration-300">
            <Image src="/sponsor-2.png" alt="Sponsor 2" width={150} height={50} />
          </div>
          <div className="flex justify-center items-center filter grayscale hover:grayscale-0 transition-all duration-300">
            <Image src="/sponsor-3.png" alt="Sponsor 3" width={150} height={50} />
          </div>
          <div className="flex justify-center items-center filter grayscale hover:grayscale-0 transition-all duration-300">
            <Image src="/sponsor-4.png" alt="Sponsor 4" width={150} height={50} />
          </div>
          <div className="flex justify-center items-center filter grayscale hover:grayscale-0 transition-all duration-300">
            <Image src="/sponsor-5.png" alt="Sponsor 5" width={150} height={50} />
          </div>
          <div className="flex justify-center items-center filter grayscale hover:grayscale-0 transition-all duration-300">
            <Image src="/sponsor-6.png" alt="Sponsor 6" width={150} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
