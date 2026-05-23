import React from "react";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_DISPLAY, getWAMessageUrl } from "../data";

export default function CTA() {
  const assurances = [
    "Konsultasi 100% Gratis",
    "Survey & Pengukuran Gratis",
    "Rencana Anggaran Transparan",
    "Garansi Kepuasan Tumbuh"
  ];

  return (
    <section id="cta" className="py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Decorative earthy backgrounds */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-800 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Core Tag */}
        <span className="font-mono text-xs uppercase tracking-widest text-[#d8b577] font-bold mb-4 inline-block">
          Mulai Rancang Hari Ini
        </span>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight leading-tight max-w-3xl mx-auto mb-6">
          Wujudkan Taman Impian Anda Sekarang Bersama Kurnia Garden
        </h2>
        
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-10 font-sans font-light">
          Jangan tunda lagi keindahan hunian Anda. Diskusikan ide Anda dengan desainer handal kami dan dapatkan <strong className="text-white">survey lokasi serta pembuatan desain 100% GRATIS!</strong>
        </p>

        {/* Big WhatsApp CTA Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={getWAMessageUrl("Halo Kurnia Garden, saya melihat penawaran di website dan ingin menjadwalkan survey lokasi gratis.")}
            target="_blank"
            referrerPolicy="no-referrer"
            className="group flex items-center justify-center gap-2.5 px-8 py-4.5 bg-brand-500 text-white font-bold text-lg rounded-2xl hover:bg-brand-600 shadow-xl shadow-brand-500/20 hover:scale-102 active:scale-98 transition-all duration-300 w-full sm:w-auto"
            id="btn-cta-whatsapp-large"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Chat WhatsApp Sekarang</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>

          {/* Alternative CTA Option */}
          <span className="text-xs text-gray-400 font-mono">atau hubungi WA: {WHATSAPP_DISPLAY}</span>
        </div>

        {/* Bullet Assurances */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-8 border-t border-brand-800/60 max-w-3xl mx-auto">
          {assurances.map((ass, i) => (
            <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-350">
              <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
              <span>{ass}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
