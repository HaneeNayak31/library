import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ExternalLink, Clock, BookOpen, GraduationCap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-slate-200 pt-20 pb-10 overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-[#003366] via-[#ffcc00] to-[#003366]"></div>
      
      {/* Decorative Background Glow (FAANG Style) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: The Institutional Anchor (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex flex-col items-start">
              <div className="group relative mb-6">
                <div className="absolute -inset-2  rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-slate-200 p-1 rounded-xl shadow-2xl">
                  <img src="/gtu_logo.png" alt="GTU Logo" className="w-22 h-22 object-contain" />
                </div>
              </div>
              <h3 className="text-2xl font-black tracking-tight text-black uppercase italic">
                <span className="text-white not-italic">Central </span><span className="text-[#ffcc00] not-italic">Library</span>
              </h3>
              <p className="text-[11px] text-slate-400 uppercase tracking-[0.3em] font-bold mt-2 border-l-2 border-[#ffcc00] pl-3">
                Gujarat Technological University
              </p>
            </div>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
                <MapPin size={20} className="text-[#ffcc00] shrink-0" />
                <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
                  Nr. Visat Three Roads, Chandkheda, Ahmedabad, Gujarat 382424
                </span>
              </div>
              <div className="flex items-center gap-4 px-4">
                <div className="flex -space-x-2">
                   <div className="w-8 h-8 rounded-full bg-[#003366] flex items-center justify-center border-2 border-[#020617]"><Phone size={14} /></div>
                   <div className="w-8 h-8 rounded-full bg-[#ffcc00] flex items-center justify-center border-2 border-[#020617] text-black"><Mail size={14} /></div>
                </div>
                <div className="text-xs font-medium">
                  <p className="text-slate-200">079-23267500</p>
                  <a href="mailto:librarian@gtu.edu.in" className="text-slate-500 hover:text-[#ffcc00]">librarian@gtu.edu.in</a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation "Shelves" (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-black text-[#ffcc09] mb-8"> <span className='text-white/80'> Navigation</span></h4>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Membership', 'E-Resources', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-slate-400 hover:text-white text-sm font-medium flex items-center group">
                    <span className="h-1px w-0 bg-[#ffcc00] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
     

          {/* Column 3: Resources (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-black text-[#ffcc00] mb-8">Academic Portal</h4>
            <div className="grid grid-cols-1 gap-3">
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                <BookOpen size={18} className="text-blue-400 group-hover:rotate-12 transition-transform" />
                <div>
                  <p className="text-sm font-bold text-slate-200">Digital Repository</p>
                  <p className="text-[10px] text-slate-500">Theses & Research Papers</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                <GraduationCap size={18} className="text-amber-400 group-hover:rotate-12 transition-transform" />
                <div>
                  <p className="text-sm font-bold text-slate-200">GTU IRINS</p>
                  <p className="text-[10px] text-slate-500">Faculty Profiles & Research</p>
                </div>
              </a>
            </div>
          </div>

          {/* Column 4: Status & Social (3 Cols) */}
          <div className="lg:col-span-3 space-y-8">
            <div className="p-6 rounded-2xl bg-linear-to-br from-white/5 to-transparent border border-white/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-2 opacity-10">
                  <ShieldCheck size={60} />
               </div>
               <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <Clock size={16} className="text-[#ffcc00]" />  <span className='text-white/80'>Availability </span>
               </h4>
               <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">Library Open</span>
                  
                  </div>
                  <p className="text-lg font-mono text-white">8 am — 8 pm</p>
               </div>
            </div>

            <div className="flex items-center gap-4">
               {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                 <a key={i} href="#" className="p-2.5 rounded-full bg-slate-800 text-slate-400 hover:bg-[#ffcc00] hover:text-black transition-all">
                   <Icon size={18} />
                 </a>
               ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-500">
            <span className="text-slate-300">© {currentYear} GTU</span>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-500 italic">
             Designed for <span className="text-white not-italic font-bold">Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;