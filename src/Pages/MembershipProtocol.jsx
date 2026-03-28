import React from 'react';
import { BookOpen, UserCheck, ShieldAlert, Clock, Info } from 'lucide-react'; // Using Lucide for icons

const MembershipProtocol = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans antialiased text-slate-800 pb-20">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-slate-200/50 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-2">
        
        {/* Hero Header Section */}
        <header className="max-w-3xl mb-16">
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]">
            Membership & <span className="text-[#FFD700]">Borrowing Guidelines</span>
          </h1>
        </header>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Eligibility & Rules */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Section 1: Eligibility */}
            <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 transition-all hover:shadow-md">
              <div className="flex items-center gap-4  mb-8">
                <h2 className="text-2xl font-bold text-slate-900">Membership Eligibility</h2>
              </div>
              
              <p className="text-slate-600 mb-8 text-lg">
                Open to students, faculty, and staff. Please submit the following documents with your application:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-blue-700 mb-1">For Students</h4>
                  <p className="text-sm text-slate-600">Enter HeRE</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-blue-700 mb-1">For Faculty</h4>
                  <p className="text-sm text-slate-600">Enter here</p>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <Info className="text-amber-600 mt-1 shrink-0" size={20} />
                <p className="text-sm text-amber-800">
                  <span className="font-bold uppercase tracking-tight">Mandatory:</span> The Library Smart Card is required for all book circulation and entry logs.
                </p>
              </div>
            </section>

            {/* Section 3: General Rules (Moved up for layout balance) */}
            <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">General Conduct</h2>
              <div className="space-y-6">
                {[
                  { id: '01', text: 'Strict silence must be maintained. Mobiles on silent mode.', icon: <Clock size={18}/> },
                  { id: '02', text: 'Personal belongings should be deposited at the property counter.', icon: <BookOpen size={18}/> },
                  { id: '03', text: 'Reference books and journals are for in-library use only.', icon: <ShieldAlert size={18}/> },
                  { id: '04', text: 'Late returns incur a fine of ₹1.00 per day, per book.', icon: <Info size={18}/> },
                ].map((rule) => (
                  <div key={rule.id} className="group flex gap-5 items-start">
                    <span className="flex-none w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 group-hover:bg-[#FFD700] group-hover:text-white transition-colors">
                      {rule.id}
                    </span>
                    <p className="text-slate-700 leading-snug pt-1">{rule.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Table Sticky Sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-22 bg-slate-900 rounded-[2rem] p-8 text-white shadow-2xl overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 blur-[80px] rounded-full" />
              
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <BookOpen className="text-blue-100" />
                Borrowing Privileges
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-widest text-slate-400 pb-2 border-b border-slate-800">
                  <span>Category</span>
                  <span className="text-center">Books</span>
                  <span className="text-right">Period</span>
                </div>
                
                {[
                  { cat: 'Faculty', count: '02', days: '30 Days' },
                  { cat: 'PhD Scholars', count: '02', days: '30 Days' },
                  { cat: 'PG Students', count: '02', days: '15 Days' },
                  { cat: 'UG Students', count: '02', days: '15 Days' },
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 py-4 border-b border-slate-800/50 items-center hover:bg-white/5 transition-colors rounded-lg px-2 -mx-2">
                    <span className="font-medium text-slate-200">{row.cat}</span>
                    <span className="text-center font-mono text-blue-400">{row.count}</span>
                    <span className="text-right text-slate-300">{row.days}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-sm text-slate-400 italic">
                  * Circulation policies are subject to change per the University Library Committee's annual review.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MembershipProtocol;