import React, { useState, useRef, useEffect } from 'react';
import { Send, Scale, MessageSquare, Shield, HelpCircle, Phone, ArrowUpRight } from 'lucide-react';
import { Message } from '../types';

interface AIAssistantProps {
  onCall: (msg: string) => void;
  onWhatsApp: (msg: string) => void;
}

export default function AIAssistant({ onCall, onWhatsApp }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Hello! Designate me as LexBot, your automated 6D intake advisor for Lex Claws Delhi. \n\nI can answer general questions on Indian legal procedures such as Criminal Bail requirements, Section 138 Check Bounce timelines, Cyber freezes, and Trademark filings. Crucially, my educational guidance is strictly for general awareness & does not constitute a formal advocate client agreement. Please book an appointment if you require pleadings or courtroom representation!",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "What is the Section 138 Check bounce timelines?",
    "Need anticipatory bail guide under BNS",
    "How to respond to online banking freeze notices?",
    "Trademark filing timelines and cost guidelines"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      text,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/legal-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: text,
          history: messages.slice(-6) // Send last 3 exchanges to keep context within limits
        })
      });

      if (!response.ok) {
        throw new Error('Server issues contacting legal assistant');
      }

      const data = await response.json();
      
      const aiMessage: Message = {
        role: 'model',
        text: data.text || "I was unable to assess that query correctly. Let me guide you to our WhatsApp intake desk!",
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err: any) {
      console.error(err);
      const errorMessage: Message = {
        role: 'model',
        text: "Apologies, our automated advisory gate is experiencing server load. Feel free to contact our direct advice cell at +919999999999 or chat with us on WhatsApp right away!",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-companion" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background circles */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/3 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left - Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold font-mono tracking-widest text-amber-700 uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
              6D AI Support Desk
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
              Pre-Screen Your Dispute Free of Charge
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Why wait to get general legal definitions? We integrated this advanced sever-side Legal AI trained on general Indian Penal Codes, BNS covenants, and documentation guidelines. 
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-amber-50 rounded-lg text-amber-700 mt-1">
                  <Shield className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-stone-850">Regulatory Disclaimers Intact</span>
                  <p className="text-xs text-stone-500 mt-0.5 leading-normal">
                    This AI provides education, not judicial advice, adhering strictly to Indian Bar Council ethics.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-700 mt-1">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-stone-850">Direct WhatsApp Transition</span>
                  <p className="text-xs text-stone-500 mt-0.5 leading-normal">
                    Instantly forward or request senior counsel review for your calculated chatbot issues.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Hotlines Display */}
            <div className="bg-stone-50 p-4.5 rounded-2xl border border-stone-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-stone-400 font-bold uppercase">Urgent Delhi Legal Advice line</span>
                <span className="block text-sm font-extrabold text-neutral-900">+91 99999 99999</span>
              </div>
              <button
                onClick={() => onCall("Calling from Legal AI Section Advice Hotline")}
                className="p-2.5 bg-neutral-900 hover:bg-neutral-800 text-amber-400 rounded-xl transition-all cursor-pointer"
              >
                <Phone className="h-4 w-4 animate-bounce" />
              </button>
            </div>
          </div>

          {/* Right - Live Box Interface */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-stone-200 shadow-2xl rounded-[2.5rem] overflow-hidden flex flex-col h-[520px]">
              
              {/* Box Header */}
              <div className="bg-neutral-900 px-6 py-4.5 flex items-center justify-between border-b border-neutral-950">
                <div className="flex items-center space-x-3">
                  <div className="relative p-2 bg-amber-500/10 rounded-xl border border-amber-500/20">
                    <Scale className="h-5 w-5 text-amber-400" />
                    <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                  <div>
                    <span className="font-sans font-bold text-sm text-stone-100 block">
                      LexBot AI Advisor
                    </span>
                    <span className="text-[10px] font-mono text-stone-400 block uppercase tracking-wider">
                      Indian Law Intelligent Intake System
                    </span>
                  </div>
                </div>

                <span className="text-[10px] bg-amber-500/15 text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded-full font-mono font-bold tracking-widest leading-none">
                  SECURE ENDPOINT
                </span>
              </div>

              {/* Box Messages */}
              <div className="flex-1 overflow-y-auto p-6 bg-stone-50/50 space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3.5 text-xs sm:text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-neutral-900 text-stone-100 rounded-tr-none'
                          : 'bg-white border border-stone-200 text-stone-700 rounded-tl-none shadow-xs'
                      }`}
                    >
                      <div className="whitespace-pre-wrap font-sans">
                        {msg.text}
                      </div>

                      {/* Display direct call options when failure occur */}
                      {msg.role === 'model' && index > 1 && (
                        <div className="mt-3.5 pt-3 border-t border-stone-100 flex items-center justify-end space-x-2">
                          <button
                            onClick={() => onCall(`Call regarding request ${index}`)}
                            className="text-[10px] font-mono font-black text-amber-800 hover:text-amber-950 flex items-center"
                          >
                            <span>VOICE CALL ADVOCATE</span>
                            <ArrowUpRight className="h-3 w-3 ml-0.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-stone-200 rounded-2xl rounded-tl-none px-5 py-4 flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-amber-600 rounded-full animate-bounce" />
                      <div className="h-1.5 w-1.5 bg-amber-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="h-1.5 w-1.5 bg-amber-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                      <span className="text-[10px] font-mono text-stone-400 font-bold uppercase tracking-widest pl-1.5">
                        Analyzing statutory regulations...
                      </span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Pre-suggested Queries */}
              <div className="bg-stone-50/80 px-6 py-2.5 border-t border-b border-stone-200/40 flex items-center space-x-2 overflow-x-auto select-none no-scrollbar">
                <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest shrink-0 pr-1.5">
                  Suggested:
                </span>
                {quickPrompts.map((prompt, qIdx) => (
                  <button
                    key={qIdx}
                    onClick={() => handleSend(prompt)}
                    className="shrink-0 bg-white border border-stone-200 hover:border-amber-400/80 rounded-lg px-2.5 py-1 text-[11px] font-medium text-stone-600 hover:text-amber-800 transition-colors cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Box Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputText);
                }}
                className="p-4 bg-white flex items-center space-x-2 border-t border-stone-100"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask general Indian law, IPC sections or trademark procedures..."
                  className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/10 focus:border-amber-500/85 text-neutral-700"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isLoading}
                  className="p-3.5 bg-neutral-900 hover:bg-neutral-800 text-amber-400 rounded-xl transition-all cursor-pointer disabled:opacity-40"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
