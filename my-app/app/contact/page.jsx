import React from 'react';
import styles from './contact.module.css';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import SectionHeader from '../components/section-header/SectionHeader';

const ContactPage = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.sectionSubtitle}>Have a project in mind or want to collaborate? Reach out!</p>
        
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <FiMail className={styles.contactIcon} />
              <div>
                <h3>Email</h3>
                <p>destinyekine9@gmail.com</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <FiPhone className={styles.contactIcon} />
              <div>
                <h3>Phone</h3>
                <p>+2348051074795</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <FiMapPin className={styles.contactIcon} />
              <div>
                <h3>Location</h3>
                <p>Port-Harcourt, Nigeria</p>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/profile.php?id=61577223774096" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://wa.me/+2348178662529" aria-label="Whatsapp"><FaWhatsapp /></a>
              <a href="https://instagram.com/bigdo_n999" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
          
          {/* Updated Form with Formspree */}
          <form 
            className={styles.contactForm}
            action="https://formspree.io/f/xanjeday" 
            method="POST"
          >
            <div className={styles.formGroup}>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
              />
            </div>
            <div className={styles.formGroup}>
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="5" 
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;