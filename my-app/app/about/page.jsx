"use client"
import React from "react";

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

function AboutPage() {
  const styles = {
    aboutSection: {
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
    contentWrapper: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '60px',
      alignItems: 'start'
    },
    imageContainer: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center'
    },
    profileImage: {
      width: '100%',
      maxWidth: '400px',
      height: 'auto',
      borderRadius: '20px',
      border: '3px solid #333333',
      boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
    },
    profileImageHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 30px 60px rgba(255, 255, 255, 0.15)'
    },
    bioContent: {
      lineHeight: '1.7'
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
      transition: 'transform 0.3s ease, border-color 0.3s ease'
    },
    skillSectionHover: {
      transform: 'translateY(-5px)',
      borderColor: '#555555'
    },
    skillTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#ffffff',
      position: 'relative',
      paddingLeft: '20px'
    },
    skillTitleBefore: {
      content: '""',
      position: 'absolute',
      left: '0',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '4px',
      height: '20px',
      background: 'linear-gradient(135deg, #ffffff, #888888)',
      borderRadius: '2px'
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
      transition: 'color 0.3s ease, padding-left 0.3s ease'
    },
    skillListItemHover: {
      color: '#ffffff',
      paddingLeft: '15px'
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
      lineHeight: '1.8'
    }
  };

  const [hoveredImage, setHoveredImage] = React.useState(false);
  const [hoveredSections, setHoveredSections] = React.useState({});
  const [hoveredItems, setHoveredItems] = React.useState({});

  return (
    <section style={styles.aboutSection}>
      <SectionHeader title="About Me" subtitle="Who I am and What I do" />
      <div style={styles.container}>
        <article style={styles.contentWrapper}>
          <div style={styles.imageContainer}>
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
          <div style={styles.bioContent}>
            <h2 style={styles.bioTitle}>Destiny Ekine: Bridging Design and Development</h2>
            
            <p style={styles.bioText}>
              I'm a passionate frontend developer and creative designer who specializes in crafting 
              exceptional digital experiences. With expertise in modern web technologies and a keen 
              eye for design, I create stunning websites and memorable brand identities that make 
              businesses stand out in the digital landscape.
            </p>

            <div 
              style={{
                ...styles.skillSection,
                ...(hoveredSections.design ? styles.skillSectionHover : {})
              }}
              onMouseEnter={() => setHoveredSections({...hoveredSections, design: true})}
              onMouseLeave={() => setHoveredSections({...hoveredSections, design: false})}
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
                  content: '""'
                }}></span>
                Design & Branding
              </h3>
              <p style={{color: '#cccccc', marginBottom: '15px'}}>My design specializations include:</p>
              <ul style={styles.skillList}>
                {[
                  {key: 'logo', text: 'Logo Design: Creating unique brand identities that capture your business essence'},
                  {key: 'website', text: 'Website Design: Designing modern, user-friendly interfaces with great UX'},
                  {key: 'brand', text: 'Brand Identity: Developing complete visual identity systems'},
                  {key: 'ui', text: 'UI/UX Design: Crafting intuitive user experiences that convert'}
                ].map((item) => (
                  <li 
                    key={item.key}
                    style={{
                      ...styles.skillListItem,
                      ...(hoveredItems[item.key] ? styles.skillListItemHover : {})
                    }}
                    onMouseEnter={() => setHoveredItems({...hoveredItems, [item.key]: true})}
                    onMouseLeave={() => setHoveredItems({...hoveredItems, [item.key]: false})}
                  >
                    <strong style={{color: '#ffffff'}}>{item.text.split(':')[0]}:</strong> {item.text.split(':')[1]}
                  </li>
                ))}
              </ul>
            </div>

            <div 
              style={{
                ...styles.skillSection,
                ...(hoveredSections.technical ? styles.skillSectionHover : {})
              }}
              onMouseEnter={() => setHoveredSections({...hoveredSections, technical: true})}
              onMouseLeave={() => setHoveredSections({...hoveredSections, technical: false})}
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
                  borderRadius: '2px'
                }}></span>
                Frontend Technologies
              </h3>
              <p style={{color: '#cccccc', marginBottom: '15px'}}>I build with modern technologies:</p>
              <ul style={styles.skillList}>
                {[
                  'HTML5, CSS3, JavaScript (ES6+) & TypeScript',
                  'React.js, Next.js, Vue.js',
                  'Tailwind CSS, Bootstrap & SASS/SCSS',
                  'Firebase & REST APIs',
                  'Git, GitHub & Version Control',
                  'Responsive Design & Mobile-First Development'
                ].map((item, index) => (
                  <li 
                    key={index}
                    style={{
                      ...styles.skillListItem,
                      ...(hoveredItems[`tech-${index}`] ? styles.skillListItemHover : {})
                    }}
                    onMouseEnter={() => setHoveredItems({...hoveredItems, [`tech-${index}`]: true})}
                    onMouseLeave={() => setHoveredItems({...hoveredItems, [`tech-${index}`]: false})}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div 
              style={{
                ...styles.skillSection,
                ...(hoveredSections.value ? styles.skillSectionHover : {})
              }}
              onMouseEnter={() => setHoveredSections({...hoveredSections, value: true})}
              onMouseLeave={() => setHoveredSections({...hoveredSections, value: false})}
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
                  borderRadius: '2px'
                }}></span>
                Unique Value Proposition
              </h3>
              <p style={{color: '#cccccc', marginBottom: '15px'}}>What sets me apart is the ability to:</p>
              <ul style={styles.skillList}>
                {[
                  'Design with development constraints in mind',
                  'Implement designs with pixel-perfect precision',
                  'Create cohesive digital experiences from concept to deployment',
                  'Bridge communication gaps between design and development teams'
                ].map((item, index) => (
                  <li 
                    key={index}
                    style={{
                      ...styles.skillListItem,
                      ...(hoveredItems[`value-${index}`] ? styles.skillListItemHover : {})
                    }}
                    onMouseEnter={() => setHoveredItems({...hoveredItems, [`value-${index}`]: true})}
                    onMouseLeave={() => setHoveredItems({...hoveredItems, [`value-${index}`]: false})}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div 
              style={{
                ...styles.skillSection,
                ...(hoveredSections.toolkit ? styles.skillSectionHover : {})
              }}
              onMouseEnter={() => setHoveredSections({...hoveredSections, toolkit: true})}
              onMouseLeave={() => setHoveredSections({...hoveredSections, toolkit: false})}
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
                  borderRadius: '2px'
                }}></span>
                Technical Toolkit
              </h3>
              <ul style={styles.skillListColumns}>
                {[
                  'Design Tools: Figma, Canva, Framer, Adobe Creative Suite',
                  'Code Editors: VS Code, WebStorm, Sublime Text',
                  'Frontend: React, Next.js, Vue.js, Tailwind CSS',
                  'Backend: Firebase',
                  'Tools: Git, GitHub, npm/yarn, Webpack, Vite'
                ].map((item, index) => (
                  <li 
                    key={index}
                    style={{
                      ...styles.skillListItem,
                      ...(hoveredItems[`toolkit-${index}`] ? styles.skillListItemHover : {})
                    }}
                    onMouseEnter={() => setHoveredItems({...hoveredItems, [`toolkit-${index}`]: true})}
                    onMouseLeave={() => setHoveredItems({...hoveredItems, [`toolkit-${index}`]: false})}
                  >
                    <strong style={{color: '#ffffff'}}>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                  </li>
                ))}
              </ul>
            </div>

            <p style={styles.closingStatement}>
              Whether you need a stunning logo that represents your brand, a modern website that 
              converts visitors into customers, or a complete digital presence that stands out 
              from the competition, I combine creative design thinking with cutting-edge frontend 
              development skills to bring your vision to life.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutPage;