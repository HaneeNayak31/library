import React from 'react'
import { Search, BookOpen, Monitor, Users, Clock } from 'lucide-react'
import HeroSection from '../Components/HeroSection'

function Landing() {
  return (
    <div className="space-y-12">
      {/* Hero Search Section */}
      <HeroSection />

      {/* Quick Stats / Info Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex items-start gap-4">
          <div className="p-3 bg-blue-50 text-primary rounded-xl">
            <Clock size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-1">Opening Hours</h3>
            <p className="text-sm text-slate-600">Mon-Sat: 10:30 AM - 6:10 PM</p>
            <p className="text-sm text-slate-600">Sun: Closed</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex items-start gap-4">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
            <BookOpen size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-1">Collection</h3>
            <p className="text-sm text-slate-600">25,000+ Print Books</p>
            <p className="text-sm text-slate-600">Access to 1000s of E-Journals</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex items-start gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <Users size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-1">Services</h3>
            <p className="text-sm text-slate-600">Remote Access (Knimbus)</p>
            <p className="text-sm text-slate-600">Plagiarism Check</p>
          </div>
        </div>
      </div>
      
      {/* Content Sections */}
       <div className="grid md:grid-cols-2 gap-12 items-center">
         <div>
            <h3 className="text-2xl font-bold text-primary mb-4 font-serif">About the Library</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              The Gujarat Technological University Central Library is a knowledge hub for students, researchers, and faculty. We provide access to a vast collection of resources including textbooks, reference books, journals, and digital databases to support the academic and research needs of the university.
            </p>
            <button className="px-6 py-2 border-2 border-primary text-primary font-bold uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-colors rounded-lg">
              Read More
            </button>
         </div>
         <div className="bg-slate-200 rounded-2xl h-64 w-full flex items-center justify-center overflow-hidden shadow-lg">
           <img 
             src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
             alt="Library Interior" 
             className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
           />
         </div>
       </div>

    </div>
  )
}

export default Landing
