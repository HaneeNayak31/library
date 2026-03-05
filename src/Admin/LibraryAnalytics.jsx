import React from 'react';
import { Activity, BarChart3, BookMarked, Users } from 'lucide-react';
import './AdminStyles.css';
import { AdminCard, AdminPageHeader, StatCard, TinyBarChart, TinyLineChart } from './AdminUI';

const LibraryAnalytics = () => {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Library Analytics"
        description="Deep metrics for usage trends, circulation, and digital adoption."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Daily Footfall" value="1,842" icon={Users} hint="+8.4% vs yesterday" />
        <StatCard label="Books Issued Today" value="156" icon={BookMarked} hint="Peak: 11 AM - 1 PM" />
        <StatCard label="E-Resource Sessions" value="934" icon={Activity} hint="Top source: IEEE Xplore" />
        <StatCard label="Avg. Session Time" value="42 min" icon={BarChart3} hint="Reading hall + digital" />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <AdminCard className="xl:col-span-2" title="Circulation Trend" subtitle="Last 14 days">
          <TinyLineChart points={[22, 28, 32, 41, 36, 55, 48]} />
          <p className="mt-3 text-xs text-slate-500">Trend indicates a steady increase around exam timelines.</p>
        </AdminCard>

        <AdminCard title="Section Utilization" subtitle="Current week">
          <TinyBarChart values={[45, 62, 79, 51, 68, 57]} />
          <p className="mt-3 text-xs text-slate-500">Highest usage recorded in Digital Access and Reference sections.</p>
        </AdminCard>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AdminCard title="Most Accessed Resources" subtitle="By click volume">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"><span>IEEE Xplore</span><strong className="text-primary">28%</strong></li>
            <li className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"><span>ACM Digital Library</span><strong className="text-primary">22%</strong></li>
            <li className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"><span>ScienceDirect</span><strong className="text-primary">19%</strong></li>
            <li className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"><span>SpringerLink</span><strong className="text-primary">14%</strong></li>
          </ul>
        </AdminCard>

        <AdminCard title="Top Borrowed Categories" subtitle="Circulation by subject">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"><span>Computer Science</span><strong className="text-primary">412</strong></li>
            <li className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"><span>Electrical Engineering</span><strong className="text-primary">338</strong></li>
            <li className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"><span>Mechanical Engineering</span><strong className="text-primary">291</strong></li>
            <li className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"><span>AI & Data Science</span><strong className="text-primary">264</strong></li>
          </ul>
        </AdminCard>
      </div>
    </div>
  );
};

export default LibraryAnalytics;
