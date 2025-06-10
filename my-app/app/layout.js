import { Inter } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./globals.css";

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap'
});

export const metadata = {
  title: "Your Portfolio",
  description: "Personal portfolio showcasing my work and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}