import React from 'react'

function HeaderOPEN() {
  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm z-40 relative">
      <div className="h-1 w-full bg-[#003366]"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
        <div className="flex items-center justify-between gap-4 md:gap-6">

          {/* Left: Logo + College name */}
          <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
            <img
              src="/gtu_logo.png"
              alt="GTU Logo"
              className="w-10 h-10 md:w-20 md:h-20 object-contain shrink-0"
            />
            
            
            <div className="flex flex-col border-l-2 border-gray-200 pl-2 min-w-0 overflow-hidden">
              <h2 className="font-bold text-slate-900 uppercase leading-none whitespace-nowrap truncate" style={{ fontSize: 'clamp(15px, 1.6vw, 25px)' }}>
                Gujarat Technological University
              </h2>
              <p className="font-semibold text-blue-700 uppercase tracking-widest pl-35  whitespace-nowrap truncate" style={{ fontSize: 'clamp(8px, 1vw, 10px)' }}>
                An International Innovative University
              </p>
            </div>
          </div>

          {/* Right: Central Library focus */}
          <div className="relative group px-3 py-1 text-right shrink-0">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-600 rounded-tl-sm"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-600 rounded-br-sm"></div>

            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-slate-900 uppercase tracking-tighter leading-none flex items-center gap-2 justify-end whitespace-nowrap">
              <span className="font-extralight text-neutral-500">CENTRAL</span>
              <span className="font-black text-black">LIBRARY</span>
            </h1>
          </div>

        </div>
      </div>
    </header>
  )
}

export default HeaderOPEN