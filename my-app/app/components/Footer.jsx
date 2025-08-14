"use client";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const navLinks = [
  { id: 1, link: "/", caption: "Home" },
  { id: 2, link: "/about", caption: "About" },
  { id: 3, link: "/services", caption: "Services" },
  { id: 4, link: "/projects", caption: "Projects" },
  { id: 5, link: "/contact", caption: "Contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        backgroundImage: "url(/assets/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        padding: "2rem 1rem",
        marginTop: "2rem",
        maxWidth: "100vw",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.8)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          maxWidth: "100vw",
          width: "100%",
          margin: "0 auto",
          gap: "1.2rem",
          boxSizing: "border-box",
        }}
      >
        {/* Logo / About */}
        <div style={{ flex: "1 1 250px", textAlign: "left" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Destiny Ekine
          </h2>
          <p style={{ marginTop: "0.5rem", lineHeight: "1.5" }}>
            Frontend Developer which is passionate about building beautiful{" "}
            <br /> and functional web applications.
          </p>
        </div>
        {/* Quick Links */}
        <div style={{ flex: "1 1 200px", textAlign: "left" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            Quick Links
          </h3>
          <ul style={{ marginTop: "0.5rem", listStyle: "none", padding: 0 }}>
            {navLinks.map(({ id, link, caption }) => (
              <li key={id} style={{ marginBottom: "0.5rem" }}>
                {caption === "Contact" ? (
                  <a
                    href={link}
                    style={{
                      backgroundColor: "#222",
                      color: "#fff",
                      borderRadius: "16px",
                      padding: "0.6rem 1.4rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      display: "inline-block",
                      transition: "background 0.3s, color 0.3s",
                    }}
                    className="footer-contact-btn"
                  >
                    {caption}
                  </a>
                ) : (
                  <a
                    href={link}
                    style={{
                      color: "#ccc",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      padding: "0.5rem 0.8rem",
                      borderRadius: "8px",
                      transition: "background 0.3s, color 0.3s",
                      display: "inline-block",
                    }}
                    className="footer-nav-link"
                  >
                    {caption}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div style={{ flex: "1 1 200px", textAlign: "left" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Contact</h3>
          <ul style={{ marginTop: "0.5rem", listStyle: "none", padding: 0 }}>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <FaPhone style={{ marginRight: "0.5rem" }} /> +234 805 107 4795
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <FaEnvelope style={{ marginRight: "0.5rem" }} />{" "}
              destinyekine9@gmail.com
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaMapMarkerAlt style={{ marginRight: "0.5rem" }} /> Port
              Harcourt, Nigeria
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright Bar */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          padding: "1rem 0 0.5rem 0",
          color: "#ccc",
          fontSize: "0.95rem",
          letterSpacing: "0.02em",
          zIndex: 2,
          position: "relative",
        }}
      >
        © {new Date().getFullYear()} Destiny Ekine. All rights reserved.
      </div>
      <style jsx global>{`
        .footer-nav-link:hover {
          color: #fff !important;
          background-color: #222 !important;
        }
        .footer-contact-btn:hover {
          background-color: #444 !important;
        }
      `}</style>
    </footer>
  );
}
