'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Banknote, Gift, Medal, Shirt, Bus } from 'lucide-react';
import { toast } from 'sonner';

const PaymentPage: React.FC = () => {
    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/#about' },
        { label: 'Register', href: '/#register' },
        { label: 'FAQ', href: '/#faq' },
        { label: 'Contact', href: '/#contact' },
        { label: 'Payment', href: '/payment' },
    ];

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Failed to submit registration');
            }

            toast.success('Registration successful! You will receive a confirmation email shortly.');
            setFormData({ firstName: '', lastName: '', phone: '', email: '' });
        } catch (err) {
            if (err instanceof Error) {
                toast.error(err.message);
            } else {
                toast.error('An unknown error occurred');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

  return (
    <div className="bg-gray-50">
      <Navbar links={navLinks} />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Payment Information</h1>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                <Banknote className="w-8 h-8 mr-3 text-yellow-500" />
                Bank Transfer Details
              </h2>
              <div className="space-y-4 text-gray-700">
                <p><span className="font-semibold">Bank:</span> Khaan Bank</p>
                <p><span className="font-semibold">Account Number:</span> 5123456789</p>
                <p><span className="font-semibold">Account Name:</span> RunForGlory</p>
                <p><span className="font-semibold">Description:</span> Your Phone Number (e.g., +976-99123456)</p>
                <p className="mt-4 text-sm text-red-600 bg-red-100 p-3 rounded-lg">
                  <strong>Note:</strong> Please verify your phone number before making payment to ensure smooth registration!
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                <Gift className="w-8 h-8 mr-3 text-yellow-500" />
                Registration Perks
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <Shirt className="w-6 h-6 mr-3 mt-1 text-blue-500 flex-shrink-0" />
                  <span><span className="font-semibold">Free Event T-Shirt:</span> First 1,000 registrants receive a commemorative moisture-wicking t-shirt (select size during registration).</span>
                </li>
                <li className="flex items-start">
                  <Medal className="w-6 h-6 mr-3 mt-1 text-blue-500 flex-shrink-0" />
                  <span><span className="font-semibold">Finisher Medal:</span> Complete the marathon and receive a custom-designed medal.</span>
                </li>
                <li className="flex items-start">
                  <Banknote className="w-6 h-6 mr-3 mt-1 text-blue-500 flex-shrink-0" />
                  <span><span className="font-semibold">Post-Race Refreshments:</span> Enjoy complimentary snacks and drinks at the finish line.</span>
                </li>
                <li className="flex items-start">
                  <Bus className="w-6 h-6 mr-3 mt-1 text-blue-500 flex-shrink-0" />
                  <span><span className="font-semibold">Free Local Transport:</span> Show your race bib for free shuttle service to the event on race day.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Confirm Your Payment</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="w-full p-3 border border-gray-300 rounded-lg" required />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="w-full p-3 border border-gray-300 rounded-lg" required />
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg" required />
              </div>
              <button type="submit" className="mt-6 w-full bg-yellow-500 text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-300" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : "I've Paid"}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage;
