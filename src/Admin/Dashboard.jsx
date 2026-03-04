import React from 'react';
import { Users, BookOpen, Calendar, Eye, Activity, Database } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total E-Resources', value: '450+', icon: Database, color: 'text-blue-500', bg: 'bg-blue-100' },
    { label: 'Active Students', value: '12,045', icon: Users, color: 'text-green-500', bg: 'bg-green-100' },
    { label: 'Upcoming Events', value: '3', icon: Calendar, color: 'text-amber-500', bg: 'bg-amber-100' },
    { label: 'Page Views (Week)', value: '84.2K', icon: Eye, color: 'text-purple-500', bg: 'bg-purple-100' },
  ];

  const recentActivity = [
    { action: 'Updated', subject: 'Vision & Mission page', time: '2 hours ago', user: 'Admin User' },
    { action: 'Added', subject: 'New IEEE E-Resource', time: '5 hours ago', user: 'Librarian' },
    { action: 'Published', subject: 'Workshop Announcement', time: '1 day ago', user: 'Admin User' },
    { action: 'Deleted', subject: 'Draft Event', time: '2 days ago', user: 'Librarian' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
                <Icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <h3 className="text-2xl font-bold text-primary mt-1">{stat.value}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Placeholder Chart Area */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-primary">Website Traffic Overview</h3>
            <select className="text-sm border-slate-300 rounded-lg text-slate-600 focus:ring-accent focus:border-accent">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-64 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-slate-400 flex-col gap-2">
            <Activity size={32} />
            <p className="text-sm">Chart visualization would render here (e.g. Recharts)</p>
          </div>
        </div>

        {/* Recent Activity Log */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col">
          <h3 className="text-lg font-bold text-primary mb-4 shrink-0">Recent Activity</h3>
          <div className="flex-1 overflow-y-auto pr-2">
            <ul className="space-y-4">
              {recentActivity.map((activity, i) => (
                <li key={i} className="flex gap-4">
                  <div className="relative flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0 z-10" />
                    {i !== recentActivity.length - 1 && (
                      <div className="w-px h-full bg-slate-200 absolute top-3" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-slate-700">
                      <span className="font-semibold">{activity.user}</span> {activity.action.toLowerCase()}{' '}
                      <span className="font-medium text-primary">{activity.subject}</span>
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
