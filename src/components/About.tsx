import React, { useEffect, useState, useRef } from "react";
import { CheckCircle2, Shield, Settings, Heart } from "lucide-react";

// Interactive Counter hook-style component
function Counter({ targetValue, suffix = "" }: { targetValue: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 1500; // 1.5s
    const increment = targetValue / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, targetValue]);

  return (
    <div ref={elementRef} className="text-3xl sm:text-4xl font-extrabold font-display text-brand-500">
      {count}
      {suffix}
    </div>
  );
}

export default function About() {
  const highlights = [
    {
      title: "Desain Kustom Sesuai Kebutuhan",
      desc: "Setiap rumah berkarakter unik. Kami merancang taman kustom yang menyatu sempurna dengan arsitektur rumah Anda."
    },
    {
      title: "Tim Landscape Profesional",
      desc: "Didukung pekerja ahli, arsitek lanskap berpengalaman, serta pengawas lapangan yang profesional."
    },
    {
      title: "Solusi Lengkap End-to-End",
      desc: "Mulai dari perencanaan desain 2D/3D, pengurukan, penanaman, hingga skema perawatan jangka panjang."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Left - Image visual with badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-brand-100/40">
              {/* Premium image loaded with referrerPolicy as requested */}
              <img
                src="https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1775644289/gambarproyek2_chtuzp.jpg"
                alt="Proyek Landscape Kurnia Garden"
                className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Decorative Floating Card - Years of Experience */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-brand-500 text-white p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-brand-600 max-w-[240px] z-20">
              <div className="bg-white/20 p-2.5 rounded-xl">
                <Shield className="w-6 h-6 text-[#d8b577]" />
              </div>
              <div>
                <div className="text-2xl font-black font-display tracking-tight text-white leading-none">12+</div>
                <div className="text-xs text-white/85 font-sans mt-1">Tahun Pengalaman Kerja Kreatif</div>
              </div>
            </div>

            {/* Accent styling dots pattern background equivalent */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-50 rounded-full -z-10" />
          </div>

          {/* Column 2: Right - Content Copy & Services Highlight */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="font-mono text-xs uppercase tracking-widest text-[#c5a46c] font-semibold mb-3">
              Tentang Kurnia Garden
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-900 tracking-tight leading-tight mb-6">
              Mewujudkan Landscape Taman Idaman yang Hijau & Berkelas
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              Kami adalah penyedia <strong className="text-brand-900 font-medium">jasa landscape profesional</strong> yang bergerak di bidang jasa desain taman, pembuatan taman, hingga perawatan taman berkala. Dengan komitmen keindahan dan keandalan, Kurnia Garden mendedikasikan waktu untuk merancang asri hijau di hunian modern, villa, perkantoran, dan fasilitas umum.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 font-sans">
              Kami percaya bahwa sebuah taman bukan sekadar pajangan, melainkan bagian dari paru-paru rumah Anda, area penyegar pikiran, dan penambah prestise hunian. Oleh karena itu, semua skema desain bisa disesuaikan (<span className="text-brand-700 font-semibold underline decoration-accent-500 decoration-2">custom</span>) sesuai selera, kontur lahan, dan budget Anda.
            </p>

            {/* Check marks */}
            <div className="flex flex-col gap-4 w-full mb-10">
              {highlights.map((hlt, i) => (
                <div key={i} className="flex gap-3.5 items-start">
                  <div className="mt-1 bg-brand-50 p-1 rounded-full text-brand-500 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-950 font-display">{hlt.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{hlt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Counter Section */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full pt-8 border-t border-brand-100/70">
              <div className="flex flex-col">
                <Counter targetValue={450} suffix="+" />
                <span className="text-xs text-gray-500 font-sans mt-1.5 font-medium">Proyek Selesai</span>
              </div>
              <div className="flex flex-col">
                <Counter targetValue={98} suffix="%" />
                <span className="text-xs text-gray-500 font-sans mt-1.5 font-medium">Klien Puas & Rekomen</span>
              </div>
              <div className="flex flex-col">
                <Counter targetValue={12} suffix="+" />
                <span className="text-xs text-gray-500 font-sans mt-1.5 font-medium">Tahun Pengalaman</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
