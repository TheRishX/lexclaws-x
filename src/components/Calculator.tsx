import React, { useState, useEffect } from 'react';
import { Sliders, HelpCircle, FileText, Calendar, DollarSign, ArrowRight, Phone, MessageSquare, Scale } from 'lucide-react';

interface CalculatorProps {
  onCall: (details: string) => void;
  onWhatsApp: (details: string) => void;
}

export default function Calculator({ onCall, onWhatsApp }: CalculatorProps) {
  const [serviceType, setServiceType] = useState<string>('cheque');
  const [courtType, setCourtType] = useState<string>('district');
  const [priorityType, setPriorityType] = useState<string>('standard');

  // Outputs state
  const [results, setResults] = useState({
    estTimeline: '30-45 Days',
    statutoryFilingFee: '₹ 1,500',
    draftDesignRange: '₹ 8,000 - ₹ 15,000',
    coreDeliverable: 'Statutory Section 138 NI Act Recovery Demand Notice',
    essentialDocuments: ['Dishonored Original Check', 'Bank Return Memo Statement', 'Invoices or Payment due ledger receipts']
  });

  useEffect(() => {
    // Dynamic rule computation reflecting typical fees and statutory nodes under Delhi legal procedures
    let estTimeline = '15-20 Days';
    let statutoryFilingFee = '₹ 500';
    let draftDesignRange = '₹ 5,000 - ₹ 8,000';
    let coreDeliverable = 'General Legal Consultation and Notice Assessment';
    let essentialDocuments = ['Factual dispute synopsis', 'Prior emails or chat communications'];

    if (serviceType === 'criminal') {
      coreDeliverable = 'Anticipatory or Regular Bail Application Petition';
      essentialDocuments = ['Copy of FIR (First Information Report)', 'Police complaint copy', 'Client ID proof documents', 'Delhi surety commitment records'];
      if (courtType === 'district') {
        estTimeline = priorityType === 'urgent' ? '2-4 Days' : '5-10 Days';
        statutoryFilingFee = '₹ 800';
        draftDesignRange = '₹ 15,000 - ₹ 25,000';
      } else {
        estTimeline = priorityType === 'urgent' ? '3-6 Days' : '8-15 Days';
        statutoryFilingFee = '₹ 2,200';
        draftDesignRange = '₹ 35,000 - ₹ 60,000';
      }
    } else if (serviceType === 'family') {
      coreDeliverable = 'Mutual Consent Divorce Joint Filing Petition';
      essentialDocuments = ['Marriage invitation card / registry certification', 'Joint wedding photographs', 'Mutual settlement terms document (MOU)', 'Income assertions of both parties'];
      estTimeline = '6-12 Months (Statutory Cooling Period applies)';
      statutoryFilingFee = '₹ 1,200';
      draftDesignRange = '₹ 20,000 - ₹ 45,000';
    } else if (serviceType === 'civil') {
      coreDeliverable = 'Special Summary Debt Suit or Property Partition Petition';
      essentialDocuments = ['Property deeds / Will copies', 'Unsettled ledger bills', 'Pre-litigation legal warnings notes'];
      if (courtType === 'district') {
        estTimeline = '60-120 Days';
        statutoryFilingFee = '₹ 3,500';
        draftDesignRange = '₹ 25,000 - ₹ 40,000';
      } else {
        estTimeline = '45-90 Days';
        statutoryFilingFee = '₹ 10,000';
        draftDesignRange = '₹ 50,000 - ₹ 90,000';
      }
    } else if (serviceType === 'contract') {
      coreDeliverable = 'SLA / Partnership Covenant / Multi-vendor Master Agreement';
      essentialDocuments = ['Business model blueprint', 'Specific warranty/indemnity variables', 'Director ID proofs'];
      estTimeline = '3-5 Days';
      statutoryFilingFee = '₹ 500 (Delhi Stamp Duty actuals apply)';
      draftDesignRange = '₹ 10,000 - ₹ 18,000';
    } else if (serviceType === 'cyber') {
      coreDeliverable = 'Cyber Cell Complaint Petition & Bank Liaison Notice';
      essentialDocuments = ['Bank account statement proving transaction debit', 'Phishing website address / chat logs', 'IP tracing metrics if available'];
      estTimeline = priorityType === 'urgent' ? '1-3 Days' : '5-10 Days';
      statutoryFilingFee = '₹ 200';
      draftDesignRange = '₹ 8,000 - ₹ 14,000';
    } else if (serviceType === 'cheque') {
      coreDeliverable = 'Section 138 Demands Action notice';
      essentialDocuments = ['Original Dishonored Check', 'Bank Return Memo Statement', 'Outstanding Account details'];
      estTimeline = '15-30 Days';
      statutoryFilingFee = '₹ 1,500';
      draftDesignRange = '₹ 6,000 - ₹ 12,000';
    } else if (serviceType === 'trademark') {
      coreDeliverable = 'National Trademark Registration Submission (Form TM-A)';
      essentialDocuments = ['Brand logo graphic JPG/PNG', 'Date certificate of first usage in India', 'Signed power of attorney authorization'];
      estTimeline = '2-4 Days (Filing certificate issued)';
      statutoryFilingFee = '₹ 4,500 (Statutory MSME registry fee actuals)';
      draftDesignRange = '₹ 4,000 - ₹ 7,500';
    }

    setResults({
      estTimeline,
      statutoryFilingFee,
      draftDesignRange,
      coreDeliverable,
      essentialDocuments
    });

  }, [serviceType, courtType, priorityType]);

  const summaryTextForCTA = `Hi Lex Claws, I used your web Fee Calculator. Category: ${serviceType}, Court: ${courtType}, Priority: ${priorityType}. Est. Fee: ${results.draftDesignRange}. Let me schedule a call!`;

  return (
    <section id="tools" className="py-24 bg-stone-50 border-t border-b border-stone-200/50 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-amber-700 uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            6D Fee &amp; Timeline Estimator
          </span>
          <h2 className="mt-4 font-sans font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
            Transparent Judicial Computation Desk
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Configure your legal matter variables using the dials below. Evaluate realistic filing timelines, pre-vetted draft cost ranges, and documents required. No surprises, no hidden bills.
          </p>
        </div>

        {/* Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Block - Controls */}
          <div className="lg:col-span-6 bg-white border border-stone-200 shadow-lg rounded-[2.5rem] p-6 sm:p-9 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-stone-500 uppercase flex items-center space-x-1.5">
                  <Sliders className="h-4 w-4 text-amber-600" />
                  <span>Configure Attributes</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full uppercase">
                  Statutory Rules Updated
                </span>
              </div>

              {/* Slider Option 1: Legal Category */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-mono">
                  1. Matter Category (Select Dispute Class)
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-800 font-sans focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/85 transition-all text-neutral-700"
                >
                  <option value="criminal">Criminal Defense (FIR, Bail petitions)</option>
                  <option value="family">Family/Matrimonial (Divorce, settlements)</option>
                  <option value="civil">Civil Litigation (Property, Order 37 debts)</option>
                  <option value="contract">Commercial Contracts (SLA, NDAs, NDAs)</option>
                  <option value="cyber">Cyber Issues (Account freezes, fraud recoveries)</option>
                  <option value="cheque">Cheque bounce matters (Section 138 NI act)</option>
                  <option value="trademark">Intellectual Property (Trademark objections)</option>
                </select>
              </div>

              {/* Slider Option 2: Judicial Jurisdiction */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-mono">
                  2. Judicial Level (Jurisdiction)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setCourtType('district')}
                    className={`py-3 px-2 text-center rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      courtType === 'district'
                        ? 'bg-neutral-900 text-stone-50 border-neutral-950 shadow-md'
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-amber-500/40'
                    }`}
                  >
                    Delhi Sessions / DJ
                  </button>

                  <button
                    onClick={() => setCourtType('high')}
                    className={`py-3 px-2 text-center rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      courtType === 'high'
                        ? 'bg-neutral-900 text-stone-50 border-neutral-950 shadow-md'
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-amber-500/40'
                    }`}
                  >
                    Delhi High Court
                  </button>

                  <button
                    onClick={() => setCourtType('supreme')}
                    className={`py-3 px-2 text-center rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      courtType === 'supreme'
                        ? 'bg-neutral-900 text-stone-50 border-neutral-950 shadow-md'
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-amber-500/40'
                    }`}
                  >
                    Registry / Tribunals
                  </button>
                </div>
              </div>

              {/* Slider Option 3: Timelines Priority */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-mono">
                  3. Emergency Case Handling Speed
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setPriorityType('standard')}
                    className={`py-3 text-center rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      priorityType === 'standard'
                        ? 'bg-neutral-900 text-stone-50 border-neutral-950 shadow-md'
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-amber-500/40'
                    }`}
                  >
                    Standard Processing
                  </button>

                  <button
                    onClick={() => setPriorityType('urgent')}
                    className={`py-3 text-center rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      priorityType === 'urgent'
                        ? 'bg-amber-100 text-amber-800 border-amber-400 shadow-sm'
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-amber-500/40'
                    }`}
                  >
                    ✦ Urgent Representation
                  </button>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-4 border-t border-stone-100 bg-amber-500/5 p-4 rounded-xl border border-amber-500/15">
              <span className="text-[10px] text-amber-800 tracking-wider font-mono font-bold block mb-1">
                DELHI ADVISORY BOARD RULE
              </span>
              <p className="text-[11px] text-stone-600 leading-normal font-sans">
                Timeline projections and statutory stamp duties vary based on judicial notifications. Out-of-court mediation models may cut timescales significantly.
              </p>
            </div>

          </div>

          {/* Right Block - Dynamic Output Board */}
          <div className="lg:col-span-6 bg-white border border-stone-200 shadow-lg rounded-[2.5rem] p-6 sm:p-9 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-stone-500 uppercase flex items-center space-x-1.5">
                  <FileText className="h-4 w-4 text-amber-600" />
                  <span>Output Assessment Covenants</span>
                </span>
              </div>

              {/* Dynamic Deliverable Banner */}
              <div className="bg-stone-50 p-4.5 rounded-2xl border border-stone-150">
                <span className="text-[10px] text-stone-400 font-mono font-bold block uppercase mb-1">Core Legal Deliverable</span>
                <span className="text-sm font-bold text-stone-900 font-sans block leading-snug">
                  {results.coreDeliverable}
                </span>
              </div>

              {/* Dynamic Financial projections */}
              <div className="grid grid-cols-2 gap-4">
                
                <div className="bg-stone-50/50 p-4 rounded-xl border border-stone-200/40">
                  <span className="text-[9px] text-stone-400 font-mono font-bold block uppercase mb-1 flex items-center">
                    <Calendar className="h-3 w-3 mr-1 text-stone-500" />
                    Est. Judicial Timeline
                  </span>
                  <span className="text-base font-bold text-neutral-800 font-mono block">
                    {results.estTimeline}
                  </span>
                </div>

                <div className="bg-stone-50/50 p-4 rounded-xl border border-stone-200/40">
                  <span className="text-[9px] text-stone-400 font-mono font-bold block uppercase mb-1 flex items-center">
                    <DollarSign className="h-3 w-3 mr-1 text-stone-500" />
                    Delhi Court Fee Stamp
                  </span>
                  <span className="text-base font-bold text-neutral-800 font-mono block">
                    {results.statutoryFilingFee}
                  </span>
                </div>

              </div>

              {/* Dynamic Professional pricing */}
              <div className="bg-amber-500/10 border border-amber-500/20 p-5 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 text-amber-600 opacity-10">
                  <Scale className="h-10 w-10" />
                </div>
                <span className="text-[10px] text-amber-800 font-mono font-bold block uppercase mb-1">Estimated Documentation and Counsel Retainer Fee Range</span>
                <span className="text-xl sm:text-2xl font-black text-amber-900 font-mono tracking-tight block">
                  {results.draftDesignRange}
                </span>
              </div>

              {/* Required Documents checklist area */}
              <div>
                <span className="text-[11px] text-stone-500 font-mono block font-bold uppercase tracking-wider mb-2.5">
                  Essential Documents Checklist
                </span>
                <div className="space-y-1.5">
                  {results.essentialDocuments.map((doc, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-2 text-xs text-stone-700">
                      <span className="text-amber-500 font-bold leading-none mt-0.5">•</span>
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* CTAs on output block, pre-formatted */}
            <div className="mt-8 pt-5 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onCall(summaryTextForCTA)}
                className="w-full sm:w-1/2 flex items-center justify-center space-x-1.5 px-4.5 py-3 border border-stone-200 hover:border-amber-400 bg-white text-stone-700 hover:text-amber-950 rounded-xl text-xs font-semibold"
              >
                <Phone className="h-3.5 w-3.5 text-amber-600" />
                <span>Call Advocating Counsel</span>
              </button>

              <button
                onClick={() => onWhatsApp(summaryTextForCTA)}
                className="w-full sm:w-1/2 flex items-center justify-center space-x-1.5 px-4.5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-sm"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>WhatsApp Intake Desk</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
