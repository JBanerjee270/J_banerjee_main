'use client';

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import NextImage from "next/image";

// Counter component for animated percentage
const Counter = ({ target = 0, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(target);
      const step = end / (duration / 16); // ~60fps

      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 16);

      return () => clearInterval(counter);
    }
  }, [isInView, target, duration]);

  return (
    <h2 ref={ref} className="text-4xl italic font-bold text-orange-400">
      {count}+
    </h2>
  );
};

const WhyOurFirm = () => {
  return (
    <div>
      {/* Why Our Firm Section */}
      <section className="relative font-serif z-10 py-24 bg-[#0d1b2a]/90 px-6 md:px-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-5 gap-10 mb-16 border-b border-white/20 pb-10">
            <div>
              <h3 className="uppercase text-sm text-white/80 mb-2">Leading Attorney</h3>
              <h2 className="text-4xl md:text-5xl font-semibold">20+ Years</h2>
              <p className="text-orange-400 italic text-xl">Of Legal Experience</p>
            </div>
            {[
              { percent: 411, label: "Projects Successfully Completed" },
              { percent: 1600, label: "Happy Clients" },
              { percent: 7, label: "Legal Domains Covered" },
              { percent: 100, label: "Client Satisfaction" },
            ].map((stat, i) => (
              <div key={i}>
                <Counter target={stat.percent} />
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h4 className="uppercase text-sm text-white/50 mb-2">About J Banerjee & Co Advocates</h4>
              <h2 className="text-4xl font-bold mb-4">
                Your Trusted Criminal Lawyer{" "}
                <span className="text-orange-400 italic font-medium">In Kolkata</span>
              </h2>
              <p className="text-white/80 mb-4">
                Meet Jaya Banerjee, a distinguished legal professional renowned for her expertise across various domains of law. With a stellar reputation in criminal, trademark, copyright, and design law, she leads J Banerjee & Co Advocates with precision and unwavering commitment to justice.
              </p>
              <p className="text-white/60 mb-6">
                From criminal defense to intellectual property rights, Jaya Banerjee’s exceptional insight and strategic thinking have earned the trust of over 1600+ clients. Her meticulous approach ensures every case is handled with care, clarity, and results.
              </p>
              <a
                className="inline-block px-5 py-2 border border-white/30 hover:bg-orange-400 hover:text-black transition-all duration-300"
                href="#"
              >
                Read More →
              </a>
            </div>

            <div className="flex flex-col gap-8">
              {[
                {
                  icon: "/rising.png",
                  title: "Rising Star Of The Year 2023",
                  desc: "Recognized for outstanding litigation success and client satisfaction throughout the year.",
                },
                {
                  icon: "/award2.png",
                  title: "Legal Tech Entrepreneur 2023",
                  desc: "Pioneering use of legal technology in case tracking and client engagement in Kolkata.",
                },
                {
                  icon: "/award3.png",
                  title: "Lifetime Achievement 2021",
                  desc: "Honored for over 20 years of remarkable service in the Indian legal system.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 border-b border-white/10 pb-4">
                  {/* <NextImage src={item.icon} alt={item.title} width={40} height={40} /> */}
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Practice Areas Section */}
      <section className="relative z-10 py-20 font-serif bg-[#0d1b2a]/90 px-6 md:px-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <NextImage
              src="/handshake.jpg"
              alt="Practice"
              width={700}
              height={400}
              className="rounded-md"
            />
            <div>
              <h4 className="uppercase text-sm text-white/50 mb-2">Delivering Bespoke Legal Solutions</h4>
              <h2 className="text-4xl font-bold mb-4">
                Our Practice Areas{" "}
                <span className="text-orange-400 italic font-medium">Of Expertise</span>
              </h2>
              <p className="text-white/70 mb-6">
                With years of litigation experience and a problem-solving approach, we offer expert representation across key legal fields in India.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  "Intellectual Property Rights",
                  "Civil Cases",
                  "Criminal Matters",
                  "Services Matters",
                  "Writs",
                  "Divorce Matters",
                  "Design Matters",
                ].map((area, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-orange-400">•</span>
                    <p>{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="mt-10 bg-[#102030] p-4 md:p-6 rounded-md flex flex-wrap items-center justify-between gap-4">
            <p className="text-white/80 text-lg">Our Associate Partners</p>
            <div className="flex items-center gap-6">
              {["/p1.png", "/p2.png", "/p3.png", "/p4.png"].map((src, i) => (
                <NextImage key={i} src={src} alt="Partner" width={50} height={50} />
              ))}
            </div>
          </div> */}
        </motion.div>
      </section>
    </div>
  );
};

export default WhyOurFirm;
