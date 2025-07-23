import React from 'react';

const RaceDetails: React.FC = () => {
  return (
    <section className="py-12 bg-marathonLight">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-marathonBlue mb-8">Race Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 border-b-4 border-marathonRed">
            <h3 className="text-2xl font-bold text-marathonYellow">Full Marathon</h3>
            <p className="text-gray-700 mt-2">Distance: 42K</p>
            <p className="text-gray-700">Start Time: 6:00 AM</p>
            <p className="text-gray-700">Fee: $100</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border-b-4 border-marathonRed">
            <h3 className="text-2xl font-bold text-marathonYellow">Half-Marathon</h3>
            <p className="text-gray-700 mt-2">Distance: 21K</p>
            <p className="text-gray-700">Start Time: 7:00 AM</p>
            <p className="text-gray-700">Fee: $75</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border-b-4 border-marathonRed">
            <h3 className="text-2xl font-bold text-marathonYellow">5K Fun Run</h3>
            <p className="text-gray-700 mt-2">Distance: 5K</p>
            <p className="text-gray-700">Start Time: 8:00 AM</p>
            <p className="text-gray-700">Fee: $50</p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-marathonBlue mb-4">Course Map</h3>
          <img src="/course-map.jpg" alt="Course Map" className="w-full h-64 object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default RaceDetails;
