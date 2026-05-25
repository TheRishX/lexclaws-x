import React from 'react';
import { Award, Zap, ThumbsUp, Scale, Clock, CheckCircle } from 'lucide-react';

interface WhyChooseUsProps {
  onWhatsApp: () => void;
}

export default function WhyChooseUs({ onWhatsApp }: WhyChooseUsProps) {
  const points = [
    {
      title: "Highly Qualified Advocates",
      desc: "Our senior litigation panel comprises Bar Association experts in New Delhi with continuous litigation track records spanning 15+ combined years.",
      icon: <Award className="h-6 w-6 text-amber-600" />
    },
    {
      title: "Client-Centric Philosophy",
      desc: "We simplify statutory definitions and make legal filings crystal clear. No nested legalese designed to keep you locked to high-retainer contracts.",
      icon: <CheckCircle className="h-6 w-6 text-amber-600" />
    },
    {
      title: "Active Communication Desk",
      desc: "Connect over Zoom conferencing or obtain real-time file updates via WhatsApp and telephone. Rest easy knowing your court actions are progressing.",
      icon: <Zap className="h-6 w-6 text-emerald-600" />
    },
    {
      title: "Fast Interim Protections",
      desc: "In emergency criminal complaints or intellectual property infringements, our advocates move District & High Court nodes for urgent reliefs instantly.",
      icon: <Clock className="h-6 w-6 text-amber-600" />
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white relative">
      <div className="absolute top-1/2 left-12 w-64 h-64 bg-amber-500/3 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-amber-700 uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            Our Differentiators
          </span>
          <h2 className="mt-4 font-sans font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
            Setting the Standard in Pragmatic Legal Care
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Lex Claws brings transparency, digital-first access, and pre-meditated consultation fees to Delhi litigation environments.
          </p>
        </div>

        {/* Core Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-2">
          {points.map((pt, idx) => (
            <div 
              key={idx}
              className="bg-stone-50/70 border border-stone-200/70 rounded-[1.8rem] p-6.5 sm:p-8 flex flex-col justify-between hover:border-amber-500/35 hover:bg-amber-50/10 hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="p-3 bg-white rounded-xl border border-stone-100 group-hover:bg-amber-50 group-hover:border-amber-100 w-fit mb-5 transition-colors">
                  {pt.icon}
                </div>
                <h3 className="font-sans font-bold text-lg text-neutral-900 tracking-tight">
                  {pt.title}
                </h3>
                <p className="mt-2 text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {pt.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/40 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400">
                  LEX CLAWS PROVISIONS
                </span>
                <span 
                  onClick={onWhatsApp}
                  className="text-xs font-bold font-mono text-amber-700 hover:text-amber-850 cursor-pointer"
                >
                  Learn More
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-neutral-900 rounded-[2rem] p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between border border-neutral-950 shadow-xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full filter blur-xl pointer-events-none" />

          <div className="space-y-1 mb-6 sm:mb-0">
            <span className="text-[10px] font-mono uppercase text-amber-400 tracking-widest font-bold">
              Looking for a Trusted partner?
            </span>
            <h3 className="font-sans font-bold text-lg sm:text-xl text-stone-100">
              We provide free initial case audits &amp; intake diagnostic reviews.
            </h3>
          </div>

          <button
            onClick={onWhatsApp}
            className="w-full sm:w-auto px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-neutral-900 rounded-xl text-xs font-bold tracking-wider uppercase transition-colors shrink-0"
          >
            Start Chat Now
          </button>
        </div>

      </div>
    </section>
  );
}
