import React from 'react';
import { CalendarIcon, MarginIcon, GroupIcon, StarIcon } from '@radix-ui/react-icons';

const EventOverview: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <CalendarIcon className="w-12 h-12 text-yellow-400" />
            <h3 className="mt-4 text-xl font-bold text-blue-800">Date & Time</h3>
            <p className="text-gray-700">[Date] at [Time]</p>
          </div>
          <div className="flex flex-col items-center">
            <MarginIcon className="w-12 h-12 text-yellow-400" />
            <h3 className="mt-4 text-xl font-bold text-blue-800">Location</h3>
            <p className="text-gray-700">[City], [Country]</p>
          </div>
          <div className="flex flex-col items-center">
            <GroupIcon className="w-12 h-12 text-yellow-400" />
            <h3 className="mt-4 text-xl font-bold text-blue-800">Race Types</h3>
            <p className="text-gray-700">Full Marathon, Half-Marathon, 5K</p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className="flex flex-col items-center">
            <GroupIcon className="w-12 h-12 text-yellow-400" />
            <h3 className="mt-4 text-2xl font-bold text-blue-800">10,000+</h3>
            <p className="text-gray-700">Runners</p>
          </div>
          <div className="flex flex-col items-center">
            <StarIcon className="w-12 h-12 text-yellow-400" />
            <h3 className="mt-4 text-2xl font-bold text-blue-800">$500K</h3>
            <p className="text-gray-700">Raised for Charity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOverview;
