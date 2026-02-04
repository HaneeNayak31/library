import React from 'react';

const VisionMission = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-6 py-3">
        
        {/* Header Section */}
        <div className="border-b border-slate-200 pb-2 mb-12">
          <h1 className="text-xs font-black uppercase tracking-[0.4em] text-blue-800">
            Institutional Mandate
          </h1>
        </div>

        {/* 1. VISION SECTION - The Philosophical Statement */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">
              Vision<span className="text-blue-700">.</span>
            </h2>
            <div className="w-10 h-1 bg-slate-200 mt-2"></div>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-3xl font-light leading-snug text-slate-600 italic">
              "To <span className="text-slate-900 font-semibold italic">revolutionize access to knowledge</span> and empower individuals worldwide through a digital repository of diverse, high-quality educational resources."
            </p>
          </div>
        </div>

        {/* 2. MISSION SECTION - The Operational Core */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">
              Mission<span className="text-blue-700">.</span>
            </h2>
            <div className="w-10 h-1 bg-slate-200 mt-2"></div>
          </div>
          
          <div className="md:col-span-8">
            <div className="space-y-6">
              <p className="text-[15px] font-bold uppercase tracking-wide text-blue-800 border-l-2 border-blue-800 pl-4">
                Providing seamless access to global learning.
              </p>
              
              <div className="text-[16px] leading-relaxed text-slate-700 space-y-4">
                <p>
                  Our mission is to provide seamless access to a vast array of <span className="text-slate-900 font-medium">Academic materials, Research materials</span> and educational content to learners of all backgrounds. 
                </p>
                
                {/* Breakout Mission Points for High Usability */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="border border-slate-100 p-5 bg-slate-50">
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">Innovation</h4>
                    <p className="text-sm">Through innovation and collaboration, we aim to bridge the gap in information accessibility and foster a culture of lifelong learning.</p>
                  </div>
                  <div className="border border-slate-100 p-5 bg-slate-50">
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">Growth</h4>
                    <p className="text-sm">Promote intellectual growth within our global community and cultivate a more informed, enlightened society.</p>
                  </div>
                </div>

                <p className="pt-4 border-t border-slate-100 italic text-slate-500 text-sm">
                  We are committed to embracing technology to enhance the educational experience, promote literacy, and cultivate a more informed, enlightened society.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VisionMission;