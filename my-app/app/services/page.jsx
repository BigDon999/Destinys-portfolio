import React from 'react';
import styles from "./services.module.css";
import SectionHeader from '../components/section-header/SectionHeader';
import { FiPenTool, FiFeather, FiLayout, FiCode } from 'react-icons/fi';

function ServicesPage() {
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

  return (
    <section className={styles.servicesSection}>
      <SectionHeader title="Services" subtitle="The Services Offered" />
      <div className={`container ${styles.container}`}>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconContainer}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;