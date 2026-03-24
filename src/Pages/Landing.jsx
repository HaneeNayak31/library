import React, { useEffect, useState } from 'react'
import { Search, BookOpen, Monitor, Users, Clock, Sparkles, ArrowRight, FileText, Layout, Database, Globe } from 'lucide-react'
import HeroSection from '../Components/HeroSection'

function Landing() {
  const newArrivals = [
    { title: "Quantum Computing", author: "Dr. Aris Thorne", cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=300", tag: "Engineering" },
    { title: "Modern Architecture", author: "Sarah Jenkins", cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=300", tag: "Design" },
    { title: "The AI Revolution", author: "Leo Max", cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=300", tag: "Technology" },
    { title: "Biotech Ethics", author: "Elena Rossi", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=300", tag: "Pharmacy" },
  ];

  const quotes = [
    { text: "A library is not a luxury but one of the necessities of life.", author: "Henry Ward Beecher" },
    { text: "Books are a uniquely portable magic.", author: "Stephen King" },
    { text: "The only thing that you absolutely have to know, is the location of the library.", author: "Albert Einstein" },
    { text: "Libraries store the energy that fuels the imagination.", author: "Sidney Sheldon" },
    { text: "A library is a place that holds a collection of knowledge, but it is also a place that holds the potential for discovery.", author: "Unknown" },
  ];

  const [visitorCount] = useState(12480);
  
  // Pick one random quote on component mount and keep it
  const [staticQuote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);

  return (
    <div className="space-y-24 pb-20 overflow-x-hidden bg-white">
      {/* Hero Search Section */}
      <HeroSection />

      {/* --- SECTION 1: NEW ARRIVALS --- */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10 px-2">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-amber-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Fresh in the Stacks</span>
            </div>
            <h2 className="text-4xl font-light tracking-tight text-slate-900">
              New <span className="font-semibold italic">Arrivals</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors group">
            Explore Collection <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((book, idx) => (
            <div key={idx} className="group perspective-1000">
              <div className="relative transition-all duration-500 preserve-3d group-hover:rotate-y-12 group-hover:-translate-y-4">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-slate-100 relative">
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[9px] font-bold text-white uppercase tracking-tighter">
                      {book.tag}
                    </span>
                  </div>
                </div>
                <div className="mt-6 space-y-1 px-1 text-center md:text-left">
                  <h4 className="text-sm font-semibold text-slate-800 line-clamp-1">{book.title}</h4>
                  <p className="text-xs text-slate-500 font-light italic">{book.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: STATIC ARTISTIC QUOTE --- */}
      <section className="py-12 border-y border-slate-100 bg-[#FDFDFB]">
        <div className="max-w-4xl mx-auto px-5 text-center">
            
            <h2 className="text-2xl md:text-4xl font-serif italic text-slate-700 leading-relaxed max-w-3xl mx-auto">
              "{staticQuote.text}"
            </h2>
            <div className="mt-10 flex items-center justify-center gap-4">
                <div className="h-[1px] w-10 bg-slate-200"></div>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">
                    {staticQuote.author}
                </p>
                <div className="h-[1px] w-10 bg-slate-200"></div>
            </div>
        </div>
      </section>

      {/* --- SECTION 2: INFO DOCK --- */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Clock size={20} />, label: "Schedule", primary: "10:30 AM - 6:10 PM", secondary: "Mon - Sat", accent: "bg-blue-500" },
            { icon: <BookOpen size={20} />, label: "Resources", primary: "25,000+ Print Items", secondary: "Digital Access", accent: "bg-amber-500" },
            { icon: <Users size={20} />, label: "Assistance", primary: "Research Support", secondary: "Expert Librarians", accent: "bg-emerald-500" }
          ].map((item, i) => (
            <div key={i} className="group relative bg-white border border-slate-100 p-6 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              <div className={`absolute -right-4 -top-4 w-24 h-24 ${item.accent} opacity-[0.03] rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}></div>
              <div className="flex items-center gap-5 relative z-10">
                <div className={`flex-none w-14 h-14 rounded-2xl ${item.accent} bg-opacity-10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                   <div className={`${item.accent.replace('bg-', 'text-')}`}>{item.icon}</div>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{item.label}</span>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight truncate">{item.primary}</h4>
                  <p className="text-[11px] font-medium text-slate-500 opacity-70 mt-0.5">{item.secondary}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-50 overflow-hidden">
                 <div className={`h-full w-0 group-hover:w-full ${item.accent} transition-all duration-700 ease-in-out`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      

      {/* --- SECTION 4: VISITOR COUNTER --- */}
      <section className="relative py-20 flex flex-col items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <div className="w-[450px] h-[450px] bg-blue-100 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 text-center space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-500 mb-4 block">The Living Pulse</span>
            <div className="flex flex-col items-center">
                <h2 className="text-7xl md:text-9xl font-serif tracking-tighter text-slate-900 tabular-nums">
                    {visitorCount.toLocaleString()}
                </h2>
                <div className="h-[1px] w-16 bg-blue-100 mt-6"></div>
            </div>
            <p className="max-w-md mx-auto text-[13px] text-slate-500 font-light leading-relaxed px-6 italic">
                A shared journey of discovery through the ages.
            </p>
        </div>
      </section>
    </div>
  )
}

export default Landing;