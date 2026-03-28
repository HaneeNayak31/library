import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsEvents = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const events = [
    {
      id: 1,
      date: 'Oct 15, 2026',
      status: 'upcoming',
      title: 'Workshop on Identifying Predatory Journals',
      type: 'Workshop',
      imageUrl: 'https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Join us for an insightful workshop designed to help researchers critically evaluate journals and avoid publishing in predatory outlets. Essential for all early-career researchers.',
    },
    {
      id: 2,
      date: 'Oct 20, 2026',
      status: 'upcoming',
      title: 'Trial Access to IEEE Xplore',
      type: 'Announcement',
      imageUrl: 'https://images.pexels.com/photos/345386/pexels-photo-345386.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The Central Library is pleased to announce trial access to the IEEE Xplore Digital Library. Explore thousands of journals, conference proceedings, and standards in technology.',
    },
    {
      id: 3,
      date: 'Nov 02, 2026',
      status: 'upcoming',
      title: 'Author Orientation Programme by Elsevier',
      type: 'Event',
      imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'An interactive session led by experts from Elsevier to guide authors on the manuscript submission process, selecting the right journal, and increasing research visibility.',
    },
    {
      id: 4,
      date: 'Sep 10, 2026',
      status: 'past',
      title: 'Orientation for New Students',
      type: 'Event',
      imageUrl: 'https://images.pexels.com/photos/1370215/pexels-photo-1370215.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A comprehensive welcome session to introduce new students to the library facilities, digital resources, and support services available throughout their academic journey.',
    },
    {
      id: 5,
      date: 'Aug 25, 2026',
      status: 'past',
      title: 'Seminar on Academic Integrity',
      type: 'Seminar',
      imageUrl: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A vital seminar discussing the importance of academic honesty, proper citation practices, and understanding the consequences of plagiarism in research and coursework.',
    }
  ];

  const filteredEvents = events.filter(event => event.status === activeTab);

  return (
    <div className="bg-slate-50 min-h-screen pb-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1">
        <h1 className="text-4xl font-serif font-bold text-primary mb-6">News & Events</h1>
        
        {/* Tabs */}
        <div className="flex space-x-4 border-b border-slate-200 mb-8">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`pb-4 px-2 font-medium text-lg border-b-2 transition-colors duration-200 ${
              activeTab === 'upcoming' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`pb-4 px-2 font-medium text-lg border-b-2 transition-colors duration-200 ${
              activeTab === 'past' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((evt) => (
               <div key={evt.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300 group">
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={evt.imageUrl} 
                    alt={evt.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase rounded-full tracking-wider shadow-sm">
                      {evt.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">
                     <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                     {evt.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
                    {evt.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                    {evt.description}
                  </p>
                  
                  {/* Footer / Read More Button */}
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <Link 
                      to={`/news-events/${evt.id}`}
                      className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors group-hover:underline"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
             <div className="col-span-full py-12 text-center text-slate-500">
               <p className="text-lg">No events found in this category.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;
