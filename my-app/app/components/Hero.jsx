"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hi, I'm Destiny";

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Typing effect
    if (isLoaded && currentIndex < fullText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150); // Typing speed
      return () => clearTimeout(typingTimer);
    }
  }, [currentIndex, isLoaded, fullText]);

  const styles = {
    hero: {
      position: "relative",
      width: "100vw",
      maxWidth: "100vw",
      height: "100vh",
      overflow: "hidden",
      fontFamily: "sans-serif",
      boxSizing: "border-box",
    },
    backgroundImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 1,
      pointerEvents: "none",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
      zIndex: 2,
    },
    content: {
      position: "relative",
      zIndex: 3,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: "8%",
      paddingRight: "8%",
      color: "#fff",
      textAlign: "center",
      width: "100vw",
      maxWidth: "100vw",
      boxSizing: "border-box",
    },
    header: {
      fontSize: "3.1rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      maxWidth: "600px",
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? "translateY(0)" : "translateY(-50px)",
      transition: "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      transitionDelay: "0.2s",
      position: "relative",
    },
    subtext: {
      fontSize: "1.2rem",
      marginBottom: "2rem",
      maxWidth: "500px",
      lineHeight: "1.5",
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? "translateY(0)" : "translateY(30px)",
      transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      transitionDelay: "0.6s",
    },
    buttonRow: {
      display: "flex",
      gap: "1rem",
      marginBottom: "1.5rem",
      flexWrap: "wrap",
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? "translateY(0)" : "translateY(30px)",
      transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      transitionDelay: "1s",
    },
    button: {
      padding: "0.75rem 1.5rem",
      backgroundColor: "#000",
      color: "#fff",
      border: "2px solid #fff",
      borderRadius: "25px",
      fontSize: "1rem",
      fontWeight: "500",
      textDecoration: "none",
      cursor: "pointer",
      transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      transform: "translateY(0) scale(1)",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    },
    buttonHover: {
      backgroundColor: "#fff",
      color: "#000",
      transform: "translateY(-3px) scale(1.05)",
      boxShadow: "0 8px 25px rgba(255,255,255,0.2)",
    },
    bottomRow: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      flexWrap: "wrap",
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? "translateY(0)" : "translateY(30px)",
      transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      transitionDelay: "1.3s",
    },
    downloadBtn: {
      padding: "0.6rem 1.2rem",
      backgroundColor: "transparent",
      color: "#fff",
      border: "2px solid #fff",
      borderRadius: "25px",
      fontSize: "0.95rem",
      textDecoration: "none",
      cursor: "pointer",
      display: "inline-block",
      transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      transform: "translateY(0) scale(1)",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    },
    downloadBtnHover: {
      backgroundColor: "#fff",
      color: "#000",
      transform: "translateY(-3px) scale(1.05)",
      boxShadow: "0 8px 25px rgba(255,255,255,0.2)",
    },
    socialRow: {
      display: "flex",
      gap: "1rem",
    },
    socialIcon: {
      color: "#fff",
      fontSize: "1.5rem",
      cursor: "pointer",
      transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      transform: "translateY(0) scale(1) rotate(0deg)",
      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
    },
    socialIconHover: {
      transform: "translateY(-4px) scale(1.2) rotate(5deg)",
      filter: "drop-shadow(0 6px 12px rgba(255,255,255,0.4))",
    },

    // Responsive styles
    "@media (maxWidth: 768px)": {
      header: {
        fontSize: "2.5rem",
      },
      subtext: {
        fontSize: "1rem",
      },
      content: {
        paddingLeft: "5%",
        paddingRight: "5%",
      },
    },
  };

  return (
    <section style={styles.hero}>
      <div style={styles.backgroundImage}>
        <Image
          src="/assets/background2.jpg"
          alt="Background"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center", zIndex: 1 }}
        />
      </div>
      <div style={styles.overlay}></div>

      {/* Fade to black at the bottom */}
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "120px",
          zIndex: 4,
          pointerEvents: "none",
          background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 100%)",
        }}
      />

      <div style={styles.content}>
        <h1 style={{ ...styles.header }} className="hero-header">
          {displayedText}
          <span 
            style={{
              display: currentIndex < fullText.length ? 'inline-block' : 'none',
              width: '3px',
              height: '1.2em',
              backgroundColor: '#fff',
              marginLeft: '2px',
              animation: 'blink 1s infinite',
              verticalAlign: 'top'
            }}
          />
        </h1>
        <p style={{ ...styles.subtext }} className="hero-subtext">
          I am a creative Frontend developer who builds modern, responsive, and visually
          stunning web experiences.
        </p>
        <div style={styles.buttonRow}>
          <Link
            href="/projects"
            style={{ ...styles.button }}
            className="hero-button"
            onMouseEnter={(e) =>
              Object.assign(e.target.style, styles.buttonHover)
            }
            onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            style={{ ...styles.button }}
            className="hero-button"
            onMouseEnter={(e) =>
              Object.assign(e.target.style, styles.buttonHover)
            }
            onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}
          >
            Hire Me
          </Link>
        </div>

        {/* Download CV + Social Icons */}
        <div style={styles.bottomRow}>
          <a
            href="/cv.pdf"
            download
            style={styles.downloadBtn}
            onMouseEnter={(e) =>
              Object.assign(e.target.style, styles.downloadBtnHover)
            }
            onMouseLeave={(e) =>
              Object.assign(e.target.style, styles.downloadBtn)
            }
          >
            Download CV
          </a>

          <div style={styles.socialRow}>
            <Link href="https://wa.me/+2348051074795" target="_blank">
              <FaWhatsapp
                style={styles.socialIcon}
                onMouseEnter={(e) =>
                  Object.assign(e.target.style, styles.socialIconHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.target.style, styles.socialIcon)
                }
              />
            </Link>
            <Link href="https://www.instagram.com/bigdo_n999/profilecard/?igsh=MW1xdWt5ZzdxcjBxcQ==" target="_blank">
              <FaInstagram
                style={styles.socialIcon}
                onMouseEnter={(e) =>
                  Object.assign(e.target.style, styles.socialIconHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.target.style, styles.socialIcon)
                }
              />
            </Link>
            <Link href="https://x.com/bahd_command?t=Bck2y48165RR3VXgyFD3Bg&s=09" target="_blank">
              <FaXTwitter
                style={styles.socialIcon}
                onMouseEnter={(e) =>
                  Object.assign(e.target.style, styles.socialIconHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.target.style, styles.socialIcon)
                }
              />
            </Link>
            <Link href="https://www.linkedin.com/in/destiny-ekine-2a5ab7279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
              <FaLinkedin
                style={styles.socialIcon}
                onMouseEnter={(e) =>
                  Object.assign(e.target.style, styles.socialIconHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.target.style, styles.socialIcon)
                }
              />
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
        
        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }
        
        /* Individual social icon animations with delays */
        .social-icon:nth-child(1) {
          animation-delay: 1.4s;
        }
        .social-icon:nth-child(2) {
          animation-delay: 1.5s;
        }
        .social-icon:nth-child(3) {
          animation-delay: 1.6s;
        }
        .social-icon:nth-child(4) {
          animation-delay: 1.7s;
        }
        
        /* Pulse animation for buttons on load */
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 4px 15px rgba(255,255,255,0.2);
          }
          50% {
            box-shadow: 0 8px 25px rgba(255,255,255,0.4);
          }
          100% {
            box-shadow: 0 4px 15px rgba(255,255,255,0.2);
          }
        }
        
        /* Floating animation for social icons */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .hero-button {
          animation: pulseGlow 3s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        @media (min-width: 1024px) {
          .hero-header {
            font-size: 6rem !important;
          }
          .hero-subtext {
            font-size: 1.7rem !important;
          }
          .hero-button {
            font-size: 1.25rem !important;
            padding: 1rem 2.2rem !important;
          }
        }
        
        /* Blinking cursor animation */
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
        
        /* Stagger animation for buttons */
        .hero-button:first-child {
          animation-delay: 1.1s;
        }
        .hero-button:last-child {
          animation-delay: 1.2s;
        }
      `}</style>
    </section>
  );
}