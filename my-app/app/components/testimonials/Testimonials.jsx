"use client";

import React from 'react';
import styles from "./Testimonials.module.css";
// Correct imports for Swiper v11
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.min.css'; // Main CSS
import 'swiper/css/pagination'; // Pagination CSS
import Image from 'next/image';
import daniel from "../../assets/daniel.jpg";
import priye from "../../assets/priye.jpg";
import megan from "../../assets/megan.jpg";
import plantceo from "../../assets/plant-ceo.jpg"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, DesignHub",
    content: "Working with this team transformed our online presence. Our website traffic increased by 300% within three months of launch, and the design perfectly captures our brand identity.",
    rating: 5,
    image: megan
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, TechSolutions",
    content: "The development team delivered our project ahead of schedule while maintaining exceptional quality. Their attention to detail and problem-solving skills are unmatched in the industry.",
    rating: 5,
    image: daniel
  },
  {
    id: 3,
    name: "Josh Rodriguez",
    role: "Founder, CreativeMinds",
    content: "I was blown away by the logo designs presented to us. They managed to capture exactly what we wanted before we even knew how to articulate it. Truly talented designers!",
    rating: 4,
    image: priye
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Product Manager, InnovateCo",
    content: "The web application they built for us has been running flawlessly with zero downtime. Their technical expertise saved us countless hours of troubleshooting.",
    rating: 5,
    image: plantceo
  }
];

function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <h2 className={styles.title}>Client Testimonials</h2>
      <p className={styles.subtitle}>Here's what my satisfied clients say about working with me</p>
      
      <div className={styles.swiperContainer}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          className={styles.swiper}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className={styles.slide}>
              <div className={styles.card}>
                <div className={styles.clientImage}>
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    width={80} 
                    height={80}
                    className={styles.avatar}
                  />
                </div>
                <div className={styles.rating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className={styles.star}>&#9733;</span>
                  ))}
                </div>
                <p className={styles.content}>"{testimonial.content}"</p>
                <div className={styles.author}>
                  <h3 className={styles.name}>{testimonial.name}</h3>
                  <p className={styles.role}>{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;