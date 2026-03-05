import React, { useMemo, useState } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import './AdminStyles.css';
import {
  Bell,
  BookOpen,
  CalendarDays,
  Cog,
  LayoutDashboard,
  LogOut,
  Megaphone,
  Menu,
  Search,
  Shield,
  Sparkles,
  User,
  BarChart3,
  Image,
  FileText,
  Database,
} from 'lucide-react';

const AdminLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/admin/login');
  };

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/admin', end: true },
    { label: 'Books Management', icon: BookOpen, path: '/admin/books' },
    { label: 'Events', icon: CalendarDays, path: '/admin/events' },
    { label: 'Notices', icon: Megaphone, path: '/admin/notices' },
    { label: 'Library Analytics', icon: BarChart3, path: '/admin/analytics' },
    { label: 'Banner / Hero', icon: Image, path: '/admin/banner' },
    { label: 'Admin Management', icon: Shield, path: '/admin/admins' },
    { label: 'Settings', icon: Cog, path: '/admin/settings' },
  ];

  const utilityItems = [
    { label: 'Manage Pages', icon: FileText, path: '/admin/pages' },
    { label: 'E-Resources', icon: Database, path: '/admin/resources' },
  ];

  const activeTitle = useMemo(() => {
    const allItems = [...navItems, ...utilityItems];
    return allItems.find((item) => location.pathname === item.path)?.label || 'Admin Portal';
  }, [location.pathname]);

  const SidebarContent = ({ mobile = false }) => (
    <div className="flex h-full flex-col bg-primary text-slate-300">
      <div className={`h-16 border-b border-white/10 shrink-0 ${isSidebarCollapsed && !mobile ? 'px-4 ' : 'px-6'} flex items-center`}>
        <div className="flex items-center gap-3 overflow-hidden">
          <button
            type="button"
            className="hidden md:inline-flex rounded-lg p-1.5 text-white transition-colors hover:bg-white/10"
            onClick={() => setIsSidebarCollapsed((prev) => !prev)}
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>
          {(!isSidebarCollapsed || mobile) ? (
            <span className="text-white font-bold tracking-wider whitespace-nowrap">Admin Panel</span>
          ) : null}
        </div>
      </div>

      <div className="admin-sidebar-nav flex-1 px-3 py-5 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-accent/10 text-accent font-semibold ring-1 ring-accent/20' 
                    : 'hover:bg-white/5 hover:text-white'
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Icon size={18} className="shrink-0" />
              {(!isSidebarCollapsed || mobile) ? item.label : null}
            </NavLink>
          );
        })}

        {(!isSidebarCollapsed || mobile) ? (
          <p className="px-3 pt-4 text-xs uppercase tracking-wider text-slate-400">Utilities</p>
        ) : null}
        {utilityItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Icon size={18} className="shrink-0" />
              {(!isSidebarCollapsed || mobile) ? item.label : null}
            </NavLink>
          );
        })}
      </div>

      <div className="border-t border-white/10 p-3 shrink-0">
        <button 
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-rose-500/10 hover:text-rose-300"
        >
          <LogOut size={18} />
          {(!isSidebarCollapsed || mobile) ? 'Sign Out' : null}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      
      {/* Desktop Sidebar */}
      <aside className={`hidden md:flex fixed inset-y-0 z-50 flex-col transition-all duration-300 ${isSidebarCollapsed ? 'w-20' : 'w-64'}`}>
        <SidebarContent mobile={false} />
      </aside>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="w-56 max-w-[80%] flex-col flex h-full">
            <SidebarContent mobile />
          </div>
          <div 
            className="flex-1 bg-primary/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}

      {/* Main Content Area */}
      <div className={`flex-1 flex min-w-0 flex-col transition-all duration-300 ${isSidebarCollapsed ? 'md:pl-20' : 'md:pl-64'}`}>
        
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 h-16 border-b border-slate-200 bg-white/90 px-4 backdrop-blur sm:px-6 lg:px-8">
          <div className="flex h-full items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-slate-500 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            {/* Image logo  */}
            <div>
              <img src="/gtu_logo.png" alt="GTU Library Logo" className="h-8 w-auto" />
            </div>
          </div>

          {/* Centered Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-1/2 mx-auto items-center rounded-lg border border-slate-300 bg-slate-300 px-3 py-2 text-sm text-slate-500">
            <Search size={16} className="mr-2 text-slate-400" />
            <input
              type="search"
              className="w-full border-0 bg-transparent p-0 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
              placeholder="Search books, events, notices..."
            />
          </div>
          
          <div className="flex items-center gap-3">
            
            
            <div className="relative">
              <button
                className="flex items-center gap-3"
                onClick={() => setIsProfileOpen((prev) => !prev)}
              >
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-primary leading-tight">Admin User</p>
                  <p className="text-xs text-slate-500">Super Admin</p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-500">
                  <User size={18} />
                </div>
              </button>
              {isProfileOpen ? (
                <div className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-200 bg-white p-1 shadow-lg">
                  
                  <button
                    className="w-full rounded-lg px-3 py-2 text-left text-sm text-rose-600 hover:bg-rose-50"
                    onClick={handleLogout}
                  >
                    Sign out
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="admin-scrollable flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;
