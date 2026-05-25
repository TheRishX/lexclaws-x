import React, { useState, useEffect } from 'react';
import { Scale, Phone, MessageSquare, Menu, X } from 'lucide-react';

interface HeaderProps {
  onCall: () => void;
  onWhatsApp: () => void;
}

export default function Header({ onCall, onWhatsApp }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Interactive Tools', id: 'tools' },
    { name: 'Practice Areas', id: 'practice-areas' },
    { name: 'Why Us', id: 'why-choose-us' },
    { name: 'Reviews', id: 'testimonials' },
    { name: 'Blogs', id: 'blogs' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-amber-500/20 py-3' 
          : 'bg-stone-50/80 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="relative p-2 bg-amber-500/10 rounded-lg border border-amber-500/30 group-hover:bg-amber-500/25 transition-all duration-300">
              <Scale className="h-6 w-6 text-amber-600" />
              <div className="absolute -inset-0.5 bg-amber-500 rounded-lg blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
            <div>
              <span className="font-sans font-bold text-xl tracking-tight text-neutral-900 group-hover:text-amber-700 transition-colors duration-300">
                Lex Claws
              </span>
              <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 line-clamp-1">
                All in one legal solution
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:text-amber-700 hover:bg-neutral-100 transition-all duration-200"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Contact Actions (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onCall}
              className="flex items-center space-x-1.5 px-4 py-2 text-stone-800 bg-amber-50 hover:bg-amber-100 border border-amber-300/60 rounded-xl text-xs font-semibold transition-all duration-200"
            >
              <Phone className="h-3.5 w-3.5 text-amber-600" />
              <span>Direct Call</span>
            </button>
            
            <button
              onClick={onWhatsApp}
              className="flex items-center space-x-1.5 px-4 py-2 text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl text-xs font-semibold shadow-sm transition-all duration-200"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>WhatsApp Chat</span>
            </button>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex xl:hidden lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Panel */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-neutral-900/40 backdrop-blur-sm lg:hidden">
          <div className="w-full max-w-sm bg-white shadow-xl h-full p-6 animate-slide-in-right overflow-y-auto border-t border-amber-500/25">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-neutral-800 hover:bg-amber-50 hover:text-amber-700 transition-all duration-200"
                >
                  {link.name}
                </button>
              ))}
              
              <div className="pt-6 border-t border-neutral-100 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onCall();
                  }}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-stone-800 rounded-xl text-sm font-semibold transition-colors"
                >
                  <Phone className="h-4 w-4 text-amber-600" />
                  <span>Direct Call Advocate</span>
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onWhatsApp();
                  }}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-sm"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp Legal Consult</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
