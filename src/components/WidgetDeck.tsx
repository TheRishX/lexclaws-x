import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

interface WidgetDeckProps {
  onCall: () => void;
  onWhatsApp: () => void;
}

export default function WidgetDeck({ onCall, onWhatsApp }: WidgetDeckProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3.5 pointer-events-auto">
      
      {/* Voice active hotlines widget */}
      <button
        onClick={onCall}
        className="group relative flex items-center justify-center h-13 w-13 rounded-full bg-neutral-900 border border-neutral-950 text-amber-400 hover:text-amber-500 shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer active:scale-95"
        aria-label="Call Advocate"
      >
        <Phone className="h-5.5 w-5.5 animate-pulse" />
        
        {/* Tooltip */}
        <span className="absolute right-15 opacity-0 group-hover:opacity-100 bg-neutral-950 text-stone-100 text-[10px] font-bold font-mono uppercase tracking-widest px-3 py-1.5 rounded-lg border border-neutral-800 shadow-xl transition-all duration-300 pointer-events-none shrink-0 whitespace-nowrap">
          Call Advocate Now
        </span>
      </button>

      {/* Floating Emerald WhatsApp Widget */}
      <button
        onClick={onWhatsApp}
        className="group relative flex items-center justify-center h-14 w-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer active:scale-95"
        aria-label="Direct Consult on WhatsApp"
      >
        {/* Visual Pulse Wave animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping opacity-60 scale-105 pointer-events-none" />
        <MessageSquare className="h-6 w-6 text-white" />

        {/* Tooltip */}
        <span className="absolute right-16 opacity-0 group-hover:opacity-100 bg-neutral-950 text-stone-100 text-[10px] font-bold font-mono uppercase tracking-widest px-3 py-1.5 rounded-lg border border-neutral-800 shadow-xl transition-all duration-300 pointer-events-none shrink-0 whitespace-nowrap">
          WhatsApp Advisory
        </span>
      </button>

    </div>
  );
}
