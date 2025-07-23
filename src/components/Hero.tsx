import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/marathon-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-white">{title}</h1>
        <p className="mt-4 text-lg md:text-2xl text-white">{subtitle}</p>
        <a
          href="#register"
          className="mt-8 inline-block bg-marathonYellow text-marathonBlue font-bold py-3 px-8 rounded-full hover:bg-marathonBlue hover:text-white transition-colors duration-300 shadow-lg animate-pulse"
        >
          Register Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
