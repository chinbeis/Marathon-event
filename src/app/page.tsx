import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EventOverview from '@/components/EventOverview';
import RaceDetails from '@/components/RaceDetails';
import RegistrationCTA from '@/components/RegistrationCTA';
import Testimonials from '@/components/Testimonials';
import AboutUs from '@/components/AboutUs';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Register', href: '#register' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
    { label: 'Payment', href: '/payment' },
  ];

  return (
    <div className="bg-marathonYellow">
      <Head>
        <title>Run the Race of a Lifetime at Soul Relay!</title>
        <meta name="description" content="Join thousands on [Date] in [City]!" />
        <meta property="og:title" content="Run the Race of a Lifetime at Soul Relay!" />
        <meta property="og:description" content="Join thousands on [Date] in [City]!" />
        <meta property="og:image" content="/assets/marathon-hero.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar links={navLinks} />

      <main>
        <Hero title="Run the Race of a Lifetime at Soul Relay!" subtitle="Join thousands on [Date] in [City]!" />
        <div id="about">
          <EventOverview />
        </div>
        <RaceDetails />
        <RegistrationCTA />
        <Testimonials />
        <AboutUs />
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
