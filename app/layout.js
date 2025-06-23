



import Footer from "./components/Footer";
import TransparentNavbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning >
        <TransparentNavbar />
        {children}
        <ScrollToTopButton/>
        <Footer />
      </body>
    </html>
  );
}