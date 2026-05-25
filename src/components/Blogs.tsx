import React, { useState } from 'react';
import { Search, Calendar, Clock, ArrowRight, MessageSquare, Phone, BookOpen } from 'lucide-react';

interface BlogsProps {
  onCall: (title: string) => void;
  onWhatsApp: (title: string) => void;
}

export default function Blogs({ onCall, onWhatsApp }: BlogsProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: "cheque-bounce",
      title: "Understanding Section 138 Check Dishonor Statutory Mandates",
      summary: "In India, cheque bouncing is a criminal offense. Failing to act inside the 30-day notice timeline might invalidate your recovery claims entirely.",
      category: "Commercial Court",
      date: "May 18, 2026",
      readTime: "4 Min Read",
      snippet: "Under the Negotiable Instruments Act, 1881, the legal notice must be drafted & sent out strictly within 30 days of receiving the debit returned memo from the corresponding bank. Here we outline the step-by-step litigation route."
    },
    {
      id: "cyber-freezes",
      title: "How to Release Bank Account Freeze From Cyber Police Cells",
      summary: "Has your bank account been frozen unexpectedly under suspicious Transaction reports? Know your legal routes for accounts deflation.",
      category: "Cyber Security",
      date: "May 05, 2026",
      readTime: "6 Min Read",
      snippet: "Cyber cells frequently freeze extensive commercial bank nodes due to brief interlinked transaction layers. Securing a defreeze order requires filing formal representations to supervisory nodes or applying to district magistrates."
    },
    {
      id: "anticipatory-bail",
      title: "Anticipatory Bail Criteria under BNSS Jurisdiction",
      summary: "Discover critical differences in securing pre-arrest bail protections under Section 438 of CrPC and the matching BNSS 482 amendments.",
      category: "Criminal Law",
      date: "April 20, 2026",
      readTime: "5 Min Read",
      snippet: "Pre-emptive bail secures a suspect from confinement during malicious, fabricated claims. The applicant must prove non-flight risks, clear identification credentials, and establish cooperative intent before the High Court or Session node."
    },
    {
      id: "trademark-registration",
      title: "IP Brand Protection & Classifications for Indian Startups",
      summary: "Why trademark registrations are critical in safeguarding commercial symbols in competitive spaces. Avoid Examiner opposition blockages.",
      category: "Intellectual Property",
      date: "March 15, 2026",
      readTime: "5 Min Read",
      snippet: "Registering a trademark under incorrect classes leaves your product name vulnerable. Conducting an exhaustive clearance audit saves young tech startups expensive rebranding court fights & registry hearings."
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="blogs" className="py-24 bg-white relative scroll-mt-10">
      
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-amber-500/3 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold font-mono tracking-widest text-amber-700 uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
              Legal Awareness Node
            </span>
            <h2 className="mt-4 font-sans font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
              Judgments, Awareness &amp; Statutory Advices
            </h2>
            <p className="mt-2 text-stone-600 max-w-xl text-sm leading-relaxed">
              We translate confusing statutory rulings under Indian jurisprudence into simple, actionable explanations for individuals and businesses.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-xs self-start md:self-end">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search legal topics..."
              className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-9.5 pr-4 py-2.5 text-xs text-neutral-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/10 focus:border-amber-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-stone-50 border border-stone-200 rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-amber-400/80 hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                
                {/* Meta details bar */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-amber-800 bg-amber-500/10 px-2.5 py-1 rounded-full uppercase border border-amber-500/15">
                    {post.category}
                  </span>
                  
                  <div className="flex items-center space-x-3 text-[11px] text-stone-400 font-mono">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1 text-stone-300" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1 text-stone-300" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Narrative */}
                <div>
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-neutral-900 tracking-tight hover:text-amber-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-stone-600 text-xs sm:text-sm font-sans leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <p className="text-stone-500 text-xs leading-relaxed border-t border-stone-200/50 pt-3.5 italic">
                  {post.snippet}
                </p>

              </div>

              {/* Connected Directly to CTAs as requested */}
              <div className="mt-8 pt-5 border-t border-stone-200/60 flex items-center justify-between">
                
                <button
                  onClick={() => onWhatsApp(`Hi Lex Claws, I am interested in your article: "${post.title}". Seeking consultation.`)}
                  className="text-xs font-bold text-neutral-800 hover:text-amber-800 font-mono inline-flex items-center space-x-1.5 cursor-pointer"
                >
                  <BookOpen className="h-4 w-4 mr-1 text-amber-600" />
                  <span>CONSULT ABOUT TOPIC</span>
                  <ArrowRight className="h-3 w-3" />
                </button>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onCall(`Article consult regarding: ${post.title}`)}
                    className="p-2 border border-stone-200 hover:border-amber-400 bg-white text-stone-700 hover:text-neutral-950 rounded-lg transition-colors cursor-pointer"
                    title="Call Adv."
                  >
                    <Phone className="h-3.5 w-3.5 text-amber-600" />
                  </button>

                  <button
                    onClick={() => onWhatsApp(`Hi Lex Claws, let's discuss details about: ${post.title}`)}
                    className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors cursor-pointer"
                    title="WhatsApp Adv."
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}

          {filteredPosts.length === 0 && (
            <div className="col-span-2 bg-stone-50 border border-stone-200 rounded-[2rem] p-12 text-center text-stone-500">
              <span className="block font-bold mb-1">No matching articles found</span>
              <p className="text-xs">Try searching for terms such as "cheque", "cyber", "bail", "objection", or "trademark".</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
