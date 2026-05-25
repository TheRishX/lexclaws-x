import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building, Clock, Send, MessageSquare, Check, Scale } from 'lucide-react';

interface ContactProps {
  onCall: (info: string) => void;
  onWhatsApp: (info: string) => void;
}

export default function Contact({ onCall, onWhatsApp }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  const [enquirySent, setEnquirySent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide at least your Name and Phone Number.");
      return;
    }
    setEnquirySent(true);
  };

  const getCustomMessage = () => {
    return `Hi Lex Claws, my name is ${formData.name}. Subject: ${formData.subject}. Message: "${formData.message}". Let's arrange a consultation.`;
  };

  return (
    <section id="contact" className="py-24 bg-white relative scroll-mt-10">
      
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-stone-300/10 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-amber-700 uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            Delhi NCR Secretariat
          </span>
          <h2 className="mt-4 font-sans font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
            Connect Directly with Lex Claws Advocates
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            Have a pending suit notice, property dispute, or urgent bail claim? Drop us an inquiry below, or trigger our direct phone hotlines of Indian legal experts.
          </p>
        </div>

        {/* Info & Form Cards Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column - Contact Coordinates */}
          <div className="lg:col-span-5 bg-neutral-900 text-stone-200 rounded-[2.5rem] p-6 sm:p-9 flex flex-col justify-between border border-neutral-950 shadow-xl relative overflow-hidden">
            
            <div className="space-y-8">
              
              <div className="flex items-center space-x-2 border-b border-neutral-800 pb-5">
                <div className="p-2.5 bg-amber-500/10 rounded-xl border border-amber-500/15">
                  <Scale className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <span className="font-sans font-bold text-stone-50 block">Lex Claws Secretariat</span>
                  <span className="text-[9.5px] font-mono text-stone-400 block uppercase tracking-widest leading-none">
                    New Delhi Headquarters
                  </span>
                </div>
              </div>

              {/* Specific details */}
              <div className="space-y-6">
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-xl bg-neutral-800 text-amber-400">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-400">Headquarters Address</span>
                    <p className="text-sm text-stone-200 leading-relaxed mt-1 font-sans">
                      New Delhi, Delhi, India <br />
                      Sec. Delhi Registry Jurisdiction Nodes
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-xl bg-neutral-800 text-amber-400">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-400 font-sans">Advisory Hotlines</span>
                    <p className="text-sm text-stone-200 mt-1 font-sans">
                      Main Desk: +91 99999 99999 <br />
                      Support Hours: 09:00 AM - 08:30 PM (All Days)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-xl bg-neutral-800 text-amber-400">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-400">Enquiries Channels</span>
                    <p className="text-sm text-stone-200 mt-1 font-sans">
                      desk@lexclaws.com <br />
                      cases@lexclaws.com
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Connect CTA widgets on left card */}
            <div className="mt-12 pt-6 border-t border-neutral-800 space-y-3">
              <button
                onClick={() => onCall("General phone enquiry click")}
                className="w-full flex items-center justify-center space-x-2 px-5 py-3.5 bg-amber-500 hover:bg-amber-600 text-neutral-900 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Call Main Secretariat Now</span>
              </button>

              <button
                onClick={() => onWhatsApp("Hi Lex Claws, I want to initiate an immediate legal dispute consultation.")}
                className="w-full flex items-center justify-center space-x-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Consult with Advocates on WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Right Column - Easy Enquiry Form */}
          <div className="lg:col-span-7 bg-stone-50 border border-stone-250 rounded-[2.5rem] p-6 sm:p-9 shadow-lg flex flex-col justify-between">
            {!enquirySent ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="flex items-center space-x-2 border-b border-stone-200/60 pb-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-stone-500 uppercase flex items-center space-x-1.5">
                    <Building className="h-4 w-4 text-amber-700" />
                    <span>General Secretariat Enquiry Form</span>
                  </span>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-widest mb-2 font-mono">
                    Full Name or Corporation
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter name"
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/10 focus:border-amber-500 text-neutral-700"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-widest mb-2 font-mono">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 99999 99999"
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/10 focus:border-amber-500 text-neutral-700"
                  />
                </div>

                {/* Area of help */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-widest mb-2 font-mono">
                    Practice Matter Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/10 focus:border-amber-500 text-neutral-700"
                  >
                    <option value="bail">Anticipatory or Regular Bail Actions</option>
                    <option value="matrimonial">Matrimonial Alimony &amp; Split</option>
                    <option value="property">Civil Property disputes</option>
                    <option value="contract">Corporate Contract Draft review</option>
                    <option value="cyber">Cyber Security Defreeze notices</option>
                    <option value="ni-138">Cheque Bounce NI-138 recovery</option>
                    <option value="trademark">IP registration objecting</option>
                    <option value="general">General Advocate consultation</option>
                  </select>
                </div>

                {/* Brief message */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-widest mb-2 font-mono">
                    Matter Background
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about pending complaints, notices, corporate legal objectives..."
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/10 focus:border-amber-500 text-neutral-700"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-stone-100 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <Send className="h-4 w-4 text-amber-400" />
                    <span>Send Secretariat Enquiry</span>
                  </button>
                </div>

              </form>
            ) : (
              <div className="text-center py-20 space-y-6">
                
                <div className="inline-flex p-3 bg-emerald-100 rounded-full text-emerald-700 border border-emerald-200">
                  <Check className="h-8 w-8" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-sans font-bold text-xl text-neutral-900">
                    Enquiry Filed Successfully!
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto">
                    Dear <span className="font-bold">{formData.name}</span>, your inquiry is logged at our New Delhi desk. An advocate will check your credentials and telephone you shortly.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-stone-200 max-w-sm mx-auto text-center space-y-4">
                  <span className="block text-[11px] font-mono tracking-widest text-stone-400 uppercase font-black">
                    ACTIVATE SECTOR LINK
                  </span>
                  
                  {/* Active CTAs */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onCall(getCustomMessage())}
                      className="flex items-center justify-center space-x-1.5 px-3 py-2 border border-stone-200 hover:border-amber-500 bg-stone-50 text-stone-700 rounded-lg text-xs font-bold cursor-pointer transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5 text-amber-600" />
                      <span>Direct Call</span>
                    </button>

                    <button
                      onClick={() => onWhatsApp(getCustomMessage())}
                      className="flex items-center justify-center space-x-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold cursor-pointer transition-colors"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setEnquirySent(false)}
                    className="text-[10px] font-mono font-bold text-stone-400 hover:text-stone-700 underline cursor-pointer"
                  >
                    File another general inquiry
                  </button>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
