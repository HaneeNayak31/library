import React from 'react'

function HeaderOPEN() {
  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50 font-serif">
      <div className="h-1 w-full bg-primary"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left: Logo + College name */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
            <img
              src="/gtu_logo.png"
              alt="GTU Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-sm shrink-0"
            />
            <div className="flex flex-col text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase leading-tight tracking-tight">
                Gujarat Technological <br className="hidden md:block"/> University
              </h2>
              <p className="text-xs md:text-sm font-semibold text-primary-light uppercase tracking-widest mt-1 font-sans">
                An International Innovative University
              </p>
            </div>
          </div>

          {/* Right: Central Library focus & Hours */}
          <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto">
            {/* Sticky Hours Widget */}
            <div className="bg-primary-light/10 text-primary text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-2 border border-primary/10">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Open Today: 10:30 AM - 6:10 PM
            </div>

            <div className="relative group px-6 py-2 flex justify-center md:justify-end mt-1">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent rounded-tl-sm transition-all duration-300 group-hover:scale-110"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent rounded-br-sm transition-all duration-300 group-hover:scale-110"></div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary uppercase tracking-tighter leading-none flex items-center gap-3">
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