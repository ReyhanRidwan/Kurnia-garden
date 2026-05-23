import React from "react";
import { MessageCircle, Compass, FileText, Hammer, Sparkles, ArrowRight } from "lucide-react";
import { WORKFLOW_STEPS } from "../data";

const getWorkflowIcon = (iconName: string) => {
  switch (iconName) {
    case "MessageCircle":
      return <MessageCircle className="w-5 h-5" />;
    case "Compass":
      return <Compass className="w-5 h-5" />;
    case "FileText":
      return <FileText className="w-5 h-5" />;
    case "Spade":
      return <Hammer className="w-5 h-5" />;
    case "Heart":
      return <Sparkles className="w-5 h-5" />;
    default:
      return <MessageCircle className="w-5 h-5" />;
  }
};

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 bg-white scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#c5a46c] font-semibold">
            Langkah Mudah Pemesanan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-900 tracking-tight mt-3 mb-4">
            Alur Kerja Pembuatan Taman Kurnia Garden
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Membangun taman impian tidak perlu rumit atau mahal. Kami menyederhanakan prosesnya mulai dari komunikasi awal hingga garansi perawatan.
          </p>
        </div>

        {/* Dynamic Connected Steps Visualizer */}
        <div className="relative mt-8">
          
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] h-0.5 bg-brand-100" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 relative z-10">
            {WORKFLOW_STEPS.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                id={`workflow-step-${step.id}`}
              >
                {/* Step Circle Counter */}
                <div className="flex items-center justify-center lg:justify-between w-full mb-6">
                  {/* Icon & Index Number */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center border-2 border-brand-100/50 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all duration-300 shadow-md shadow-brand-100/30">
                      {getWorkflowIcon(step.iconName)}
                    </div>
                    {/* Tiny sequential integer index label */}
                    <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-[#d8b577] text-brand-950 font-mono font-bold text-[10px] flex items-center justify-center border-2 border-white shadow-xs">
                      {index + 1}
                    </div>
                  </div>

                  {/* Desktop Arrows connecting items */}
                  {index < WORKFLOW_STEPS.length - 1 && (
                    <div className="hidden lg:block text-brand-200">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:text-brand-500 transition-all" />
                    </div>
                  )}
                </div>

                {/* Copys */}
                <h3 className="text-base font-bold text-brand-950 font-display mb-2.5 group-hover:text-brand-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans max-w-xs lg:max-w-none">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
