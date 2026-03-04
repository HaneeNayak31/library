import React, { useState } from 'react';
import { Search, Plus, Calendar as CalendarIcon, MapPin, MoreHorizontal } from 'lucide-react';

const ManageEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const events = [
    { id: 1, title: 'Orientation Program for First Year B.E. Students', type: 'Event', date: 'August 10, 2024', location: 'Main Reading Room', status: 'Upcoming' },
    { id: 2, title: 'Research Methodology Workshop', type: 'Workshop', date: 'July 25, 2024', location: 'Discussion Room A', status: 'Completed' },
    { id: 3, title: 'IEEE Xplore Training Session', type: 'Training', date: 'September 5, 2024', location: 'IT Lab', status: 'Upcoming' },
    { id: 4, title: 'Library Closed for Renovation', type: 'Announcement', date: 'October 1-5, 2024', location: 'Entire Building', status: 'Scheduled' },
    { id: 5, title: 'Book Exhibition 2023', type: 'Event', date: 'December 12, 2023', location: 'Ground Floor Atrium', status: 'Archived' },
  ];

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    event.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-primary font-serif">News & Events Management</h2>
          <p className="text-slate-500 text-sm mt-1">Add, edit, or archive library events, workshops, and general announcements.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-light transition-colors shadow-sm whitespace-nowrap">
          <Plus size={16} /> Create Event
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Search Bar */}
        <div className="p-4 border-b border-slate-200 bg-slate-50/50">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search events or announcements..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-accent focus:border-accent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Data List (Using a list format instead of standard table for variety) */}
        <ul className="divide-y divide-slate-100">
          {filteredEvents.map((event) => (
            <li key={event.id} className="p-4 sm:p-6 hover:bg-slate-50/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold text-primary leading-tight">{event.title}</h3>
                  
                  {/* Status Badge - Mobile (Top Right) */}
                  <span className={`sm:hidden inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shrink-0 ${
                    event.status === 'Upcoming' ? 'bg-amber-100 text-amber-800' :
                    event.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                    event.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {event.status}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-slate-500">
                  <span className="font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs uppercase tracking-wider">
                    {event.type}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <CalendarIcon size={14} className="text-slate-400" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-slate-400" />
                    {event.location}
                  </div>
                </div>
              </div>

              {/* Desktop Actions Area */}
              <div className="flex items-center justify-end gap-6 sm:w-48 shrink-0 border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0 mt-3 sm:mt-0">
                 {/* Status Badge - Desktop */}
                 <span className={`hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    event.status === 'Upcoming' ? 'bg-amber-100 text-amber-800' :
                    event.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                    event.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {event.status}
                  </span>
                  <button className="text-slate-400 hover:text-primary transition-colors p-1 rounded-md hover:bg-slate-100">
                    <MoreHorizontal size={20} />
                  </button>
              </div>

            </li>
          ))}

          {filteredEvents.length === 0 && (
            <li className="p-12 text-center text-slate-500">
              No events found matching your criteria.
            </li>
          )}
        </ul>

      </div>
    </div>
  );
};

export default ManageEvents;
