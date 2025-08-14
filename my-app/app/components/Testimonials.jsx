"use client";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Working with this team was an absolute pleasure. They delivered exceptional results that exceeded our expectations and transformed our brand identity completely.",
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "/assets/megan.jpg",
    },
    {
      text: "The attention to detail and creative vision they brought to our project was outstanding. Our website conversion rates increased by 300% after the redesign.",
      name: "Michael Chen",
      role: "CEO, TechStart",
      image: "/assets/daniel.jpg",
    },
    {
      text: "Professional, responsive, and incredibly talented. They turned our vague ideas into a stunning visual identity that perfectly captures our company's essence.",
      name: "Emily Rodriguez",
      role: "Founder, Creative Co",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      text: "From concept to completion, the entire process was seamless. The final product not only met but surpassed all our requirements. Highly recommended!",
      name: "David Park",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      text: "Their innovative approach and technical expertise helped us stand out in a crowded market. The ROI on this investment has been incredible.",
      name: "Lisa Thompson",
      role: "Brand Manager",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
  ];

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const containerStyle = {
    padding: "4rem 2rem",
    backgroundColor: "transparent",
    overflow: "hidden",
    maxWidth: "100vw",
    width: "100%",
    boxSizing: "border-box",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "3rem",
  };

  const carouselContainerStyle = {
    position: "relative",
    maxWidth: "1200px",
    margin: "0 auto",
    overflow: "hidden",
  };

  const carouselTrackStyle = {
    display: "flex",
    position: "relative",
    height: "auto",
  };

  const slideStyle = {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0 1rem",
    opacity: 1,
    transition: "opacity 0.5s ease-in-out",
  };

  // Responsive card style
  const cardStyle = {
    backgroundColor: "#292929",
    borderRadius: "16px",
    padding: "2.5rem",
    maxWidth: "600px",
    width: "90%",
    position: "relative",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    border: "1px solid #404040",
    boxSizing: "border-box",
  };

  // Responsive adjustments using window width
  let responsiveCardStyle = { ...cardStyle };
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    if (width <= 600) {
      responsiveCardStyle = {
        ...responsiveCardStyle,
        padding: "1rem",
        fontSize: "0.95rem",
        maxWidth: "98vw",
      };
    } else if (width <= 900) {
      responsiveCardStyle = {
        ...responsiveCardStyle,
        padding: "1.5rem",
        fontSize: "1rem",
        maxWidth: "90vw",
      };
    }
  }

  const textStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.7",
    color: "#fff",
    marginBottom: "2rem",
    fontStyle: "italic",
  };

  const authorSectionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  };

  const imageStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #fff",
  };

  const authorInfoStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const nameStyle = {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#fff",
    margin: "0",
  };

  const roleStyle = {
    fontSize: "0.9rem",
    color: "#ccc",
    margin: "0.25rem 0 0 0",
  };

  const dotsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    marginTop: "2rem",
  };

  const getDotStyle = (index) => ({
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: currentIndex === index ? "#fff" : "#666",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "none",
  });

  const quoteStyle = {
    position: "absolute",
    top: "1rem",
    left: "1.5rem",
    fontSize: "3rem",
    color: "#555",
    fontFamily: "serif",
    lineHeight: "1",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>What Our Clients Say</h2>

      <div style={carouselContainerStyle}>
        <div style={carouselTrackStyle}>
          {testimonials.map((testimonial, index) => {
            const slideOpacity = index === currentIndex ? 1 : 0;
            const currentSlideStyle = {
              ...slideStyle,
              position: index === currentIndex ? "relative" : "absolute",
              top: index === currentIndex ? "0" : "0",
              left: index === currentIndex ? "0" : "0",
              right: index === currentIndex ? "0" : "0",
              opacity: slideOpacity,
              transform: index === currentIndex ? "scale(1)" : "scale(0.95)",
              transition: "all 0.6s ease-in-out",
              zIndex: index === currentIndex ? 1 : 0,
            };

            return (
              <div key={index} style={currentSlideStyle}>
                <div style={responsiveCardStyle}>
                  <div style={quoteStyle}>"</div>
                  <p style={textStyle}>{testimonial.text}</p>

                  <div style={authorSectionStyle}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={imageStyle}
                    />
                    <div style={authorInfoStyle}>
                      <h4 style={nameStyle}>{testimonial.name}</h4>
                      <p style={roleStyle}>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={dotsContainerStyle}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              style={getDotStyle(index)}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
