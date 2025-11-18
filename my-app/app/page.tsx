"use client";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import Space from "./components/Space";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <Space />
      <Contact />
      <Footer />
    </>
  );
}
