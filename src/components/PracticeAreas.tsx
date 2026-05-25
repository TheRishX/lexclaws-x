import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  CheckSquare, 
  HelpCircle, 
  TrendingUp, 
  Coins, 
  FileCheck, 
  ShieldCheck, 
  MessagesSquare,
  AlertCircle,
  Phone,
  MessageSquare
} from 'lucide-react';

interface PracticeAreasProps {
  onCall: (item: string) => void;
  onWhatsApp: (item: string) => void;
}

export default function PracticeAreas({ onCall, onWhatsApp }: PracticeAreasProps) {
  const [activeAreaIndex, setActiveAreaIndex] = useState<number>(0);

  const practiceAreas = [
    {
      id: "criminal",
      name: "Criminal Defense & Trial",
      icon: <ShieldCheck className="h-5 w-5 text-amber-700" />,
      tagline: "Anticipatory bail applications, police quash suits & CrPC/BNSS litigations.",
      issues: [
        "Unjust complaints filed at Delhi Cyber Cells",
        "Seeking anticipatory bail from District Sessions / Delhi High Court",
        "Quashing FIR complaints under constitutional rights",
        "Defending state economic offences investigations"
      ],
      checklist: [
        "Recover immediate FIR / complaint copy numbers",
        "Engage advocate to approach police station desk first",
        "Gather direct coordinate evidence, timestamp recordings",
        "Submit representation to DCP / Magistrate nodes"
      ]
    },
    {
      id: "matrimonial",
      name: "Family Settlements & Alimony",
      icon: <Users2Icon />,
      tagline: "Mutual divorce documentation, domestic duress claims & custody settlement plans.",
      issues: [
        "Delay or friction in mutual consent divorce finalizations",
        "Disputes regarding maintenance allocations or monthly assets",
        "Filing for physical or shared legal child guardian permissions",
        "Harassment claims under Section 498A IPC/85 BNS"
      ],
      checklist: [
        "Draft and sign preliminary settlement memorandums (MOU)",
        "Isolate bank accounts, shared gold assets lists",
        "Calculate standard child schooling & living expenses",
        "Initiate structured out-of-court family mediation loops"
      ]
    },
    {
      id: "corporate",
      name: "Intellectual Property & Contracts",
      icon: <Briefcase className="h-5 w-5 text-amber-700" />,
      tagline: "Trademark filings, objection replies, and SaaS compliance contracts.",
      issues: [
        "Competitors duplicating brand logos or matching domains",
        "Government Examiner objections on IP classifications",
        "Breach of non-compete clauses by departing employees",
        "Inadequate security in partner non-disclosure covenants"
      ],
      checklist: [
        "Perform professional IP clearing search in national registries",
        "Secure priority trademark filings to claim brand seniority",
        "Incorporate strict liquidation damage clauses in contracts",
        "Execute formal Cease & Desist legal warnings"
      ]
    },
    {
      id: "commercial",
      name: "Commercial Litigations & Debts",
      icon: <Coins className="h-5 w-5 text-amber-700" />,
      tagline: "Section 138 check dishonors, summary debt suits & commercial notices.",
      issues: [
        "Unsettled unpaid client invoices exceeding statutory credit terms",
        "Dishonored bank checks due to signature discrepancies or empty funds",
        "Breach of service agreement SLAs by external vendors",
        "Tenant non-payments and property lease non-compliance"
      ],
      checklist: [
        "Issue written default warning notices immediately upon invoice delay",
        "Draft check bounce legal notice strictly within 30 days of return memo",
        "Establish formal CPC summary suit notices for faster recovery setup",
        "Initiate formal contract arbitration clauses if settlement stalls"
      ]
    }
  ];

  return (
    <section id="practice-areas" className="py-24 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      
      {/* Visual background details */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/3 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-stone-300/10 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-amber-700 uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            Case File Explorer
          </span>
          <h2 className="mt-4 font-sans font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
            Interactive Courtroom Diagnostic Deck
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Choose your core legal arena below. Read the primary disputes encountered in India and discover our senior team’s structural judicial action check sheet.
          </p>
        </div>

        {/* 5D Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column - Area Selection Tabs */}
          <div className="lg:col-span-5 flex flex-col space-y-3 justify-center">
            {practiceAreas.map((area, idx) => {
              const isActive = activeAreaIndex === idx;
              return (
                <div
                  key={area.id}
                  onClick={() => setActiveAreaIndex(idx)}
                  className={`p-6 border rounded-[1.5rem] cursor-pointer transition-all duration-300 flex items-start space-x-4 relative ${
                    isActive
                      ? 'bg-neutral-900 border-neutral-950 text-stone-50 shadow-lg translate-x-1 ring-1 ring-amber-500/30'
                      : 'bg-white border-stone-200/80 hover:border-amber-500/30 text-stone-700 hover:bg-amber-50/30 shadow-xs'
                  }`}
                >
                  {/* Miniature active gold light indicator */}
                  {isActive && (
                    <div className="absolute top-1/2 left-3 -translate-y-1/2 w-1.5 h-6 rounded-full bg-amber-500" />
                  )}

                  <div className={`p-3 rounded-xl border transition-colors ${
                    isActive 
                      ? 'bg-amber-500/10 border-amber-400/20' 
                      : 'bg-stone-50 border-stone-100 group-hover:bg-amber-50'
                  }`}>
                    {area.icon}
                  </div>
                  <div>
                    <span className="block text-sm font-bold tracking-tight mb-1">
                      {area.name}
                    </span>
                    <p className={`text-xs line-clamp-2 leading-relaxed ${
                      isActive ? 'text-stone-300' : 'text-stone-500'
                    }`}>
                      {area.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Dynamic Diagnostic Deck Visualizer */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeAreaIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-stone-200 shadow-xl rounded-[2.5rem] p-6 sm:p-9 h-full flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Visual Frame Header */}
                <div className="flex items-center justify-between border-b border-stone-100 pb-5">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-[11px] font-mono font-bold tracking-widest text-stone-500 uppercase">
                      Practice Guidelines Area {activeAreaIndex + 1}
                    </span>
                  </div>

                  <span className="text-[11.5px] font-bold text-amber-800 bg-amber-50 border border-amber-500/10 px-3 py-0.5 rounded-full">
                    Delhi Jurisdiction Approved
                  </span>
                </div>

                {/* Sub-Heading Info */}
                <div>
                  <h3 className="font-sans font-bold text-xl text-neutral-900 tracking-tight">
                    {practiceAreas[activeAreaIndex].name}
                  </h3>
                  <p className="text-xs font-medium text-amber-700 mt-1 font-mono">
                    {practiceAreas[activeAreaIndex].tagline}
                  </p>
                </div>

                {/* Grid of Common Issues vs Action Plan */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  
                  {/* Left sub-col: Common disputes we face */}
                  <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100/50">
                    <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest block mb-3.5 flex items-center space-x-1.5">
                      <AlertCircle className="h-3.5 w-3.5 text-amber-600" />
                      <span>Frequent Case Disputes</span>
                    </span>
                    <ul className="space-y-3">
                      {practiceAreas[activeAreaIndex].issues.map((i, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-stone-600 leading-relaxed font-sans">
                          <span className="text-amber-500 font-bold mt-0.5">•</span>
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right sub-col: Professional Advocate Action Agenda */}
                  <div className="bg-white rounded-2xl p-5 border border-amber-500/10 ring-1 ring-amber-500/5">
                    <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block mb-3.5 flex items-center space-x-1.5">
                      <CheckSquare className="h-3.5 w-3.5 text-amber-600" />
                      <span>Lex Claws Legal Agenda</span>
                    </span>
                    <ul className="space-y-3">
                      {practiceAreas[activeAreaIndex].checklist.map((c, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-stone-700 leading-relaxed font-sans">
                          <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>

              {/* Connected Directly to CTAs as requested */}
              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-stone-400 font-mono">
                  DISPUTE STRATEGY DECK • NEW DELHI
                </span>

                <div className="flex items-center space-x-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => onCall(practiceAreas[activeAreaIndex].name)}
                    className="w-1/2 sm:w-auto flex items-center justify-center space-x-1.5 px-4.5 py-2.5 border border-stone-200 hover:border-amber-500 bg-white text-stone-700 hover:text-amber-900 rounded-xl text-xs font-bold transition-all"
                  >
                    <Phone className="h-3 w-3 text-amber-600" />
                    <span>Direct Call Adv.</span>
                  </button>

                  <button
                    onClick={() => onWhatsApp(practiceAreas[activeAreaIndex].name)}
                    className="w-1/2 sm:w-auto flex items-center justify-center space-x-1.5 px-4.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>WhatsApp Strategy</span>
                  </button>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

// Inline fallback icon component
function Users2Icon() {
  return (
    <svg className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}
