"use client"
import React, { useEffect, useState } from 'react';
import styles from './footer.module.css';
import { FaFacebook } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  const [year, setYear] = useState();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <p>Destiny Ekine</p>
        </div>
        <div className={styles.footerLinks}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
        <div className={styles.footerSocial}>
          <a href="https://www.facebook.com/profile.php?id=61577223774096" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://wa.me/+2348178662529" aria-label="Whatsapp">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com/bigdo_n999" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {year} Destiny Ekine. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;