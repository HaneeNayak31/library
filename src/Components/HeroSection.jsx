import React, { useEffect, useRef, useState } from 'react';
import { Search, BookOpen, Monitor, Users, Clock, ChevronRight, ChevronLeft, Bell, ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      <div className="lg:col-span-4 relative z-20 flex flex-col gap-5">
        <div className="bg-white rounded-4xl p-4 md:p-5 flex-1 flex flex-col border border-neutral-300">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
            <h3 className="font-semibold text-lg text-slate-900 tracking-tight">Latest News</h3>
            <span className="text-[10px] bg-slate-100 text-blue-600 px-3 py-1 rounded-full font-semibold uppercase tracking-widest">Updates</span>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-4">
            <Link
              to={`/news-events/${latestNews[0].id}`}
              className="group block rounded-xl p-2 -m-2 hover:bg-slate-50 hover:shadow-sm hover:ring-1 hover:ring-slate-200 transition-all"
            >
              <p className="text-[10px] text-slate-400 font-semibold mb-2 tracking-[0.25em] uppercase">{latestNews[0].date}</p>
              <h4 className="text-sm leading-relaxed text-slate-700 group-hover:text-slate-900 transition">{latestNews[0].summary}</h4>
            </Link>

            <div className="w-full h-px bg-slate-200"></div>

            <Link
              to={`/news-events/${latestNews[1].id}`}
              className="group block rounded-xl p-2 -m-2 hover:bg-slate-50 hover:shadow-sm hover:ring-1 hover:ring-slate-200 transition-all"
            >
              <p className="text-[10px] text-slate-400 font-semibold mb-2 tracking-[0.25em] uppercase">{latestNews[1].date}</p>
              <h4 className="text-sm leading-relaxed text-slate-700 group-hover:text-slate-900 transition">{latestNews[1].summary}</h4>
            </Link>
          </div>

          <Link
            to="/news-events"
            className="text-[10px] mt-5 text-slate-500 hover:text-slate-900 font-semibold uppercase tracking-[0.25em] flex items-center justify-center gap-2 group transition"
          >
            View All News
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 flex-none">
          <Link
            to="/about/ask-a-librarian"
            className="bg-emerald-100/50 hover:bg-slate-50 text-slate-900 p-4 md:p-5 rounded-4xl flex flex-col items-center justify-center text-center gap-2.5 transition-all duration-300 border border-slate-200 group hover:-translate-y-1 hover:shadow-md hover:border-emerald-200"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
              <Users size={22} />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider">Ask Staff</span>
          </Link>

          <Link
            to="/e-resources"
            className="relative z-50 pointer-events-auto bg-amber-100/30 hover:bg-slate-50 text-slate-900 p-4 md:p-5 rounded-4xl flex flex-col items-center justify-center text-center gap-2.5 transition-all duration-300 border border-slate-200 group hover:-translate-y-1 hover:shadow-md hover:border-amber-200"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
              <Monitor size={22} />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider">E-Resources</span>
          </Link>
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