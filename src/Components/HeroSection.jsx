import React, { useEffect, useRef, useState } from 'react';
import { Search, BookOpen, Monitor,Star,Bell, Users, Clock, ChevronRight, ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const book = {
  title: "Atomic Habits",
  author: "James Clear",
  rating: 4.8,
  description: "Build good habits, break bad ones, and master tiny behaviors that lead to remarkable results.",
  cover: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg"
};


   
  

const HERO_SLIDES = [
  {
    url: 'https://media.gettyimages.com/id/172919971/photo/community-library-brick-building-front-entrance.jpg?s=612x612&w=0&k=20&c=WaAVxtmWTit_kUxMPE1TvuEzpOl9Oj_VDOw8XMxtdeY=',
    caption: 'Explore our vast digital archives from anywhere.',
    title: 'Digital Database Access'
  },
  {
    url: 'https://i.pinimg.com/control1/1200x/a0/45/14/a045141e41086118c316c58e97af66a5.jpg',
    caption: 'Quiet reading rooms reserved for postgraduate research.',
    title: 'Dedicated Study Spaces'
  },
  {
    url: 'https://i.pinimg.com/1200x/17/b6/39/17b639d369d38cac7f844916f8cf4af8.jpg',
    caption: 'Over 25,000 new engineering and technology volumes added this year.',
    title: 'Expanding Collections'
  }
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All Domains");
  const [isHeroInView, setIsHeroInView] = useState(true);
  const heroRootRef = useRef(null);

  const latestNews = [
    {
      id: 4,
      date: 'Mar 6, 2026',
      summary: 'Library extending hours until 10PM for upcoming pre-final examinations.'
    },
    {
      id: 2,
      date: 'Mar 2, 2026',
      summary: 'New mechanical engineering journals accessible via Knimbus gateway.'
    }
  ];

  const searchCategories = [
    "All Domains",
    "Engineering",
    "Management",
    "Pharmacy",
    "Applied Sciences"
  ];

  // Auto-advance only when hero is visible.
  useEffect(() => {
    if (!isHeroInView) return undefined;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHeroInView]);

  useEffect(() => {
    const node = heroRootRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroInView(entry.isIntersecting),
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div ref={heroRootRef} className="w-full max-w-7xl mx-auto z-10 relative isolate flex flex-col gap-5">
      
      {/* Top Block: Carousel & Widgets Grid */}
      <div className="grid  pb-7 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Column: Image Carousel (Takes up 8 columns) */}
        <div className="lg:col-span-8 relative isolate rounded-md overflow-hidden bg-slate-900 group h-100 md:h-125">
          <div
            className="flex h-full w-full transition-transform duration-700 ease-out will-change-transform"
            style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }}
          >
            {HERO_SLIDES.map((slide, index) => (
              <div key={slide.title} className="relative h-full w-full shrink-0">
                <img
                  src={slide.url}
                  alt={slide.title}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/25 to-transparent"></div>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-8 right-8 z-20 flex gap-2">
            {HERO_SLIDES.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </div>

      {/* Right Column: Widgets */}
<div className="lg:col-span-4 flex flex-col gap-4 h-full">
  
  {/* 1. Updates Widget - Flexible Height, White with Blue Glow */}
  <div className="flex-1 min-h-0 bg-white rounded-[2.5rem] p-6 flex flex-col transition-all duration-300 hover:shadow-[0_20px_60px_-10px_rgba(59,130,246,0.1)] hover:border-blue-100 border border-neutral-500/70 relative">
    {/* Header */}
    <div className="flex items-center justify-between mb-6 shrink-0">
      <h3 className="flex items-center gap-2 text-slate-900 font-bold text-sm tracking-tight">
        
        Updates
      </h3>
      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 rounded-full border border-blue-100">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Live</span>
      </div>
    </div>

    {/* Scrollable / Flexible List (Capped at 4) */}
    <div className="flex-1 flex flex-col justify-between">
      <div className="space-y-5">
        {[
          { color: 'bg-blue-500', text: 'Library extended till', bold: '10PM', sub: 'for exams' },
          { color: 'bg-emerald-500', text: 'New IEEE journals', bold: 'added', sub: 'to digital' },
          { color: 'bg-amber-500', text: 'Campus Wi-Fi', bold: 'Maintenance', sub: 'at midnight' },
          { color: 'bg-purple-500', text: 'Workshop:', bold: 'UI Design', sub: 'starts Friday' },
        ].map((item, i) => (
          <div key={i} className="group cursor-default flex gap-4 items-start">
            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${item.color} shrink-0 group-hover:scale-150 transition-transform`} />
            <div className="flex flex-col min-w-0">
              <p className="text-xs text-slate-600 leading-snug">
                {item.text} <span className="font-bold text-slate-900">{item.bold}</span> {item.sub}
              </p>
              <span className="text-[10px] text-slate-400 mt-0.5">2h ago</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer link to keep the box feeling full */}
      <button className="mt-6 w-full py-2 border-t border-slate-100 text-[11px] font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest">
        View All Notifications
      </button>
    </div>
  </div>

  {/* 2. Book Widget - Compact Anchor, White with Blue Glow */}
  <div className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/60 hover:shadow-md transition-all duration-300">

  {/* Cover */}
  <img
    src="https://imgs.search.brave.com/KrwatppL0Vxxt8fgFvqKTAhSfxVHgJ8fnw95FSgVOhM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFqNEEwVGIyUEwu/anBn"
    alt="Sorathi Baharvatiya"
    className="w-14 h-20 border border-gray-300  object-cover shadow-sm "
  />

  {/* Content */}
  <div className="flex flex-col flex-1 min-w-0">

    <span className="text-[9px] uppercase tracking-widest text-slate-400 mb-1">
      Book of the Day
    </span>

    <h3 className="text-sm font-semibold text-slate-900 truncate">
      Sorathi Baharvatiya 
    </h3>

    <p className="text-[11px] text-slate-500 truncate">
      zaverchand meghani 
    </p>

    {/* Bottom Row */}
    <div className="flex items-center justify-between mt-2">

      <span className="text-[11px] text-slate-400">
        ★ 4.8
      </span>

      <button className="text-[11px] font-medium text-blue-600 hover:text-blue-700 transition flex items-center gap-1">
        View
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>

    </div>
  </div>
</div>
</div>
      </div>

      {/* Bottom Block: Creative Full-Width Search Bar */}
      <div className="w-full  relative rounded-3xl p-px md:p-0.5 overflow-hidden group">
        {/* Animated Gradient Border Layer */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-accent via-primary to-blue-400 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
        {/* Animated Background For Content Wrapper */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-slate-900 via-primary-dark to-slate-900 m-px md:m-0.5 rounded-3xl z-0"></div>
        
        {/* Floating Glowing Orbs (Static) */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent/15 rounded-full blur-2xl pointer-events-none z-0 hidden md:block"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-2xl pointer-events-none z-0 hidden md:block"></div>

        <div className="relative z-10 bg-white/10 rounded-[1.4rem] p-6 md:p-8 shadow-[0_6px_20px_rgba(0,0,0,0.24)] flex flex-col gap-6 m-px md:m-0.5">
          
          <div className="text-center md:text-left flex flex-col md:flex-row md:justify-between items-center gap-3">
            <div>
               <h3 className="text-3xl md:text-4xl  font-serif text-white/80 mb-2 drop-shadow-lg tracking-tight">
                 What are you looking for today?
               </h3>
               <p className="text-blue-100 text-base md:text-lg opacity-90">
                 Search millions of articles, books, and digital resources instantly.
               </p>
            </div>
          </div>
          
          {/* Unified 'Command Center' Search Bar */}
          <div className="w-full relative">
            <div className="flex flex-col md:flex-row items-stretch bg-white rounded-2xl md:rounded-full p-2 shadow-[0_0_24px_rgba(255,255,255,0.12)] group-focus-within:ring-4 ring-accent/50 transition-shadow duration-300">
               
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
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs font-bold text-white/60 uppercase tracking-widest">
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