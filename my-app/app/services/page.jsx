"use client"
import React from 'react';

// SectionHeader component with inline styles
function SectionHeader({ title, subtitle }) {
  return (
    <div style={{
      textAlign: 'center',
      marginBottom: '60px',
      padding: '0 20px'
    }}>
      <h1 style={{
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #ffffff, #cccccc)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '10px',
        letterSpacing: '-0.02em'
      }}>
        {title}
      </h1>
      <p style={{
        fontSize: '1.2rem',
        color: '#888888',
        fontWeight: '300',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        {subtitle}
      </p>
    </div>
  );
}

function ServicesPage() {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const services = [
    
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
          <line x1="16" y1="8" x2="2" y2="22"/>
          <line x1="17.5" y1="15" x2="9" y2="15"/>
        </svg>
      ),
      title: "Logo Design",
      description: "Unique and memorable logos that represent your brand identity and make lasting impressions."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      ),
      title: "Web Design",
      description: "Responsive, user-friendly interfaces optimized for conversions and exceptional user experience."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16,18 22,12 16,6"/>
          <polyline points="8,6 2,12 8,18"/>
        </svg>
      ),
      title: "Web Development",
      description: "Fast, secure websites built with modern technologies like Next.js, React, and cutting-edge frameworks."
    },
  ];

  const styles = {
    servicesSection: {
      backgroundColor: '#000000',
      color: '#ffffff',
      minHeight: '100vh',
      padding: '80px 0',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      padding: '20px 0'
    },
    serviceCard: {
      background: 'linear-gradient(145deg, #111111, #1a1a1a)',
      borderRadius: '20px',
      padding: '40px 30px',
      position: 'relative',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      border: '1px solid #333333',
      overflow: 'hidden'
    },
    serviceCardHovered: {
      transform: 'translateY(-15px) scale(1.02)',
      border: '1px solid #555555'
    },
    serviceCardBefore: {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '4px',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      transition: 'all 0.4s ease'
    },
    iconContainer: {
      width: '80px',
      height: '80px',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '25px',
      position: 'relative',
      transition: 'all 0.4s ease',
      background: 'linear-gradient(145deg, #222222, #333333)',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
    },
    iconContainerHovered: {
      transform: 'scale(1.1) rotate(5deg)'
    },
    icon: {
      color: '#ffffff',
      transition: 'all 0.3s ease',
      filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
    },
    serviceTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '15px',
      color: '#ffffff',
      transition: 'all 0.3s ease'
    },
    serviceTitleHovered: {
      background: 'linear-gradient(135deg, #ffffff, #cccccc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    serviceDescription: {
      fontSize: '1rem',
      lineHeight: '1.7',
      color: '#bbbbbb',
      transition: 'all 0.3s ease'
    },
    serviceDescriptionHovered: {
      color: '#ffffff'
    },
    glowEffect: {
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
      opacity: '0',
      transition: 'opacity 0.4s ease',
      pointerEvents: 'none'
    },
    glowEffectHovered: {
      opacity: '1'
    }
  };

  return (
    <section style={styles.servicesSection}>
      <SectionHeader title="Services" subtitle="The Services I Offer" />
      <div style={styles.container}>
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              style={{
                ...styles.serviceCard,
                ...(hoveredCard === index ? styles.serviceCardHovered : {}),
                boxShadow: hoveredCard === index 
                  ? '0 25px 50px rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.1)' 
                  : '0 10px 30px rgba(0,0,0,0.3)'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Top gradient line */}
              <div 
                style={{
                  ...styles.serviceCardBefore,
                  background: hoveredCard === index ? 'linear-gradient(135deg, #ffffff, #cccccc)' : 'transparent'
                }}
              />
              
              {/* Glow effect */}
              <div 
                style={{
                  ...styles.glowEffect,
                  ...(hoveredCard === index ? styles.glowEffectHovered : {})
                }}
              />
              
              {/* Icon container */}
              <div 
                style={{
                  ...styles.iconContainer,
                  ...(hoveredCard === index ? styles.iconContainerHovered : {})
                }}
              >
                <div style={styles.icon}>
                  {service.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 
                style={{
                  ...styles.serviceTitle,
                  ...(hoveredCard === index ? styles.serviceTitleHovered : {})
                }}
              >
                {service.title}
              </h3>
              
              {/* Description */}
              <p 
                style={{
                  ...styles.serviceDescription,
                  ...(hoveredCard === index ? styles.serviceDescriptionHovered : {})
                }}
              >
                {service.description}
              </p>
              
              {/* Floating particles effect */}
              {hoveredCard === index && (
                <>
                  <div style={{
                    position: 'absolute',
                    top: '20%',
                    right: '15%',
                    width: '4px',
                    height: '4px',
                    background: '#ffffff',
                    borderRadius: '50%',
                    animation: 'float 3s ease-in-out infinite',
                    opacity: '0.6'
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '30%',
                    left: '10%',
                    width: '3px',
                    height: '3px',
                    background: '#ffffff',
                    borderRadius: '50%',
                    animation: 'float 2s ease-in-out infinite reverse',
                    opacity: '0.4'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '60%',
                    right: '25%',
                    width: '2px',
                    height: '2px',
                    background: '#ffffff',
                    borderRadius: '50%',
                    animation: 'float 2.5s ease-in-out infinite',
                    opacity: '0.3'
                  }} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Add CSS keyframes for floating animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
          }
        `}
      </style>
    </section>
  );
}

export default ServicesPage;