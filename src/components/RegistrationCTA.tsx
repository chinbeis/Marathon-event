'use client';
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const RegistrationCTA: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = +new Date('2025-10-20') - +new Date();
      let timeLeft: TimeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: React.JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const key = interval as keyof TimeLeft;
    if (!timeLeft[key]) {
      return;
    }

    timerComponents.push(
      <span key={key} className="text-2xl font-bold text-white">
        {timeLeft[key]} {key}{" "}
      </span>
    );
  });

  return (
    <section id="register" className="bg-yellow-400 py-12 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800">Sign Up Today!</h2>
        <p className="text-lg text-blue-800 mt-2">Early Bird Pricing Ends [Date]</p>
        <div className="mt-4">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
        <a
          href="/payment"
          className="mt-8 inline-block bg-blue-800 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 hover:text-white transition-colors duration-300 shadow-lg animate-pulse"
        >
          Sign Up Today!
        </a>
      </div>
    </section>
  );
};

export default RegistrationCTA;
