import React from "react";
import { HelpCircle, DollarSign, ShieldCheck, Clock } from "lucide-react";
import { USPS } from "../data";

const getUspIcon = (iconName: string) => {
  switch (iconName) {
    case "HelpCircle":
      return <HelpCircle className="w-6 h-6" />;
    case "DollarSign":
      return <DollarSign className="w-6 h-6" />;
    case "ShieldCheck":
      return <ShieldCheck className="w-6 h-6" />;
    case "Clock":
      return <Clock className="w-6 h-6" />;
    default:
      return <HelpCircle className="w-6 h-6" />;
  }
};

export default function USP() {
  return (
    <section id="usp" className="py-24 bg-brand-900 text-white scroll-mt-10 overflow-hidden relative">
      {/* Decorative Natural Greenery Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(27,77,62,0.65),transparent)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-800 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d8b577] border-l-2 border-[#d8b577] pl-3">
              Keunggulan Kurnia Garden
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight leading-tight mt-4 text-white">
              Mengapa Memercayakan Pembuatan Taman Anda Kepada Kami?
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans font-light">
              Sebagai penyedia jasa landscape profesional dan terpercaya, Kurnia Garden menggabungkan nilai-nilai pengerjaan terbaik, pemilihan tanaman hias premium, estetika visual modern, serta transparansi biaya demi kepuasan Anda yang berharga.
            </p>
          </div>
        </div>

        {/* USP Core Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {USPS.map((usp) => (
            <div
              key={usp.id}
              className="bg-brand-950/60 p-8 rounded-2xl border border-brand-800/60 hover:border-brand-700 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              id={`usp-card-${usp.id}`}
            >
              <div>
                {/* Icon wrapper */}
                <div className="bg-brand-800 text-[#d8b577] p-3 rounded-xl w-fit mb-6 shadow-md border border-brand-700/50">
                  {getUspIcon(usp.iconName)}
                </div>
                
                <h3 className="text-lg font-bold text-white font-display mb-3 tracking-tight">
                  {usp.title}
                </h3>
                <p className="text-gray-350 text-xs sm:text-sm leading-relaxed font-light">
                  {usp.description}
                </p>
              </div>

              {/* Decorative accent notch */}
              <div className="mt-6 w-8 h-0.5 bg-brand-700 rounded-full" />
            </div>
          ))}
        </div>

        {/* Dynamic Highlight summary line */}
        <div className="mt-16 text-center border-t border-brand-800/80 pt-10">
          <p className="text-xs sm:text-sm text-gray-400 font-sans font-light">
            *Kami melayani area pengerjaan menyeluruh untuk seluruh wilayah <strong className="text-white">Jabodetabek</strong>, <strong className="text-white">Jawa Barat</strong>, dan sekitarnya.
          </p>
        </div>

      </div>
    </section>
  );
}
