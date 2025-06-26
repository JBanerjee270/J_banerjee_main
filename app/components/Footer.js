"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "home", href: "/" },
  { label: "about us", href: "/about" },
  { label: "services", href: "/services" },
  { label: "blog", href: "/blog" },
  { label: "contact", href: "/contact" },
];

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const renderNavLink = (href, label) => {
    const isActive = pathname === href;
    return (
      <li key={label} className="group relative">
        <Link href={href}>
          <span
            className={`text-sm ${
              isActive ? "text-orange-600" : "text-gray-700"
            } hover:text-orange-500 transition-colors duration-300`}
          >
            {label}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </span>
        </Link>
      </li>
    );
  };

  return (
    <footer className="bg-white font-serif text-gray-700 pt-16 pb-8 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Firm Info */}
        <div>
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold text-neutral-800 leading-tight"
          >
            <h1>J Banerjee & Co Advocates</h1>
          </Link>
          <p className="text-sm mt-2 italic text-gray-600">
            Your Trusted Criminal & IP Rights Lawyer in Kolkata
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-orange-600">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {navLinks.map((link) => renderNavLink(link.href, link.label))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-orange-600">
            Contact Us
          </h4>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <FiMapPin className="text-orange-600 mt-1 flex-shrink-0" />
              <p>
                16 Dr. Suresh Sarkar Road,
                <br />
                Kolkata – 700014, West Bengal
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-orange-600" />
              <a
                href="tel:+919748231841"
                className="hover:text-orange-500 transition-colors"
              >
                +91 97482 31841
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FiMail className="text-orange-600" />
              <a
                href="mailto:info@banerjee.co.in"
                className="hover:text-orange-500 transition-colors"
              >
                info@banerjee.co.in
              </a>
            </div>
            <div className="flex items-start gap-3">
              <FiClock className="text-orange-600 mt-1 flex-shrink-0" />
              <p>Mon – Sat: 10:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-orange-600">
            Legal Services
          </h4>
          <ul className="text-sm text-gray-700 space-y-2">
            {[
              "Intellectual Property Rights",
              "Civil Cases",
              "Criminal Matters",
              "Services Matters",
              "Writs",
              "Divorce Matters",
              "Design Matters",
              "Cheque Bounce Matters",
            ].map((service, i) => (
              <li key={i}>• {service}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} J Banerjee & Co Advocates. All rights
        reserved. Website Designed & Maintained by Digital Exposure Online
        Services.
      </div>
    </footer>
  );
}
