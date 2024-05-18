import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import HeroSection from "../routes/Hero";
import AboutSection from "../routes/About";
import Portfoliosection from "../routes/Portfolio";
import SponsorSection from "../routes/Sponsor";
import ContactSection from "../routes/Contact";
import { AnimatePresence } from "framer-motion";
const ARoutes = () => {
  return (
    <>
      <NavigationBar />
      <AnimatePresence initial={true} mode="wait">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/portfolio" element={<Portfoliosection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/sponsor" element={<SponsorSection />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default ARoutes;
