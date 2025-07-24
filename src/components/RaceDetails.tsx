import React from 'react';
import Image from 'next/image';
import { Calendar, Flag, Trophy } from 'lucide-react';

const raceHistory = [
  { year: 2014, event: '6-day race, NYC, USA', distance: '485 km' },
  { year: 2015, event: '10-day race, NYC, USA', distance: '739 km' },
  { year: 2016, event: '10-day race, NYC, USA', distance: '950 km' },
  { year: 2017, event: '10-day race, NYC, USA', distance: '1,187 km' },
  { year: 2018, event: '10-day race, NYC, USA', distance: '1,304 km' },
  { year: 2019, event: '6-day race, AZ, USA', distance: '787 km' },
  { year: 2019, event: '10-day race, NYC, USA', distance: '1,222 km' },
  { year: 2019, event: '6-day race, WI, USA', distance: '784 km' },
  { year: 2019, event: '6-day race, Xiamen, China', distance: '834 km' },
  { year: 2020, event: '12-hour run, Chiang Mai, Thailand', distance: '120 km' },
  { year: 2020, event: '6-day race, FL, USA', distance: '787 km' },
  { year: 2021, event: '6-day race, NJ, USA', distance: '765 km' },
  { year: 2021, event: '6-day race, WI, USA', distance: '904 km' },
  { year: 2022, event: '10-day race, AZ, USA', distance: '1,111 km' },
  { year: 2022, event: '3-day race, Nevada, USA', distance: '400 km' },
  { year: 2022, event: '6-day race, NYC, USA', distance: '808 km' },
  { year: 2022, event: '48-hour run, NJ, USA', distance: '335 km' },
  { year: 2022, event: '24-hour run, NY, USA', distance: '169 km' },
  { year: 2023, event: '6-day race, AZ, USA', distance: '745 km' },
  { year: 2023, event: '10-day race, NYC, USA', distance: '1,236 km' },
  { year: 2024, event: '48-hour run, Florida, USA', distance: '275 km' },
  { year: 2024, event: '10-day race, NYC, USA', distance: '1,315 km' },
  { year: 2024, event: '48-day race, NYC, USA', distance: '5,000km' },
];

const RaceDetails: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Race Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 border-b-4 border-yellow-400">
            <h3 className="text-2xl font-bold text-blue-800">Full Marathon</h3>
            <p className="text-gray-700 mt-2">Distance: 42K</p>
            <p className="text-gray-700">Start Time: 6:00 AM</p>
            <p className="text-gray-700">Fee: $100</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border-b-4 border-yellow-400">
            <h3 className="text-2xl font-bold text-blue-800">Half-Marathon</h3>
            <p className="text-gray-700 mt-2">Distance: 21K</p>
            <p className="text-gray-700">Start Time: 7:00 AM</p>
            <p className="text-gray-700">Fee: $75</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border-b-4 border-yellow-400">
            <h3 className="text-2xl font-bold text-blue-800">5K Fun Run</h3>
            <p className="text-gray-700 mt-2">Distance: 5K</p>
            <p className="text-gray-700">Start Time: 8:00 AM</p>
            <p className="text-gray-700">Fee: $50</p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-blue-800 mb-4"></h3>
          <Image src="/course-map.jpg" alt="Course Map" width={1200} height={800} className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-center text-blue-800 mb-8">My Race History</h3>
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700">In the last 10 years, the total distance run in ultra races is <span className="font-bold text-yellow-500">22,262 km</span>, including <span className="font-bold text-yellow-500">527</span> marathons.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {raceHistory.map((race, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4 border-l-4 border-yellow-400 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-3">
                    <Calendar className="w-6 h-6 text-yellow-500 mr-3" />
                    <h4 className="text-lg font-bold text-blue-800">{race.year}</h4>
                  </div>
                  <div className="flex items-center mb-2">
                    <Trophy className="w-5 h-5 text-blue-500 mr-2" />
                    <p className="text-sm text-gray-700">{race.event}</p>
                  </div>
                </div>
                <div className="flex items-center mt-3">
                  <Flag className="w-5 h-5 text-red-500 mr-2" />
                  <p className="text-sm text-gray-700">{race.distance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaceDetails;
