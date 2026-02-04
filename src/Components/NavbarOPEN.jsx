import React, { useState } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const aboutSubLinks = [
  { label: 'About Central Library', path: '/about/central-library' },
  { label: 'Vision & Mission', path: '/about/vision-mission' },
  { label: 'Message from VC', path: '/about/message-from-vc' },
  { label: 'Message from Librarian', path: '/about/message-from-librarian' },
  { label: 'Library Committee', path: '/about/library-committee' },
  { label: 'Central Library Procurement Operating Procedure', path: 'https://www.gtuelibrary.edu.in/PDFFolder/LibraryProcurementOperatingProcedure.pdf' },
];

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about', hasDropdown: true },
  { label: 'Activity', path: '/activity' },
  { label: 'E-Resources', path: '/e-resources' },
  { label: 'Open Access Resources', path: '/open-access-resources' },
  { label: 'Membership & Protocol', path: '/membership-protocol' },
];

const NavbarOPEN = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="w-full bg-[#0f172a] text-white sticky top-19 md:top-22.5 z-40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-stretch justify-between h-14">
          
          {/* Main Navigation Links */}
          <div className="flex items-stretch">
            {navLinks.map(({ label, path, hasDropdown }) => (
              <div 
                key={path}
                className="relative"
                onMouseEnter={() => hasDropdown && setOpenDropdown(label)}
                onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative flex items-center px-5 text-[11px] font-bold uppercase tracking-[0.2em] border-r border-white/10 first:border-l group transition-all duration-300 hover:bg-white/5 h-full ${
                      isActive ? 'text-blue-300' : ''
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                        {label}
                        {hasDropdown && <ChevronDown size={14} className="transition-transform duration-200" style={{ transform: openDropdown === label ? 'rotate(180deg)' : 'rotate(0deg)' }} />}
                      </span>
                      <span
                        className={`absolute bottom-0 left-0 w-full transition-all duration-200 bg-blue-600 ${
                          isActive ? 'h-1' : 'h-0 group-hover:h-1'
                        }`}
                        aria-hidden
                      />
                    </>
                  )}
                </NavLink>

                {/* Dropdown Menu */}
                {hasDropdown && openDropdown === label && (
                  <div className="absolute top-full left-0 w-72 bg-[#1e293b] shadow-2xl rounded-b-lg overflow-hidden border-t-2 border-blue-600">
                    {aboutSubLinks.map((subLink) => {
                      const isExternal = subLink.path.startsWith('http');
                      const LinkComponent = isExternal ? 'a' : NavLink;
                      const linkProps = isExternal 
                        ? { href: subLink.path, target: "_blank", rel: "noopener noreferrer" } 
                        : { to: subLink.path };

                      return (
                        <LinkComponent
                          key={subLink.path}
                          {...linkProps}
                          className={({ isActive }) =>
                            `block px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] border-b border-white/5 hover:bg-white/10 hover:pl-6 transition-all duration-200 ${
                              (!isExternal && isActive) ? 'bg-blue-600/20 text-blue-300' : ''
                            }`
                          }
                        >
                          {subLink.label}
                        </LinkComponent>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* GTU-IRINS Link - High-End Button Style */}
          <div className="flex  items-center pl-6">
            <a 
              href="https://gtu.irins.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-2 bg-blue-600 rounded-3xl
                         text-[10px] font-bold uppercase tracking-wider 
                         hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] 
                         transition-all duration-300"
            >
              GTU – IRINS
              <ExternalLink size={14} strokeWidth={3} />
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavbarOPEN;