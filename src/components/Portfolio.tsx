import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, Sparkles } from "lucide-react";
import { PORTFOLIO_ITEMS } from "../data";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const filters = [
    { key: "all", label: "Semua" },
    { key: "minimalis", label: "Minimalis" },
    { key: "tropis", label: "Tropis" },
    { key: "kering", label: "Taman Kering" },
    { key: "vertical", label: "Vertical Garden" },
    { key: "kolam", label: "Kolam Hias" },
    { key: "hardscape", label: "Hardscape" },
  ];

  const filteredItems = activeFilter === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#c5a46c] font-semibold">
              Karya Kreatif Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-900 tracking-tight mt-3 mb-2">
              Galeri Portofolio Landscape Hasil Kerja Kurnia Garden
            </h2>
            <p className="text-gray-500 text-sm font-sans leading-relaxed">
              Fokus pada visual berkulitas tinggi. Kami merancang dengan ketelitian ekstrem untuk memberikan hasil akhir yang asri dan memuaskan.
            </p>
          </div>

          {/* Optional decorative marker */}
          <div className="hidden lg:flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-xl text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-[#c5a46c]" />
            <span>Desain Customizable Sesuai Budget</span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-brand-50 justify-start">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/10"
                  : "bg-brand-50/50 text-gray-500 hover:text-brand-900 hover:bg-brand-50"
              }`}
              id={`filter-tabs-${filter.key}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* 3-Column Modern Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-brand-50 border border-brand-100/20 shadow-xs"
                onClick={() => {
                  setSelectedImage(item.image);
                  setSelectedTitle(item.title);
                }}
                id={`portfolio-item-${item.id}`}
              >
                {/* Horizontal spacious landscape image layout */}
                <div className="aspect-16/10 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Overlay shadow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-95 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* High fidelity tag overlays */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-xs text-brand-950 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md shadow-xs">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Desktop hover zoom marker */}
                  <div className="absolute top-4 right-4 z-20 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <div className="bg-brand-500 text-white p-2.5 rounded-full shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Portfolio Card Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-20 text-white flex flex-col gap-0.5 transform md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                    <h4 className="text-base font-bold font-display leading-tight">{item.title}</h4>
                    <div className="flex justify-between items-center text-xs text-gray-200 mt-1.5 font-sans">
                      <span className="font-light">Klien: {item.client}</span>
                      <span className="font-mono text-[11px] bg-white/25 px-2 py-0.5 rounded-sm">
                        {item.dimensions}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Lightbox Modal Popup */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-center items-center p-4 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-5xl w-full max-h-[85vh] bg-transparent flex justify-center items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt={selectedTitle || "Taman Kurnia Garden"}
                  className="max-w-full max-h-[80vh] rounded-xl object-contain shadow-2xl"
                  referrerPolicy="no-referrer"
                />

                {/* Dismiss button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 bg-white/15 hover:bg-white/30 text-white p-2.5 rounded-full cursor-pointer transition-colors"
                  aria-label="Close Lightbox"
                  id="btn-close-lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Title info */}
              {selectedTitle && (
                <div className="mt-4 text-center text-white max-w-lg">
                  <p className="font-display font-semibold text-lg">{selectedTitle}</p>
                  <p className="text-xs text-gray-400 font-sans mt-0.5">
                    Kurnia Garden - Jasa Pembuatan Taman Profesional Bergaransi
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
