import React from 'react';
import styles from "./projects.module.css";
import SectionHeader from '../components/section-header/SectionHeader';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import blogwebsite from "../assets/blogwebsite.png"
import ecommerce from "../assets/MyShop - Your Online Store - Google Chrome 6_16_2025 12_55_04 AM.png";
import taskapp from "../assets/taskapp.jpg";
import Image from 'next/image';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website (Front-End)",
      description: "A full-featured online store with product filtering, cart functionality, and secure checkout.",
      technologies: [ "Next.js", "Css Modules",],
      githubLink: "https://github.com/BigDon999/E-commerce-FrontEnd.git",
      liveLink: "https://e-commerce-front-end-black.vercel.app/",
      image: ecommerce,
      imageAlt: "E-commerce website screenshot"
    },
    {
      id: 2,
      title: "Blog Website",
      description: "A responsive news blog that displays real time news, you can login and signup, has bookmark section, profile and settings.this is to showcase my use with Api's and more. ",
      technologies: ["Next.js", "CSS Modules", "API'S"],
      githubLink: "https://github.com/BigDon999/Blog-Website.git",
      liveLink: "https://blog-website-eight-eta.vercel.app/",
      image: blogwebsite,
      imageAlt: "Blog website screenshot"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity application for organizing tasks with drag-and-drop functionality.",
      technologies: ["React", "Redux", "Firebase"],
      githubLink: "https://github.com/yourusername/task-app",
      liveLink: "https://yourtaskapp.com",
      image: taskapp,
      imageAlt: "Task management app screenshot"
    }
  ];

  return (
    <section className={styles.projectsSection} id="projects">
      <SectionHeader title="My Projects" subtitle="My Recent Work" />
      
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image 
                src={project.image} 
                alt={project.imageAlt}
                width={350}
                height={200}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                placeholder="blur"
              />
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
                  aria-label={`View ${project.title} code on GitHub`}
                >
                  <FiGithub /> Code
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo`}
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