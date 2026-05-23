import React from "react";
import { Leaf, Phone, MapPin, Instagram, ShieldCheck, Mail } from "lucide-react";
import { WHATSAPP_DISPLAY, INSTAGRAM_DISPLAY, getWAMessageUrl } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-brand-955 text-gray-400 pt-20 pb-10 border-t border-brand-900/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-16 pb-16 border-b border-brand-900/40">
          
          {/* Logo & Slogan Column */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <div className="bg-brand-500 text-white p-2 rounded-xl">
                <Leaf className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-display">Kurnia Garden</span>
                <span className="text-[9px] uppercase tracking-widest font-mono text-brand-400">Premium Landscape</span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
              Kurnia Garden adalah jembatan profesional Anda untuk mengintegrasikan keindahan alam, fungsionalitas ruang hijau, dan kemewahan alami di seluruh sudut pekarangan rumah Anda.
            </p>

            {/* Cert marker */}
            <div className="flex items-center gap-2 text-xs text-white bg-brand-900/45 px-3.5 py-2 rounded-xl border border-brand-850 w-fit">
              <ShieldCheck className="w-4.5 h-4.5 text-[#d8b577] shrink-0" />
              <span>Tim Bersertifikat & Bergaransi</span>
            </div>
          </div>

          {/* Quick Menu Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider pb-1 border-b border-brand-900/30">
              Navigasi Cepat
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm">
              <li>
                <a href="#home" onClick={(e) => handleScrollTo(e, "home")} className="hover:text-brand-400 transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, "about")} className="hover:text-brand-400 transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="hover:text-brand-400 transition-colors">Layanan Kami</a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleScrollTo(e, "portfolio")} className="hover:text-brand-400 transition-colors">Portofolio Kerja</a>
              </li>
              <li>
                <a href="#workflow" onClick={(e) => handleScrollTo(e, "workflow")} className="hover:text-brand-400 transition-colors">Cara Pemesanan</a>
              </li>
            </ul>
          </div>

          {/* Service coverage Locations column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider pb-1 border-b border-brand-900/30">
              Wilayah Layanan
            </h4>
            <div className="flex gap-2.5 items-start">
              <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1 text-xs leading-relaxed font-light">
                <span className="text-white font-medium">Jabodetabek & Jawa Barat:</span>
                <span>Jakarta, Bogor, Depok, Tangerang, Bekasi, Sentul City, Cibubur, Bandung, dan sekitarnya.</span>
              </div>
            </div>
            <div className="flex gap-2.5 items-center mt-2">
              <Mail className="w-4 h-4 text-brand-500 shrink-0" />
              <span className="text-xs">info@kurniagarden.com</span>
            </div>
          </div>

          {/* Contact Details & Instagram Social */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider pb-1 border-b border-brand-900/30">
              Hubungi Kurnia Garden
            </h4>
            
            <div className="flex flex-col gap-3">
              <a
                href={getWAMessageUrl("Halo Kurnia Garden, saya melihat kontak Anda di website.")}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer w-fit"
              >
                <div className="bg-emerald-500/10 p-2.5 rounded-lg text-emerald-400">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 leading-none">WhatsApp Bisnis</span>
                  <span className="text-sm font-semibold">{WHATSAPP_DISPLAY}</span>
                </div>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer w-fit"
              >
                <div className="bg-pink-500/10 p-2.5 rounded-lg text-pink-400 font-bold">
                  <Instagram className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 leading-none">Instagram</span>
                  <span className="text-sm font-semibold">{INSTAGRAM_DISPLAY}</span>
                </div>
              </a>
            </div>

          </div>

        </div>

        {/* SEO - Keyword Meta tags text snippet */}
        <div className="py-10 border-b border-brand-900/30 text-center max-w-4xl mx-auto">
          <p className="text-[11px] text-gray-500 leading-relaxed font-sans font-light">
            Tag Terkait: <strong>jasa taman</strong> | <strong>tukang taman</strong> | <strong>jasa landscape</strong> | <strong>pembuatan taman rumah</strong> | taman minimalis Jabodetabek | pembuat kolam koi profesional | taman vertikal Bogor Sentul | gazebo kayu minimalis. Kurnia Garden hadir sebagai spesialis penataan eksterior rumah terpercaya dan bergaransi kepuasan.
          </p>
        </div>

        {/* Bottom Rights copyrights */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 font-mono gap-4">
          <span>&copy; {currentYear} Kurnia Garden Landscape. Seluruh Hak Cipta Dilindungi.</span>
          <div className="flex gap-4">
            <a href="#home" onClick={(e) => handleScrollTo(e, "home")} className="hover:text-white">Syarat Ketentuan</a>
            <span>&bull;</span>
            <a href="#home" onClick={(e) => handleScrollTo(e, "home")} className="hover:text-white">Kebijakan Privasi</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
