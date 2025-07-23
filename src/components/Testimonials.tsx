import React from 'react';
import Image from 'next/image';

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-marathonLight">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-marathonBlue mb-8">What Our Runners Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-marathonBlue">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-gray-700 italic">"The most amazing marathon I have ever run. The organization was flawless and the views were breathtaking."</p>
            <div className="flex items-center mt-4">
              <Image src="/runner-1.jpg" alt="Runner 1" width={48} height={48} className="rounded-full" />
              <div className="ml-4">
                <p className="font-bold text-marathonBlue">John Doe</p>
                <p className="text-sm text-gray-500">2024 Participant</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-marathonBlue">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-gray-700 italic">"A fantastic event for a great cause. I will definitely be back next year!"</p>
            <div className="flex items-center mt-4">
              <Image src="/runner-2.jpg" alt="Runner 2" width={48} height={48} className="rounded-full" />
              <div className="ml-4">
                <p className="font-bold text-marathonBlue">Jane Smith</p>
                <p className="text-sm text-gray-500">2024 Participant</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-marathonBlue">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-gray-700 italic">"The atmosphere was electric! I achieved a new personal best thanks to the cheering crowds."</p>
            <div className="flex items-center mt-4">
              <Image src="/runner-3.jpg" alt="Runner 3" width={48} height={48} className="rounded-full" />
              <div className="ml-4">
                <p className="font-bold text-marathonBlue">Peter Jones</p>
                <p className="text-sm text-gray-500">2024 Participant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
