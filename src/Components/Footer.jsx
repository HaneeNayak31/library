import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: About / Contact */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/gtu_logo.png" alt="GTU Logo" className="w-12 h-12 object-contain bg-white rounded-full p-1" />
              <div>
                <h3 className="font-bold text-lg leading-tight text-accent">Central Library</h3>
                <p className="text-sm text-slate-300">Gujarat Technological University</p>
              </div>
            </div>
            <p className="text-slate-300 text-base mb-6 leading-relaxed">
              Serving the academic community with a vast collection of resources and state-of-the-art facilities to verify and support research and learning.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-base text-slate-300">
                <MapPin size={18} className="mt-1 text-accent shrink-0" />
                <span>Nr.Visat Three Roads, Visat - Gandhinagar Highway, Chandkheda, Ahmedabad - 382424 - Gujarat</span>
              </div>
              <div className="flex items-center gap-3 text-base text-slate-300">
                <Phone size={18} className="text-accent shrink-0" />
                <span>079-23267500</span>
              </div>
              <div className="flex items-center gap-3 text-base text-slate-300">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:librarian@gtu.edu.in" className="hover:text-white transition-colors">librarian@gtu.edu.in</a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link to="/" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> About Us
                </Link>
              </li>
              <li>
                <Link to="/e-resources" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> E-Resources
                </Link>
              </li>
              <li>
                <Link to="/open-access-resources" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Open Access
                </Link>
              </li>
              <li>
                <Link to="/membership-protocol" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Important External Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">External Links</h4>
            <ul className="space-y-3 text-base">
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
                <a href="https://www.education.gov.in/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                  <ExternalLink size={14} /> Ministry of Education
                </a>
              </li>
               <li>
                <a href="https://ndl.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-accent transition-colors flex items-center gap-2">
                  <ExternalLink size={14} /> National Digital Library
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Social */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Stay Connected</h4>
            <p className="text-slate-300 text-base mb-4">Follow us on social media for the latest updates and library news.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300">
                <Linkedin size={18} />
              </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300">
                <Instagram size={18} />
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
