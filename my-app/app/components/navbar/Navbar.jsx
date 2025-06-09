'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { GoMoon, GoSun } from "react-icons/go";  // Fixed import from 'go' instead of 'ai'
import { usePathname } from 'next/navigation';
import styles from "./navbar.module.css";

const data = [
    {id: 1, link:"/", caption: 'Home'},
    {id: 2, link:"/about", caption: 'About'},
    {id: 3, link:"/services", caption: 'Services'},
    {id: 4, link:"/projects", caption: 'Projects'},
    {id: 5, link:"/contact", caption: 'Contact'}
];


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo - use Link instead of li */}
        <Link href="/" className={styles.navlogo}>Destiny Ekine</Link>
        
        {/* Navigation Items - moved ul outside of container div */}
        <ul className={`${styles.navItems} ${isMenuOpen ? styles.showMenu : ''}`}>
          {data.map(({id, link, caption}) => (
            <li key={id}>
              <Link 
                href={link} 
                className={`${styles.navLink} ${pathname === link ? styles.active : ''}`}
              >
                {caption}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.navBtns}>
          {/* Mobile Menu Toggle Button */}
          <button 
            className={styles.navBtn} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;