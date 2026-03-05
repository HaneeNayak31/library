import React from 'react';
import { BookOpen, CalendarDays, ClipboardList, FileText, Users, Bell, Clock3 } from 'lucide-react';
import './AdminStyles.css';
import { AdminCard, AdminPageHeader, Badge, StatCard, TinyBarChart, TinyLineChart } from './AdminUI';

const Dashboard = () => {
  const stats = [
    { label: 'Total Books', value: '12,480', icon: BookOpen, hint: '+240 this month' },
    { label: 'Available Books', value: '9,864', icon: ClipboardList, hint: '79% in circulation pool' },
    { label: 'Issued Books', value: '2,616', icon: FileText, hint: 'Today: 114 active issues' },
    { label: 'Registered Users', value: '6,932', icon: Users, hint: '312 new registrations' },
    { label: 'Active Events', value: '7', icon: CalendarDays, hint: '2 this week' },
    { label: 'Notices Published', value: '18', icon: Bell, hint: '4 high-priority' },
  ];

  const recentActivity = [
    { action: 'Issued', subject: 'Computer Networks (5th Ed.)', time: '08:42 AM', actor: 'Circulation Desk' },
    { action: 'Published', subject: 'Library Orientation Notice', time: '09:15 AM', actor: 'Admin User' },
    { action: 'Created', subject: 'AI Research Workshop Event', time: '11:30 AM', actor: 'Events Team' },
    { action: 'Updated', subject: 'Homepage Hero Banner #2', time: '01:10 PM', actor: 'Admin User' },
    { action: 'Added', subject: 'New Administrator - K. Patel', time: '03:22 PM', actor: 'Super Admin' },
  ];

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Dashboard"
        description="Overview of library operations, publishing, and admin activity."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} icon={stat.icon} hint={stat.hint} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <AdminCard
          className="xl:col-span-2"
          title="Book Issue Trends"
          subtitle="Daily issue movement in the last 7 days"
          action={<Badge tone="info">Weekly</Badge>}
        >
          <TinyLineChart points={[22, 40, 36, 58, 72, 66, 84]} />
          <div className="mt-3 grid grid-cols-4 gap-3 text-xs text-slate-500">
            <span>Mon: 96</span>
            <span>Tue: 112</span>
            <span>Wed: 106</span>
            <span>Thu: 128</span>
            <span>Fri: 140</span>
            <span>Sat: 134</span>
            <span>Sun: 156</span>
          </div>
        </AdminCard>

        <AdminCard title="Library Activity" subtitle="Section utilization snapshot">
          <TinyBarChart values={[54, 68, 74, 59, 83, 62]} />
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-slate-500">
            <span>Reference</span>
            <span>Reading Hall</span>
            <span>E-Library</span>
          </div>
        </AdminCard>
      </div>

      <AdminCard title="Recent Activity Log" subtitle="Latest admin and library operations">
        <ul className="space-y-4">
          {recentActivity.map((activity, index) => (
            <li key={`${activity.subject}-${activity.time}`} className="flex gap-4">
              <div className="relative flex flex-col items-center">
                <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                {index !== recentActivity.length - 1 ? <div className="absolute top-3 h-full w-px bg-slate-200" /> : null}
              </div>
              <div className="flex-1 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold text-primary">{activity.actor}</span> {activity.action.toLowerCase()}{' '}
                  <span className="font-medium">{activity.subject}</span>
                </p>
                <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                  <Clock3 size={12} /> {activity.time}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </AdminCard>
    </div>
  );
};

export default Dashboard;
