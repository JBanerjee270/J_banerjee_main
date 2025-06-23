'use client';

import React from 'react';
import {
  ScrollText,
  Gavel,
  Landmark,
  FileBadge,
  DollarSign,
  Handshake,
} from 'lucide-react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: "'03",
    title: 'Foundation Year',
    description: 'J Banerjee & Co Advocates was founded with the vision to deliver justice with integrity and dedication.',
    icon: Landmark,
  },
  {
    year: "'08",
    title: 'Criminal Law Excellence',
    description: 'Established reputation in handling high-profile criminal cases across Kolkata with precision and commitment.',
    icon: Gavel,
  },
  {
    year: "'13",
    title: 'Trademark & IP Leadership',
    description: 'Specialized in Intellectual Property Rights, Trademark & Copyright matters with an innovative legal approach.',
    icon: FileBadge,
  },
  {
    year: "'16",
    title: 'Civil & Divorce Law Expansion',
    description: 'Expanded services to include Divorce Matters, Civil Disputes & Family Law with a client-centric approach.',
    icon: Handshake,
  },
  {
    year: "'20",
    title: 'Corporate & Writ Petitions',
    description: 'Gained prominence in Services Matters and Writ Petitions across High Court and Tribunals.',
    icon: ScrollText,
  },
  {
    year: "'24",
    title: 'Over 1600+ Clients Served',
    description: 'Celebrating 20 years with 411+ cases resolved and a loyal clientele base across West Bengal.',
    icon: DollarSign,
  },
];

export default function MilestoneTimeline() {
  return (
    <section
      className="relative font-serif py-20 bg-cover bg-center bg-no-repeat bg-fixed text-white px-4 md:px-20 overflow-hidden"
      style={{ backgroundImage: `url('/indConstitution.webp')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#112B45]/70 z-0" />

      {/* Section Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <p className="uppercase text-sm tracking-widest text-orange-300">Our Journey</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          The Successful <span className="italic text-orange-400">Milestones</span> By Year
        </h2>
      </motion.div>

      <div className="relative z-10 grid md:grid-cols-3 gap-10">
        {timelineData.map((item, i) => {
          const Icon = item.icon;
          const direction = i % 2 === 0 ? 100 : -100;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: direction }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="group font-serif bg-[#0d1b2a]/80 border border-white/10 p-6 rounded-xl relative overflow-hidden hover:shadow-lg transition"
            >
              {/* Icon Block */}
              <div className="bg-white text-[#0d1b2a] w-20 h-20 flex items-center justify-center rounded-md mb-4 transition-all duration-300 group-hover:scale-110">
                <Icon size={32} />
              </div>

              {/* Faded Year in background */}
              <p className="text-5xl font-bold text-white/10 absolute top-4 right-6 group-hover:text-white/20 transition">
                {item.year}
              </p>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
