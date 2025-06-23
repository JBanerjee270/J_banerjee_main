'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How Much Compensation Will I Receive For Inquiries?',
    answer:
      'Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Amet commodo nulla facilisi nullam vehicula ipsum a. Urna porttitor rhoncus dolor purus non enim praesent elementum. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Massa',
  },
  {
    question: 'How Can I Submit An Application To The Court Of Protection?',
    answer:
      'To submit an application, you will need the appropriate legal forms. Our firm can assist in guiding you through each step of the process.',
  },
  {
    question: 'What Kinds Of LPAs Are There?',
    answer:
      'There are generally two kinds: Health and Welfare LPA, and Property and Financial Affairs LPA. Both serve different purposes and are legally binding.',
  },
  {
    question: 'What Is The Right Time To File For Divorce?',
    answer:
      'The right time varies depending on your circumstances. It’s best to speak with a legal professional to understand the implications and timing.',
  },
  {
    question: 'How Much Do You Charge For Each Hearing?',
    answer:
      'Our charges depend on the complexity of the case. Contact us directly to receive a transparent fee structure.',
  },
];

export default function FaqSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#1C2C40] text-white py-20 px-4 md:px-20 font-serif">
      <div className="text-center mb-12">
        <p className="uppercase text-sm tracking-widest text-orange-300">Legal Queries</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Frequently Asked <span className="italic text-orange-400">Questions</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto divide-y divide-white/10">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => setActive(active === i ? null : i)}
              className="flex justify-between items-center w-full text-left py-5 text-lg md:text-xl font-medium transition hover:text-orange-400"
            >
              <span>{`${i + 1}. ${faq.question}`}</span>
              <ChevronDown
                size={24}
                className={`transition-transform duration-300 ${active === i ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {active === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white/70 pb-5">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-[#F8F7F4] text-[#1C2C40] mt-16 p-6 md:p-10 rounded-md flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h4 className="text-xl md:text-2xl font-semibold mb-1">Still You Have Doubts?</h4>
          <p className="text-sm">Eros donec ac odio tempor orci dapibus ultrices.</p>
        </div>
        <a
          href="#"
          className="mt-3 md:mt-0 inline-block px-5 py-2 bg-[#1C2C40] text-white border border-[#1C2C40] hover:bg-orange-400 hover:border-orange-400 transition duration-300"
        >
          Read More →
        </a>
      </div>
    </section>
  );
}
