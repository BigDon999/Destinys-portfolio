import React from "react";
import Image from 'next/image';
import styles from "./about.module.css";
import SectionHeader from "../components/section-header/SectionHeader";

function AboutPage() {
  return (
    <section className={styles.aboutSection}>
      <SectionHeader title="About Me" subtitle="Who I am and What I do" />
      <div className={`container ${styles.container}`}>
        <article className={styles.contentWrapper}>
          <div className={styles.imageContainer}>
            <Image 
              src={"/assets/mypicture.jpg"}
              alt="Destiny Ekine - Designer and Developer" 
              width={400}
              height={500}
              className={styles.profileImage}
              priority
            />
          </div>
          <div className={styles.bioContent}>
            <h2 className={styles.bioTitle}>Destiny Ekine: Bridging Design and Development</h2>
            
            <p className={styles.bioText}>
              In the digital world where visual appeal meets technical functionality, 
              I stand out as a versatile creative professional who masters both domains. 
              As a multidisciplinary designer and front-end developer, I bring a unique 
              perspective to every project, ensuring seamless integration of form and function.
            </p>

            <div className={styles.skillSection}>
              <h3 className={styles.skillTitle}>Design Expertise</h3>
              <p>My design capabilities encompass:</p>
              <ul className={styles.skillList}>
                <li><strong>Logo Design:</strong> Creating memorable brand identities that communicate core values</li>
                <li><strong>Graphic Design:</strong> Producing visually compelling marketing materials</li>
                <li><strong>Web Design:</strong> Crafting intuitive user interfaces with strong visual hierarchy</li>
                <li><strong>Web Development:</strong> Building responsive, performant websites with clean code</li>
              </ul>
            </div>

            <div className={styles.skillSection}>
              <h3 className={styles.skillTitle}>Technical Proficiency</h3>
              <p>As a front-end developer, I specialize in:</p>
              <ul className={styles.skillList}>
                <li>Core web technologies: HTML5, CSS3, JavaScript (ES6+)</li>
                <li>Modern frameworks: React.js and Next.js</li>
                <li>Responsive design principles for all devices</li>
                <li>Performance optimization techniques</li>
              </ul>
            </div>

            <div className={styles.skillSection}>
              <h3 className={styles.skillTitle}>Unique Value Proposition</h3>
              <p>What sets me apart is the ability to:</p>
              <ul className={styles.skillList}>
                <li>Design with development constraints in mind</li>
                <li>Implement designs with pixel-perfect precision</li>
                <li>Create cohesive digital experiences from concept to deployment</li>
                <li>Bridge communication gaps between design and development teams</li>
              </ul>
            </div>

            <div className={styles.skillSection}>
              <h3 className={styles.skillTitle}>Technical Toolkit</h3>
              <ul className={styles.skillListColumns}>
                <li><strong>Design:</strong> canva, Figma, framer</li>
                <li><strong>Development:</strong> VS Code, Git, npm/yarn</li>
                <li><strong>Frameworks:</strong> React, Next.js, CSS modules</li>
                <li><strong>Methodologies:</strong> Mobile-first, BEM, Atomic Design</li>
              </ul>
            </div>

            <p className={styles.closingStatement}>
              For businesses seeking a professional who can both envision and execute digital solutions, 
              I offer the rare combination of artistic sensibility and technical expertise. My work 
              demonstrates that exceptional digital experiences emerge when design and development 
              work in harmony.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutPage;