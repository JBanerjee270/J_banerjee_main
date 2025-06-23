
"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Gavel, Scale, FileText, Landmark, Users, BookOpen, Award } from 'lucide-react';

const services = [
  {
    slug: "intellectual-property-rights",
    title: "Intellectual Property Rights",
    icon: <FileText className="text-orange-400" size={24} />,
    description: "Comprehensive protection for trademarks, copyrights, and patents with strategic enforcement."
  },
  {
    slug: "civil-cases",
    title: "Civil Cases",
    icon: <Scale className="text-orange-400" size={24} />,
    description: "Expert representation in property disputes, contracts, and personal injury matters."
  },
  {
    slug: "criminal-matters",
    title: "Criminal Matters",
    icon: <Gavel className="text-orange-400" size={24} />,
    description: "Aggressive defense strategies for all criminal charges from bail to appeals."
  },
  {
    slug: "services-matters",
    title: "Services Matters",
    icon: <Landmark className="text-orange-400" size={24} />,
    description: "Specialized counsel for employment and service-related legal issues."
  },
  {
    slug: "writs",
    title: "Writs",
    icon: <BookOpen className="text-orange-400" size={24} />,
    description: "Constitutional remedies and judicial review petitions in High Courts."
  },
  {
    slug: "divorce-matters",
    title: "Divorce Matters",
    icon: <Users className="text-orange-400" size={24} />,
    description: "Sensitive handling of family law including divorce, alimony and custody."
  },
  {
    slug: "design-matters",
    title: "Design Matters",
    icon: <Award className="text-orange-400" size={24} />,
    description: "Protection and litigation for industrial designs and creative works."
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#0d1b2a] text-white font-serif px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-orange-400 italic">Legal Services</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive legal solutions tailored to your specific needs with expertise and dedication
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.slug}
              href={`/services/${service.slug}`}
              className="bg-[#112B45] p-8 rounded-xl border border-white/10 hover:border-orange-400/50 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-400/20 p-3 rounded-full">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold">{service.title}</h2>
              </div>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <span className="text-orange-400 group-hover:underline inline-flex items-center">
                Learn more <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}