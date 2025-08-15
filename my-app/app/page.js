import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Skills/>
        <Services />
        <Testimonials />
      </main>
    </>
  );
}
