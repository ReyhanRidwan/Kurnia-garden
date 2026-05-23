import React from "react";
import { Star, MessageSquare } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-50/20 border-y border-brand-100/30 scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#c5a46c] font-semibold">
            Testimoni & Review Klien
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-900 tracking-tight mt-3 mb-4">
            Ulasan Kepuasan Pemilik Rumah & Gedung
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Kepercayaan Anda adalah prioritas kami. Berikut adalah suara langsung dari para pelanggan yang telah mewujudkan taman impian bersama Kurnia Garden.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="bg-white p-8 rounded-2xl border border-brand-100/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              id={`testi-card-${testi.id}`}
            >
              {/* Star rating Row */}
              <div>
                <div className="flex gap-1 text-amber-500 mb-6 transition-colors">
                  {[...Array(testi.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Testimonial Core Comment */}
                <p className="text-gray-600 text-sm leading-relaxed italic font-sans mb-8">
                  &ldquo;{testi.comment}&rdquo;
                </p>
              </div>

              {/* Client Profile Section */}
              <div className="flex items-center gap-4 pt-5 border-t border-brand-50 shrink-0">
                {/* Visual Avatar */}
                <img
                  src={testi.image}
                  alt={testi.name}
                  className="w-11 h-11 rounded-full object-cover border border-brand-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-brand-950 font-display">
                    {testi.name}
                  </span>
                  <span className="text-[11px] text-gray-400 font-sans tracking-tight">
                    {testi.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google / WhatsApp verification badge equivalence */}
        <div className="mt-16 text-center max-w-md mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-100/40 text-brand-800 text-xs px-4 py-2 rounded-full font-semibold border border-brand-150">
            <MessageSquare className="w-4 h-4 text-brand-600" />
            <span>Rating Rata-rata Pelanggan: 4.9/5 Berdasarkan Kontak WhatsApp</span>
          </div>
        </div>

      </div>
    </section>
  );
}
