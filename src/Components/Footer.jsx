import React from 'react';
import {
  Mail, Phone, MapPin,
  Facebook, Twitter, Linkedin, Instagram,
  Clock, BookOpen, GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
   <footer className="relative bg-primary text-slate-300 pt-20 pb-10 overflow-hidden">

  {/* KEEP */}
  <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-[#003366] via-[#ffcc00] to-[#003366]"></div>

  {/* subtle controlled glow (not overpowering) */}
  <div className="absolute top-0 left-1/3 w-80 h-80 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

      {/* LEFT */}
      <div className="lg:col-span-4 space-y-7">

        <div className="flex items-center  gap-4">
          <div className="bg-slate-200 p-1 rounded-full">
            <img src="/gtu_logo.png" className="w-16 h-16 object-contain" />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white uppercase tracking-tight">
              Central <span className="text-[#ffcc00]">Library</span>
            </h3>
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em]">
              Gujarat Technological University
            </p>
          </div>
        </div>

        {/* simplified contact */}
        <div className="space-y-4 text-sm">

          <div className="flex items-start gap-3 text-slate-400 hover:text-slate-200 transition">
            <MapPin size={16} className="text-[#ffcc00] mt-1" />
            <span>Chandkheda, Ahmedabad, Gujarat</span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <span className="flex items-center gap-2 hover:text-white transition">
              <Phone size={14}/> 079-23267500
            </span>

            <span className="flex items-center gap-2 hover:text-white transition">
              <Mail size={14}/> librarian@gtu.edu.in
            </span>
          </div>

        </div>
      </div>

      {/* NAV */}
      <div className="lg:col-span-2">
        <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-[#ffcc00] mb-6">
          Navigation
        </h4>

        <ul className="space-y-3">
          {['About Us','Services','Membership','E-Resources','Contact'].map((item)=>(
            <li key={item}>
              <Link
                to="#"
                className="text-sm text-slate-400 hover:text-white flex items-center gap-2 group transition"
              >
                <span className="w-0 h-[1px] bg-[#ffcc00] group-hover:w-4 transition-all"></span>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* RESOURCES (less boxy, more fluid) */}
      <div className="lg:col-span-3">
        <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-[#ffcc00] mb-6">
          Academic
        </h4>

        <div className="space-y-4">

          <a href="#" className="group flex items-center gap-3 text-slate-400 hover:text-white transition">
            <BookOpen size={18} className="text-blue-400 group-hover:scale-110 transition"/>
            <div>
              <p className="text-sm font-medium">Digital Repository</p>
              <p className="text-[10px] text-slate-500">Research Papers</p>
            </div>
          </a>

          <a href="#" className="group flex items-center gap-3 text-slate-400 hover:text-white transition">
            <GraduationCap size={18} className="text-amber-400 group-hover:scale-110 transition"/>
            <div>
              <p className="text-sm font-medium">GTU IRINS</p>
              <p className="text-[10px] text-slate-500">Faculty Research</p>
            </div>
          </a>

        </div>
      </div>

      {/* RIGHT */}
      <div className="lg:col-span-3 space-y-8">

        {/* keep card but lighter */}
        <div className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
            <Clock size={14} className="text-[#ffcc00]" />
            Availability
          </h4>

          <p className="text-xs text-slate-400">Library Open</p>
          <p className="text-lg text-white font-medium">8 am — 8 pm</p>
        </div>

        {/* socials refined */}
        <div className="flex items-center gap-3">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon,i)=>(
            <a
              key={i}
              href="#"
              className="p-2 rounded-lg bg-slate-800/60 text-slate-400 hover:bg-[#ffcc00] hover:text-black transition-all duration-300"
            >
              <Icon size={18}/>
            </a>
          ))}
        </div>

      </div>

    </div>

    

    

  </div>
</footer>
  );
};

export default Footer;