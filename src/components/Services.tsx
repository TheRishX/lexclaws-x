import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  Users2, 
  Building2, 
  FileSignature, 
  Cpu, 
  Coins, 
  Copyright, 
  HelpCircle, 
  PhoneCall, 
  MessageSquareCode, 
  ChevronRight, 
  Scale 
} from 'lucide-react';

interface ServicesProps {
  onCall: (serviceName: string) => void;
  onWhatsApp: (serviceName: string) => void;
}

export default function Services({ onCall, onWhatsApp }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const services = [
    {
      id: 'criminal',
      title: 'Criminal Law',
      icon: <ShieldAlert className="h-6 w-6 text-amber-600 group-hover:scale-110 transition-transform" />,
      tagline: 'FIR filing, Anticipatory Bail, Trials & Appeals',
      shortDesc: 'Comprehensive defense strategies, courtroom representational systems, and prompt assistance for police station interventions or bail procedures in Delhi-NCR.',
      longDesc: `Our criminal defense group advises across complex IPC/BNS sections. We structure quick-response bail systems (anticipatory, regular), quashing petitions under Section 482 CrPC/528 BNSS, and handle state investigations, white-collar crimes, financial frauds, and direct representation before Sessions Courts, High Courts, and the Supreme Court of India.`,
      features: ['24/7 Bail Hotlines', 'Trial Prosecution Strategy', 'Accusation Risk Mitigation', 'CBI, ED, Cyber police liaison']
    },
    {
      id: 'family',
      title: 'Family Law',
      icon: <Users2 className="h-6 w-6 text-amber-600 group-hover:scale-110 transition-transform" />,
      tagline: 'Divorce, Settlements, Domestic Violence & Custody',
      shortDesc: 'Caring, strategic, and dignified dispute settlement plans for matrimonial discords, alimony, split settlements, and child legal guardianships.',
      longDesc: `We handle family litigations focusing on mutual or contested divorce setups, maintenance suits (Section 125 CrPC/144 BNSS), domestic violence claims, dowry harassment claims (498A IPC/85 BNS), and child custody arrangements. We emphasize civil pre-mediation settlements to minimize court mental exhaustion.`,
      features: ['Mutual Divorce Drafting', 'Matrimonial Mediation', 'Alimony Computations', 'Child Access Charters']
    },
    {
      id: 'civil',
      title: 'Civil Law',
      icon: <Building2 className="h-6 w-6 text-amber-600 group-hover:scale-110 transition-transform" />,
      tagline: 'Property Disputes, Evictions, Recovery & Litigation',
      shortDesc: 'Securing claims, drafting legal notices, partition deeds, and managing tenant disputes or structural property litigation with precision.',
      longDesc: `Lex Claws handles property title verifications, partitioning suits, execution of wills, land tenant rent disputes, and substantial commercial debt recoveries (Order 37 CPC). We execute airtight legal responses and representation systems to protect property boundaries.`,
      features: ['Airtight Title Searches', 'Deed Registrations', 'Rent Discrepancy Defense', 'Injunction Interventions']
    },
    {
      id: 'contract',
      title: 'Contract Law',
      icon: <FileSignature className="h-6 w-6 text-amber-600 group-hover:scale-110 transition-transform" />,
      tagline: 'Drafting, NDAs, Service level agreements & Auditable Compliance',
      shortDesc: 'Drafting secure, corporate non-competes, co-founder agreements, SLAs, and general commercial documentation that survive courtroom audits.',
      longDesc: `Prevent lawsuits before they begin. We create customized business documentation: SaaS Terms of Service, master partner covenants, employment contracts, shareholding treaties, and non-disclosure models. We ensure compliance with the Indian Contract Act, 1872.`,
      features: ['Custom Corporate Drafts', 'Agreement Audits', 'Vendor Breach Indemnities', 'Employment Discrepancies']
    },
    {
      id: 'cyber',
      title: 'Cyber Law',
      icon: <Cpu className="h-6 w-6 text-amber-600 group-hover:scale-110 transition-transform" />,
      tagline: 'Online Frauds, Digital Harassment & Account Defreeze',
      shortDesc: 'Specialized legal guidance for online investment scams, banking freezes, reputation management, and cybercrime cell reporting.',
      longDesc: `In the digitizing economy, we defend against social media impersonations, crypto frauds, email business wire compromises, and banking cyber-layer freezes (interfacing with police nodes). We provide legal support under the Information Technology Act, 2000.`,
      features: ['Cybercrime Notice Response', 'Reputational Defamation Suits', 'Bank Account Freeze Release', 'Social Impersonation Queller']
    },
    {
      id: 'cheque',
      title: 'Cheque Bounce',
      icon: <Coins className="h-6 w-6 text-amber-600 group-hover:scale-110 transition-transform" />,
      tagline: 'Section 138 Negotiable Instruments Act Actions',
      shortDesc: 'Recovery notices, complaint filings, and robust legal trial prosecution for dishonored checks with optimized timeline targets.',
      longDesc: `Check non-payment requires fast response times under Section 138 of the NI Act. We manage initial statutory demand notices, file regular criminal complaints before metropolitan magistrates, and defend or enforce claims under specialized check tribunals.`,
      features: ['Statutory Notice in 30 Days', 'Court Trial Setup', 'Out of Court Settlement', 'Fast Track Recoveries']
    },
    {
      id: 'trademark',
      title: 'Trademark & IP',
      icon: <Copyright className="h-6 w-6 text-amber-600 group-hover:scale-110 transition-transform" />,
      tagline: 'Brand Registrations, Objection Audits & IP Defenses',
      shortDesc: 'Protect your commercial identity. Secure trademark applications, patent registrations, and fight brand encroachments.',
      longDesc: `Secure your logo, product names, and unique commercial titles. We conduct worldwide IP clearance searches, file national registrations, respond to examiner objections, handle opposition hearings, and prosecute intellectual property thefts or duplicate brand usage.`,
      features: ['Trademark Clearances', 'Registry Opposition Audits', 'Copyright Registrations', 'IP Infringements Action']
    },
    {
      id: 'consultation',
      title: 'Legal Consultation',
      icon: <HelpCircle className="h-6 w-6 text-amber-600 group-hover:scale-110 transition-transform" />,
      tagline: 'Online Video Consult, In-Person Counsel & Case Assessment',
      shortDesc: 'Instant, documented diagnostic reviews with experienced advocates to map legal options, costs, and strategic routes.',
      longDesc: `Schedule direct 1-to-1 consultations (virtual or physical in New Delhi) to review notices, files, and legal possibilities. You receive a diagnostic breakdown of timeline projections, cost milestones, and advocate allocations.`,
      features: ['E-Meeting Convenience', 'Document Assessment', 'Pre-litigation Guidance', 'Senior Panel Assessment']
    }
  ];

  const categories = [
    { name: 'All Services', value: 'all' },
    { name: 'Criminal & Police', value: 'criminal' },
    { name: 'Property & Family', value: 'family' },
    { name: 'Corporate & IP', value: 'corporate' }
  ];

  const getFilteredServices = () => {
    if (selectedCategory === 'all') return services;
    if (selectedCategory === 'criminal') return services.filter(s => s.id === 'criminal' || s.id === 'cyber' || s.id === 'cheque');
    if (selectedCategory === 'family') return services.filter(s => s.id === 'family' || s.id === 'civil');
    if (selectedCategory === 'corporate') return services.filter(s => s.id === 'contract' || s.id === 'trademark' || s.id === 'consultation');
    return services;
  };

  const currentServices = getFilteredServices();

  return (
    <section id="services" className="py-24 bg-white relative z-10 scroll-mt-10">
      
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/3 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold font-mono tracking-widest text-amber-700 uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
              Primary Practices
            </span>
            <h2 className="mt-4 font-sans font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
              Airtight Multidomain Legal Remedies
            </h2>
            <p className="mt-2 text-stone-600 max-w-xl text-sm sm:text-base leading-relaxed">
              Explore our core areas of online and offline litigation. Toggle filter sets below to narrow down your matching legal problem category.
            </p>
          </div>

          {/* Category Pill Filters */}
          <div className="flex flex-wrap gap-2 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  setSelectedCategory(cat.value);
                  setExpandedServiceId(null);
                }}
                className={`px-4.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 border cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-neutral-900 text-stone-100 border-neutral-950 shadow-md'
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-amber-500/40 hover:bg-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* 5D Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentServices.map((service, index) => {
            const isExpanded = expandedServiceId === service.id;
            return (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group border rounded-[2rem] bg-white transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-sm ${
                  isExpanded 
                    ? 'md:col-span-2 border-amber-500 ring-1 ring-amber-500 shadow-xl' 
                    : 'border-stone-200/80 hover:border-amber-400/80 hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                {/* Visual Gold Border Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500/20 via-amber-500 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Main Card Body */}
                <div className="p-6.5 flex-1 select-none">
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-stone-50 rounded-2xl group-hover:bg-amber-50 border border-stone-100 group-hover:border-amber-100 transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-stone-400 capitalize bg-stone-50/50 px-2 py-1 rounded">
                      {service.id === 'trademark' || service.id === 'contract' ? 'IP & Corp' : 'Litigation'}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-neutral-900 tracking-tight group-hover:text-amber-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-amber-700 text-xs font-semibold mt-1 font-sans">
                    {service.tagline}
                  </p>
                  
                  <p className="text-stone-600 text-xs leading-relaxed mt-3">
                    {service.shortDesc}
                  </p>

                  {/* Expanded Custom Layer (5D Drawer system) */}
                  {isExpanded && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-6 pt-5 border-t border-stone-100 space-y-4"
                    >
                      <div>
                        <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-widest block mb-2">Detailed Mandate</span>
                        <p className="text-xs text-stone-600 leading-relaxed font-sans">{service.longDesc}</p>
                      </div>

                      <div>
                        <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-widest block mb-2">Delhi NCR Deliverables</span>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center space-x-1.5 text-[11px] text-stone-700">
                              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Bottom Active Action Buttons (Connected directly to Direct Call and WhatsApp) */}
                <div className="p-5 bg-stone-50/80 border-t border-stone-100 flex flex-col space-y-3.5">
                  
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                      className="text-[11px] font-mono font-bold text-neutral-700 hover:text-amber-800 flex items-center space-x-1 cursor-pointer transition-colors"
                    >
                      <span>{isExpanded ? 'COLLAPSE FILE' : 'EXPAND CASE FILE'}</span>
                      <ChevronRight className={`h-3 w-3 transform transition-transform ${isExpanded ? 'rotate-90 text-amber-600' : ''}`} />
                    </button>
                    
                    <span className="text-[10px] font-mono font-bold text-stone-400">
                      LEX CLAWS ADVISORY
                    </span>
                  </div>

                  {/* Custom direct actions required */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onCall(service.title)}
                      className="flex items-center justify-center space-x-1.5 px-3 py-2 border border-stone-200 hover:border-amber-500 bg-white text-stone-700 hover:text-amber-900 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-200"
                    >
                      <PhoneCall className="h-3 w-3 text-amber-600" />
                      <span>Direct Call</span>
                    </button>
                    
                    <button
                      onClick={() => onWhatsApp(service.title)}
                      className="flex items-center justify-center space-x-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold cursor-pointer transition-all duration-200 shadow-sm"
                    >
                      <MessageSquareCode className="h-3 w-3" />
                      <span>WhatsApp</span>
                    </button>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
