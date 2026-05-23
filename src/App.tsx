/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import USP from "./components/USP";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";

export default function App() {
  return (
    <div className="relative min-h-screen bg-neutral-50 selection:bg-brand-500 selection:text-white">
      {/* Premium Sticky Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main>
        {/* 1. Fullscreen Image Slider Hero */}
        <Hero />

        {/* 2. Tentang Kami section displaying stats and custom text */}
        <About />

        {/* 3. Layanan Kami visual cards grid layout */}
        <Services />

        {/* 4. Portfolio / Gallery section with interactive filters representing 3 columns */}
        <Portfolio />

        {/* 5. Keunggulan (USP) section */}
        <USP />

        {/* 6. Testimoni Klien authentic feedback block */}
        <Testimonials />

        {/* 7. Cara Kerja (Flow) step scheduler layout */}
        <Workflow />

        {/* 8. Call to Action (CTA Section) banner */}
        <CTA />
      </main>

      {/* 9. Contact Info & Interactive Footer */}
      <Footer />

      {/* 10. Floating High-Converting lead-capture WA button */}
      <FloatingWA />
    </div>
  );
}

