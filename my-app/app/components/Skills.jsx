"use client";
import { useState, useEffect } from "react";

const Skills = () => {
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const skills = [
    { image: "/assets/html.png", title: "HTML", color: "#E34F26" },
    { image: "/assets/css.png", title: "CSS", color: "#1572B6" },
    { image: "/assets/javascript.png", title: "JavaScript", color: "#F7DF1E" },
    { image: "/assets/React.png", title: "React", color: "#61DAFB" },
    { image: "/assets/nextjs.png", title: "Next.js", color: "#000000" },
    { image: "/assets/tailwind.png", title: "Tailwind CSS", color: "#06B6D4" },
    { image: "/assets/bootstrap.png", title: "Bootstrap", color: "#7952B3" },
    { image: "/assets/firebase.png", title: "Firebase", color: "#FFCA28" },
    { image: "/assets/figma.png", title: "Figma", color: "#F24E1E" },
    { image: "/assets/framer.png", title: "Framer Motion", color: "#fff" },
  ];

  const getResponsiveConfig = () => {
    if (windowWidth >= 1200) return { columns: 5, cardWidth: "200px", cardHeight: "220px", iconSize: "90px", fontSize: "1rem", titleSize: "3rem", gap: "2.5rem", padding: "3rem" };
    if (windowWidth >= 992) return { columns: 4, cardWidth: "180px", cardHeight: "200px", iconSize: "80px", fontSize: "1rem", titleSize: "2.8rem", gap: "2rem", padding: "2.5rem" };
    if (windowWidth >= 768) return { columns: 3, cardWidth: "160px", cardHeight: "180px", iconSize: "70px", fontSize: "0.9rem", titleSize: "2.5rem", gap: "1.5rem", padding: "2rem" };
    if (windowWidth >= 576) return { columns: 2, cardWidth: "140px", cardHeight: "160px", iconSize: "60px", fontSize: "0.9rem", titleSize: "2rem", gap: "1.5rem", padding: "1.5rem" };
    if (windowWidth >= 320) return { columns: 2, cardWidth: "130px", cardHeight: "150px", iconSize: "50px", fontSize: "0.8rem", titleSize: "1.8rem", gap: "1rem", padding: "1rem" };
    return { columns: 1, cardWidth: "120px", cardHeight: "140px", iconSize: "45px", fontSize: "0.7rem", titleSize: "1.6rem", gap: "1rem", padding: "1rem" };
  };

  const config = getResponsiveConfig();

  return (
    <>
      {/* Inline keyframes for animation */}
      <style>
        {`
          @keyframes slideUp {
            0% {
              transform: translateY(30px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>

      <div
        style={{
          width: "100%",
          backgroundColor: "#000",
          padding: windowWidth >= 768 ? "3rem 1.5rem" : "2rem 1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            maxWidth: windowWidth >= 1200 ? "1000px" : windowWidth >= 768 ? "800px" : "100%",
            width: "100%",
          }}
        >
          {/* Title */}
          <div style={{ textAlign: "center", marginBottom: windowWidth >= 768 ? "3rem" : "2rem" }}>
            <h2
              style={{
                fontSize: config.titleSize,
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#fff",
                margin: 0,
              }}
            >
              My Skills
            </h2>
            <p
              style={{
                color: "#9ca3af",
                fontSize: windowWidth >= 576 ? "1rem" : "0.9rem",
                padding: windowWidth < 576 ? "0 1rem" : "0",
              }}
            >
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${config.columns}, 1fr)`,
              gap: config.gap,
              justifyContent: "center",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "16px",
                  padding: config.padding,
                  border: "2px solid rgba(255,255,255,0.1)",
                  height: config.cardHeight,
                  width: config.cardWidth,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  animation: `slideUp 0.6s ease-out ${index * 0.15}s forwards`,
                  opacity: 0, // start invisible until animation runs
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${skill.color}15`;
                  e.currentTarget.style.borderColor = skill.color;
                  e.currentTarget.style.boxShadow = `0 8px 24px ${skill.color}40`;
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: windowWidth >= 576 ? "1rem" : "0.5rem" }}>
                  <img
                    src={skill.image}
                    alt={skill.title}
                    style={{
                      width: config.iconSize,
                      height: config.iconSize,
                      objectFit: "contain",
                    }}
                  />
                </div>
                <h3 style={{ color: "#fff", fontSize: config.fontSize, fontWeight: "600", textAlign: "center", margin: 0 }}>
                  {skill.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
