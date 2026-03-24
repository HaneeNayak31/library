import React, { useState, useEffect } from 'react';
import { Search, BookOpen, Monitor, Users, Clock, ChevronRight, ChevronLeft, Bell, ArrowRight, Filter } from 'lucide-react';

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All Domains");

  // High-quality library images for the carousel
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=1200",
      caption: "Explore our vast digital archives from anywhere.",
      title: "Digital Database Access"
    },
    {
      url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200",
      caption: "Quiet reading rooms reserved for postgraduate research.",
      title: "Dedicated Study Spaces"
    },
    {
      url: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1200",
      caption: "Over 25,000 new engineering and technology volumes added this year.",
      title: "Expanding Collections"
    }
  ];

  const searchCategories = [
    "All Domains",
    "Engineering",
    "Management",
    "Pharmacy",
    "Applied Sciences"
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full max-w-7xl mx-auto z-10 relative mt-4 md:mt-3 mb-12 flex flex-col gap-6">
      
      {/* Top Block: Carousel & Widgets Grid */}
      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Image Carousel (Takes up 8 columns) */}
        <div className="lg:col-span-8 relative rounded-md overflow-hidden bg-slate-900 group h-[400px] md:h-[500px]">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img 
                src={slide.url} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 "></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-700 select-none">
               
                
              </div>
            </div>
          ))}
          
          <div className="absolute bottom-8 right-8 z-20 flex gap-2">
            {slides.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Widgets */}
       <div className="lg:col-span-4 flex flex-col gap-6">
  
  {/* Announcements Ticker Widget */}
  <div className="bg-slate-900 rounded-[2rem] p-8 shadow-2xl flex-1 flex flex-col relative overflow-hidden border border-slate-800/50">
    {/* Subtle Glow Effect */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
    
    <div className="relative z-10 flex items-center justify-between mb-8 pb-4 border-b border-slate-800/50">
      <h3 className="font-medium flex items-center gap-3 text-lg text-white select-none tracking-tight">
      Latest News
      </h3>
      <span className="text-[10px] bg-white/5 text-blue-300 border border-white/10 px-3 py-1 rounded-full font-bold uppercase tracking-widest backdrop-blur-sm">Updates</span>
    </div>
    
    <div className="relative z-10 flex-1 flex flex-col justify-center space-y-6">
      <div className="group cursor-pointer">
        <p className="text-[10px] text-slate-400 font-bold mb-2 tracking-[0.2em] uppercase">Mar 6, 2026</p>
        <h4 className="font-light text-sm leading-relaxed text-slate-200 group-hover:text-yellow-400 transition-colors">
          Library extending hours until <span className="font-semibold text-white group-hover:text-yellow-400">10PM</span> for upcoming pre-final examinations.
        </h4>
      </div>
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      
      <div className="group cursor-pointer">
        <p className="text-[10px] text-slate-400 font-bold mb-2 tracking-[0.2em] uppercase">Mar 2, 2026</p>
        <h4 className="font-light text-sm leading-relaxed text-slate-200 group-hover:text-yellow-400 transition-colors">
          New mechanical engineering journals accessible via <span className="font-semibold text-white group-hover:text-yellow-400">Knimbus gateway</span>.
        </h4>
      </div>
    </div>
    
    <a href="/news-events" className="relative z-10 text-[10px] text-center mt-8 text-slate-400 hover:text-white font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 group transition-all">
       View All News <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
    </a>
  </div>

  {/* Quick Action Grid */}
  <div className="grid grid-cols-2 gap-4 flex-none">
     <a href="/about/ask-a-librarian" className="bg-emerald-50/50 hover:bg-emerald-100/80 text-emerald-900 p-6 rounded-[2rem] flex flex-col items-center justify-center text-center gap-3 transition-all border border-emerald-100 shadow-sm group hover:shadow-md hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform shadow-sm">
          <Users size={22} />
        </div>
        <span className="text-[11px] font-bold uppercase tracking-wider opacity-90">Ask Staff</span>
     </a>
     <a href="/e-resources" className="bg-amber-50/50 hover:bg-amber-100/80 text-amber-900 p-6 rounded-[2rem] flex flex-col items-center justify-center text-center gap-3 transition-all border border-amber-100 shadow-sm group hover:shadow-md hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform shadow-sm">
          <Monitor size={22} />
        </div>
        <span className="text-[11px] font-bold uppercase tracking-wider opacity-90">E-Resources</span>
     </a>
  </div>

</div>
      </div>

      {/* Bottom Block: Creative Full-Width Search Bar */}
      <div className="w-full relative rounded-3xl p-[1px] md:p-[2px] overflow-hidden group">
        {/* Animated Gradient Border Layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-blue-400 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
        {/* Animated Background For Content Wrapper */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-dark to-slate-900 m-[1px] md:m-[2px] rounded-3xl z-0"></div>
        
        {/* Floating Glowing Orbs (Static) */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen z-0 hidden md:block"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen z-0 hidden md:block"></div>

        <div className="relative z-10 bg-white/5 backdrop-blur-2xl rounded-[1.4rem] p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col gap-8 m-[1px] md:m-[2px]">
          
          <div className="text-center md:text-left flex flex-col md:flex-row md:justify-between items-center gap-4">
            <div>
               <h3 className="text-3xl md:text-4xl font-bold font-serif !text-white mb-2 drop-shadow-lg tracking-tight">
                 What are you looking for today?
               </h3>
               <p className="text-blue-100 text-base md:text-lg opacity-90">
                 Search millions of articles, books, and digital resources instantly.
               </p>
            </div>
          </div>
          
          {/* Unified 'Command Center' Search Bar */}
          <div className="w-full relative">
            <div className="flex flex-col md:flex-row items-stretch bg-white rounded-2xl md:rounded-full p-2 shadow-[0_0_40px_rgba(255,255,255,0.15)] group-focus-within:ring-4 ring-accent/50 transition-all transition-shadow duration-300">
               
               {/* Inline Category Selector (Desktop & Mobile) */}
               <div className="relative flex items-center border-b md:border-b-0 md:border-r border-slate-200 px-2 group/select">
                 <div className="absolute left-4 text-primary pointer-events-none">
                   <Filter size={18} />
                 </div>
                 <select 
                   className="w-full md:w-auto appearance-none bg-transparent text-slate-700 font-bold  text-sm py-4 pl-12 pr-10 focus:outline-none cursor-pointer"
                   value={activeCategory}
                   onChange={(e) => setActiveCategory(e.target.value)}
                 >
                   {searchCategories.map(cat => (
                     <option key={cat} value={cat}>{cat}</option>
                   ))}
                 </select>
                 <div className="absolute right-4 text-slate-400 pointer-events-none group-hover/select:text-primary transition-colors">
                   <ChevronRight size={16} className="rotate-90" />
                 </div>
               </div>

               {/* Main Input Area */}
               <div className="flex-1 flex items-center relative">
                 <div className="absolute left-6 text-slate-400 hidden md:block">
                   <Search size={22} />
                 </div>
                 <input 
                   type="text" 
                   placeholder={`Search ${activeCategory === "All Domains" ? "entire library catalog" : "in " + activeCategory}...`} 
                   className="w-full bg-transparent text-slate-900 text-lg py-4 px-4 md:pl-16 md:pr-6 focus:outline-none placeholder:text-slate-400 placeholder:font-medium font-semibold"
                 />
               </div>

               <button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 text-slate-900 px-12 py-4 md:py-0 rounded-xl md:rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:shadow-[0_6px_20px_rgba(252,211,77,0.6)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-2 md:mt-0 border border-yellow-300">
                 Search
               </button>
            </div>
            
            {/* Trending Links */}
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs font-bold text-white/60 uppercase tracking-widest">
              <span className="text-accent/80">Trending Searches:</span>
              <a href="#" className="hover:!text-white transition-colors underline decoration-white/20 underline-offset-4 hover:decoration-white">Machine Learning</a>
              <a href="#" className="hover:!text-white transition-colors underline decoration-white/20 underline-offset-4 hover:decoration-white">Quantum Physics</a>
              <a href="#" className="hover:!text-white transition-colors underline decoration-white/20 underline-offset-4 hover:decoration-white">Clinical Trials</a>
            </div>
          </div>



        </div>
      </div>

    </div>
  );
}

export default HeroSection;
