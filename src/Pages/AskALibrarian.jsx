import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const AskALibrarian = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-4xl font-serif font-bold text-primary mb-6">Ask A Librarian / Help Desk</h1>
        <p className="text-slate-600 mb-10 text-lg">
          Have a question about our collections, services, or need help with your research? Our dedicated team is here to assist you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-primary border-b border-slate-200 pb-2">Ways to Reach Us</h2>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-full text-primary"><Mail size={24} /></div>
              <div>
                <h3 className="font-bold text-slate-800">Email Us</h3>
                <p className="text-slate-600">centrallibrary@gtu.ac.in</p>
                <p className="text-sm text-slate-500 mt-1">We aim to respond within 24 hours.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-50 p-3 rounded-full text-emerald-600"><Phone size={24} /></div>
              <div>
                <h3 className="font-bold text-slate-800">Call Us</h3>
                <p className="text-slate-600">+91-79-12345678</p>
                <p className="text-sm text-slate-500 mt-1">Available during library hours.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-50 p-3 rounded-full text-amber-600"><MapPin size={24} /></div>
              <div>
                <h3 className="font-bold text-slate-800">Visit the Reference Desk</h3>
                <p className="text-slate-600">Ground Floor, Central Library, GTU Campus</p>
              </div>
            </div>
          </div>

          {/* Contact Form / FAQs Mockup */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
             <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <MessageSquare size={24} className="text-accent"/> Send a Message
             </h2>
             <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Your Name</label>
                  <input type="text" className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50"  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                  <input type="email" className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50"  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">How can we help?</label>
                  <textarea className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 h-32" placeholder="Describe your question..."></textarea>
                </div>
                <button type="button" className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 rounded-lg transition-colors">
                  Submit Question
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskALibrarian;
