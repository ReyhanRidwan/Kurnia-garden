import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Leaf } from "lucide-react";
import { WHATSAPP_DISPLAY, getWAMessageUrl } from "../data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Layanan", href: "#services" },
    { label: "Portofolio", href: "#portfolio" },
    { label: "Keunggulan", href: "#usp" },
    { label: "Testimoni", href: "#testimonials" },
    { label: "Cara Kerja", href: "#workflow" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // height of sticky header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-100/30 py-3"
          : "bg-black/20 md:bg-transparent backdrop-blur-xs md:backdrop-blur-none py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center gap-2 group focus:outline-hidden"
          >
            <div className="bg-brand-500 text-white p-2 rounded-xl group-hover:bg-brand-600 transition-colors shadow-md shadow-brand-500/10">
              <Leaf className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold tracking-tight font-display transition-colors ${
                  isScrolled ? "text-brand-900" : "text-white"
                }`}
              >
                Kurnia Garden
              </span>
              <span
                className={`text-[9px] uppercase tracking-widest font-mono ${
                  isScrolled ? "text-brand-500 font-semibold" : "text-brand-100"
                }`}
              >
                Landscape & Garden Designer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href.substring(1))}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-brand-50/50 ${
                  isScrolled
                    ? "text-gray-600 hover:text-brand-600"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Call to Action WhatsApp */}
          <div className="hidden lg:flex items-center">
            <a
              href={getWAMessageUrl("Halo Kurnia Garden, saya melihat website Anda dan ingin berkonsultasi mengenai jasa pembuatan taman.")}
              target="_blank"
              referrerPolicy="no-referrer"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all duration-300 hover:scale-102 hover:shadow-lg ${
                isScrolled
                  ? "bg-brand-500 text-white hover:bg-brand-600 shadow-brand-500/10"
                  : "bg-white text-brand-900 hover:bg-brand-50 shadow-black/10"
              }`}
            >
              <Phone className="w-4 h-4 fill-current text-white-400" />
              <span>Hubungi WA</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-hidden ${
                isScrolled ? "text-brand-900" : "text-white"
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-white shadow-2xl border-l border-brand-100 flex flex-col justify-between p-6 transform transition-transform duration-300 ease-in-out lg:hidden h-screen ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="bg-brand-500 text-white p-2 rounded-lg">
                <Leaf className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-brand-900 font-display">Kurnia Garden</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 rounded-lg text-gray-500 hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-1.5Packed">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href.substring(1))}
                className="px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50/50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
          <div className="text-xs text-gray-400 font-mono text-center">
            Pengerjaan Landscape Bergaransi
          </div>
          <a
            href={getWAMessageUrl("Halo Kurnia Garden, saya melihat website Anda dan ingin berkonsultasi mengenai jasa pembuatan taman.")}
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-brand-500 text-white font-bold shadow-md hover:bg-brand-600 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
