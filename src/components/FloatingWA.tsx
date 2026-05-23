import React, { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getWAMessageUrl } from "../data";

export default function FloatingWA() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds for ultimate lead capture
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none">
      
      {/* Lead capture message notification tool-tip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 bg-brand-950 text-white font-sans text-xs px-4 py-3 rounded-xl shadow-2xl border border-brand-800 tracking-wide font-medium relative max-w-xs"
          >
            <div className="flex flex-col gap-0.5 pr-2">
              <span className="text-emerald-400 font-bold">Kurnia Garden Admin</span>
              <span>Tanya perkiraan biaya &amp; konsultasi gratis di sini! 🌿</span>
            </div>

            {/* Clear button */}
            <button
              onClick={() => setShowTooltip(false)}
              className="p-1 rounded-full text-white/50 hover:text-white hover:bg-white/10"
              aria-label="Tutup Notifikasi"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Little pointing arrow right */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-brand-950 border-r border-t border-brand-800 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={getWAMessageUrl("Halo Kurnia Garden, saya melihat website Anda dan ingin konsultasi gratis mengenai pembuatan taman.")}
        target="_blank"
        referrerPolicy="no-referrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full text-white shadow-2xl shadow-emerald-500/30 border-2 border-white/20"
        id="btn-floating-whatsapp"
      >
        {/* Pulsing visual halo boundary */}
        <span className="absolute inset-x-0 inset-y-0 rounded-full bg-emerald-500/40 animate-ping -z-10" />
        
        <Phone className="w-6 h-6 fill-current text-white-100" />
      </motion.a>

    </div>
  );
}
