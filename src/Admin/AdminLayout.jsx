import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Database, 
  Newspaper, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bell,
  User
} from 'lucide-react';

const AdminLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/admin/login');
  };

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/admin', end: true },
    { label: 'Manage Pages', icon: FileText, path: '/admin/pages' },
    { label: 'E-Resources', icon: Database, path: '/admin/resources' },
    { label: 'News & Events', icon: Newspaper, path: '/admin/events' },
    { label: 'Settings', icon: Settings, path: '/admin/settings' },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-primary text-slate-300">
      <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-3">
          <img src="/gtu_logo.png" alt="GTU Logo" className="w-8 h-8 object-contain bg-white rounded-full p-0.5" />
          <span className="text-white font-bold font-serif tracking-wider">GTU SITE ADMIN</span>
        </div>
      </div>

      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group font-medium ${
                  isActive 
                    ? 'bg-accent/10 text-accent font-semibold' 
                    : 'hover:bg-white/5 hover:text-white'
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Icon size={18} className="shrink-0" />
              {item.label}
            </NavLink>
          );
        })}
      </div>

      <div className="p-4 border-t border-white/10 shrink-0">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-slate-300 hover:bg-red-500/10 hover:text-red-400 font-medium transition-colors"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50">
        <SidebarContent />
      </aside>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="w-64 max-w-[80%] flex-col flex h-full">
            <SidebarContent />
          </div>
          <div 
            className="flex-1 bg-primary/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:pl-64 min-w-0">
        
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-40 sticky top-0">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-slate-500 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h1 className="text-lg font-bold text-primary font-serif hidden sm:block">
              {navItems.find(item => item.path === location.pathname)?.label || 'Admin Portal'}
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-primary transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-primary leading-tight">Admin User</p>
                <p className="text-xs text-slate-500">Superadmin</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
                <User size={18} />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;
