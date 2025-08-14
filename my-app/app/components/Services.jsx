"use client";

import { useState, useEffect, useRef } from "react";
import {
  FiPenTool,
  FiLayout,
  FiCode,
  FiFeather,
  FiArrowRight,
} from "react-icons/fi";
import Image from "next/image";

const Services = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState(new Set());
  const sectionRef = useRef(null);

  const services = [
    {
      icon: <FiFeather size={24} />,
      title: "Logo Design",
      description:
        "Unique and memorable logos that represent your brand identity with creative excellence.",
    },
    {
      icon: <FiLayout size={24} />,
      title: "Web Design",
      description:
        "Responsive, user-friendly interfaces optimized for conversions and exceptional user experience.",
    },
    {
      icon: <FiCode size={24} />,
      title: "Web Development",
      description:
        "Fast, secure websites built with modern technologies like Next.js, React, and cutting-edge frameworks.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger card animations
          services.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedCards(prev => new Set([...prev, index]));
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? 0 : index);
  };

  const servicesContainerStyle = {
    maxWidth: "100vw",
    width: "100%",
    margin: "0",
    padding: "4rem 3rem",
    display: "flex",
    gap: "4rem",
    alignItems: "flex-start",
    backgroundColor: "#000",
    minHeight: "auto",
    justifyContent: "center",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
  };

  const servicesContentStyle = {
    flex: "1 1 500px",
    maxWidth: "550px",
    minWidth: 0,
    transform: isVisible ? "translateX(0)" : "translateX(-100px)",
    opacity: isVisible ? 1 : 0,
    transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    transitionDelay: "0.2s",
  };

  const sectionTitleStyle = {
    color: "#fff",
    marginBottom: "3rem",
    fontSize: "2.8rem",
    fontWeight: 700,
    background: "linear-gradient(135deg, #fff 0%, #e0e0e0 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textAlign: "left",
    letterSpacing: "-0.02em",
  };

  const servicesGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1rem",
  };

  const getServiceCardStyle = (isActive, index) => ({
    background: isActive 
      ? "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)" 
      : "rgba(255,255,255,0.03)",
    borderRadius: "12px",
    padding: "1.5rem",
    border: isActive ? "2px solid #444" : "1px solid rgba(255,255,255,0.1)",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    overflow: "hidden",
    maxHeight: isActive ? "220px" : "85px",
    color: "#fff",
    transform: animatedCards.has(index) 
      ? "translateY(0) scale(1)" 
      : "translateY(50px) scale(0.95)",
    opacity: animatedCards.has(index) ? 1 : 0,
    backdropFilter: "blur(10px)",
    boxShadow: isActive 
      ? "0 8px 32px rgba(255,255,255,0.1)" 
      : "0 4px 16px rgba(0,0,0,0.2)",
  });

  const cardHeaderStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "0.5rem",
  };

  const iconContainerStyle = (isActive) => ({
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    background: isActive 
      ? "linear-gradient(135deg, #333 0%, #555 100%)" 
      : "rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "all 0.3s ease",
    transform: isActive ? "scale(1.1)" : "scale(1)",
  });

  const iconStyle = {
    color: "#fff",
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
  };

  const titleStyle = {
    color: "#fff",
    margin: 0,
    fontSize: "1.2rem",
    fontWeight: 600,
    letterSpacing: "-0.01em",
  };

  const cardContentStyle = {
    paddingTop: "1rem",
    paddingLeft: "3rem",
    animation: "slideIn 0.4s ease-out",
  };

  const descriptionStyle = {
    color: "#d1d5db",
    marginBottom: "1rem",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    transition: "color 0.3s ease",
  };

  const contactLinkStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#fff",
    fontWeight: 600,
    fontSize: "0.9rem",
    transition: "all 0.3s ease",
    textDecoration: "none",
    padding: "0.5rem 0",
    borderBottom: "2px solid rgba(255,255,255,0.3)",
    position: "relative",
    overflow: "hidden",
  };

  const imageContainerStyle = {
    flex: "1 1 500px",
    maxWidth: "550px",
    position: "sticky",
    top: "2rem",
    transform: isVisible ? "translateX(0)" : "translateX(100px)",
    opacity: isVisible ? 1 : 0,
    transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    transitionDelay: "0.4s",
  };

  const serviceImageStyle = {
    width: "100%",
    height: "400px",
    marginTop: "6rem",
    borderRadius: "16px",
    objectFit: "cover",
    objectPosition: "center",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    border: "1px solid rgba(255,255,255,0.1)",
    filter: "brightness(0.9) contrast(1.1)",
  };

  return (
    <>
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .service-image:hover {
          transform: scale(1.05) rotate(1deg);
          filter: brightness(1) contrast(1.2);
          box-shadow: 0 25px 50px rgba(255, 255, 255, 0.1);
        }

        .contact-link:hover {
          color: #f0f0f0;
          border-bottom-color: #fff;
          transform: translateX(5px);
        }

        .contact-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #fff, transparent);
          transition: width 0.3s ease;
        }

        .contact-link:hover::before {
          width: 100%;
          animation: shimmer 0.6s ease-in-out;
        }

        .service-card:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .services-container {
            flex-direction: column !important;
            padding: 3rem 2rem !important;
            gap: 3rem !important;
          }

          .services-content {
            max-width: 100% !important;
            width: 100% !important;
          }

          .image-container {
            width: 100% !important;
            max-width: 100% !important;
            margin-top: 0 !important;
            position: static !important;
          }

          .service-image {
            height: 350px !important;
            margin-top: 2rem !important;
          }

          .section-title {
            font-size: 2.2rem !important;
            text-align: center !important;
          }
        }

        @media (max-width: 768px) {
          .services-container {
            padding: 2rem 1rem !important;
            gap: 2rem !important;
          }

          .section-title {
            font-size: 1.8rem !important;
            margin-bottom: 2rem !important;
          }

          .service-image {
            height: 280px !important;
          }
        }
      `}</style>

      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
      `}</style>

      <div 
        ref={sectionRef}
        style={servicesContainerStyle} 
        className="services-container"
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle at center, rgba(255,255,255,0.02) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div style={servicesContentStyle} className="services-content">
          <h2 style={sectionTitleStyle} className="section-title">
            Our Services
          </h2>
          <div style={servicesGridStyle}>
            {services.map((service, index) => (
              <div
                key={index}
                style={getServiceCardStyle(activeCard === index, index)}
                onClick={() => toggleCard(index)}
                className="service-card"
              >
                <div style={cardHeaderStyle}>
                  <div style={iconContainerStyle(activeCard === index)}>
                    <div style={iconStyle}>{service.icon}</div>
                  </div>
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
                      Get Started <FiArrowRight size={16} />
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
            width={550}
            height={400}
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