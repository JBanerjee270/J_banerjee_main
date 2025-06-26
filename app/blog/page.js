'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Clock, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Understanding Trademark Law in India: A Complete Guide",
      excerpt: "Learn about the fundamentals of trademark registration, protection, and enforcement in India with practical insights from our legal experts.",
      category: "Intellectual Property",
      date: "May 15, 2024",
      readTime: "8 min read",
      image: "/india.webp"
    },
    {
      id: 2,
      title: "Navigating Criminal Proceedings: What to Expect in Court",
      excerpt: "A step-by-step guide to criminal court procedures in India and how to prepare for each stage of your case.",
      category: "Criminal Law",
      date: "April 28, 2024",
      readTime: "10 min read",
      image: "/indConstitution.webp"
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: "Divorce Mediation vs. Litigation: Choosing the Right Path",
      excerpt: "Explore the pros and cons of mediation versus courtroom battles in divorce cases to make an informed decision.",
      category: "Family Law",
      date: "April 10, 2024",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Protecting Your Business: Essential Contracts You Need",
      excerpt: "Key legal agreements every business owner should have in place to protect their interests and avoid disputes.",
      category: "Business Law",
      date: "March 22, 2024",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Recent Changes in Copyright Law: What Creators Should Know",
      excerpt: "Breaking down the latest amendments to India's copyright legislation and their impact on content creators.",
      category: "Intellectual Property",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "The Bail Process in India: Rights and Procedures Explained",
      excerpt: "A comprehensive look at how bail works in the Indian legal system and what defendants should understand.",
      category: "Criminal Law",
      date: "February 28, 2024",
      readTime: "9 min read"
    },
    {
      id: 7,
      title: "Property Dispute Resolution: Legal Options Available",
      excerpt: "Understanding the various legal remedies available for resolving property conflicts in India.",
      category: "Civil Law",
      date: "February 15, 2024",
      readTime: "8 min read"
    },
    {
      id: 8,
      title: "Design Patent Protection: Safeguarding Your Innovations",
      excerpt: "How to secure design patents in India and enforce your rights against infringement.",
      category: "Intellectual Property",
      date: "January 30, 2024",
      readTime: "6 min read"
    }
  ];

  const categories = [
    "All Articles",
    "Criminal Law",
    "Intellectual Property",
    "Civil Law",
    "Family Law",
    "Business Law"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative font-serif bg-[#0d1b2a] text-white h-[80vh] flex items-center justify-center">
        <Image 
          src="/bg.webp" 
          alt="Legal Background" 
          fill 
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[#0d1b2a]/90" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Legal <span className="text-orange-400 italic">Insights</span>
          </h1>
          <p className="text-sm text-gray-300">
            Expert analysis and updates on criminal, civil, and intellectual property law from J Banerjee & Co Advocates
          </p>
        </motion.div>
      </section>

      {/* Featured Posts */}
      <section className="font-serif py-20 bg-white text-[#0d1b2a] px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-orange-400 italic">Articles</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              In-depth legal analysis on pressing issues and recent developments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <div className="relative h-80">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-orange-400 text-[#0d1b2a] rounded-full mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{post.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <span className="flex items-center gap-1">
                        <CalendarDays size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link 
                    href={`/blog`} 
                    className="inline-flex items-center text-orange-400 font-medium group-hover:text-orange-500 transition-colors"
                  >
                    Read more
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="font-serif py-20 bg-[#f8f9fa] text-[#0d1b2a] px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Main Content */}
            <div className="md:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Recent <span className="text-orange-400 italic">Articles</span>
                </h2>
                <p className="text-gray-600">
                  Stay updated with our latest legal insights and analysis
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {recentPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-orange-400/20 text-orange-600 rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <CalendarDays size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                      <Link 
                        href={`/blog`} 
                        className="text-orange-400 hover:text-orange-500 transition-colors flex items-center"
                      >
                        Read
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-16 flex justify-center"
              >
                <nav className="flex items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-400 text-white font-medium">
                    1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors">
                    2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors">
                    3
                  </button>
                  <span className="px-2">...</span>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors">
                    8
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors">
                    <ArrowRight size={16} />
                  </button>
                </nav>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/3"
            >
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <Link 
                        href="#" 
                        className={`block py-2 ${index === 0 ? 'text-orange-400 font-medium' : 'text-gray-600 hover:text-orange-400'} transition-colors`}
                      >
                        {category}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  Popular Articles
                </h3>
                <div className="space-y-4">
                  {recentPosts.slice(0, 3).map((post, index) => (
                    <motion.div
                      key={post.id}
                      whileHover={{ x: 5 }}
                      className="flex gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0"
                    >
                      <span className="text-orange-400 font-bold text-lg">{index + 1}</span>
                      <div>
                        <Link href={`/blog/${post.id}`} className="font-medium hover:text-orange-400 transition-colors">
                          {post.title}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-[#0d1b2a] text-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">Legal Insights Newsletter</h3>
                <p className="text-gray-300 mb-4">Get the latest legal updates delivered to your inbox</p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full bg-[#112B45] border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
                    required
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-orange-400 text-[#0d1b2a] font-medium py-3 px-4 rounded-lg hover:bg-orange-500 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="font-serif py-20 bg-[#0d1b2a] text-white px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need <span className="text-orange-400 italic">Legal Advice?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team is ready to provide personalized legal solutions for your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="inline-block px-8 py-4 bg-orange-400 text-[#0d1b2a] font-bold rounded-lg hover:bg-orange-500 transition-colors"
                >
                  Schedule a Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="tel:+919748231841" 
                  className="inline-block px-8 py-4 border border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#0d1b2a] transition-colors"
                >
                  Call Now: +91 97482 31841
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;

 const metadata = {
  title: "Legal Blog | J Banerjee & Co Advocates - Expert Law Insights",
  description: "Read our legal blog for expert analysis on criminal law, IPR, civil litigation, and family law matters in Kolkata. Stay updated with Indian legal developments.",
  keywords: [
    "criminal law blog",
    "IPR legal updates",
    "divorce law articles",
    "civil litigation insights",
    "trademark law analysis",
    "Kolkata legal news",
    "Indian law blog",
    "legal expert opinions",
    "court case studies",
    "law firm blog",
    "property dispute legal advice",
    "cheque bounce case updates",
    "High Court judgments analysis",
    "legal rights in India"
  ].join(', '),
  openGraph: {
    title: "Legal Insights Blog | J Banerjee & Co Advocates",
    description: "Expert legal articles on criminal, civil, IPR and family law matters from Kolkata's trusted law firm.",
    url: "https://www.banerjeeadvocates.com/blog",
    type: 'website',
    images: [
      {
        url: 'https://www.banerjeeadvocates.com/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Legal Insights Blog - J Banerjee & Co',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Legal Blog | J Banerjee & Co Advocates",
    description: "Expert analysis on criminal law, IPR, civil litigation and family law matters from Kolkata lawyers",
    images: ['https://www.banerjeeadvocates.com/twitter-blog.jpg'],
  },
  alternates: {
    canonical: 'https://www.banerjeeadvocates.com/blog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  }
};