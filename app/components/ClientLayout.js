'use client';

import TransparentNavbar from './Navbar';
import ScrollToTopButton from './ScrollToTopButton';
import Footer from './Footer';

export default function ClientLayout({ children }) {
  return (
    <>
      <TransparentNavbar />
      {children}
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
