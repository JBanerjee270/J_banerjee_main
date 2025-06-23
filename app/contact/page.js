'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService Needed: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919748231841?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0d1b2a] text-white font-serif">
      {/* Hero Section */}
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
                  Contact <span className="text-orange-400 italic"> Us</span>
                </h1>
                <p className="text-sm text-gray-300">
                 Get in touch with our legal experts for consultation and support
                </p>
              </motion.div>
            </section>

      {/* Main Content */}
      <div className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Send Us a <span className="text-orange-400">Message</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#112B45] border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#112B45] border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#112B45] border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block mb-2">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#112B45] border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <option value="">Select a service</option>
                  <option value="Intellectual Property Rights">Intellectual Property Rights</option>
                  <option value="Civil Cases">Civil Cases</option>
                  <option value="Criminal Matters">Criminal Matters</option>
                  <option value="Service Matters">Service Matters</option>
                  <option value="Writs">Writs</option>
                  <option value="Divorce Matters">Divorce Matters</option>
                  <option value="Design Matters">Design Matters</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#112B45] border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-400 text-[#0d1b2a] font-bold py-4 px-6 rounded-lg hover:bg-orange-500 transition flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                Send via WhatsApp
              </button>
            </form>
          </div>
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-[#112B45] p-8 rounded-lg border border-white/10 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-400/20 p-2 rounded-full">
                    <MapPin className="text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Office</h4>
                    <p>16 Dr. Suresh Sarkar Road, Kolkata – 700014</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-orange-400/20 p-2 rounded-full">
                    <Phone className="text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+919748231841" className="hover:text-orange-400 transition">+91 97482 31841</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-orange-400/20 p-2 rounded-full">
                    <Mail className="text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:info@banerjee.co.in" className="hover:text-orange-400 transition">info@banerjee.co.in</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-orange-400/20 p-2 rounded-full">
                    <Clock className="text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Working Hours</h4>
                    <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="h-96 rounded-lg overflow-hidden shadow-lg border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.107281118644!2d88.3578743153625!3d22.5724859851819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a7f1318a6b%3A0x6a1a5d5b5e5b5e5b!2s16%20Dr.%20Suresh%20Sarkar%20Rd%2C%20Kolkata%2C%20West%20Bengal%20700014!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="J Banerjee & Co Advocates Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}