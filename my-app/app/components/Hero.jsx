"use client";

import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
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
      fontSize: "2.4rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      maxWidth: "600px",
    },
    subtext: {
      fontSize: "1.2rem",
      marginBottom: "2rem",
      maxWidth: "500px",
      lineHeight: "1.5",
    },
    buttonRow: {
      display: "flex",
      gap: "1rem",
      marginBottom: "1.5rem",
      flexWrap: "wrap",
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
      transition: "all 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#fff",
      color: "#000",
    },
    bottomRow: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      flexWrap: "wrap",
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
      transition: "all 0.3s ease",
    },
    downloadBtnHover: {
      backgroundColor: "#fff",
      color: "#000",
    },
    socialRow: {
      display: "flex",
      gap: "1rem",
    },
    socialIcon: {
      color: "#fff",
      fontSize: "1.5rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
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
          Designing & Developing Digital
          <br />
          Experiences That Stand Out
          <br />
        </h1>
        <p style={{ ...styles.subtext }} className="hero-subtext">
          I am a creative developer who builds modern, responsive, and visually
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
            href="/hire"
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
            <Link href="https://instagram.com/yourusername" target="_blank">
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
            <Link href="https://x.com/yourusername" target="_blank">
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
            <Link href="https://linkedin.com/in/yourusername" target="_blank">
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
        @media (min-width: 1024px) {
          .hero-header {
            font-size: 4rem !important;
          }
          .hero-subtext {
            font-size: 1.7rem !important;
          }
          .hero-button {
            font-size: 1.25rem !important;
            padding: 1rem 2.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
