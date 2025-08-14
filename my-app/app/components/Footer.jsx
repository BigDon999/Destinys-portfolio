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
        padding: "3rem 2rem",
        marginTop: "2rem",
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
          background: "rgba(0,0,0,0.85)",
          zIndex: 1,
        }}
      />
      
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          maxWidth: "900px",
          width: "100%",
          margin: "0 auto",
          gap: "4rem",
          flexWrap: "wrap",
          boxSizing: "border-box",
        }}
      >
        
        {/* About Section */}
        <div style={{ flex: "1 1 250px", minWidth: "250px" }}>
          <h2 style={{ 
            fontSize: "1.8rem", 
            fontWeight: "bold", 
            marginBottom: "1rem",
            color: "#fff"
          }}>
            Destiny Ekine
          </h2>
          <p style={{ 
            lineHeight: "1.6", 
            color: "#d1d5db",
            fontSize: "0.95rem",
            maxWidth: "280px"
          }}>
            Frontend Developer passionate about building beautiful and functional web applications.
          </p>
        </div>

        {/* Quick Links Section */}
        <div style={{ flex: "1 1 200px", minWidth: "200px" }}>
          <h3 style={{ 
            fontSize: "1.3rem", 
            fontWeight: "600", 
            marginBottom: "1.2rem",
            color: "#fff"
          }}>
            Quick Links
          </h3>
          <ul style={{ 
            listStyle: "none", 
            padding: 0, 
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem"
          }}>
            <li><a href="/" style={linkStyle}>Home</a></li>
            <li><a href="/about" style={linkStyle}>About</a></li>
            <li><a href="/services" style={linkStyle}>Services</a></li>
            <li><a href="/projects" style={linkStyle}>Projects</a></li>
            <li>
              <a 
                href="/contact" 
                style={{
                  backgroundColor: "#374151",
                  color: "#fff",
                  borderRadius: "16px",
                  padding: "0.6rem 1.3rem",
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "all 0.3s ease",
                  fontSize: "0.95rem",
                  marginTop: "0.3rem"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#4b5563";
                  e.target.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#374151";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div style={{ flex: "1 1 200px", minWidth: "200px" }}>
          <h3 style={{ 
            fontSize: "1.3rem", 
            fontWeight: "600", 
            marginBottom: "1.2rem",
            color: "#fff"
          }}>
            Contact
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ 
                width: "20px", 
                display: "flex", 
                justifyContent: "flex-start",
                color: "#9ca3af"
              }}>
                <FaPhone />
              </div>
              <span style={{ 
                marginLeft: "0.8rem", 
                color: "#d1d5db",
                fontSize: "0.95rem"
              }}>
                +234 805 107 4795
              </span>
            </div>
            
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ 
                width: "20px", 
                display: "flex", 
                justifyContent: "flex-start",
                color: "#9ca3af"
              }}>
                <FaEnvelope />
              </div>
              <span style={{ 
                marginLeft: "0.8rem", 
                color: "#d1d5db",
                fontSize: "0.95rem"
              }}>
                destinyekine9@gmail.com
              </span>
            </div>
            
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ 
                width: "20px", 
                display: "flex", 
                justifyContent: "flex-start",
                color: "#9ca3af"
              }}>
                <FaMapMarkerAlt />
              </div>
              <span style={{ 
                marginLeft: "0.8rem", 
                color: "#d1d5db",
                fontSize: "0.95rem"
              }}>
                Port Harcourt, Nigeria
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          textAlign: "center",
          paddingTop: "2.5rem",
          marginTop: "2rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          color: "#9ca3af",
          fontSize: "0.9rem",
          letterSpacing: "0.025em",
        }}
      >
        © {new Date().getFullYear()} Destiny Ekine. All rights reserved.
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "#d1d5db",
  textDecoration: "none",
  fontSize: "0.95rem",
  fontWeight: "500",
  padding: "0.3rem 0",
  display: "block",
  transition: "all 0.3s ease",
};