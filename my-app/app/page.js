import React from "react";
import Header from "./components/header/Header";
import Services from "./components/services/ServicesSection";
import Testimonials from "./components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Services />
        <Testimonials />
      </main>
    </>
  );
}
