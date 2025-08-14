"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: 1, link: "/", caption: "Home" },
  { id: 2, link: "/about", caption: "About" },
  { id: 3, link: "/services", caption: "Services" },
  { id: 4, link: "/projects", caption: "Projects" },
  { id: 5, link: "/contact", caption: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname() || "/";

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile && isOpen) {
        setIsOpen(false);
      }
    };

    // Set initial state
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest("nav")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navbarStyle = {
    position: "fixed",
    top: "1rem",
    left: isMobile ? "2vw" : "50%",
    transform: isMobile ? "none" : "translateX(-50%)",
    width: isMobile ? "96vw" : "auto",
    maxWidth: isMobile ? "420px" : "800px",
    minWidth: isMobile ? "0" : "auto",
    zIndex: 1000,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderRadius: isMobile ? "20px" : "25px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    padding: isMobile ? "0.8rem 1rem" : "1rem 2rem",
    fontFamily: "'Inter', -apple-system, sans-serif",
    boxSizing: "border-box",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: isMobile ? "space-between" : "center",
    gap: isMobile ? "0" : "2.5rem",
    position: "relative",
  };

  const logoStyle = {
    fontSize: isMobile ? "1.4rem" : "1.6rem",
    fontWeight: 700,
    color: "#111",
    textDecoration: "none",
    fontFamily: "'Nico Moji', sans-serif",
    letterSpacing: "-0.5px",
  };

  const desktopLinksStyle = {
    display: isMobile ? "none" : "flex",
    alignItems: "center",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const linkStyle = (isActive) => ({
    color: isActive ? "#111" : "#555",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: isActive ? 600 : 500,
    padding: "0.5rem 0.8rem",
    borderRadius: "8px",
    borderBottom: isActive ? "2px solid #111" : "2px solid transparent",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
  });

  const mobileButtonStyle = {
    display: isMobile ? "flex" : "none",
    background: "none",
    border: "none",
    fontSize: "1.3rem",
    color: "#333",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
    borderRadius: "8px",
    transition: "all 0.2s ease",
    minWidth: "40px",
    minHeight: "40px",
  };

  const dropdownStyle = {
    position: "absolute",
    top: "calc(100% + 0.5rem)",
    right: isMobile ? "0.5rem" : "0",
    left: "auto",
    width: isMobile ? "170px" : "auto",
    maxWidth: isMobile ? "90vw" : "420px",
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    padding: "1rem",
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0)" : "translateY(-10px)",
    visibility: isOpen ? "visible" : "hidden",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxSizing: "border-box",
  };

  const mobileLinksStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const mobileLinkStyle = (isActive) => ({
    color: isActive ? "#fff" : "#333",
    backgroundColor: isActive ? "#111" : "transparent",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: isActive ? 600 : 500,
    padding: "0.8rem 1.2rem",
    borderRadius: "12px",
    transition: "all 0.2s ease",
    display: "block",
  });

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nico+Moji&family=Inter:wght@400;500;600;700&display=swap");

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          overflow-x: hidden;
        }

        /* Remove blue border on desktop nav links/buttons */
        @media (min-width: 769px) {
          .nav-link:focus,
          .mobile-link:focus,
          .mobile-button:focus {
            outline: none !important;
            box-shadow: none !important;
          }
        }

        /* Mobile specific styles */
        @media (max-width: 768px) {
          .mobile-button:hover {
            background-color: rgba(0, 0, 0, 0.05);
          }

          .mobile-button:active {
            transform: scale(0.95);
          }
        }

        /* Desktop hover effects */
        @media (min-width: 769px) {
          .nav-link:hover,
          .mobile-link:hover {
            color: #fff !important;
            background-color: #222 !important;
          }
        }

        /* Accessibility */
        .nav-link:focus,
        .mobile-link:focus,
        .mobile-button:focus {
          outline: 2px solid #4285f4;
          outline-offset: 2px;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <nav style={navbarStyle}>
        <div style={containerStyle}>
          {/* Logo */}
          <Link href="/" style={logoStyle}>
            Destiny Ekine
          </Link>

          {/* Desktop Navigation */}
          <ul style={desktopLinksStyle}>
            {navLinks.map(({ id, link, caption }) => {
              const isActive = pathname === link;
              if (caption === "Contact") {
                return (
                  <li key={id}>
                    <Link
                      href={link}
                      style={{
                        ...linkStyle(isActive),
                        backgroundColor: isActive ? "#222" : "#000",
                        color: "#fff",
                        borderRadius: "16px",
                        padding: "0.6rem 1.4rem",
                        borderBottom: "none",
                        fontWeight: 600,
                        transition: "background 0.3s, color 0.3s",
                      }}
                      className="nav-link contact-btn"
                    >
                      {caption}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={id}>
                  <Link
                    href={link}
                    style={linkStyle(isActive)}
                    className="nav-link"
                  >
                    {caption}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            style={mobileButtonStyle}
            className="mobile-button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Dropdown - Only show on mobile and when open */}
          {isMobile && isOpen && (
            <div style={dropdownStyle}>
              <ul style={mobileLinksStyle}>
                {navLinks.map(({ id, link, caption }) => {
                  const isActive = pathname === link;
                  if (caption === "Contact") {
                    return (
                      <li key={id}>
                        <Link
                          href={link}
                          style={{
                            ...mobileLinkStyle(isActive),
                            backgroundColor: isActive ? "#222" : "#000",
                            color: "#fff",
                            borderRadius: "16px",
                            padding: "0.6rem 1.4rem",
                            borderBottom: "none",
                            fontWeight: 600,
                            transition: "background 0.3s, color 0.3s",
                          }}
                          className="mobile-link contact-btn"
                          onClick={closeMenu}
                        >
                          {caption}
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li key={id}>
                      <Link
                        href={link}
                        style={mobileLinkStyle(isActive)}
                        className="mobile-link"
                        onClick={closeMenu}
                      >
                        {caption}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
