import './globals.css';
import { Inter } from 'next/font/google';
import ClientLayout from './components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'J Banerjee & Co Advocates',
  description: 'A Trusted Legal Partner in Kolkata',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
