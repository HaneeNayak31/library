import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Do not show breadcrumbs on the landing page
  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="breadcrumb" className="bg-slate-100/50 py-3 px-4 md:px-8 border-b border-slate-200 mb-6 font-sans">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap text-sm text-slate-500">
        <NavLink to="/" className="hover:text-primary transition-colors flex items-center gap-1">
          <Home size={14} />
          <span className="sr-only">Home</span>
        </NavLink>
        
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          
          // Format the displaying name nicely (e.g., "central-library" -> "Central Library")
          const displayName = name
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

          return (
            <div key={routeTo} className="flex items-center">
              <ChevronRight size={14} className="mx-2 text-slate-400" />
              {isLast ? (
                <span className="font-semibold text-primary" aria-current="page">
                  {displayName}
                </span>
              ) : (
                <NavLink to={routeTo} className="hover:text-primary transition-colors">
                  {displayName}
                </NavLink>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
