import React from 'react'

function HeaderOPEN() {
  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm font-serif relative z-40">
      <div className="h-1 w-full bg-primary"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-8">

          {/* Left: Logo + College name */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
            <img
              src="/gtu_logo.jpeg"
              alt="GTU Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-sm shrink-0"
            />
            <div className="flex flex-col text-center md:text-left">
              <h2 className="text-base md:text-lg lg:text-xl font-bold text-primary uppercase leading-tight tracking-tight whitespace-nowrap">
                Gujarat Technological University
              </h2>
              <p className="text-[10px] md:text-xs font-semibold text-primary-light uppercase tracking-widest mt-0.5 font-sans">
                An International Innovative University
              </p>
            </div>
          </div>

          {/* Right: Central Library focus & Hours */}
          <div className="flex flex-col items-center md:items-end w-full md:w-auto mt-2 md:mt-0 md:pr-12 lg:pr-16 xl:pr-20">
            {/* Sticky Hours Widget */}
            <div className="bg-primary-light/10 text-primary text-[10px] md:text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2 border border-primary/10 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Open Today: 10:30 AM - 6:10 PM
            </div>

            <div className="relative group px-4 py-1 flex justify-center md:justify-end">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent rounded-tl-sm transition-all duration-300 group-hover:scale-110"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent rounded-br-sm transition-all duration-300 group-hover:scale-110"></div>

              <h1 className="text-xl md:text-2xl lg:text-3xl text-primary uppercase tracking-tighter leading-none flex items-center gap-2">
                <span className="font-light text-primary-light">CENTRAL</span>
                <span className="text-primary drop-shadow-sm font-bold">LIBRARY</span>
              </h1>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default HeaderOPEN