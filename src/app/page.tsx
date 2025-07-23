import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EventOverview from '@/components/EventOverview';
import RaceDetails from '@/components/RaceDetails';
import RegistrationCTA from '@/components/RegistrationCTA';
import Testimonials from '@/components/Testimonials';
import Sponsors from '@/components/Sponsors';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Register', href: '#register' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-marathonLight">
      <Head>
        <title>Run the Race of a Lifetime at [Marathon Name] 2025!</title>
        <meta name="description" content="Join thousands on [Date] in [City]!" />
        <meta property="og:title" content="Run the Race of a Lifetime at [Marathon Name] 2025!" />
        <meta property="og:description" content="Join thousands on [Date] in [City]!" />
        <meta property="og:image" content="/assets/marathon-hero.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar links={navLinks} />

      <main>
        <Hero title="Run the Race of a Lifetime at [Marathon Name] 2025!" subtitle="Join thousands on [Date] in [City]!" />
        <div id="about">
          <EventOverview />
        </div>
        <RaceDetails />
        <RegistrationCTA />
        <Testimonials />
        <Sponsors />
        <div id="faq">
          <FAQ />
        </div>
      </main>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
