'use client';
import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const FAQ: React.FC = () => {
  return (
    <section className="py-12 bg-marathonLight">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-marathonBlue mb-8">Frequently Asked Questions</h2>
        <Accordion.Root type="single" defaultValue="item-1" collapsible className="w-full max-w-2xl mx-auto">
          <Accordion.Item value="item-1" className="border-b border-gray-300">
            <Accordion.Trigger className="flex justify-between items-center w-full py-4 text-lg font-semibold text-marathonBlue hover:bg-gray-50">
              What’s included in the registration fee?
              <ChevronDownIcon className="w-6 h-6 transition-transform duration-300" />
            </Accordion.Trigger>
            <Accordion.Content className="py-4 text-gray-700">
              Your registration fee includes a race bib, a finisher’s medal, a t-shirt, and access to post-race refreshments.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2" className="border-b border-gray-300">
            <Accordion.Trigger className="flex justify-between items-center w-full py-4 text-lg font-semibold text-marathonBlue hover:bg-gray-50">
              Can I volunteer?
              <ChevronDownIcon className="w-6 h-6 transition-transform duration-300" />
            </Accordion.Trigger>
            <Accordion.Content className="py-4 text-gray-700">
              Yes! We are always looking for volunteers to help with various tasks on race day. Please visit our volunteer page for more information.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-3" className="border-b border-gray-300">
            <Accordion.Trigger className="flex justify-between items-center w-full py-4 text-lg font-semibold text-marathonBlue hover:bg-gray-50">
              Is there a bag check?
              <ChevronDownIcon className="w-6 h-6 transition-transform duration-300" />
            </Accordion.Trigger>
            <Accordion.Content className="py-4 text-gray-700">
              Yes, we will have a secure bag check area near the start line. Please use the bag provided at packet pickup.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-4" className="border-b border-gray-300">
            <Accordion.Trigger className="flex justify-between items-center w-full py-4 text-lg font-semibold text-marathonBlue hover:bg-gray-50">
              Are there pacers?
              <ChevronDownIcon className="w-6 h-6 transition-transform duration-300" />
            </Accordion.Trigger>
            <Accordion.Content className="py-4 text-gray-700">
              Yes, we will have pacers for a variety of finish times for the full and half marathons.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-5" className="border-b border-gray-300">
            <Accordion.Trigger className="flex justify-between items-center w-full py-4 text-lg font-semibold text-marathonBlue hover:bg-gray-50">
              What is the cancellation policy?
              <ChevronDownIcon className="w-6 h-6 transition-transform duration-300" />
            </Accordion.Trigger>
            <Accordion.Content className="py-4 text-gray-700">
              All entry fees are non-refundable. You may defer your entry to next year’s race for a small fee.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </section>
  );
};

export default FAQ;
