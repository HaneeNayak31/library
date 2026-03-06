import React, { useState } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const aboutSubLinks = [
  { label: 'About Central Library', path: '/about/central-library' },
  { label: 'Vision & Mission', path: '/about/vision-mission' },
  { label: 'Message from VC', path: '/about/message-from-vc' },
  { label: 'Message from Librarian', path: '/about/message-from-librarian' },
  { label: 'Library Committee', path: '/about/library-committee' },
  { label: 'Procurement Procedure', path: 'https://www.gtuelibrary.edu.in/PDFFolder/LibraryProcurementOperatingProcedure.pdf' },
];

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about', hasDropdown: true },
  { label: 'Services', path: '/services-facilities' },
  { label: 'News & Events', path: '/news-events' },
  { label: 'E-Resources', path: '/e-resources' },
  { label: 'Open Access', path: '/open-access-resources' },
  { label: 'Membership', path: '/membership-protocol' },
  { label: 'Help Desk', path: '/about/ask-a-librarian' },
];

const NavbarOPEN = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="w-full bg-primary text-white sticky top-0 z-50 shadow-xl font-sans">
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
                    `relative flex items-center px-4 md:px-5 text-[12px] lg:text-[15px] font-bold  tracking-widest border-r border-white/10 first:border-l group transition-all duration-300 hover:bg-white/5 h-full ${
                      isActive ? 'text-accent' : ''
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10 group-hover:text-accent transition-colors flex items-center gap-2">
                        {label}
                        {hasDropdown && <ChevronDown size={14} className="transition-transform duration-200" style={{ transform: openDropdown === label ? 'rotate(180deg)' : 'rotate(0deg)' }} />}
                      </span>
                      <span
                        className={`absolute bottom-0 left-0 w-full transition-all duration-200 bg-accent ${
                          isActive ? 'h-1' : 'h-0 group-hover:h-1'
                        }`}
                        aria-hidden
                      />
                    </>
                  )}
                </NavLink>

                {/* Dropdown Menu */}
                {hasDropdown && openDropdown === label && (
                  <div className="absolute top-full left-0 w-72 bg-primary shadow-2xl rounded-b-lg overflow-hidden border-t-2 border-accent">
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
                            `block px-5 py-3 text-[15px] font-bold tracking-normal border-b border-white/5 hover:bg-white/10 hover:pl-6 hover:text-accent transition-all duration-200 ${
                              isActive ? 'bg-white/10 text-accent' : ''
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
              className="flex items-center gap-3 px-6 py-2 bg-accent text-primary rounded-3xl
                         text-sm font-bold uppercase tracking-wider 
                         hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] 
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