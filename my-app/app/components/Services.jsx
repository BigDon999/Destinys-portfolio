"use client";

import { useState } from "react";
import {
  FiPenTool,
  FiLayout,
  FiCode,
  FiFeather,
  FiArrowRight,
} from "react-icons/fi";
import Image from "next/image";

const Services = () => {
  const [activeCard, setActiveCard] = useState(0); // First card active by default

  const services = [
   
    {
      icon: <FiFeather size={20} />,
      title: "Logo Design",
      description:
        "Unique and memorable logos that represent your brand identity.",
    },
    {
      icon: <FiLayout size={20} />,
      title: "Web Design",
      description:
        "Responsive, user-friendly interfaces optimized for conversions.",
    },
    {
      icon: <FiCode size={20} />,
      title: "Web Development",
      description:
        "Fast, secure websites built with modern technologies like Next.js and React.",
    },
  ];

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const servicesContainerStyle = {
    maxWidth: "100vw",
    width: "100%",
    margin: "0 auto",
    padding: "3rem 2rem",
    display: "flex",
    gap: "2rem",
    alignItems: "flex-start",
    backgroundColor: "#000",
    minHeight: "auto",
    justifyContent: "center",
    boxSizing: "border-box",
  };

  const servicesContentStyle = {
    flex: "0 0 400px",
    minWidth: 0,
  };

  const sectionTitleStyle = {
    color: "#fff",
    marginBottom: "2rem",
    fontSize: "2rem",
    fontWeight: 600,
  };

  const servicesGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "0.5rem",
  };

  const getServiceCardStyle = (isActive) => ({
    background: isActive ? "#292929" : "transparent",
    borderRadius: "8px",
    padding: "1rem",
    border: "1px solid #fff",
    cursor: "pointer",
    transition: "all 0.3s ease",
    overflow: "hidden",
    maxHeight: isActive ? "180px" : "75px",
    color: "#fff",
  });

  const cardHeaderStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  };

  const iconStyle = {
    color: "#fff",
    flexShrink: 0,
    transition: "color 0.3s ease",
  };

  const titleStyle = {
    color: "#fff",
    margin: 0,
    fontSize: "1rem",
    fontWeight: 500,
  };

  const cardContentStyle = {
    paddingTop: "0.5rem",
    paddingLeft: "2.25rem",
    animation: "fadeIn 0.3s ease",
  };

  const descriptionStyle = {
    color: "#eee",
    marginBottom: "0.75rem",
    fontSize: "0.85rem",
    lineHeight: 1.5,
    transition: "color 0.3s ease",
  };

  const contactLinkStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.3rem",
    color: "#fff",
    fontWeight: 500,
    fontSize: "0.85rem",
    transition: "all 0.3s ease",
    textDecoration: "none",
    borderBottom: "1px solid #fff",
  };

  const imageContainerStyle = {
    flex: "0 0 400px",
    position: "sticky",
    top: "2rem",
  };

  const serviceImageStyle = {
    width: "100%",
    height: "320px",
    marginTop: "6rem",
    borderRadius: "8px",
    objectFit: "cover",
    objectPosition: "center",
    boxShadow: "0 4px 12px rgba(255, 255, 255, 0.1)",
    transition: "transform 0.3s ease",
    border: "1px solid #000",
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-image:hover {
          transform: scale(1.02);
        }

        .contact-link:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .services-container {
            flex-direction: column !important;
          }

          .services-content {
            max-width: 100% !important;
            width: 100% !important;
          }

          .image-container {
            width: 100% !important;
            margin-top: 2rem !important;
            position: static !important;
          }

          .service-image {
            height: 300px !important;
          }
        }
      `}</style>

      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
      `}</style>

      <div style={servicesContainerStyle} className="services-container">
        <div style={servicesContentStyle} className="services-content">
          <h2 style={sectionTitleStyle}>Our Services</h2>
          <div style={servicesGridStyle}>
            {services.map((service, index) => (
              <div
                key={index}
                style={getServiceCardStyle(activeCard === index)}
                onClick={() => toggleCard(index)}
              >
                <div style={cardHeaderStyle}>
                  <div style={iconStyle}>{service.icon}</div>
                  <h3 style={titleStyle}>{service.title}</h3>
                </div>

                {activeCard === index && (
                  <div style={cardContentStyle}>
                    <p style={descriptionStyle}>{service.description}</p>
                    <a
                      href="/contact"
                      style={contactLinkStyle}
                      className="contact-link"
                    >
                      Get Started <FiArrowRight size={14} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={imageContainerStyle} className="image-container">
          <Image
            src={"/assets/services.png"}
            alt={services[activeCard]?.title || "Our Services"}
            width={400}
            height={320}
            style={serviceImageStyle}
            className="service-image"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Services;
