import React from 'react';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onCall: () => void;
  onWhatsApp: () => void;
}

export default function Footer({ onCall, onWhatsApp }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-neutral-900 border-t border-neutral-950 text-stone-300 py-16 font-sans relative z-10">
      
      {/* Decorative logo glow backdrop */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/2 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start pb-12 border-b border-neutral-800">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/15">
                <Scale className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <span className="font-sans font-black text-lg text-stone-100 tracking-tight block">
                  Lex Claws
                </span>
                <span className="text-[9.5px] font-mono text-stone-400 block uppercase tracking-widest leading-none">
                  All in one legal solution
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed font-sans">
              Founded in 2022 to provide comprehensive litigative solutions in Family, Criminal, Civil, Cyber, and General Corporate Law. Strategically bridging gaps between clients and complex court networks.
            </p>

            <div className="flex flex-col space-y-1 text-xs">
              <span className="text-stone-400 block">Delhi NCR Administration Desk:</span>
              <span className="font-semibold text-stone-200">+91 99999 99999</span>
            </div>
          </div>

          {/* Quick links Col */}
          <div className="md:col-span-4 space-y-4">
            <span className="block text-xs font-mono font-bold tracking-widest text-stone-400 uppercase">
              Practice Nodes
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button onClick={() => handleLinkClick('services')} className="text-left text-stone-400 hover:text-amber-400 transition-colors cursor-pointer py-1 block">Criminal Law</button>
              <button onClick={() => handleLinkClick('services')} className="text-left text-stone-400 hover:text-amber-400 transition-colors cursor-pointer py-1 block">Family Settlements</button>
              <button onClick={() => handleLinkClick('services')} className="text-left text-stone-400 hover:text-amber-400 transition-colors cursor-pointer py-1 block">Civil Disputes</button>
              <button onClick={() => handleLinkClick('services')} className="text-left text-stone-400 hover:text-amber-400 transition-colors cursor-pointer py-1 block">Cyber Covenants</button>
              <button onClick={() => handleLinkClick('services')} className="text-left text-stone-400 hover:text-amber-400 transition-colors cursor-pointer py-1 block">NI-138 Cheques</button>
              <button onClick={() => handleLinkClick('services')} className="text-left text-stone-400 hover:text-amber-400 transition-colors cursor-pointer py-1 block">Trademark Registry</button>
            </div>
          </div>

          {/* Guidelines / Disclaimers Col */}
          <div className="md:col-span-4 space-y-4">
            <span className="block text-xs font-mono font-bold tracking-widest text-stone-400 uppercase">
              Contact Triggers
            </span>
            <div className="space-y-3.5 text-xs text-stone-400">
              <button
                onClick={onCall}
                className="w-full flex items-center justify-center space-x-1.5 py-2.5 border border-neutral-800 hover:border-amber-500 bg-neutral-950 text-stone-200 rounded-xl transition-all cursor-pointer"
              >
                <Phone className="h-3.5 w-3.5 text-amber-500" />
                <span>Call Hotline Advocate</span>
              </button>

              <button
                onClick={onWhatsApp}
                className="w-full flex items-center justify-center space-x-1.5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-all cursor-pointer"
              >
                <span>Chat on WhatsApp Intake</span>
              </button>
            </div>
          </div>

        </div>

        {/* Regulatory Indian Bar Council Compliance Notice */}
        <div className="pt-8 pb-4 text-[10px] sm:text-xs text-stone-500 space-y-4 leading-relaxed border-b border-neutral-800/60 font-sans">
          <span className="font-bold text-amber-500 uppercase tracking-widest block font-mono">
            BAR COUNCIL OF INDIA COMPLIANCE NOTICE
          </span>
          <p>
            As per the rules of the Bar Council of India, Lex Claws (and advocates associated under its platform) is prohibited from advertising or soliciting judicial caseloads in any public formats.
          </p>
          <p>
            The material accessed under this digital portal is purely educational, informational, and client-intake assistance in nature. No portion of this layout, including calculations produced under our fee estimators, constitutes a formal advocate-client relationship or judicial opinion. By using this platform, you acknowledge clicking the consultation triggers of your own volition.
          </p>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <span>
            © {currentYear} Lex Claws Legal Solution platform. All Rights Reserved.
          </span>
          <div className="flex items-center space-x-4">
            <span className="hover:text-amber-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-amber-400 cursor-pointer">Indian Law Disclosures</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
