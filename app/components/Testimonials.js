'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote:
      "Absolutely professional team. Their commitment to excellence and support throughout my legal process was incredible. Highly recommend!",
    author: 'Jonathan M.',
    role: 'Client - Business Law',
  },
  {
    quote:
      "I had a great experience. They guided me through every step and ensured I was informed and comfortable. Thank you so much!",
    author: 'Priya Sharma',
    role: 'Client - Family Law',
  },
  {
    quote:
      "Their service exceeded all expectations. Responsive, sharp, and very reliable. Will work with them again for sure!",
    author: 'Arun Patel',
    role: 'Client - Compliance Law',
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5s
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section className="bg-[#0d1b2a]  text-white py-20 px-6 md:px-20 font-serif">
      <div className="text-center mb-14">
        <p className="uppercase text-sm tracking-widest text-orange-300">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          What <span className="italic text-orange-400">Clients Say</span> About Us
        </h2>
      </div>

      <div className="max-w-3xl mx-auto relative min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-lg md:text-xl text-white/80 mb-6 italic">
              “{testimonials[index].quote}”
            </p>
            <h4 className="text-xl font-semibold text-orange-400">{testimonials[index].author}</h4>
            <p className="text-sm text-white/50">{testimonials[index].role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? 'bg-orange-400 scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
