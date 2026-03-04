import React, { useState } from 'react';
import { Search, Plus, Edit2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManagePages = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const pages = [
    { id: 1, title: 'Landing Page Hero', path: '/', status: 'Published', lastUpdated: '2024-03-01' },
    { id: 2, title: 'About Central Library', path: '/about/central-library', status: 'Published', lastUpdated: '2024-02-15' },
    { id: 3, title: 'Vision & Mission', path: '/about/vision-mission', status: 'Draft', lastUpdated: '2024-03-03' },
    { id: 4, title: 'Message from VC', path: '/about/message-from-vc', status: 'Published', lastUpdated: '2023-11-10' },
    { id: 5, title: 'Services & Facilities', path: '/services-facilities', status: 'Published', lastUpdated: '2024-01-22' },
    { id: 6, title: 'Membership Protocol', path: '/membership-protocol', status: 'Published', lastUpdated: '2023-09-05' },
  ];

  const filteredPages = pages.filter(page => 
    page.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-primary font-serif">Manage Pages</h2>
          <p className="text-slate-500 text-sm mt-1">Edit the static content found across the public website.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-light transition-colors shadow-sm">
          <Plus size={16} /> Create New Page
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        
        {/* Table Toolbar */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between shrink-0 bg-slate-50/50">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search pages by title..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-accent focus:border-accent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold">Page Title</th>
                <th className="px-6 py-4 font-semibold">Public Path</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Last Updated</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPages.map((page) => (
                <tr key={page.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-primary">
                    {page.title}
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    <span className="font-mono text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">{page.path}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      page.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {page.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    {new Date(page.lastUpdated).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right space-x-3">
                    <Link to="/admin/editor" className="inline-flex items-center gap-1 text-slate-500 hover:text-accent font-medium transition-colors">
                      <Edit2 size={16} /> Edit
                    </Link>
                    <a href={page.path} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-slate-400 hover:text-primary transition-colors">
                      <ExternalLink size={16} /> View
                    </a>
                  </td>
                </tr>
              ))}
              
              {filteredPages.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-slate-500">
                    No pages found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500 shrink-0 bg-slate-50/50">
          <span>Showing 1 to {filteredPages.length} of {pages.length} results</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-300 rounded hover:bg-white disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-slate-300 rounded hover:bg-white disabled:opacity-50" disabled>Next</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ManagePages;
