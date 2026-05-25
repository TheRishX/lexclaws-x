import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Scale, Shield, Calendar, Phone, MessageSquare, ArrowRight, CheckCircle2, UserCheck } from 'lucide-react';

interface HeroProps {
  onCall: () => void;
  onWhatsApp: () => void;
  onBook: () => void;
}

export default function Hero({ onCall, onWhatsApp, onBook }: HeroProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const keyDifferentiators = [
    {
      title: 'Senior Counsel Assistance',
      desc: 'Connect with Delhi legal stalwarts with over 15+ years of combined experience.',
      icon: <AwardIcon />,
      color: 'amber'
    },
    {
      title: 'Digital Legal Portal',
      desc: 'Verify case files & connect directly with advocates over video or WhatsApp.',
      icon: <GlobeIcon />,
      color: 'emerald'
    },
    {
      title: 'Pre-vetted Transparent Fees',
      desc: 'No hidden retainer charges. Clear document milestones & filing estimates.',
      icon: <ShieldIcon />,
      color: 'amber'
    }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-radial-at-t from-amber-50 via-stone-50 to-neutral-50 overflow-hidden"
    >
      {/* 5D Background Parallax Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <motion.div 
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-12 w-96 h-96 bg-amber-200/20 rounded-full filter blur-3xl"
        />
        <motion.div 
          animate={{
            y: [0, 40, 0],
            rotate: [0, -15, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-20 left-10 w-96 h-96 bg-stone-300/30 rounded-full filter blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-2 sm:mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy - Split Layout */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Tagline Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-900 px-4 py-1.5 rounded-full border border-amber-300/60 self-center lg:self-start shadow-sm"
            >
              <Scale className="h-4 w-4 text-amber-700 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider font-mono">
                All-In-One Legal Solutions Firm • Delhi NCR
              </span>
            </motion.div>

            {/* Display Typography */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-900 leading-tight"
              >
                Bridging The Gap Between{' '}
                <span className="relative inline-block text-amber-700">
                  People &amp; The Court
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-amber-300/70" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
                {' '}Systems.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans"
              >
                Get pre-emptive counsel, online case intakes, and dedicated judicial protection from experienced New Delhi legal professionals in Criminal, Family, Civil disputes, Trademarks, Contracts, and Cybercrime laws.
              </motion.p>
            </div>

            {/* Core Action Deck with Dual Active Call/WhatsApp Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onBook}
                className="group relative w-full sm:w-auto px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-stone-100 rounded-2xl text-sm font-semibold tracking-wide shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 border border-neutral-950 overflow-hidden"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000" />
                <Calendar className="h-4.5 w-4.5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>Book Free Consultation</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onWhatsApp}
                className="w-full sm:w-auto px-7 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-sm font-semibold tracking-wide shadow-md transition-all duration-300 flex items-center justify-center space-x-2 hover:-translate-y-0.5"
              >
                <MessageSquare className="h-4.5 w-4.5 text-white animate-bounce" />
                <span>Chat on WhatsApp</span>
              </button>

              <button
                onClick={onCall}
                className="w-full sm:w-auto px-7 py-4 bg-amber-50 hover:bg-amber-100/80 border border-amber-300 text-neutral-800 rounded-2xl text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-4 w-4 text-amber-600" />
                <span>Direct Voice Call</span>
              </button>
            </motion.div>

            {/* Verified Quick Stats / Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="pt-6 sm:pt-8 border-t border-amber-500/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center sm:text-left"
            >
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">1,200+</span>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-widest font-mono">Resolved Cases</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">98.4%</span>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-widest font-mono">Success Rating</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">24/7 Hr</span>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-widest font-mono">Urgent Arrest Support</span>
              </div>
            </motion.div>

          </div>

          {/* Interactive "6D" Graphic - Simulated Live Advocate Gavel Interaction (5D visual layers) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            
            {/* Main Interactive Stage */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative w-full max-w-[420px] aspect-square rounded-[2.5rem] bg-stone-100/80 border border-amber-500/20 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden"
            >
              {/* Outer Glow Card Stack Backdrop */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/3 rounded-full filter blur-xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-stone-400/10 rounded-full filter blur-xl" />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-stone-200/80 pb-4">
                <div className="flex items-center space-x-2.5">
                  <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-stone-600 tracking-wide font-mono uppercase">
                    Delhi NCR Court Status
                  </span>
                </div>
                <span className="text-[11px] bg-amber-500/10 text-amber-800 border border-amber-500/20 px-2.5 py-0.5 rounded-full font-bold">
                  ACTIVE SESSION
                </span>
              </div>

              {/* Centerpiece 6D Lawyer Crest Interactive Showcase */}
              <div className="my-6 relative flex flex-col items-center justify-center space-y-4">
                
                {/* Visual Intersecting Ring Showcase */}
                <div className="relative w-28 h-28 rounded-full border border-amber-500/20 flex items-center justify-center bg-white/90 shadow-lg group cursor-pointer transition-all duration-500 hover:border-amber-500/50 hover:shadow-amber-500/10">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-1 rounded-full border border-dashed border-amber-600/30"
                  />
                  <Scale className="h-12 w-12 text-amber-700 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="text-center space-y-1">
                  <span className="block text-sm font-semibold text-neutral-900">Counsel Allocation Deck</span>
                  <p className="text-xs text-stone-500 max-w-xs mx-auto">
                    Toggle your case category instantly for diagnostic review &amp; fee computation.
                  </p>
                </div>
              </div>

              {/* Bottom Interactive Layer - Category Badges */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div 
                  className="bg-white/80 border border-stone-200/80 rounded-xl p-2.5 hover:border-amber-400 cursor-pointer text-center group transition-all duration-300 shadow-sm"
                  onClick={onWhatsApp}
                >
                  <span className="block text-[11px] font-bold text-stone-700 group-hover:text-amber-700 font-mono">BAIL SUPPORT</span>
                  <span className="text-[9px] text-stone-400 font-sans">Immediate Assistance</span>
                </div>
                <div 
                  className="bg-white/80 border border-stone-200/80 rounded-xl p-2.5 hover:border-amber-400 cursor-pointer text-center group transition-all duration-300 shadow-sm"
                  onClick={onBook}
                >
                  <span className="block text-[11px] font-bold text-stone-700 group-hover:text-amber-700 font-mono">COMPLIANCE REVIEW</span>
                  <span className="text-[9px] text-stone-400 font-sans">Contracts &amp; IP</span>
                </div>
              </div>

            </motion.div>

            {/* Overlapping Floating Consultation Target Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 bg-white border border-amber-500/20 rounded-2xl p-4 shadow-xl flex items-center space-x-3 max-w-[240px] cursor-pointer hover:border-amber-500/40 transition-colors"
              onClick={onCall}
            >
              <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl">
                <UserCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-neutral-900">Senior Adv. Available</span>
                <span className="text-[10px] font-medium text-stone-500 block leading-tight">Direct hotlines open right now</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -top-6 -left-4 sm:-left-8 bg-neutral-900 border border-neutral-950 rounded-2xl p-3.5 shadow-xl flex items-center space-x-3 max-w-[200px]"
            >
              <div className="h-2 w-2 rounded-full bg-amber-500 animate-ping" />
              <div>
                <span className="block text-[11px] text-stone-300 font-mono uppercase tracking-wider font-bold">Delhi Jurisdiction</span>
                <span className="text-[10px] text-neutral-400 block leading-tight">Virtual Consultations Pan-India</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

/* Internal SVG Icon Fallbacks to avoid layout-shifting */
function AwardIcon() {
  return (
    <svg className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="h-5 w-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
