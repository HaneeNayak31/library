import React from 'react'

function HeaderOPEN() {
  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="h-1 w-full bg-[#003366]"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
        <div className="flex items-center justify-between gap-4 md:gap-8">

          {/* Left: Logo + College name */}
          <div className="flex items-center gap-1 md:gap-1">
            <img
              src="/gtu_logo.png"
              alt="GTU Logo"
              className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-sm shrink-0"
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-slate-900 uppercase ">
                Gujarat Technological University
              </h2>
              <p className="text-[9px] px-15 md:text-xs font-semibold text-blue-700 uppercase tracking-widest mt-1">
                An International Innovative University
              </p>
            </div>
          </div>

          {/* Right: Central Library focus */}
          <div className="relative group px-4 py-1 text-right">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-600 rounded-tl-sm transition-all duration-300 group-hover:scale-110"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-600 rounded-br-sm transition-all duration-300 group-hover:scale-110"></div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl  text-slate-900 uppercase tracking-tighter leading-none flex items-center gap-3 justify-end">
              <span className="font-extralight text-neutral-800">CENTRAL</span>
              <span className="text-black drop-shadow-sm">LIBRARY</span>
            </h1>
          </div>

        </div>
      </div>
    </header>
  )
}

export default HeaderOPEN