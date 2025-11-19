"use client";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import Space from "./components/Space";
import WhySection from "./components/WhySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <Space />
      <WhySection />
      <Contact />
      <Footer />
    </>
  );
}
