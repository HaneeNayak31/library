import React from 'react';
import { Wifi, Printer, Book, Coffee } from 'lucide-react';

const ServicesFacilities = () => {
  const facilities = [
    { icon: <Book size={32}/>, title: 'Reading Rooms', desc: 'Spacious, air-conditioned reading areas with quiet zones for focused study.' },
    { icon: <Wifi size={32}/>, title: 'Wi-Fi Access', desc: 'High-speed internet access available throughout the library for all registered students.' },
    { icon: <Printer size={32}/>, title: 'Printing & Scanning', desc: 'Self-service printing and scanning stations available on the ground floor.' },
    { icon: <Coffee size={32}/>, title: 'Discussion Rooms', desc: 'Bookable rooms for group projects and collaborative work.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-primary mb-4 text-center">Services & Facilities</h1>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          The Central Library provides a range of services and modern facilities designed to support your academic success and research endeavors.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilities.map((fac, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
               <div className="text-accent flex justify-center mb-4 bg-amber-50 w-16 h-16 rounded-full items-center mx-auto">
                 {fac.icon}
               </div>
               <h3 className="font-bold text-primary text-xl mb-2">{fac.title}</h3>
               <p className="text-slate-600 text-sm">{fac.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
           <h2 className="text-3xl font-serif font-bold mb-6 relative z-10">Borrowing Rules</h2>
           <div className="grid md:grid-cols-2 gap-8 relative z-10 text-blue-100">
              <div>
                <h4 className="font-bold text-accent text-lg mb-2">UG / PG Students</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Maximum 3 books for 15 days.</li>
                  <li>Overdue fine: ₹2 per day.</li>
                  <li>Reference books strictly for reading room only.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-accent text-lg mb-2">Faculty & Research Scholars</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Maximum 5 books for 30 days.</li>
                  <li>Bound journals available for 7 days.</li>
                </ul>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesFacilities;
