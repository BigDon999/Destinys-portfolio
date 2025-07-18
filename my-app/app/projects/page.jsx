import React from 'react';
import styles from "./projects.module.css";
import SectionHeader from '../components/section-header/SectionHeader';
import { sanityClient, urlFor } from '../../sanity';

const hardcodedProjects = [
  {
    id: 1,
    title: "E-Commerce Website (Front-End)",
    description: "A full-featured online store with product filtering, cart functionality, and secure checkout.",
    technologies: [ "Next.js", "Css Modules",],
    githubLink: "https://github.com/BigDon999/E-commerce-FrontEnd.git",
    liveLink: "https://e-commerce-front-end-black.vercel.app/",
    image: "/assets/MyShop - Your Online Store - Google Chrome 6_16_2025 12_55_04 AM.png",
    imageAlt: "E-commerce website screenshot"
  },
  {
    id: 2,
    title: "Blog Website",
    description: "A responsive news blog that displays real time news, you can login and signup, has bookmark section, profile and settings.this is to showcase my use with Api's and more. ",
    technologies: ["Next.js", "CSS Modules", "API'S"],
    githubLink: "https://github.com/BigDon999/Blog-Website.git",
    liveLink: "https://blog-website-eight-eta.vercel.app/",
    image: "/assets/blogwebsite.png",
    imageAlt: "Blog website screenshot"
  },
  {
    id: 3,
    title: "Real Estate Website",
    description: "A responsiveproperty listing Real Estatewebsite.",
    technologies: ["React", "Redux", "Firebase"],
    githubLink: "https://github.com/BigDon999/Real-Estate-Website-Front-End.git",
    liveLink: "https://real-estate-website-front-end-fct7.vercel.app/",
    image: "/assets/homehero.png",
    imageAlt: "Task management app screenshot"
  }
];

export default async function ProjectsPage() {
  const sanityProjects = await sanityClient.fetch(
    `*[_type == "project"]{_id, title, description, image, slug, technologies, githubLink, liveLink}`
  );

  const projects = [
    ...hardcodedProjects,
    ...sanityProjects.map(project => ({
      ...project,
      image: project.image ? urlFor(project.image).width(350).height(200).url() : null,
      imageAlt: project.title,
      id: project._id || (project.slug && project.slug.current) || Math.random().toString(36).substr(2, 9)
    }))
  ];

  return (
    <section className={styles.projectsSection} id="projects">
      <SectionHeader title="My Projects" subtitle="My Recent Work" />
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImage}>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
              )}
            </div>
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.technologies && (
                <div className={styles.technologies}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
              )}
              <div className={styles.projectLinks}>
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}