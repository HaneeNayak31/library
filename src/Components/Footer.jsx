import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: About / Contact & Hours */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="shrink-0 bg-white rounded-full p-1 border-2 border-accent flex items-center justify-center mt-17">
                <img src="/gtu_logo.png" alt="GTU Logo" className="w-14 h-14 object-contain" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-bold text-xl leading-none text-accent font-serif mb-1">Central Library</h3>
                <p className="text-xs text-slate-300 uppercase tracking-widest font-semibold leading-relaxed">
                  Gujarat Technological <br className="hidden md:block"/> University
                </p>
              </div>
            </div>
            
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-accent shrink-0" />
                <span>Nr.Visat Three Roads, Visat - Gandhinagar Highway, Chandkheda, Ahmedabad - 382424</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span>079-23267500</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:librarian@gtu.edu.in" className="hover:text-white transition-colors">librarian@gtu.edu.in</a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="font-bold text-white mb-2">Library Hours</h4>
              <p className="text-sm text-slate-300">Monday - Saturday: 10:30 AM - 6:10 PM</p>
              <p className="text-sm text-slate-300 mt-1">Sunday & Public Holidays: Closed</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block font-serif">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about/ask-a-librarian" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Ask a Librarian
                </Link>
              </li>
              <li>
                <Link to="/services-facilities" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Services & Facilities
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Book a Room
                </a>
              </li>
              <li>
                <Link to="/membership-protocol" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Membership
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> My Account
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Collections */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block font-serif">Collections</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/e-resources" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> A-Z Databases (E-Resources)
                </Link>
              </li>
              <li>
                 <Link to="/open-access-resources" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Open Access Resources
                </Link>
              </li>
              <li>
                <Link to="/news-events" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> News & Events
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> About the Library
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: University Links & Social */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block font-serif">University Links</h4>
            <ul className="space-y-3 text-sm mb-8">
              <li>
                <a href="https://www.gtu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                  <ExternalLink size={14} /> GTU Main Website
                </a>
              </li>
              <li>
                <a href="https://gtu.irins.org/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                  <ExternalLink size={14} /> GTU IRINS
                </a>
              </li>
               <li>
                <a href="https://ndl.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                  <ExternalLink size={14} /> National Digital Library
                </a>
              </li>
            </ul>
            
            <h4 className="font-bold text-white mb-4 font-serif">Connect With Us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300 hover:-translate-y-1">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300 hover:-translate-y-1">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300 hover:-translate-y-1">
                <Linkedin size={16} />
              </a>
               <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300 hover:-translate-y-1">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Gujarat Technological University. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
