import React from 'react';
import Image from 'next/image';

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Soul Relay</h2>
            <p className="text-gray-600 mb-6">
              Soul Relay is more than just a race; it’s a celebration of endurance, community, and the human spirit. Our mission is to create a world-class marathon experience that inspires runners of all levels to push their limits and achieve their personal best.
            </p>
            <p className="text-gray-600">
              Founded in 2010, Soul Relay has grown from a local event into an internationally recognized marathon, attracting thousands of participants from around the globe. We are committed to providing a safe, scenic, and supportive race environment, with a course that showcases the best of our city.
            </p>
          </div>
          <div>
            <Image src="/runner-1.jpg" alt="About Us" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
