import React from 'react';

const MessageFromVC = () => {
  return (
    <div className="relative bg-[#ffffff] min-h-screen font-serif antialiased overflow-hidden">
      
      {/* BACKGROUND LAYER: Formal Micro-Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#003366 1px, transparent 1px), linear-gradient(90deg, #003366 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 py-4">
        
        {/* DOCUMENT HEADER */}
        <div className="border-b-4 border-slate-900 pb-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="space-y-1">
            <h1 className="text-[11px] font-black uppercase tracking-[0.6em] text-blue-900">
              Gujarat Technological University
            </h1>
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
              Office of the <span className="text-blue-800">Vice Chancellor</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-l-2 border-slate-200 pl-4">
              Document Ref: GTU/LIB/VC/2024 <br />
              Official Communication
            </div>
          </div>
        </div>

        {/* CONTENT STRUCTURE */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT: CONTENT BODY (The Letter) */}
          <div className="lg:flex-1 order-2 lg:order-1">
            <div className="space-y-8 text-[17px] text-slate-800 leading-[1.8] text-justify">
              
              <div className="not-italic font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 inline-block">
                Dear Students, Faculty Members, Principals/Directors;
              </div>

              <p className="font-black text-blue-900 text-2xl tracking-widest mb-6">NAMASKAR!!!</p>

              <p>
                The library acts as a key resource and learning centre of the University. It plays a vital role in enhancing the academic and research growth. To facilitate the users with reading and research, central library is strategically located on the campus of the university along with separate reading rooms and allied facilities.
              </p>

              <p>
                Team central library of Gujarat Technological University works to provide centralised access to library resources to its users. 
                Gujarat Technological University is equipped with a state-of-the-art e-library. The comprehensive collection of digital resources, ranging from scholarly articles and textbooks to multimedia content, the e-library is poised to become a cornerstone of academic supplementation for all the stakeholders of the University.
              </p>

              <p>
                I congratulate team library for their efforts and commitment towards excellence and innovation in higher education. I invite each stakeholder of the university to explore the vast wealth of knowledge that central library has to offer.
              </p>

              {/* FORMAL CLOSURE */}
              <div className="mt-16 pt-10 border-t border-slate-200">
                <div className="flex flex-col items-start space-y-2">
                  <p className="font-bold text-slate-900 uppercase tracking-widest text-xs">With Regards,</p>
                  <div className="py-4">
                    {/* Placeholder for Signature - Maintain professional height */}
                    
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tighter uppercase">Dr. Rajul K. Gajjar</h3>
                  <p className="text-sm font-bold text-blue-900 uppercase tracking-widest">Honourable Vice Chancellor</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: PHOTO DISPLAY (Landscape Focused) */}
          <div className="lg:w-80 order-1 lg:order-2">
            <div className="sticky top-24 space-y-6">
              <div className="relative border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                {/* 16:9 Landscape Aspect Ratio */}
                <div className="aspect-video bg-slate-100 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000">
                  <img 
                    src="/GTU_VC.jpg" 
                    alt="Vice Chancellor" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                {/* Thin Inner Gold-style Border for Prestige */}
                <div className="absolute inset-0 border border-slate-200/50 pointer-events-none"></div>
              </div>
              
              <div className="text-center space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Institutional Leadership</p>
                <div className="h-px w-12 bg-blue-900 mx-auto mt-4"></div>
              </div>

              {/* Verified Institutional Badge */}
              <div className="bg-slate-50 p-6 border border-slate-100 text-center">
                 <img src="/gtu_logo.png" alt="Logo" className="w-16 mx-auto mb-4 opacity-70" />
                 <p className="text-[9px] font-bold text-slate-400 leading-tight uppercase tracking-widest">
                   Certified Official Communication <br />
                   Gujarat Technological University
                 </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MessageFromVC;