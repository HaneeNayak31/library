import React, { useState, useEffect } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Bell,
  BookOpen,
  Database,
  Clock,
} from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
      title: "Central Knowledge Hub",
      subtitle: "Access structured academic resources instantly",
    },
    {
      url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
      title: "Modern Research Infrastructure",
      subtitle: "Built for students, researchers, and faculty",
    },
    {
      url: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      title: "Digital + Physical Integration",
      subtitle: "Seamless experience across all formats",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-slate-50 py-10 md:py-5">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid lg:grid-cols-12 gap-8">

          {/* LEFT: CAROUSEL */}
          <div className="lg:col-span-7 relative h-[420px] rounded-2xl overflow-hidden bg-black">

            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={slide.url}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 " />

               
              </div>
            ))}

           

            {/* Indicators */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === currentSlide
                      ? "w-6 bg-white"
                      : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: PANELS */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/*  Notifications */}
            <div className="bg-white/80 backdrop-blur border border-slate-200/70 rounded-2xl p-6 shadow-sm">
           
                         <div className="flex items-center justify-between mb-5">
                           <h3 className="flex items-center gap-2 text-slate-900 font-medium">
                             <Bell size={16} /> Updates
                           </h3>
                           <span className="text-xs text-slate-500">Live</span>
                         </div>
           
                         <div className="space-y-4 text-sm">
           
                           <div className="flex gap-3">
                             <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                             <p className="text-slate-600">
                               Library extended till <span className="font-medium text-slate-900">10PM</span> for exams.
                             </p>
                           </div>
           
                           <div className="flex gap-3">
                             <div className="w-2 h-2 mt-2 rounded-full bg-green-500"></div>
                             <p className="text-slate-600">
                               New IEEE journals added to digital access.
                             </p>
                           </div>
           
                         </div>
                       </div>

            {/*  Resource Panels */}
            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white border p-5 rounded-xl">
                <Database size={18} className="mb-2 text-slate-600" />
                <p className="text-sm font-medium text-slate-900">
                  12K+ Journals
                </p>
              </div>

              <div className="bg-white border p-5 rounded-xl">
                <BookOpen size={18} className="mb-2 text-slate-600" />
                <p className="text-sm font-medium text-slate-900">
                  50K+ Books
                </p>
              </div>

              <div className="bg-white border p-5 rounded-xl">
                <Clock size={18} className="mb-2 text-slate-600" />
                <p className="text-sm font-medium text-slate-900">
                  Open till 10PM
                </p>
              </div>

              <div className="bg-white border p-5 rounded-xl">
                <Database size={18} className="mb-2 text-slate-600" />
                <p className="text-sm font-medium text-slate-900">
                  24/7 Digital
                </p>
              </div>

            </div>
          </div>
        </div>

        {/*  SEARCH BAR */}
        <div className="mt-10 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

          <h3 className="text-lg font-medium text-slate-900 mb-4">
            Search Library Resources
          </h3>

          <div className="flex items-center border rounded-lg px-4 py-3">

            <Search className="text-slate-400 mr-3" size={20} />

            <input
              placeholder="Search books, journals, research papers..."
              className="flex-1 outline-none"
            />

            <button className="ml-4 px-5 py-2 bg-slate-900 text-white rounded-lg text-sm">
              Search
            </button>
          </div>

          <div className="mt-4 flex gap-4 text-sm text-slate-500">
            <span>Popular:</span>
            <span className="cursor-pointer hover:text-slate-900">
              Machine Learning
            </span>
            <span className="cursor-pointer hover:text-slate-900">
              Quantum Physics
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}