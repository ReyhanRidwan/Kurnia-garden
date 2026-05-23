import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { HERO_SLIDES } from "../data";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideCount = HERO_SLIDES.length;

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000); // Auto-slide every 6 seconds
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const scrollToServices = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById("services");
    if (targetElement) {
      const offset = 80; // sticky header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Slider animation variants – horizontal sweep
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : dir < 0 ? "-100%" : "0%",
      opacity: 0,
    }),
    center: {
      x: "0%",
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 120, damping: 20 },
        opacity: { duration: 0.6 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : dir > 0 ? "-100%" : "0%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 120, damping: 20 },
        opacity: { duration: 0.6 }
      }
    })
  };

  return (
    <section
      id="home"
      className="relative w-full h-[95vh] md:h-screen bg-brand-950 overflow-hidden"
    >
      {/* Slides Representation */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image with lazy / high-performance style */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-102 transition-transform duration-10000"
              style={{
                backgroundImage: `url('${HERO_SLIDES[currentIndex].image}')`,
              }}
            />

            {/* Premium Multi-layer Overlay - Earthy Forest Green-black Tinted */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-brand-950/85 z-10" />

            {/* Grid for precise column alignment (Teks di Kanan, Kolom Kiri dibiarkan kosong) */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center">
                  
                  {/* KOLOM KIRI: Dibiarkan kosong agar ruang visual seimbang */}
                  <div className="hidden md:block" />

                  {/* KOLOM KANAN: Berisi konten slide dengan perataan rata kiri modern, dan vertical centering */}
                  <div className="flex flex-col text-center md:text-left items-center md:items-start max-w-xl md:pl-8">
                    {/* Animated Subtitle */}
                    <motion.span
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="inline-block font-mono text-xs md:text-sm uppercase tracking-widest text-[#d8b577] border-l-2 border-[#d8b577] pl-3 mb-4 text-left self-center md:self-start"
                    >
                      {HERO_SLIDES[currentIndex].subtitle}
                    </motion.span>

                    {/* Animated Heading */}
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-tight text-white mb-5 tracking-tight"
                    >
                      {HERO_SLIDES[currentIndex].title}
                    </motion.h1>

                    {/* Animated Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="text-gray-300 text-sm sm:text-base mb-8 max-w-md font-sans font-light leading-relaxed"
                    >
                      {HERO_SLIDES[currentIndex].description}
                    </motion.p>

                    {/* Animated Button */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                    >
                      <button
                        onClick={scrollToServices}
                        className="group flex items-center gap-2 bg-brand-500 text-white font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-brand-600 shadow-lg shadow-brand-500/20 active:scale-98 transition-all duration-300"
                        id={`btn-cta-${currentIndex}`}
                      >
                        <span>Lihat Layanan Kami</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows (Prev/Next) */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white/80 hover:text-white transition-all backdrop-blur-xs border border-white/10"
        aria-label="Previous Slide"
        id="btn-hero-prev"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white/80 hover:text-white transition-all backdrop-blur-xs border border-white/10"
        aria-label="Next Slide"
        id="btn-hero-next"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots Indicator Layer */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center items-center gap-3">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`transition-all duration-300 rounded-full h-2 focus:outline-hidden ${
              idx === currentIndex
                ? "bg-brand-500 w-8"
                : "bg-white/40 hover:bg-white/60 w-2"
            }`}
            aria-label={`Slide ${idx + 1}`}
            id={`btn-hero-dot-${idx}`}
          />
        ))}
      </div>
    </section>
  );
}
