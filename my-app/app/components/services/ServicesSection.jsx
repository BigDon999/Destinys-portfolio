"use client";

import { useState } from 'react';
import { 
  FiPenTool, 
  FiLayout, 
  FiCode, 
  FiFeather, 
  FiArrowRight 
} from 'react-icons/fi';
import styles from "./Services.module.css";
import Image from "next/image";

const Services = () => {
  const [activeCard, setActiveCard] = useState(0); // First card active by default

  const services = [
    {
      icon: <FiPenTool className={styles.icon} size={20} />,
      title: "Graphic Design",
      description: "Custom illustrations, branding, and print-ready designs that capture your vision perfectly.",
    },
    {
      icon: <FiFeather className={styles.icon} size={20} />,
      title: "Logo Design",
      description: "Unique and memorable logos that represent your brand identity.",
    },
    {
      icon: <FiLayout className={styles.icon} size={20} />,
      title: "Web Design",
      description: "Responsive, user-friendly interfaces optimized for conversions.",
    },
    {
      icon: <FiCode className={styles.icon} size={20} />,
      title: "Web Development",
      description: "Fast, secure websites built with modern technologies like Next.js and React.",
    },
  ];

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesContent}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceCard} ${
                activeCard === index ? styles.active : ''
              }`}
              onClick={() => toggleCard(index)}
            >
              <div className={styles.cardHeader}>
                {service.icon}
                <h3>{service.title}</h3>
              </div>
              
              {activeCard === index && (
                <div className={styles.cardContent}>
                  <p>{service.description}</p>
                  <a href="/contact" className={styles.contactLink}>
                    Get Started <FiArrowRight size={14} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.imageContainer}>
        <Image 
          src={"/assets/ServicesImage.jpg"}
          alt={services[activeCard]?.title || "Our Services"} 
          width={400}
          height={400}
          className={styles.serviceImage}
          priority
        />
      </div>
    </div>
  );
};

export default Services;