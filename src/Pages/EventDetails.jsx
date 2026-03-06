import React from 'react';
import { useParams, Link } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();

  // In a real application, you would fetch the event data based on the ID.
  // For this demonstration, we'll use the same mock data.
  const events = [
    {
      id: 1,
      date: 'Oct 15, 2026',
      status: 'upcoming',
      title: 'Workshop on Identifying Predatory Journals',
      type: 'Workshop',
      imageUrl: 'https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Join us for an insightful workshop designed to help researchers critically evaluate journals and avoid publishing in predatory outlets. Essential for all early-career researchers.',
      fullDescription: `
        Publishing in reputable journals is crucial for academic career progression. However, the rise of "predatory" or deceptive publishers has made it increasingly difficult to identify legitimate publishing venues. 

        This comprehensive workshop will equip you with the necessary tools and knowledge to:
        - Understand the business models of predatory publishers.
        - Identify red flags in email solicitations and journal websites.
        - Utilize trusted databases and whitelists (e.g., resources from the Central Library).
        - Safely navigate open access publishing options.

        The session will include interactive exercises and case studies. All participants will receive a digital resource pack.
      `,
      time: '14:00 - 16:00',
      location: 'Central Library, Seminar Hall A',
      speaker: 'Dr. John Doe, Research Librarian',
    },
    {
      id: 2,
      date: 'Oct 20, 2026',
      status: 'upcoming',
      title: 'Trial Access to IEEE Xplore',
      type: 'Announcement',
      imageUrl: 'https://images.pexels.com/photos/345386/pexels-photo-345386.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'The Central Library is pleased to announce trial access to the IEEE Xplore Digital Library. Explore thousands of journals, conference proceedings, and standards in technology.',
      fullDescription: `
        We are excited to offer a 30-day trial access to the IEEE Xplore Digital Library for all registered students and faculty members.

        IEEE Xplore provides web access to more than five million full-text documents from some of the world's most highly-cited publications in electrical engineering, computer science, and electronics. 

        During this trial period, you can access:
        - IEEE and IET Journals, Transactions, and Letters
        - IEEE Conference Proceedings
        - IET Conference Proceedings
        - IEEE Published Standards
        - IEEE Standards Dictionary Online

        We encourage you to utilize this resource extensively during the trial period and provide your feedback to the library committee to assist us in evaluating a potential subscription.
      `,
      time: 'Available 24/7',
      location: 'Online via University Network / VPN',
      speaker: 'N/A',
    },
    {
      id: 3,
      date: 'Nov 02, 2026',
      status: 'upcoming',
      title: 'Author Orientation Programme by Elsevier',
      type: 'Event',
      imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'An interactive session led by experts from Elsevier to guide authors on the manuscript submission process, selecting the right journal, and increasing research visibility.',
      fullDescription: `
        Navigating the publication process can be challenging, especially for early-career researchers. This dedicated Author Orientation Programme, organized in collaboration with Elsevier, aims to demystify the journey from manuscript preparation to publication and beyond.

        Key topics covered in this session will include:
        - Structuring a high-quality research article.
        - Understanding the peer-review process.
        - Tips for responding to reviewer comments.
        - Best practices for improving the discoverability and impact of your research.
        - Overview of Elsevier's author tools and services.

        This is a valuable opportunity to interact directly with publishing experts and gain insights that can enhance your publication success rate.
      `,
      time: '10:00 - 13:00',
      location: 'Main Auditorium',
      speaker: 'Ms. Jane Smith, Senior Publisher, Elsevier',
    },
    {
      id: 4,
      date: 'Sep 10, 2026',
      status: 'past',
      title: 'Orientation for New Students',
      type: 'Event',
      imageUrl: 'https://images.pexels.com/photos/1370215/pexels-photo-1370215.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'A comprehensive welcome session to introduce new students to the library facilities, digital resources, and support services available throughout their academic journey.',
      fullDescription: `
        We successfully welcomed the new cohort of students during our annual Library Orientation program. The sessions were designed to help incoming students quickly familiarize themselves with the extensive resources and services offered by the Central Library.

        The orientation covered:
        - Guided tours of the physical library spaces, including reading rooms, study carrels, and computer labs.
        - Instructions on how to use the OPAC (Online Public Access Catalog) to locate books and materials.
        - Demonstrations on accessing electronic databases, e-journals, and e-books both on and off-campus.
        - Overview of borrowing privileges, interlibrary loan services, and research assistance.

        We were thrilled to see such strong engagement from the new students and look forward to supporting them throughout their academic endeavors at the university.
      `,
      time: 'Multiple Sessions',
      location: 'Central Library',
      speaker: 'Library Staff',
    },
    {
      id: 5,
      date: 'Aug 25, 2026',
      status: 'past',
      title: 'Seminar on Academic Integrity',
      type: 'Seminar',
      imageUrl: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'A vital seminar discussing the importance of academic honesty, proper citation practices, and understanding the consequences of plagiarism in research and coursework.',
      fullDescription: `
        Upholding academic integrity is a fundamental value of our institution. This seminar was organized to reinforce these principles and provide practical guidance to students and researchers.

        The event featured presentations and discussions on:
        - The definitions and various forms of plagiarism (accidental and intentional).
        - The role of proper citation and referencing styles (APA, MLA, IEEE, etc.) in academic writing.
        - An introduction to reference management tools like Mendeley and Zotero.
        - An overview of the university's policies regarding academic misconduct and the software tools used to detect plagiarism.

        The interactive Q&A session highlighted the students' commitment to maintaining high ethical standards in their work.
      `,
      time: '11:00 - 12:30',
      location: 'Virtual Event (Zoom)',
      speaker: 'Prof. David Lee, Dept. of Ethics',
    }
  ];

  const event = events.find(e => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="bg-slate-50 min-h-screen py-24 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Event Not Found</h2>
        <p className="text-slate-600 mb-8">The event you are looking for does not exist or has been removed.</p>
        <Link to="/news-events" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-accent transition-colors shadow-md hover:shadow-lg">
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Hero Header */}
      <div className="relative h-64 md:h-96 w-full">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
           className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
           <Link to="/news-events" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Events
           </Link>
           <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary text-white text-xs font-bold uppercase rounded-full tracking-wider shadow-sm">
                {event.type}
              </span>
              <span className="text-white/90 text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                {event.date}
              </span>
           </div>
           <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
             {event.title}
           </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">About the Event</h2>
            <div className="text-slate-600 leading-relaxed whitespace-pre-line">
              {event.fullDescription}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Event Details</h3>
            
            <div className="space-y-4 text-slate-600">
              <div className="flex items-start">
                 <svg className="w-5 h-5 mr-3 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 <div>
                   <span className="block font-medium text-slate-800">Time</span>
                   <span className="text-sm">{event.time}</span>
                 </div>
              </div>

              <div className="flex items-start">
                 <svg className="w-5 h-5 mr-3 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                 <div>
                   <span className="block font-medium text-slate-800">Location</span>
                   <span className="text-sm">{event.location}</span>
                 </div>
              </div>

              <div className="flex items-start">
                 <svg className="w-5 h-5 mr-3 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                 <div>
                   <span className="block font-medium text-slate-800">Speaker / Presenter</span>
                   <span className="text-sm">{event.speaker}</span>
                 </div>
              </div>
            </div>

            {event.status === 'upcoming' && (
              <div className="mt-8 pt-6 border-t border-slate-100">
                <button className="w-full bg-primary text-white font-bold py-3 px-4 rounded-xl hover:bg-accent transition-colors shadow-sm hover:shadow-md flex justify-center items-center">
                  Register Now
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventDetails;
