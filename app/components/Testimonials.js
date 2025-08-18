'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote:
      "I Searched for the best divorce lawyer in Kolkata on Google and found J Banerjee so that I could help my cousin with her divorce problem, my cousin was in lot of confusion and had no idea what to do next. J Banerjee provided her full attention to this case and made the whole process easy for my cousin. She handled the case very professionally. We truly appreciate her skills and would recommend her to anyone who is looking for a good lawyer.",
    author: 'kankana roy',
    role: 'Client',
  },
  {
    quote:
      "I was struggling with a legal issue when I turned to J Banerjee a dedicated lawyer from High court in Kolkata. She was incredibly knowledgeable, patient in handling my case. Her dedication and strategic thinking gave me confidence, and she kept me informed at every step. Thanks to her expertise, we achieved a favorable outcome. I highly recommend her to anyone seeking a skilled and reliable lawyer.",
    author: 'Akbar Hossain',
    role: 'Client ',
  },
  {
    quote:
      "J Banerjee is an excellent lawyer! she assisted my brother with trademark matters for his business. she made whole process simple and hassle free. One of the Best lawyer in kolkata! Thank you so much, highly recommended",
    author: 'Payel Mitra',
    role: 'Client',
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
