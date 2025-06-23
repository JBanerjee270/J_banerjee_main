'use client';

import React from 'react';
import { motion } from 'framer-motion';

const blogs = [
  {
    date: 'June 18, 2024',
    title: 'Why Choose a Trusted',
    highlight: 'Criminal Lawyer in Kolkata?',
    excerpt:
      'With over 20 years of experience, Adv. Jaya Banerjee has become a name synonymous with justice in criminal matters. Learn how her precise legal strategies help secure favorable outcomes.',
  },
  {
    date: 'June 10, 2024',
    title: 'Protecting Your Brand with',
    highlight: 'Trademark & IP Law.',
    excerpt:
      'From startups to enterprises, securing Intellectual Property is crucial. Read how J Banerjee & Co helps clients safeguard their creations, brands, and designs through expert legal guidance.',
  },
  {
    date: 'May 25, 2024',
    title: 'Understanding Your Rights in',
    highlight: 'Divorce & Civil Cases.',
    excerpt:
      'Legal battles involving personal life demand empathy and experience. Discover how our firm assists in civil and family matters with professionalism, compassion, and clarity.',
  },
];

export default function BlogUpdatesSection() {
  return (
    <section className="bg-[#0d1b2a] text-white py-20 px-4 md:px-20 font-serif">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="uppercase text-sm tracking-widest text-orange-300">Blog Updates</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Legal <span className="italic text-orange-400">Insights</span>
        </h2>
      </motion.div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="border border-white/10 p-6 rounded-sm bg-[#0d1b2a]/80 relative overflow-hidden group hover:shadow-xl transition-all"
          >
            <p className="uppercase text-xs text-white/60 mb-4">{blog.date}</p>
            <h3 className="text-xl font-semibold leading-snug mb-4">
              {blog.title}{' '}
              <span className="text-orange-400 italic font-sm">{blog.highlight}</span>
            </h3>
            <p className="text-white/70 text-sm mb-6">{blog.excerpt}</p>

            <a
              href="#"
              className="inline-flex items-center gap-2 border border-orange-400 px-4 py-2 text-sm transition duration-300 hover:bg-orange-400 hover:text-black relative"
            >
              Read More →
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
