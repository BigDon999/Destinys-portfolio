import React from "react";
import Header from "./components/header/Header"
import Services from "./components/services/ServicesSection";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Services/>
      <Testimonials/>
    </>
  );
}
