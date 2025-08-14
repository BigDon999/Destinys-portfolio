"use client";
import React, { useState, useEffect, useRef } from "react";

// SectionHeader component with animation
function SectionHeader({ title, subtitle, isVisible }) {
  return (
    <div style={{
      textAlign: 'center',
      marginBottom: '60px',
      padding: '0 20px',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      transitionDelay: '0.1s'
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

function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [hoveredImage, setHoveredImage] = useState(false);
  const [hoveredSections, setHoveredSections] = useState({});
  const [hoveredItems, setHoveredItems] = useState({});
  
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const bioRef = useRef(null);
  const skillRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    // Main section observer
    const mainObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    // Individual sections observer
    const sectionsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.dataset.section;
            setVisibleSections(prev => new Set([...prev, sectionId]));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      mainObserver.observe(sectionRef.current);
      observers.push(mainObserver);
    }

    // Observe individual sections
    if (imageRef.current) {
      imageRef.current.dataset.section = 'image';
      sectionsObserver.observe(imageRef.current);
    }
    if (bioRef.current) {
      bioRef.current.dataset.section = 'bio';
      sectionsObserver.observe(bioRef.current);
    }

    skillRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.section = `skill-${index}`;
        sectionsObserver.observe(ref);
      }
    });

    observers.push(sectionsObserver);

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const styles = {
    aboutSection: {
      backgroundColor: '#000000',
      color: '#ffffff',
      minHeight: '100vh',
      padding: '80px 0',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    contentWrapper: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '60px',
      alignItems: 'start'
    },
    imageContainer: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      opacity: visibleSections.has('image') ? 1 : 0,
      transform: visibleSections.has('image') ? 'translateX(0) scale(1)' : 'translateX(-100px) scale(0.9)',
      transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      transitionDelay: '0.3s'
    },
    profileImage: {
      width: '100%',
      maxWidth: '400px',
      height: 'auto',
      borderRadius: '20px',
      border: '3px solid #333333',
      boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      cursor: 'pointer',
      filter: 'brightness(0.9) contrast(1.1)'
    },
    profileImageHover: {
      transform: 'translateY(-15px) scale(1.02)',
      boxShadow: '0 30px 60px rgba(255, 255, 255, 0.2)',
      filter: 'brightness(1) contrast(1.2)'
    },
    bioContent: {
      lineHeight: '1.7',
      opacity: visibleSections.has('bio') ? 1 : 0,
      transform: visibleSections.has('bio') ? 'translateX(0)' : 'translateX(100px)',
      transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      transitionDelay: '0.5s'
    },
    bioTitle: {
      fontSize: 'clamp(2rem, 4vw, 2.8rem)',
      fontWeight: '600',
      marginBottom: '30px',
      background: 'linear-gradient(135deg, #ffffff, #dddddd)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: '1.2'
    },
    bioText: {
      fontSize: '1.1rem',
      color: '#cccccc',
      marginBottom: '40px',
      lineHeight: '1.8'
    },
    skillSection: {
      marginBottom: '40px',
      padding: '30px',
      backgroundColor: '#111111',
      borderRadius: '15px',
      border: '1px solid #333333',
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      backdropFilter: 'blur(10px)',
      position: 'relative'
    },
    skillSectionHover: {
      transform: 'translateY(-8px) scale(1.02)',
      borderColor: '#555555',
      boxShadow: '0 15px 30px rgba(255, 255, 255, 0.1)'
    },
    skillTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#ffffff',
      position: 'relative',
      paddingLeft: '20px'
    },
    skillList: {
      listStyle: 'none',
      padding: '0',
      margin: '15px 0'
    },
    skillListItem: {
      padding: '12px 0',
      borderBottom: '1px solid #222222',
      color: '#bbbbbb',
      fontSize: '1rem',
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    },
    skillListItemHover: {
      color: '#ffffff',
      paddingLeft: '15px',
      transform: 'translateX(5px)'
    },
    skillListColumns: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '15px',
      listStyle: 'none',
      padding: '0',
      margin: '15px 0'
    },
    closingStatement: {
      fontSize: '1.1rem',
      color: '#dddddd',
      marginTop: '50px',
      padding: '30px',
      backgroundColor: '#111111',
      borderRadius: '15px',
      border: '1px solid #333333',
      fontStyle: 'italic',
      lineHeight: '1.8',
      transition: 'all 0.4s ease',
      position: 'relative',
      overflow: 'hidden'
    }
  };

  const getSkillSectionStyle = (index) => ({
    ...styles.skillSection,
    opacity: visibleSections.has(`skill-${index}`) ? 1 : 0,
    transform: visibleSections.has(`skill-${index}`) 
      ? 'translateY(0) scale(1)' 
      : 'translateY(50px) scale(0.95)',
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transitionDelay: `${0.7 + index * 0.2}s`,
    ...(hoveredSections[`section-${index}`] ? styles.skillSectionHover : {})
  });

  const skills = [
    {
      title: "Design & Branding",
      description: "My design specializations include:",
      items: [
        {key: 'logo', text: 'Logo Design: Creating unique brand identities that capture your business essence'},
        {key: 'website', text: 'Website Design: Designing modern, user-friendly interfaces with great UX'},
        {key: 'brand', text: 'Brand Identity: Developing complete visual identity systems'},
        {key: 'ui', text: 'UI/UX Design: Crafting intuitive user experiences that convert'}
      ]
    },
    {
      title: "Frontend Technologies",
      description: "I build with modern technologies:",
      items: [
        'HTML5, CSS3, JavaScript (ES6+) & TypeScript',
        'React.js, Next.js, Vue.js',
        'Tailwind CSS, Bootstrap & SASS/SCSS',
        'Firebase & REST APIs',
        'Git, GitHub & Version Control',
        'Responsive Design & Mobile-First Development'
      ]
    },
    {
      title: "Unique Value Proposition",
      description: "What sets me apart is the ability to:",
      items: [
        'Design with development constraints in mind',
        'Implement designs with pixel-perfect precision',
        'Create cohesive digital experiences from concept to deployment',
        'Bridge communication gaps between design and development teams'
      ]
    },
    {
      title: "Technical Toolkit",
      description: null,
      isColumns: true,
      items: [
        'Design Tools: Figma, Canva, Framer, Adobe Creative Suite',
        'Code Editors: VS Code, WebStorm, Sublime Text',
        'Frontend: React, Next.js, Vue.js, Tailwind CSS',
        'Backend: Firebase',
        'Tools: Git, GitHub, npm/yarn, Webpack, Vite'
      ]
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
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
            opacity: 0.8;
          }
        }

        .skill-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: width 0.6s ease;
        }

        .skill-section:hover::before {
          width: 100%;
        }

        .closing-statement::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .closing-statement:hover::before {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .content-wrapper {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>

      <section ref={sectionRef} style={styles.aboutSection}>
        {/* Background decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
            opacity: isVisible ? 0.5 : 0,
            transition: 'opacity 2s ease'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '10%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
            opacity: isVisible ? 0.3 : 0,
            transition: 'opacity 2s ease',
            transitionDelay: '0.5s'
          }}
        />

        <SectionHeader title="About Me" subtitle="Who I am and What I do" isVisible={isVisible} />
        
        <div style={styles.container}>
          <article style={styles.contentWrapper} className="content-wrapper">
            <div ref={imageRef} style={styles.imageContainer}>
              <img 
                src="/assets/mypicture.jpg"
                alt="Destiny Ekine - Designer and Developer" 
                style={{
                  ...styles.profileImage,
                  ...(hoveredImage ? styles.profileImageHover : {})
                }}
                onMouseEnter={() => setHoveredImage(true)}
                onMouseLeave={() => setHoveredImage(false)}
              />
            </div>
            
            <div ref={bioRef} style={styles.bioContent}>
              <h2 style={styles.bioTitle}>Destiny Ekine: Bridging Design and Development</h2>
              
              <p style={styles.bioText}>
                I'm a passionate frontend developer and creative designer who specializes in crafting 
                exceptional digital experiences. With expertise in modern web technologies and a keen 
                eye for design, I create stunning websites and memorable brand identities that make 
                businesses stand out in the digital landscape.
              </p>

              {skills.map((skill, index) => (
                <div 
                  key={index}
                  ref={(el) => skillRefs.current[index] = el}
                  style={getSkillSectionStyle(index)}
                  className="skill-section"
                  onMouseEnter={() => setHoveredSections({...hoveredSections, [`section-${index}`]: true})}
                  onMouseLeave={() => setHoveredSections({...hoveredSections, [`section-${index}`]: false})}
                >
                  <h3 style={{...styles.skillTitle, position: 'relative'}}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '4px',
                      height: '20px',
                      background: 'linear-gradient(135deg, #ffffff, #888888)',
                      borderRadius: '2px',
                    }}></span>
                    {skill.title}
                  </h3>
                  
                  {skill.description && (
                    <p style={{color: '#cccccc', marginBottom: '15px'}}>{skill.description}</p>
                  )}
                  
                  <ul style={skill.isColumns ? styles.skillListColumns : styles.skillList}>
                    {skill.items.map((item, itemIndex) => {
                      const itemKey = typeof item === 'object' ? item.key : `${skill.title}-${itemIndex}`;
                      const itemText = typeof item === 'object' ? item.text : item;
                      
                      return (
                        <li 
                          key={itemIndex}
                          style={{
                            ...styles.skillListItem,
                            ...(hoveredItems[itemKey] ? styles.skillListItemHover : {})
                          }}
                          onMouseEnter={() => setHoveredItems({...hoveredItems, [itemKey]: true})}
                          onMouseLeave={() => setHoveredItems({...hoveredItems, [itemKey]: false})}
                        >
                          {itemText.includes(':') ? (
                            <>
                              <strong style={{color: '#ffffff'}}>{itemText.split(':')[0]}:</strong>
                              {itemText.split(':').slice(1).join(':')}
                            </>
                          ) : (
                            itemText
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}

              <p 
                style={{
                  ...styles.closingStatement,
                  opacity: visibleSections.has('skill-3') ? 1 : 0,
                  transform: visibleSections.has('skill-3') ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: '1.5s'
                }}
                className="closing-statement"
              >
                Whether you need a stunning logo that represents your brand, a modern website that 
                converts visitors into customers, or a complete digital presence that stands out 
                from the competition, I combine creative design thinking with cutting-edge frontend 
                development skills to bring your vision to life.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default AboutPage;