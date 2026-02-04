import React from 'react'

const OpenAccessResources = () => {
  const resources = [
    { name: "e-PG Pathshala", img: "/e-pathshala.jpeg", sub: "PG Course Gateway" },
    { name: "Anuvadini", img: "/anuvadini.jpeg", sub: "Translation Tool" },
    { name: "Rashtriya e-Pustakalaya", img: "/Rashtriya e-pustakalaya.png", sub: "National Digital Library" },
    { name: "National Digital Library", img: "/National digital libraray.png", sub: "Knowledge Repository" },
    { name: "Swayam", img: "/swayam.jpeg", sub: "Online Learning Portal" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased py-8 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-emerald-600 uppercase bg-emerald-100 rounded-full">
            Free Access
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Open Access Resources
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Curated list of significant national and international repositories freely available to the public.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center mb-20">
          {resources.map((item, idx) => (
            <div 
              key={idx} 
              className="group w-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-64 flex flex-col items-center justify-between border border-slate-100"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="flex-1 flex items-center justify-center w-full p-2">
                 <img 
                  src={item.img} 
                  alt={item.name} 
                  className="max-h-24 w-auto object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>

              <div className="text-center w-full mt-4 border-t border-slate-50 pt-4">
                <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-emerald-600 transition-colors truncate w-full">
                  {item.name}
                </h3>
                 <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                   {item.sub}
                 </p>
              </div>
            </div>
          ))}
        </div>

         {/* Info Banner */}
         <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 border-l-4 border-emerald-500 shadow-md">
           <div className="flex items-start gap-4">
             <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">
               <svg className="w-6 h-6" fill="npmne" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             </div>
             <div>
               <h4 className="text-lg font-bold text-slate-800 mb-2">Why Open Access?</h4>
               <p className="text-slate-600 leading-relaxed text-sm">
                 Open Access (OA) facilitates unrestricted access to scholarly information. It promotes global knowledge exchange and allows students and researchers to access high-quality resources without financial barriers.
               </p>
             </div>
           </div>
         </div>

      </div>
    </div>
  )
}

export default OpenAccessResources
