'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import Image from 'next/image';

import MilestoneTimeline from './components/MileStoneTimeline';
import BlogUpdatesSection from './components/Blog';
import FaqSection from './components/Faq';
import TestimonialsSection from './components/Testimonials';
import WhyOurFirm from './components/WhyOurFirm';

const slides = [
  {
    title: 'Trust Legal',
    highlight: 'Solutions in Kolkata',
    description:
      'With over 20 years of experience, J Banerjee & Co Advocates delivers expert legal advice in Criminal Law, Trademark, Copyright, Design, and Civil Litigation.'
  },
  {
    title: 'Expertise in',
    highlight: 'Intellectual Property Rights',
    description:
      'Protect your brand and business with one of the most experienced intellectual property lawyers in Kolkata—Jaya Banerjee.'
  },
  {
    title: 'Comprehensive Legal',
    highlight: 'Support You Can Rely On',
    description:
      'We offer professional legal services across Civil, Criminal, Divorce, Writs, and Service Matters, ensuring justice and advocacy tailored to your needs.'
  }
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <>
      <Head>
        <title>J Banerjee & Co Advocates | Criminal, Civil, IPR Lawyer in Kolkata</title>
        <meta
          name="description"
          content="Advocate Jaya Banerjee is a leading criminal, civil, trademark, copyright, and intellectual property lawyer based in Kolkata. With 20+ years of experience and 1600+ happy clients, trust us for all your legal matters."
        />
        <meta
          name="keywords"
          content="Criminal Lawyer Kolkata, Trademark Lawyer, Copyright Lawyer, Design Lawyer, Intellectual Property Rights, Divorce Lawyer, Civil Litigation, Best Lawyer Kolkata, Legal Services Kolkata"
        />
        <meta name="author" content="J Banerjee & Co Advocates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative overflow-hidden bg-[#0d1b2a] text-white min-h-screen font-serif">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={`v-${i}`} className="absolute top-0 h-full w-px bg-white/40" style={{ left: `${10 * i}%` }}></div>
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={`h-${i}`} className="absolute left-0 w-full h-px bg-white/40" style={{ top: `${10 * i}%` }}></div>
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28 md:py-40">
          <Image
            src="/bg.webp"
            alt="Legal Background"
            fill
            className="object-cover object-center absolute z-[-2]"
          />
          <div className="absolute inset-0 bg-[#0d1b2a]/80 z-[-1]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-sm uppercase tracking-widest text-orange-400 mb-28">J Banerjee & Co Advocates</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-10">
                {current.title}{' '}
                <span className="text-orange-400 italic font-lg">{current.highlight}</span>
              </h1>
              <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto">{current.description}</p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-10 px-6 py-3 border border-orange-400 text-white font-medium rounded-md hover:bg-orange-400 hover:text-black transition-all duration-300"
              >
                Book a Consultation →
              </motion.a>
            </motion.div>
          </AnimatePresence>

          {/* Floating social icons */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="bg-white p-2 rounded-full shadow hover:scale-110 transition">
                <Icon className="text-black w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Bottom Info Bar */}
          <div className="absolute bottom-4 w-full px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300 gap-2 sm:gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              16 Dr. Suresh Sarkar Road, Kolkata – 700014
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 sm:-ml-32" />
              +91 97482 31841
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              info@banerjee.co.in
            </div>
          </div>
        </section>

        <div className="h-16 w-full bg-gradient-to-b from-[#0d1b2a]/10 to-[#0d1b2a]/70 z-10 relative" />
      </main>

      {/* Page Sections */}
      <WhyOurFirm />
      <MilestoneTimeline />
      <BlogUpdatesSection />
      <FaqSection />
      <TestimonialsSection />
    </>
  );
}


 const metadata = {
  title: "Best Criminal & IPR Lawyers in Kolkata | J Banerjee & Co Advocates",
  description: "20+ years experienced criminal, civil, and IPR lawyers in Kolkata. Trusted for trademark registration, divorce cases, cheque bounce matters, and High Court litigation.",
  keywords: [
    "best criminal lawyer Kolkata",
    "top divorce attorney Kolkata",
    "trademark lawyer near me",
    "High Court advocate West Bengal",
    "civil litigation lawyer",
    "cheque bounce case specialist",
    "IPR attorney Kolkata",
    "copyright registration lawyer",
    "design protection legal services",
    "family court advocate",
    "property dispute lawyer",
    "service matter attorney",
    "writ petition lawyer",
    "experienced advocates in Kolkata"
  ].join(', '),
  openGraph: {
    title: "J Banerjee & Co Advocates | Criminal & IPR Lawyers in Kolkata",
    description: "20+ years experienced legal firm specializing in criminal defense, IPR, civil litigation and family law matters in Kolkata High Court.",
    url: "https://www.banerjeeadvocates.com",
    type: 'website',
    locale: 'en_IN',
    siteName: 'J Banerjee & Co Advocates',
    images: [
      {
        url: 'https://www.banerjeeadvocates.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'J Banerjee & Co Advocates - Kolkata Law Firm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "J Banerjee & Co Advocates | Kolkata's Trusted Law Firm",
    description: "Specializing in criminal law, IPR, civil litigation and family matters. 20+ years experience serving Kolkata and West Bengal.",
    images: ['https://www.banerjeeadvocates.com/twitter-home.jpg'],
  },
  alternates: {
    canonical: 'https://www.banerjeeadvocates.com',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};