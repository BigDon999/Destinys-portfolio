import React from 'react';
import styles from "./projects.module.css";
import SectionHeader from '../components/section-header/SectionHeader';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A full-featured online store with product filtering, cart functionality, and secure checkout.",
      technologies: ["React", "Next.js", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/ecommerce",
      liveLink: "https://yourecommerce.com",
      image: "/projects/ecommerce.jpg"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive personal portfolio showcasing my design and development skills.",
      technologies: ["React", "CSS Modules", "Framer Motion"],
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://yourportfolio.com",
      image: "/projects/portfolio.jpg"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity application for organizing tasks with drag-and-drop functionality.",
      technologies: ["React", "Redux", "Firebase"],
      githubLink: "https://github.com/yourusername/task-app",
      liveLink: "https://yourtaskapp.com",
      image: "/projects/taskapp.jpg"
    }
  ];

  return (
    <section className={styles.projectsSection}>
      <SectionHeader title="My Projects" subtitle="My Recent Work" />
      
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className={styles.technologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              
              <div className={styles.projectLinks}>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub repository"
                >
                  <FiGithub /> Code
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Live demo"
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;