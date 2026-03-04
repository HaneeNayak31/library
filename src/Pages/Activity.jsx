import React from 'react'

const Activity = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased py-8 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-accent/20 rounded-full border border-accent/20">
            Events & Engagement
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4 font-serif">
            Library Activities
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Fostering a culture of learning through workshops, exhibitions, and interactive sessions.
          </p>
        </div>

        {/* Content Section - Alternating Layout */}
        <div className="space-y-16">
          
          {/* Activity 1: Orientation */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
                <div className="h-1 w-20 bg-accent mb-6"></div>
                <h3 className="text-2xl font-bold text-primary mb-4 font-serif">Library Orientation Programme</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Every year, at the beginning of the academic session, the library organizes an orientation programme for new students. This session introduces them to:
                </p>
                <ul className="space-y-2 mb-6 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">●</span> Library resources and services
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">●</span> How to access e-resources and OPAC
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">●</span> Rules, regulations, and ethical writing practices
                  </li>
                </ul>
                <button className="px-6 py-2 bg-primary text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-primary-light transition-colors shadow-md">
                  View Schedule
                </button>
             </div>
             <div className="order-1 md:order-2 bg-white p-2 rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-slate-200 rounded-xl h-64 w-full flex items-center justify-center overflow-hidden">
                   <img 
                     src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Students at Orientation" 
                     className="w-full h-full object-cover"
                   />
                </div>
             </div>
          </div>

          {/* Activity 2: Workshops */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-1 bg-white p-2 rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-slate-200 rounded-xl h-64 w-full flex items-center justify-center overflow-hidden">
                   <img 
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Workshop Session" 
                      className="w-full h-full object-cover"
                   />
                </div>
             </div>
             <div className="order-2">
                <div className="h-1 w-20 bg-accent mb-6"></div>
                <h3 className="text-2xl font-bold text-primary mb-4 font-serif">Workshops & Training</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  We regularly conduct training sessions and workshops for students and faculty members to enhance their research skills. Recent topics include:
                </p>
                <ul className="grid grid-cols-1 gap-3 mb-6">
                  <li className="bg-white border border-slate-100 p-3 rounded-lg shadow-sm flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="font-semibold text-slate-800">Effective Use of E-Resources</span>
                  </li>
                  <li className="bg-white border border-slate-100 p-3 rounded-lg shadow-sm flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="font-semibold text-slate-800">Reference Management Tools (Mendeley, Zotero)</span>
                  </li>
                   <li className="bg-white border border-slate-100 p-3 rounded-lg shadow-sm flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="font-semibold text-slate-800">Research Ethics & Plagiarism Avoidance</span>
                  </li>
                </ul>
             </div>
          </div>

          {/* Activity 3: Book Talk */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
                <div className="h-1 w-20 bg-accent mb-6"></div>
                <h3 className="text-2xl font-bold text-primary mb-4 font-serif">Granth Gosthi (Book Talk)</h3>
                 <p className="text-slate-600 mb-4 leading-relaxed">
                  "Granth Gosthi" is a unique initiative where readers gather to discuss books, share reviews, and encourage reading habits. It serves as a platform for intellectual exchange and literary appreciation.
                </p>
                 <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                  <p className="italic text-slate-700">"A room without books is like a body without a soul."</p>
                  <p className="text-xs font-bold text-primary mt-2 uppercase tracking-wider">- Cicero</p>
                </div>
             </div>
             <div className="order-1 md:order-2 bg-white p-2 rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-slate-200 rounded-xl h-64 w-full flex items-center justify-center overflow-hidden">
                   <img 
                      src="https://images.unsplash.com/photo-1515168816513-4896b9f0d374?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Book Talk Discussion" 
                      className="w-full h-full object-cover"
                   />
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Activity
