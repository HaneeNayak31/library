import React, { useState } from 'react';
import { ExternalLink, ChevronDown, Menu, X } from 'lucide-react';
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
  { label: 'Activity', path: '/news-events' },
  { label: 'E-Resources', path: '/e-resources' },
  { label: 'Open Access', path: '/open-access-resources' },
  { label: 'Membership', path: '/membership-protocol' },
  { label: 'Help Desk', path: '/about/ask-a-librarian' },
];

const NavbarOPEN = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutMobileOpen, setAboutMobileOpen] = useState(false);

  const navItemBaseClass =
    'relative inline-flex h-full items-center px-3 lg:px-4 text-[0.8rem] lg:text-[0.88rem] font-semibold  tracking-[0.09em] transition-colors duration-200';

  return (
    <nav className="sticky top-0 z-50 w-full border-y border-primary-light/25 bg-primary text-white shadow-[0_8px_24px_rgba(0,33,71,0.24)] font-sans">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="flex h-12 items-center justify-between lg:h-14">
          <div className="hidden h-full items-stretch lg:flex">
            {navLinks.map(({ label, path, hasDropdown }) => (
              <div 
                key={path}
                className="relative h-full"
                onMouseEnter={() => hasDropdown && setOpenDropdown(label)}
                onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `${navItemBaseClass} group border-r border-white/10 first:border-l hover:bg-white/8 ${
                      isActive ? 'text-accent' : 'text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10 flex items-center gap-1.5 group-hover:text-accent transition-colors duration-200">
                        {label}
                        {hasDropdown && (
                          <ChevronDown
                            size={14}
                            className="transition-transform duration-200"
                            style={{ transform: openDropdown === label ? 'rotate(180deg)' : 'rotate(0deg)' }}
                          />
                        )}
                      </span>
                      <span
                        className={`absolute bottom-0 left-0 w-full bg-accent transition-all duration-200 ${
                          isActive ? 'h-0.75' : 'h-0 group-hover:h-0.75'
                        }`}
                        aria-hidden
                      />
                    </>
                  )}
                </NavLink>

                {/* Dropdown Menu */}
                {hasDropdown && openDropdown === label && (
                  <div className="absolute left-0 top-full z-20 w-72 overflow-hidden rounded-b-md border-t-2 border-accent bg-primary shadow-2xl">
                    {aboutSubLinks.map((subLink) => {
                      const isExternal = subLink.path.startsWith('http');
                      const linkClass =
                        'block border-b border-white/10 px-4 py-2.5 text-[0.82rem] font-medium tracking-wide transition-all duration-200 hover:bg-white/10 hover:pl-5 hover:text-accent';

                      if (isExternal) {
                        return (
                          <a
                            key={subLink.path}
                            href={subLink.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkClass}
                          >
                            {subLink.label}
                          </a>
                        );
                      }

                      return (
                        <NavLink
                          key={subLink.path}
                          className={({ isActive }) =>
                            `${linkClass} ${
                              isActive ? 'bg-white/10 text-accent' : ''
                            }`
                          }
                          to={subLink.path}
                        >
                          {subLink.label}
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 lg:pl-4">
            <a 
              href="https://gtu.irins.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-primary transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_14px_rgba(255,215,0,0.34)] lg:inline-flex"
            >
              GTU – IRINS
              <ExternalLink size={13} strokeWidth={2.5} />
            </a>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-white/25 p-2 text-white transition-colors duration-200 hover:bg-white/10 lg:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>

        {mobileOpen && (
          <div className="border-t border-white/15 py-2 lg:hidden">
            {navLinks.map(({ label, path, hasDropdown }) => {
              if (hasDropdown) {
                return (
                  <div key={path} className="border-b border-white/10">
                    <button
                      type="button"
                      onClick={() => setAboutMobileOpen((prev) => !prev)}
                      className="flex w-full items-center justify-between px-1 py-3 text-left text-[0.84rem] font-semibold uppercase tracking-[0.09em]"
                    >
                      <span>{label}</span>
                      <ChevronDown
                        size={15}
                        className="transition-transform duration-200"
                        style={{ transform: aboutMobileOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    </button>

                    {aboutMobileOpen && (
                      <div className="pb-2">
                        {aboutSubLinks.map((subLink) => {
                          const isExternal = subLink.path.startsWith('http');

                          if (isExternal) {
                            return (
                              <a
                                key={subLink.path}
                                href={subLink.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-[0.8rem] text-white/90 transition-colors duration-200 hover:text-accent"
                              >
                                {subLink.label}
                              </a>
                            );
                          }

                          return (
                            <NavLink
                              key={subLink.path}
                              to={subLink.path}
                              className="block px-4 py-2 text-[0.8rem] text-white/90 transition-colors duration-200 hover:text-accent"
                              onClick={() => setMobileOpen(false)}
                            >
                              {subLink.label}
                            </NavLink>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `block border-b border-white/10 px-1 py-3 text-[0.84rem] font-semibold uppercase tracking-[0.09em] transition-colors duration-200 ${
                      isActive ? 'text-accent' : 'text-white'
                    }`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </NavLink>
              );
            })}

            <a
              href="https://gtu.irins.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-primary"
            >
              GTU – IRINS
              <ExternalLink size={13} strokeWidth={2.5} />
            </a>
          </div>
        )}

      </div>
    </nav>
  );
};

export default NavbarOPEN;