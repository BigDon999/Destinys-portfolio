'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai"; 
import { usePathname } from 'next/navigation';
import styles from "./navbar.module.css";

const navLinks = [
    {id: 1, link:"/", caption: 'Home'},
    {id: 2, link:"/about", caption: 'About'},
    {id: 3, link:"/services", caption: 'Services'},
    {id: 4, link:"/projects", caption: 'Projects'},
    {id: 5, link:"/contact", caption: 'Contact'}
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.navlogo} aria-label="Home">Destiny Ekine</Link>
        
        <ul className={`${styles.navItems} ${isMenuOpen ? styles.showMenu : ''}`}>
          {navLinks.map(({id, link, caption}) => (
            <li key={id}>
              <Link 
                href={link} 
                className={`${styles.navLink} ${pathname === link ? styles.active : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {caption}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.navBtns}>
          <button 
            className={styles.navBtn} 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;