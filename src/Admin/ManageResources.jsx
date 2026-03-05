import React, { useState } from 'react';
import { Search, Plus, Filter, MoreVertical } from 'lucide-react';
import './AdminStyles.css';

const ManageResources = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Extended mock data for resources
  const resources = [
    { id: 1, name: 'ACM Digital Library', type: 'Database', category: 'Computer Science', access: 'Subscribed' },
    { id: 2, name: 'IEEE Xplore', type: 'Database', category: 'Engineering', access: 'Subscribed' },
    { id: 3, name: 'JSTOR', type: 'Journal Collection', category: 'Multidisciplinary', access: 'Subscribed' },
    { id: 4, name: 'ScienceDirect', type: 'Database', category: 'Science', access: 'Subscribed' },
    { id: 5, name: 'DOAJ (Directory of Open Access Journals)', type: 'Directory', category: 'Multidisciplinary', access: 'Open Access' },
    { id: 6, name: 'SpringerLink', type: 'Journal Collection', category: 'STM', access: 'Subscribed' },
    { id: 7, name: 'arXiv', type: 'Preprint Repository', category: 'Physics, Math, CS', access: 'Open Access' },
    { id: 8, name: 'ProQuest', type: 'Database', category: 'Multidisciplinary', access: 'Subscribed' },
  ];

  const filteredResources = resources.filter(res => 
    res.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    res.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-primary font-serif">E-Resources Database</h2>
          <p className="text-slate-500 text-sm mt-1">Manage external databases, journals, and links shown on the E-Resources and Open Access pages.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-light transition-colors shadow-sm whitespace-nowrap">
          <Plus size={16} /> Add Resource
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Table Controls */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-50/50">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by resource name, publisher, or subject..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-accent focus:border-accent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-600 hover:bg-white w-full sm:w-auto justify-center">
            <Filter size={16} /> Filters
          </button>
        </div>

        {/* Data Table */}
        <div className="admin-table-scroll">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold">Resource Name</th>
                <th className="px-6 py-4 font-semibold">Type</th>
                <th className="px-6 py-4 font-semibold">Subject Category</th>
                <th className="px-6 py-4 font-semibold">Access Level</th>
                <th className="px-6 py-4 font-semibold text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredResources.map((res) => (
                <tr key={res.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-primary">
                    {res.name}
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    {res.type}
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    {res.category}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      res.access === 'Subscribed' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {res.access}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary p-1 rounded transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              
              {filteredResources.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-slate-500">
                    No resources found. Try adjusting your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500 bg-slate-50/50">
          <span>Showing {filteredResources.length} resources</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-300 rounded hover:bg-white disabled:opacity-50" disabled>1</button>
            <button className="px-3 py-1 border border-slate-300 rounded hover:bg-white disabled:opacity-50">2</button>
            <button className="px-3 py-1 border border-slate-300 rounded hover:bg-white disabled:opacity-50">3</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ManageResources;
