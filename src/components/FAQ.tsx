'use client';
import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
        <Accordion.Root type="single" defaultValue="item-1" collapsible className="w-full max-w-3xl mx-auto space-y-4">
          <Accordion.Item value="item-1" className="bg-white rounded-lg shadow-md">
            <Accordion.Trigger className="flex justify-between items-center w-full p-6 text-xl font-semibold text-gray-800 hover:bg-gray-100 rounded-t-lg">
              What’s included in the registration fee?
              <ChevronDownIcon className="w-6 h-6 transition-transform duration-300 text-yellow-500" />
            </Accordion.Trigger>
            <Accordion.Content className="p-6 text-gray-600 bg-gray-50 rounded-b-lg">
              Your registration fee includes a race bib, a finisher’s medal, a t-shirt, and access to post-race refreshments.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2" className="bg-white rounded-lg shadow-md">
            <Accordion.Trigger className="flex justify-between items-center w-full p-6 text-xl font-semibold text-gray-800 hover:bg-gray-100 rounded-t-lg">
              Can I volunteer?
              <ChevronDownIcon className="w-6 h-6 transition-transform duration-300 text-yellow-500" />
            </Accordion.Trigger>
            <Accordion.Content className="p-6 text-gray-600 bg-gray-50 rounded-b-lg">
              Yes! We are always looking for volunteers to help with various tasks on race day. Please visit our volunteer page for more information.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-3" className="bg-white rounded-lg shadow-md">
            <Accordion.Trigger className="flex justify-between items-center w-full p-6 text-xl font-semibold text-gray-800 hover:bg-gray-100 rounded-t-lg">
              Is there a bag check?
              <ChevronDownIcon className="w-6 h-6 transition-transform duration-300 text-yellow-500" />
            </Accordion.Trigger>
            <Accordion.Content className="p-6 text-gray-600 bg-gray-50 rounded-b-lg">
              Yes, we will have a secure bag check area near the start line. Please use the bag provided at packet pickup.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-4" className="bg-white rounded-lg shadow-md">
            <Accordion.Trigger className="flex justify-between items-center w-full p-6 text-xl font-semibold text-gray-800 hover:bg-gray-100 rounded-t-lg">
              Are there pacers?
              <ChevronDownIcon className="w-6 h-6 transition-transform duration-300 text-yellow-500" />
            </Accordion.Trigger>
            <Accordion.Content className="p-6 text-gray-600 bg-gray-50 rounded-b-lg">
              Yes, we will have pacers for a variety of finish times for the full and half marathons.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-5" className="bg-white rounded-lg shadow-md">
            <Accordion.Trigger className="flex justify-between items-center w-full p-6 text-xl font-semibold text-gray-800 hover:bg-gray-100 rounded-t-lg">
              What is the cancellation policy?
              <ChevronDownIcon className="w-6 h-6 transition-transform duration-300 text-yellow-500" />
            </Accordion.Trigger>
            <Accordion.Content className="p-6 text-gray-600 bg-gray-50 rounded-b-lg">
              All entry fees are non-refundable. You may defer your entry to next year’s race for a small fee.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </section>
  );
};

export default FAQ;
