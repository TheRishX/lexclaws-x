import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareCode, ShieldCheck, Heart, Landmark } from 'lucide-react';

interface TestimonialsProps {
  onWhatsApp: (msg: string) => void;
}

export default function Testimonials({ onWhatsApp }: TestimonialsProps) {
  const reviews = [
    {
      id: 1,
      name: "Rishi Vardhan",
      role: "Founder, Zenith IT Services",
      comment: "Absolutely outstanding experience with their intellectual property cell. Our trademark clearance objection notice was resolved in rapid order within 15 days in New Delhi. No complex jargon, just transparent milestones and clear billing.",
      rating: 5,
      date: "May 2026"
    },
    {
      id: 2,
      name: "Meera Deshmukh",
      role: "Private Client (Family Settlement)",
      comment: "Very supportive divorce and settlement advocates. During deep matrimonial stress, their Delhi family desk guided me through mutual consent documents, partitioning, and child custody schedules with empathy and dignity.",
      rating: 5,
      date: "April 2026"
    },
    {
      id: 3,
      name: "Amit Srivastav",
      role: "Retail Corporate Partner",
      comment: "Our company faced critical invoice payments delays under a vendor covenant. Lex Claws drafted an Orders summary and statutory check bounce notice within 3 days. The vendor initiated out-of-court dispute mediation instantly.",
      rating: 5,
      date: "March 2026"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-stone-50 border-t border-b border-stone-200/50 scroll-mt-10">
      
      {/* Decorative details */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-stone-300/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-amber-700 uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            Client Success Records
          </span>
          <h2 className="mt-4 font-sans font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
            Endorsements of Transparency &amp; Rigor
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Discover what our corporate partners and individual clients say about our legal counseling under Delhi jurisprudence.
          </p>
        </div>

        {/* Reviews Deck */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <motion.div
              key={rev.id}
              whileHover={{ y: -6 }}
              className="bg-white border border-stone-200/80 rounded-[2rem] p-6.5 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                
                {/* Rating Bar */}
                <div className="flex items-center space-x-1">
                  {[...Array(rev.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="text-[10px] font-mono font-bold text-stone-400 pl-2">
                    5.0 RATING
                  </span>
                </div>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>

              </div>

              {/* Verified Author Profile */}
              <div className="mt-8 pt-5 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="block text-sm font-bold text-neutral-900 tracking-tight">
                    {rev.name}
                  </span>
                  <span className="block text-[11px] text-stone-400 mt-0.5 leading-none">
                    {rev.role} • {rev.date}
                  </span>
                </div>

                <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600 border border-emerald-100">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center max-w-xl mx-auto space-y-4">
          <p className="text-xs text-stone-500 leading-relaxed font-sans">
            Need similar swift protections? Share the summary of your pending litigation file with our intake group for matching advocate pairings.
          </p>

          <button
            onClick={() => onWhatsApp("Hi Lex Claws, I saw your positive reviews. I want to inquire about a legal dispute.")}
            className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-250 px-6 py-3.5 rounded-xl transition-all"
          >
            <MessageSquareCode className="h-4.5 w-4.5 text-emerald-600 animate-pulse" />
            <span>Consult Our Verified Desk on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
