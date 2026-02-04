import React from 'react'

const AccessItem = ({ title, desc }) => (
  <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
    <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div>
    <div className="text-sm text-slate-700">
      <span className="font-bold text-slate-900 block mb-1">{title}</span>
      {desc}
    </div>
  </li>
);

const EResources = () => {
  const resources = [
    { name: "ProQuest One Academic", img: "/proquest one.jpeg", type: "Database" },
    { name: "Scopus", img: "/scopus.png", type: "Abstract & Citation DB" },
    { name: "K-Hub", img: "/Knowledge Hub.png", type: "Virtual Library" },
    { name: "CMIE Tradex", img: "/Tradex.jpeg", type: "Trade Database" },
    { name: "Knimbus", img: "/knimbus.png", type: "Remote Access" },
    { name: "DrillBit", img: "/drillbit.png", type: "Plagiarism Check", sub: "PhD Scholars Only" },
    { name: "Turnitin", img: "/turnitin.png", type: "Plagiarism Check" },
    { name: "ONOS", img: "/ONOS.png", type: "Research Platform" },
    { name: "DELNET", img: "/delnet.png", type: "Resource Sharing" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased py-8 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
            Digital Library
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            E-Resources
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Access a world of knowledge through our subscribed premium databases, research journals, and academic tools.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {resources.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col items-center justify-between h-64 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="flex-1 flex items-center justify-center w-full p-2">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="max-h-24 w-auto object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>
              
              <div className="text-center w-full mt-4 border-t border-slate-50 pt-4">
                <h3 className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors truncate w-full">
                  {item.name}
                </h3>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mt-1">
                  {item.type}
                </p>
                {item.sub && (
                  <span className="inline-block mt-2 px-2 py-0.5 bg-amber-50 text-amber-700 text-[10px] font-bold rounded-full border border-amber-100">
                    {item.sub}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Access Info Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-12">
            
            {/* Left Side: Summary */}
            <div className="md:col-span-5 bg-[#003366] p-10 text-white flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
               <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
               
               <h3 className="text-2xl font-bold mb-6 relative z-10">Access Mechanism</h3>
               <p className="text-blue-100 mb-8 leading-relaxed relative z-10">
                 All GTU e-Resources are accessible remotely via the <span className="text-white font-bold border-b border-blue-400 pb-0.5">Knimbus Portal</span>. Ensuring seamless access for our academic community is our priority.
               </p>
               <div className="space-y-4 relative z-10 w-full">
                  <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-1">Important Note</p>
                    <p className="text-sm">Verify your details and submit them to the Central Library for access activation.</p>
                  </div>
               </div>
            </div>

            {/* Right Side: Details */}
            <div className="md:col-span-7 p-10">
              <h4 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 14l-1 1-1 1H3l5 4v-4H3v-4h.982a7.618 7.618 0 010-4H20a8 8 0 01-7.743 5.743L11 14 10 13 9 12H3v-4H9a7.6 7.6 0 0110.743-5.743z"></path></svg>
                </span>
                Details by User Type
              </h4>
              <ul className="grid grid-cols-1 gap-4">
                <AccessItem 
                  title="Students" 
                  desc="ProQuest One Academic, Knimbus, K-hub, SCOPUS, CMIE, ONOS" 
                />
                <AccessItem 
                  title="Faculty & PhD Scholars" 
                  desc="ProQuest One Academic, Knimbus, K-hub, SCOPUS, CMIE, ONOS" 
                />
                 <AccessItem 
                  title="PhD Supervisors" 
                  desc="ProQuest, Knimbus, K-hub, Drillbit & Turnitin" 
                />
                 <AccessItem 
                  title="Affiliated Colleges" 
                  desc="Turnitin Plagiarism Software" 
                />
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default EResources
