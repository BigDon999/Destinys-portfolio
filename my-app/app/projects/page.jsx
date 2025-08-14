"use client";
import React, { useEffect, useState } from "react";
import { sanityClient, urlFor } from "../../sanity";

const hardcodedProjects = [
  {
    id: 1,
    title: "E-Commerce Website (Front-End)",
    description:
      "A full-featured online store with product filtering, cart functionality, and secure checkout.",
    technologies: ["Next.js", "Css Modules"],
    githubLink: "https://github.com/BigDon999/E-commerce-FrontEnd.git",
    liveLink: "https://e-commerce-front-end-black.vercel.app/",
    image:
      "/assets/MyShop - Your Online Store - Google Chrome 6_16_2025 12_55_04 AM.png",
    imageAlt: "E-commerce website screenshot",
  },
  {
    id: 2,
    title: "Blog Website",
    description:
      "A responsive news blog that displays real time news, you can login and signup, has bookmark section, profile and settings. This is to showcase my use with APIs and more.",
    technologies: ["Next.js", "CSS Modules", "API'S"],
    githubLink: "https://github.com/BigDon999/Blog-Website.git",
    liveLink: "https://blog-website-eight-eta.vercel.app/",
    image: "/assets/blogwebsite.png",
    imageAlt: "Blog website screenshot",
  },
  {
    id: 3,
    title: "Real Estate Website",
    description: "A responsive property listing Real Estate website.",
    technologies: ["React", "Redux", "Firebase"],
    githubLink:
      "https://github.com/BigDon999/Real-Estate-Website-Front-End.git",
    liveLink: "https://real-estate-website-front-end-fct7.vercel.app/",
    image: "/assets/homehero.png",
    imageAlt: "Task management app screenshot",
  },
];

export default function ProjectsPage() {
  const [sanityProjects, setSanityProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "project"]{_id, title, description, image, slug, technologies, githubLink, liveLink}`
        );
        setSanityProjects(
          data.map((project) => ({
            ...project,
            image: project.image
              ? urlFor(project.image).width(350).height(200).url()
              : null,
            imageAlt: project.title,
            id:
              project._id ||
              (project.slug && project.slug.current) ||
              Math.random().toString(36).substr(2, 9),
          }))
        );
      } catch (err) {
        setSanityProjects([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const projects = [...hardcodedProjects, ...sanityProjects];

  return (
    <section
      id="projects"
      style={{
        background: "#000",
        padding: "5rem 0",
        minHeight: "100vh",
        color: "#ffffff",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2
            style={{
              color: "#fff",
              fontSize: "2.5rem",
              fontWeight: 700,
              
              marginBottom: "0.5rem",
            }}
          >
            My Projects
          </h2>
          <p style={{ color: "#fff", fontSize: "1.2rem", fontWeight: 400 }}>
            My Recent Work
          </p>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem 1rem",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              background: "linear-gradient(145deg, #111111, #1a1a1a)",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
              boxShadow:
                "8px 8px 24px rgba(0, 0, 0, 0.6), -4px -4px 12px rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              position: "relative",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 25px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.background =
                "linear-gradient(145deg, #1a1a1a, #222222)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "8px 8px 24px rgba(0, 0, 0, 0.6), -4px -4px 12px rgba(255, 255, 255, 0.02)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.background =
                "linear-gradient(145deg, #111111, #1a1a1a)";
            }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                height: "200px",
              }}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "all 0.5s ease",
                    filter: "brightness(0.8)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.15) rotate(2deg)";
                    e.target.style.filter = "brightness(1.1) contrast(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1) rotate(0deg)";
                    e.target.style.filter = "brightness(0.8)";
                  }}
                />
              )}
            </div>
            <div
              style={{
                padding: "1.5rem",
                position: "relative",
                zIndex: 1,
              }}
            >
              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginBottom: "0.75rem",
                  transition: "color 0.3s ease",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  color: "#b0b0b0",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                  marginBottom: "1rem",
                  transition: "color 0.3s ease",
                }}
              >
                {project.description}
              </p>
              {project.technologies && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: "linear-gradient(145deg, #1a1a1a, #2a2a2a)",
                        color: "#ffffff",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "6px",
                        fontSize: "0.8rem",
                        fontWeight: "500",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background =
                          "linear-gradient(145deg, #2a2a2a, #3a3a3a)";
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                        e.target.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background =
                          "linear-gradient(145deg, #1a1a1a, #2a2a2a)";
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                        e.target.style.transform = "translateY(0)";
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#ffffff",
                      textDecoration: "none",
                      padding: "0.5rem 1.25rem",
                      background: "linear-gradient(145deg, #1a1a1a, #2a2a2a)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background =
                        "linear-gradient(145deg, #2a2a2a, #3a3a3a)";
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
                      e.target.style.color = "#f8f9fa";
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow =
                        "0 4px 12px rgba(0, 0, 0, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background =
                        "linear-gradient(145deg, #1a1a1a, #2a2a2a)";
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.target.style.color = "#ffffff";
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#ffffff",
                      textDecoration: "none",
                      padding: "0.5rem 1.25rem",
                      background: "linear-gradient(145deg, #1a1a1a, #2a2a2a)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background =
                        "linear-gradient(145deg, #2a2a2a, #3a3a3a)";
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
                      e.target.style.color = "#f8f9fa";
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow =
                        "0 4px 12px rgba(0, 0, 0, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background =
                        "linear-gradient(145deg, #1a1a1a, #2a2a2a)";
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.target.style.color = "#ffffff";
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Prevent horizontal scrolling */
        * {
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
        }

        @media (max-width: 768px) {
          section {
            padding: 3rem 0 !important;
            overflow-x: hidden;
            width: 100%;
          }

          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 1rem !important;
            margin: 0 auto !important;
            max-width: calc(100vw - 2rem) !important;
            width: 100% !important;
          }

          div[style*="padding: 1.5rem"] {
            padding: 1rem !important;
          }

          h3 {
          margin-top: 0.5rem !important;
            font-size: 1.1rem !important;
          }

          p {
            font-size: 0.85rem !important;
          }

          div[style*="gap: 1rem"] {
            gap: 0.75rem !important;
            flex-direction: column !important;
          }

          a {
            text-align: center !important;
            flex: 1 !important;
            min-width: unset !important;
          }
        }

        @media (max-width: 480px) {
          div[style*="grid-template-columns"] {
            margin: 0 auto !important;
            padding: 0.75rem !important;
            max-width: calc(100vw - 1.5rem) !important;
            grid-template-columns: 1fr !important;
          }

          /* Ensure cards don't cause horizontal scroll */
          div[key] {
            max-width: 100% !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
