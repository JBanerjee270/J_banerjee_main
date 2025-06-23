'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, User2, Menu, X, ChevronDown } from 'lucide-react';

export default function TransparentNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const services = [
    { slug: 'intellectual-property-rights', title: 'Intellectual Property Rights' },
    { slug: 'civil-cases', title: 'Civil Cases' },
    { slug: 'criminal-matters', title: 'Criminal Matters' },
    { slug: 'services-matters', title: 'Services Matters' },
    { slug: 'writs', title: 'Writs' },
    { slug: 'divorce-matters', title: 'Divorce Matters' },
    { slug: 'design-matters', title: 'Design Matters' },
    { slug: 'cheque-bounce', title: 'Cheque Bounce Matters' }
  ];

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Services',
      href: '/services',
      submenu: services
    },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0D1B2A]/80 backdrop-blur-md border-b border-white/10 font-serif">
      <div className="text-center text-sm text-white py-1 bg-[#0D1B2A]/90 border-b border-white/10">
        Welcome To J Banerjee & Co Advocates – A Trusted Legal Partner in Kolkata.
      </div>

      <nav className="flex items-center justify-between px-6 md:px-20 py-4 text-white relative">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logoWhite.png" alt="Logo" width={40} height={40} className="object-contain" priority />
          <span className="text-xl font-bold hidden sm:inline">
            J Banerjee<span className="text-orange-400"> & Co</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              {item.submenu ? (
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <span
                    className={`transition duration-300 ${
                      isActive('/services') ? 'text-orange-400' : 'hover:text-orange-400'
                    }`}
                  >
                    {item.label}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  />

                  {/* Submenu Dropdown */}
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-[#0D1B2A] border border-white/10 rounded-lg shadow-lg py-2 z-50">
                      {item.submenu.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className={`block px-4 py-2 hover:bg-[#112B45] hover:text-orange-400 transition ${
                            pathname === `/services/${service.slug}` ? 'text-orange-400' : ''
                          }`}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.href} className="relative group">
                  <span
                    className={`transition duration-300 ${
                      isActive(item.href) ? 'text-orange-400' : 'hover:text-orange-400'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-orange-400 transition-all duration-300 ${
                        isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA + Icons */}
        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="hidden lg:block bg-orange-400 text-[#0D1B2A] px-4 py-2 text-sm font-medium hover:bg-orange-500 transition"
          >
            Book An Appointment
          </Link>
          {/* <div className="flex items-center gap-4">
            <Search size={20} className="hover:text-orange-400 cursor-pointer transition" />
            <User2 size={20} className="hover:text-orange-400 cursor-pointer transition" />
          </div> */}
          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="absolute top-full left-0 w-full bg-[#0D1B2A] text-white px-6 py-4 flex flex-col gap-4 lg:hidden border-t border-white/10"
            onClick={() => setMobileOpen(false)}
          >
            {navItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span
                        className={`${
                          isActive('/services') ? 'text-orange-400' : 'hover:text-orange-400'
                        }`}
                      >
                        {item.label}
                      </span>
                      <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className={`block py-1 ${
                            pathname === `/services/${service.slug}` ? 'text-orange-400' : 'hover:text-orange-400'
                          }`}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    className={`block ${
                      isActive(item.href) ? 'text-orange-400' : 'hover:text-orange-400'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="bg-orange-400 text-[#0D1B2A] text-center px-4 py-2 font-medium hover:bg-orange-500 transition mt-2"
            >
              Book An Appointment
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
