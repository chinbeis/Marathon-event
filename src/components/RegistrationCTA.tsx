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
      <div key={key} className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/30 transition-all duration-300 hover:scale-105 group">
        <span className="text-4xl md:text-5xl font-bold text-blue-900 group-hover:text-blue-800 transition-colors duration-300">
          {timeLeft[key]?.toString().padStart(2, '0')}
        </span>
        <span className="text-sm md:text-base font-semibold text-blue-800/80 uppercase tracking-wider mt-1">
          {key}
        </span>
      </div>
    );
  });

  return (
    <section id="register" className="relative bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 py-16 text-center overflow-hidden">
      {/* Subtle background pattern matching navbar/footer */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2)_0%,transparent_50%)] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-blue-700/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-500/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent mb-4">
            Sign Up Today!
          </h2>
          <p className="text-blue-800/80 text-lg md:text-xl font-medium mb-8">
            Join the Soul Relay and be part of something extraordinary
          </p>
          
          {/* Countdown Timer */}
          <div className="mb-12">
            {timerComponents.length ? (
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-6">
                  Event starts in:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {timerComponents}
                </div>
              </div>
            ) : (
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 inline-block">
                <span className="text-2xl md:text-3xl font-bold text-blue-900">Time&apos;s up!</span>
              </div>
            )}
          </div>
          
          {/* CTA Button */}
          <div className="space-y-4">
            <a
              href="/payment"
              className="group relative inline-block bg-gradient-to-r from-blue-800 to-blue-900 text-white font-bold py-4 px-12 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-blue-900/50 hover:scale-105 transform"
            >
              <span className="relative z-10 text-lg md:text-xl">Sign Up Today!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            </a>
            
            <div className="flex items-center justify-center gap-2 text-blue-800/70">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Limited spots available</span>
            </div>
          </div>
          

        </div>
      </div>
      
      {/* Bottom glow effect matching navbar/footer */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-700/50 to-transparent"></div>
    </section>
  );
};

export default RegistrationCTA;