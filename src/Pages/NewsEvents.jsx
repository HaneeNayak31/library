import React from 'react';

const NewsEvents = () => {
  const events = [
    { date: 'Oct 15, 2026', title: 'Workshop on Identifying Predatory Journals', type: 'Workshop' },
    { date: 'Oct 20, 2026', title: 'Trial Access to IEEE Xplore', type: 'Announcement' },
    { date: 'Nov 02, 2026', title: 'Author Orientation Programme by Elsevier', type: 'Event' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8 border-b border-slate-200 pb-4">News & Events</h1>
        
        <div className="space-y-6">
          {events.map((evt, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center gap-6 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 text-center md:border-r md:border-slate-100 md:pr-6">
                <span className="block text-2xl font-bold text-primary">{evt.date.split(' ')[1].replace(',','')}</span>
                <span className="block text-sm font-bold text-slate-500 uppercase tracking-widest">{evt.date.split(' ')[0]} {evt.date.split(' ')[2]}</span>
              </div>
              
              <div className="flex-grow">
                <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold uppercase rounded-full tracking-wider mb-2">
                  {evt.type}
                </span>
                <h3 className="text-xl font-bold text-slate-800">{evt.title}</h3>
                <p className="text-slate-600 mt-2">Join us for this upcoming session to enhance your research skills. Registration is mandatory.</p>
              </div>
              
              <div className="flex-shrink-0">
                <button className="text-primary font-bold hover:text-accent transition-colors">
                  Read More &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;
