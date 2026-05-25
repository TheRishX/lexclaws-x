import React, { useState } from 'react';
import { Calendar, Clock, BookOpen, User, Phone, Mail, FileText, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';

interface BookingFormProps {
  onCall: (details: string) => void;
  onWhatsApp: (details: string) => void;
}

export default function BookingForm({ onCall, onWhatsApp }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'criminal',
    description: '',
    date: '2026-05-26',
    time: '11:00 AM'
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please fill out your Name and Phone number before scheduling.");
      return;
    }
    setBookingConfirmed(true);
  };

  const getConfirmationMessage = () => {
    return `Hi Lex Claws, my name is ${formData.name}. I just scheduled a virtual consult for ${formData.date} at ${formData.time} regarding ${formData.category}. Case: "${formData.description}". Let's connect!`;
  };

  return (
    <section id="booking-section" className="py-24 bg-stone-50 border-t border-b border-stone-200/50 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-amber-700 uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            Intake Scheduler
          </span>
          <h2 className="mt-4 font-sans font-bold text-3xl text-neutral-900 tracking-tight">
            Schedule Virtual / In-person Case Review
          </h2>
          <p className="mt-4 text-stone-600 text-sm leading-relaxed">
            Fill out the consultation form below to reserve an assessment session with matching advocates in New Delhi. No prepayment card authorization remains necessary.
          </p>
        </div>

        {/* Dynamic State Container */}
        <div className="bg-white border border-stone-200 shadow-2xl rounded-[2.5rem] overflow-hidden p-6 sm:p-10 relative">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full filter blur-xl pointer-events-none" />

          {!bookingConfirmed ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="flex items-center space-x-2 border-b border-stone-100 pb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-stone-500 uppercase flex items-center space-x-1.5">
                  <BookOpen className="h-4 w-4 text-amber-650" />
                  <span>Reserve Advisory Counsel Slot</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-widest mb-2 font-mono flex items-center">
                    <User className="h-3.5 w-3.5 mr-1 text-stone-500" />
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/10 focus:border-amber-500 text-neutral-700"
                  />
                </div>

                {/* Telephone */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-widest mb-2 font-mono flex items-center">
                    <Phone className="h-3.5 w-3.5 mr-1 text-stone-500" />
                    Contact Telephone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 99999 99999"
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/10 focus:border-amber-500 text-neutral-700"
                  />
                </div>

                {/* Email (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-widest mb-2 font-mono flex items-center">
                    <Mail className="h-3.5 w-3.5 mr-1 text-stone-500" />
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@domain.com"
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/10 focus:border-amber-500 text-neutral-700"
                  />
                </div>

                {/* Category selection */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-widest mb-2 font-mono">
                    Dispute Category Practice
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/10 focus:border-amber-500 text-neutral-700"
                  >
                    <option value="criminal">Criminal Law (Bail etc.)</option>
                    <option value="family">Family Law (Divorce settlements)</option>
                    <option value="civil">Property / Civil litigations</option>
                    <option value="contract">Commercial Contract templates</option>
                    <option value="cyber">Cyber Security blockages</option>
                    <option value="cheque">Cheque dishonor Section 138 NI</option>
                    <option value="trademark">IP / Trademark clearances</option>
                  </select>
                </div>

                {/* Date select */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-widest mb-2 font-mono flex items-center">
                    <Calendar className="h-3.5 w-3.5 mr-1 text-stone-500" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/10 focus:border-amber-500 text-stone-700"
                  />
                </div>

                {/* Time slot */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-widest mb-2 font-mono flex items-center">
                    <Clock className="h-3.5 w-3.5 mr-1 text-stone-500" />
                    Preferred Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/10 focus:border-amber-500 text-stone-750"
                  >
                    <option value="10:00 AM">10:00 AM - 11:30 AM</option>
                    <option value="11:30 AM">11:30 AM - 01:00 PM</option>
                    <option value="02:30 PM">02:30 PM - 04:00 PM</option>
                    <option value="04:00 PM">04:00 PM - 05:30 PM</option>
                  </select>
                </div>

              </div>

              {/* Case brief */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-widest mb-2 font-mono flex items-center">
                  <FileText className="h-3.5 w-3.5 mr-1 text-stone-500" />
                  Matter Synopsis (Brief Description)
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Share details regarding legal notices received, pending litigation numbers, or corporate milestones needed..."
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/10 focus:border-amber-500 text-neutral-700"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4.5 bg-neutral-900 hover:bg-neutral-800 text-stone-100 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                >
                  Schedule Initial Consultation
                </button>
              </div>

            </form>
          ) : (
            <div className="text-center py-8 space-y-6">
              
              <div className="inline-flex p-4.5 bg-emerald-50 rounded-full text-emerald-600 border border-emerald-100">
                <CheckCircle2 className="h-10 w-10 animate-pulse" />
              </div>

              <div className="space-y-2">
                <h3 className="font-sans font-bold text-2xl text-neutral-900 tracking-tight">
                  Consultation Provisionally Logged!
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm max-w-lg mx-auto">
                  Thank you, <span className="font-bold">{formData.name}</span>. Your virtual slot request for <span className="font-bold">{formData.date}</span> at <span className="font-bold">{formData.time}</span> is filed inside our Delhi intake queue.
                </p>
              </div>

              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/60 max-w-md mx-auto text-left">
                <span className="text-[10px] font-mono text-stone-400 font-bold block uppercase mb-1">
                  Delhi Board Directive
                </span>
                <p className="text-xs text-stone-600 leading-normal">
                  To complete safety verifications and speed up your advocate assignment, please click one of our active communication buttons below to instantly send your logged consultation summary directly to our desk.
                </p>
              </div>

              {/* Instant Call / WhatsApp connected here */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4.5 pt-4">
                <button
                  onClick={() => onWhatsApp(getConfirmationMessage())}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="h-4.5 w-4.5 text-white" />
                  <span>Send Request over WhatsApp</span>
                </button>

                <button
                  onClick={() => onCall(getConfirmationMessage())}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 border border-stone-200 hover:border-amber-400 bg-white text-stone-850 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  <PhoneCall className="h-4 w-4 text-amber-600" />
                  <span>Direct Voice Call Intake</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setBookingConfirmed(false)}
                  className="text-[11px] font-mono font-bold text-stone-400 hover:text-stone-650 cursor-pointer underline"
                >
                  Reschedule / New Booking Form
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
