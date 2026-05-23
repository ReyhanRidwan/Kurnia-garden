import React from "react";
import { Leaf, Trees, Sparkles, Layers, Droplet, Home, ArrowUpRight } from "lucide-react";
import { SERVICES, getWAMessageUrl } from "../data";

// Match string to icon
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Leaf":
      return <Leaf className="w-6 h-6" />;
    case "Trees":
      return <Trees className="w-6 h-6" />;
    case "Sun":
      return <Sparkles className="w-6 h-6" />;
    case "ArrowUp":
      return <Layers className="w-6 h-6" />;
    case "Droplet":
      return <Droplet className="w-6 h-6" />;
    case "Box":
      return <Home className="w-6 h-6" />;
    default:
      return <Leaf className="w-6 h-6" />;
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-50/50 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#c5a46c] font-semibold">
            Layanan Terbaik Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-900 tracking-tight leading-tight mt-3 mb-4">
            Solusi Landscape Terlengkap dan Profesional
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Kurnia Garden menawarkan jasa pembuatan dan penataan taman yang disesuaikan penuh dengan selera estetika dan kebutuhan ruang hunian Anda.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl overflow-hidden border border-brand-100/30 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full"
              id={`service-card-${srv.id}`}
            >
              {/* Card Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Float Floating Icon Header */}
                <div className="absolute top-4 right-4 bg-brand-500 text-white p-3 rounded-xl shadow-md z-10">
                  {getIcon(srv.iconName)}
                </div>
              </div>

              {/* Card Body & Info */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-brand-950 font-display mb-3 tracking-tight">
                    {srv.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                {/* Card CTA WA link */}
                <div className="pt-4 border-t border-brand-50">
                  <a
                    href={getWAMessageUrl(`Halo Kurnia Garden, saya tertarik dengan layanan *${srv.title}* dan ingin melakukan konsultasi gratis.`)}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700 hover:text-brand-500 hover:gap-3 transition-all"
                  >
                    <span>Konsultasi Layanan Ini</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Footer Anchor Service Section */}
        <div className="mt-16 text-center max-w-sm mx-auto">
          <p className="text-xs text-gray-400 font-medium leading-relaxed font-sans mb-3">
            Butuh poyek khusus di luar kategori di atas?
          </p>
          <a
            href={getWAMessageUrl("Halo Kurnia Garden, saya ingin berkonsultasi mengenai pembuatan jenis taman lainnya.")}
            target="_blank"
            referrerPolicy="no-referrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#b39158] hover:text-brand-600 transition-colors"
          >
            <span>Hubungi untuk Custom Order &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
