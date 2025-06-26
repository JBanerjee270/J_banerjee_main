'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { 
  MapPin, Phone, Mail, Award, Briefcase, Scale, 
  Gavel, Landmark, FileText, Users, Clock, BookOpen 
} from 'lucide-react';

const AboutPage = () => {
  const services = [
    {
      title: "Intellectual Property Rights",
      icon: <FileText className="text-orange-400" />,
      description: "Comprehensive protection for trademarks, copyrights, and patents with strategic enforcement."
    },
    {
      title: "Civil Cases",
      icon: <Scale className="text-orange-400" />,
      description: "Expert representation in property disputes, contracts, and personal injury matters."
    },
    {
      title: "Criminal Matters",
      icon: <Gavel className="text-orange-400" />,
      description: "Aggressive defense strategies for all criminal charges from bail to appeals."
    },
    {
      title: "Services Matters",
      icon: <Briefcase className="text-orange-400" />,
      description: "Specialized counsel for employment and service-related legal issues."
    },
    {
      title: "Writs",
      icon: <BookOpen className="text-orange-400" />,
      description: "Constitutional remedies and judicial review petitions in High Courts."
    },
    {
      title: "Divorce Matters",
      icon: <Users className="text-orange-400" />,
      description: "Sensitive handling of family law including divorce, alimony and custody."
    },
    {
      title: "Design Matters",
      icon: <Award className="text-orange-400" />,
      description: "Protection and litigation for industrial designs and creative works."
    }
  ];

  const stats = [
    { value: "20+", label: "Years Experience", icon: <Clock size={24} className="text-orange-400" /> },
    { value: "411", label: "Projects Done", icon: <Briefcase size={24} className="text-orange-400" /> },
    { value: "1600+", label: "Happy Clients", icon: <Users size={24} className="text-orange-400" /> }
  ];

  const achievements = [
    {
      year: "2005",
      title: "First High-Profile Criminal Case Win",
      description: "Successfully defended client in landmark criminal case that set precedent"
    },
    {
      year: "2012",
      title: "Trademark Law Specialization",
      description: "Recognized as leading IPR lawyer by Kolkata Legal Association"
    },
    {
      year: "2018",
      title: "Legal Tech Adoption",
      description: "Pioneered digital case management systems in practice"
    },
    {
      year: "2023",
      title: "Rising Star Award",
      description: "Honored for excellence in criminal and civil litigation"
    }
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
      {/* Hero Section with Parallax */}
      <section className="relative font-serif bg-[#0d1b2a] text-white h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: yBg }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/bg.webp" 
            alt="Legal Background" 
            fill 
            className="object-cover opacity-60"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/90 via-[#0d1b2a]/70 to-[#0d1b2a]/90 z-0" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-sm uppercase tracking-widest text-orange-400 mb-4"
          >
            Excellence in Legal Practice
          </motion.p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            About <span className="text-orange-400 italic">J Banerjee & Co</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-sm md:text-sm text-gray-300 max-w-2xl mx-auto"
          >
            Your trusted legal partner in Kolkata with over 20 years of experience delivering justice across diverse legal domains.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-3 border border-orange-400 text-white font-medium rounded-md hover:bg-orange-400 hover:text-[#0d1b2a] transition-all duration-300 group"
            >
              Book Consultation
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Founder Section */}
      <section 
        ref={ref}
        className="font-serif py-28 bg-white text-[#0d1b2a] px-6 md:px-20 relative overflow-hidden"
      >
        {/* Floating decorative elements */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.05 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute -left-20 top-1/4 text-[#0d1b2a] text-[200px] font-bold opacity-5 select-none"
        >
          LAW
        </motion.div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-orange-400/20 rounded-xl -z-10"></div>
            <Image
              src="/women.png"
              alt="Advocate Jaya Banerjee"
              width={600}
              height={800}
              className="rounded-lg shadow-2xl object-cover h-full max-h-[600px]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-[#0d1b2a] text-white p-6 rounded-lg shadow-xl border border-white/10"
            >
              <div className="flex items-center gap-3">
                <Award className="text-orange-400" size={32} />
                <div>
                  <p className="text-xs text-gray-300">AWARD WINNING</p>
                  <p className="font-bold">Legal Excellence 2023</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-orange-400">Advocate Jaya Banerjee</span><br />
              Your Trusted Legal Counsel in Kolkata
            </h2>
            
            <p className="mb-6 text-gray-700 leading-relaxed">
              Meet Jaya Banerjee, a distinguished legal professional renowned for her expertise across various domains of law. With a stellar reputation as a criminal lawyer, trademark lawyer, copyright lawyer, and design lawyer in Kolkata, Jaya stands at the forefront of the legal landscape, guiding clients with precision and poise.
            </p>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 leading-relaxed">
                As the cornerstone of one of the best law firms in the industry, Jayas dedication to excellence and unwavering commitment to justice have earned her widespread acclaim and admiration. In the realm of trademark law, Jaya Banerjee is a formidable force, adept at navigating the intricacies of intellectual property rights with finesse.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Her keen insight and meticulous approach ensure that clients receive unparalleled guidance in protecting their valuable trademarks, safeguarding their brand identity, and mitigating risks in an ever-evolving legal landscape.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#0d1b2a] text-white p-4 rounded-lg text-center border border-white/10 hover:border-orange-400/50 transition-colors"
                >
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-bold text-orange-400">{stat.value}</p>
                  <p className="text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <a 
                href="#achievements" 
                className="inline-flex items-center px-6 py-3 bg-orange-400 text-[#0d1b2a] font-medium rounded-md hover:bg-orange-500 transition-all duration-300 group"
              >
                View Our Achievements
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section id="achievements" className="font-serif py-28 bg-[#f8f9fa] text-[#0d1b2a] px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-orange-400 italic">Milestones</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Key achievements and recognition that define our journey in legal excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-1 bg-orange-400/30 -translate-x-1/2"></div>
            
            <div className="space-y-16">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  {/* Year badge */}
                  <div className="w-1/2 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-[#0d1b2a] text-white border-4 border-orange-400 shadow-lg"
                    >
                      <span className="text-xl font-bold">{item.year}</span>
                    </motion.div>
                  </div>
                  
                  {/* Content card */}
                  <div className="w-1/2">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className={`p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-white ml-8' : 'bg-[#0d1b2a] text-white mr-8'}`}
                    >
                      <h3 className={`text-xl font-bold mb-2 ${index % 2 === 0 ? 'text-[#0d1b2a]' : 'text-orange-400'}`}>
                        {item.title}
                      </h3>
                      <p className={index % 2 === 0 ? 'text-gray-600' : 'text-gray-300'}>
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative font-serif bg-cover bg-center bg-no-repeat bg-fixed py-28 bg-[#0d1b2a] text-white px-6 md:px-20"
      style={{ backgroundImage: `url('/india.webp')` }}
      >
        {/* Overlay */}
      <div className="absolute inset-0 bg-[#112B45]/85 z-0" />
        <div className="relative max-w-7xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-orange-400 italic">Practice Areas</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Comprehensive legal services tailored to meet your specific needs with expertise and dedication
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-[#112B45] p-8 rounded-xl border border-white/10 hover:border-orange-400/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-orange-400/20 p-3 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-300">
                  {service.description}
                </p>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-6 inline-block"
                >
                  <a 
                    href="#contact" 
                    className="text-orange-400 text-sm font-medium flex items-center gap-1"
                  >
                    Learn more
                    <span className="transition-transform duration-300">→</span>
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="font-serif py-28 bg-white text-[#0d1b2a] px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client <span className="text-orange-400 italic">Testimonials</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              What our clients say about our legal services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-orange-400/20 flex items-center justify-center">
                    <span className="text-orange-400 font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Client Name</h4>
                    <p className="text-sm text-gray-500">Business Owner</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  J Banerjee & Co provided exceptional legal representation in our trademark case. Their attention to detail and strategic approach was impressive.
                </p>
                <div className="flex gap-1 text-orange-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="font-serif py-28 bg-[#0d1b2a] text-white px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Get in <span className="text-orange-400">Touch</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-orange-400/20 p-4 rounded-full flex-shrink-0">
                  <MapPin className="text-orange-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Our Office</h4>
                  <p className="text-gray-300">16 Dr. Suresh Sarkar Road, Kolkata – 700014</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-orange-400/20 p-4 rounded-full flex-shrink-0">
                  <Phone className="text-orange-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Phone</h4>
                  <p className="text-gray-300">+91 97482 31841</p>
                  <p className="text-gray-300 mt-1">Mon-Fri: 10AM - 6PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-orange-400/20 p-4 rounded-full flex-shrink-0">
                  <Mail className="text-orange-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Email</h4>
                  <p className="text-gray-300">info@banerjee.co.in</p>
                  <p className="text-gray-300 mt-1">Response within 24 hours</p>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ y: -3 }}
                      className="bg-[#112B45] p-3 rounded-full hover:bg-orange-400 hover:text-[#0d1b2a] transition-colors"
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#112B45] p-8 md:p-10 rounded-xl shadow-2xl border border-white/10"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Schedule a Consultation</h3>
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-[#0d1b2a] border border-white/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition" 
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-[#0d1b2a] border border-white/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition" 
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-[#0d1b2a] border border-white/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition" 
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="service" className="block mb-2 font-medium">Service Needed</label>
                <select 
                  id="service" 
                  className="w-full bg-[#0d1b2a] border border-white/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition appearance-none"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full bg-[#0d1b2a] border border-white/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition" 
                  required
                ></textarea>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="pt-2"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full bg-orange-400 text-[#0d1b2a] font-semibold py-4 px-6 rounded-lg hover:bg-orange-500 transition flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
 const metadata = {
  title: "Advocate Jaya Banerjee | Best Criminal & Divorce Lawyer in Kolkata | High Court Attorney",
  description: "Trusted criminal lawyer, divorce attorney, and High Court advocate in Kolkata with 20+ years experience. Expert trademark registration and litigation services. Free initial consultation.",
  keywords: [
    "best criminal lawyer in Kolkata",
    "top divorce lawyer Kolkata",
    "trademark attorney near me",
    "High Court advocate West Bengal",
    "experienced litigation lawyer",
    "family court attorney Kolkata",
    "IPR lawyer for trademark registration",
    "cheque bounce case specialist",
    "reputed civil lawyer Kolkata",
    "legal consultation services",
    "property dispute attorney",
    "service matter lawyer",
    "writ petition expert",
    "design protection legal help",
    "reliable law firm in Kolkata"
  ].join(', '),
  openGraph: {
    title: "Advocate Jaya Banerjee | Criminal & Divorce Lawyer | Kolkata High Court",
    description: "20+ years experienced lawyer handling criminal cases, divorce matters, and trademark litigation in Kolkata High Court. Free initial consultation available.",
    url: "https://www.banerjeeadvocates.com/about",
    type: 'profile',
    profile: {
      firstName: 'Jaya',
      lastName: 'Banerjee',
      gender: 'Female',
    },
    images: [
      {
        url: 'https://www.banerjeeadvocates.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Advocate Jaya Banerjee - Kolkata Lawyer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Advocate Jaya Banerjee | Kolkata's Trusted Lawyer",
    description: "Specializing in criminal defense, divorce cases & trademark law. High Court registered advocate serving clients for 20+ years.",
    images: ['https://www.banerjeeadvocates.com/twitter-card.jpg'],
  },
  alternates: {
    canonical: 'https://www.banerjeeadvocates.com/about',
  }
};

