import React, { useState } from 'react';
import { Phone, MessageSquare, X, ShieldAlert, CheckCircle, Scale, Volume2 } from 'lucide-react';

// Subcomponents imports
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Calculator from './components/Calculator';
import PracticeAreas from './components/PracticeAreas';
import WhyChooseUs from './components/WhyChooseUs';
import AIAssistant from './components/AIAssistant';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WidgetDeck from './components/WidgetDeck';

export default function App() {
  // Global Modals State to handle active phone / whatsapp routing as requested
  const [modalType, setModalType] = useState<'none' | 'call' | 'whatsapp'>('none');
  const [customContext, setCustomContext] = useState<string>('');

  const defaultPhone = "+919999999999";
  const defaultWhatsApp = "919999999999";

  const triggerCallAction = (context?: string) => {
    setCustomContext(context || 'General Legal Consultation Desk');
    setModalType('call');
  };

  const triggerWhatsAppAction = (context?: string) => {
    setCustomContext(context || 'All-In-One Legal Solution Inquiry');
    setModalType('whatsapp');
  };

  const handleBookRedirect = () => {
    const sElement = document.getElementById('booking-section');
    if (sElement) {
      sElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const executeDirectCall = () => {
    setModalType('none');
    window.location.href = `tel:${defaultPhone}`;
  };

  const executeDirectWhatsApp = () => {
    setModalType('none');
    const textBase = `Hello Lex Claws Advocates, I am seeking legal representation regarding: "${customContext}". Please connect me to a senior advocate.`;
    const formattedText = encodeURIComponent(textBase);
    window.open(`https://wa.me/${defaultWhatsApp}?text=${formattedText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-amber-150 selection:text-neutral-900 scroll-smooth antialiased text-stone-850">
      
      {/* Dynamic Header */}
      <Header 
        onCall={() => triggerCallAction('Header Fast Support Hotlines')}
        onWhatsApp={() => triggerWhatsAppAction('Header Quick Consultation Link')}
      />

      <main className="relative">
        
        {/* Hero Section */}
        <Hero 
          onCall={() => triggerCallAction('Hero Call to Action Button')}
          onWhatsApp={() => triggerWhatsAppAction('Hero Chat Button')}
          onBook={handleBookRedirect}
        />

        {/* About Section */}
        <About 
          onWhatsApp={() => triggerWhatsAppAction('About Strategic Goals Enquiry')}
        />

        {/* Services Section */}
        <Services 
          onCall={(service) => triggerCallAction(`Criminal/Litigation Services: ${service}`)}
          onWhatsApp={(service) => triggerWhatsAppAction(`Services Inquiry for: ${service}`)}
        />

        {/* Interactive Timeline & Calculations Tool */}
        <Calculator 
          onCall={(details) => triggerCallAction(`Interactive Calculator projection details: ${details}`)}
          onWhatsApp={(details) => triggerWhatsAppAction(`Interactive Calculator details: ${details}`)}
        />

        {/* Practice Areas Checklist Drawer */}
        <PracticeAreas 
          onCall={(areaName) => triggerCallAction(`Practice Areas Case File audit: ${areaName}`)}
          onWhatsApp={(areaName) => triggerWhatsAppAction(`Special Practice strategy: ${areaName}`)}
        />

        {/* Why Choose Us */}
        <WhyChooseUs 
          onWhatsApp={() => triggerWhatsAppAction('Corporate Values & Capabilities Consult')}
        />

        {/* Server-Grounded Intelligent Legal Intake AI */}
        <AIAssistant 
          onCall={(summary) => triggerCallAction(`Intake Agent automated summary: ${summary}`)}
          onWhatsApp={(summary) => triggerWhatsAppAction(`Intake Agent summary: ${summary}`)}
        />

        {/* Verified Reviews */}
        <Testimonials 
          onWhatsApp={(comment) => triggerWhatsAppAction(`Client Review Inquiries: ${comment}`)}
        />

        {/* Public law awareness blogs */}
        <Blogs 
          onCall={(topic) => triggerCallAction(`Legal Updates regarding topic: ${topic}`)}
          onWhatsApp={(topic) => triggerWhatsAppAction(`Legislation article consult: ${topic}`)}
        />

        {/* Active Scheduler Planner */}
        <BookingForm 
          onCall={(details) => triggerCallAction(`Assigned date-time consultation file: ${details}`)}
          onWhatsApp={(details) => triggerWhatsAppAction(`Registered slot scheduling file: ${details}`)}
        />

        {/* General Contact Info Node */}
        <Contact 
          onCall={(info) => triggerCallAction(`Contact card trigger: ${info}`)}
          onWhatsApp={(info) => triggerWhatsAppAction(`Contact details message: ${info}`)}
        />

      </main>

      {/* Structured Footer */}
      <Footer 
        onCall={() => triggerCallAction('Footer Hotline Action Button')}
        onWhatsApp={() => triggerWhatsAppAction('Footer Secretariat Inquiry')}
      />

      {/* Floating active Widget Deck with pulsing emerald animations */}
      <WidgetDeck 
        onCall={() => triggerCallAction('Sticky Right Floating Voice Hotkey')}
        onWhatsApp={() => triggerWhatsAppAction('Sticky Right Floating WhatsApp Badge')}
      />

      {/* DIRECTIVE 6D OVERLAY - Advocate Fast hotlines Modal */}
      {modalType !== 'none' && (
        <div className="fixed inset-0 z-[100] bg-neutral-950/40 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-stone-250 shadow-2xl rounded-[2.5rem] w-full max-w-md p-6 sm:p-8 animate-scale-in text-center relative overflow-hidden">
            
            {/* Corner Decorative */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full filter blur-xl pointer-events-none" />

            {/* Cancel Button */}
            <button
              onClick={() => setModalType('none')}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {modalType === 'call' ? (
              <div className="space-y-6 pt-2">
                <div className="mx-auto h-14 w-14 rounded-full bg-amber-100 border border-amber-300 text-amber-700 flex items-center justify-center">
                  <Phone className="h-6 w-6 animate-pulse" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-neutral-900 leading-tight">
                    Voice Call New Delhi Intake
                  </h3>
                  <p className="text-xs text-stone-500 leading-normal font-mono uppercase tracking-wider">
                    Context: {customContext}
                  </p>
                </div>

                <div className="bg-stone-50 p-4.5 rounded-xl border border-stone-200/50 text-left">
                  <span className="text-[10px] font-mono text-stone-400 font-bold block uppercase mb-1">
                    Direct Administrative Desk
                  </span>
                  <span className="block text-base font-black text-neutral-900 select-all font-mono">
                    +91 99999 99999
                  </span>
                  <p className="text-[11px] text-stone-500 mt-1.5 leading-normal font-sans">
                    Connecting with senior panel experts representing Delhi High Court and District jurisdictions. Support lines are secure &amp; active.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => setModalType('none')}
                    className="py-3.5 border border-stone-200 hover:border-amber-400 bg-stone-50 hover:bg-stone-105 text-stone-700 rounded-xl text-xs font-semibold"
                  >
                    Cancel Action
                  </button>

                  <button
                    onClick={executeDirectCall}
                    className="py-3.5 bg-neutral-950 hover:bg-neutral-800 text-amber-400 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm"
                  >
                    Initiate Direct Call
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6 pt-2">
                <div className="mx-auto h-14 w-14 rounded-full bg-emerald-100 border border-emerald-350 text-emerald-600 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-emerald-600" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-neutral-900 leading-tight">
                    WhatsApp Senior Counsel Desk
                  </h3>
                  <p className="text-xs text-stone-500 leading-normal font-mono uppercase tracking-wider">
                    Context: {customContext}
                  </p>
                </div>

                <div className="bg-stone-50 p-4.5 rounded-xl border border-stone-200/50 text-left">
                  <span className="text-[10px] font-mono text-stone-400 font-bold block uppercase mb-1">
                    Pre-populated Intake Query
                  </span>
                  <p className="text-xs text-stone-605 italic leading-relaxed">
                    "Hello Lex Claws Advocates, I am seeking legal representation regarding: '{customContext}'. Please connect me to a senior advocate."
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => setModalType('none')}
                    className="py-3.5 border border-stone-200 hover:border-amber-400 bg-stone-50 hover:bg-stone-105 text-stone-700 rounded-xl text-xs font-semibold"
                  >
                    Cancel Action
                  </button>

                  <button
                    onClick={executeDirectWhatsApp}
                    className="py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm"
                  >
                    Proceed to WhatsApp
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
