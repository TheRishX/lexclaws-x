import React from 'react';
import { motion } from 'motion/react';
import { Scale, Shield, Users, Award, Landmark, TrendingUp } from 'lucide-react';

interface AboutProps {
  onWhatsApp: () => void;
}

export default function About({ onWhatsApp }: AboutProps) {
  const stats = [
    { number: '15+', label: 'Combined Experience Years', icon: <Landmark className="h-5 w-5 text-amber-600" /> },
    { number: '200+', label: 'Corporate Clients & Startups', icon: <Users className="h-5 w-5 text-amber-600" /> },
    { number: '51-200', label: 'In-house Legal Staff', icon: <Award className="h-5 w-5 text-amber-600" /> },
    { number: '99%', label: 'Consultation Satisfaction', icon: <TrendingUp className="h-5 w-5 text-amber-600" /> }
  ];

  const pillars = [
    {
      title: 'Our Mission',
      desc: 'To bridge the gap between people and the legal system by providing clear, accessible, and highly trustworthy legal solutions.',
      border: 'border-amber-200'
    },
    {
      title: 'Our Vision',
      desc: 'To democratize judicial assistance, making premium legal support understandable, affordable, and actionable for private individuals and enterprises.',
      border: 'border-stone-200'
    }
  ];

  return (
    <section id="about" className="py-24 bg-stone-50 border-t border-b border-stone-200/50 relative overflow-hidden">
      {/* Dynamic Background Accent Gradient */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/3 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-amber-700 uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            About Lex Claws
          </span>
          <h2 className="mt-4 font-sans font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
            Simplifying Complex Judicial Procedures
          </h2>
          <p className="mt-4 text-stone-600 text-base leading-relaxed">
            Founded in 2022 in New Delhi, Lex Claws has grown to house between 51–200 legal and support professionals. We specialize in turning painful, opaque legal dispute processes into stress-free, digital-friendly steps.
          </p>
        </div>

        {/* Story & Pill Core Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1 - Mission, Vision, Dynamic Blocks */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-sans font-bold text-2xl text-neutral-900 tracking-tight">
              A Direct Bridge to Experienced Counsel
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              We understand that receiving a legal notice, facing a family dispute, or filing for trademark protection can feel completely overwhelming. Lex Claws was created to provide a trusted, supportive harbor where clients are paired with pre-vetted advocates who speak human language, not legal jargon.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className={`bg-white border ${pillar.border} hover:border-amber-400 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  <span className="block text-sm font-bold text-neutral-900 tracking-wide font-mono mb-2 uppercase">
                    {pillar.title}
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onWhatsApp}
                className="inline-flex items-center space-x-2 text-xs font-bold text-amber-800 hover:text-amber-900 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-5 py-3 rounded-xl transition-all duration-200"
              >
                <span>Learn More About Our Team Scope</span>
                <span className="text-amber-700">→</span>
              </button>
            </div>
          </div>

          {/* Column 2 - Stats Showcase Layout */}
          <div className="lg:col-span-6 relative">
            
            {/* Visual Grid Card Stacking Layout */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white border border-stone-200/80 rounded-2.5xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-amber-400/50 transition-all duration-300 relative group"
                >
                  {/* Glowing corner indicator */}
                  <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-2.5xl rounded-bl-full bg-amber-500/5 group-hover:bg-amber-500/15 transition-colors" />

                  <div className="p-3 bg-stone-50 rounded-xl w-fit mb-6 border border-stone-100 group-hover:bg-amber-50 group-hover:border-amber-100 transition-colors">
                    {stat.icon}
                  </div>
                  <div>
                    <span className="block text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                      {stat.number}
                    </span>
                    <span className="block text-xs font-semibold text-stone-500 mt-2 leading-snug">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* In-Office Quality Tag */}
            <div className="absolute -bottom-8 -left-4 sm:left-8 bg-neutral-900 border border-neutral-950 text-stone-200 rounded-2xl py-3 px-5 shadow-lg flex items-center space-x-2.5 max-w-xs">
              <div className="h-5.5 w-5.5 rounded-full bg-amber-500 flex items-center justify-center p-1 font-mono text-[10px] text-neutral-900 font-black">
                LC
              </div>
              <div>
                <span className="block text-[11px] font-bold tracking-tight">New Delhi HQ Since 2022</span>
                <span className="text-[9px] text-neutral-400 block font-mono">PAN-INDIA VIRTUAL COURT FILING</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
