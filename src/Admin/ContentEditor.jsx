import React from 'react';
import { ArrowLeft, Save, Image as ImageIcon, Link as LinkIcon, Type } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AdminStyles.css';

const ContentEditor = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      
      {/* Top Bar Navigation */}
      <div className="flex items-center justify-between">
        <Link to="/admin/pages" className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-sm font-medium">
          <ArrowLeft size={16} /> Back to Pages
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-400">Status: <span className="text-amber-600">Draft - Unsaved Changes</span></span>
          <button className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary-light transition-colors shadow-sm">
            <Save size={16} /> Save & Publish
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Editor Header */}
        <div className="p-6 border-b border-slate-200 bg-slate-50/50">
          <input 
            type="text" 
            className="w-full text-3xl font-serif font-bold text-primary bg-transparent border-0 border-b border-transparent hover:border-slate-300 focus:border-accent focus:ring-0 p-0 transition-colors"
            defaultValue="Vision & Mission"
            placeholder="Page Title"
          />
          <div className="flex items-center gap-4 mt-4 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-slate-700">URL Path:</span> /about/vision-mission
            </div>
          </div>
        </div>

        {/* Editor Body */}
        <div className="p-6 space-y-6">
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Meta Description (SEO)</label>
            <textarea 
              rows={2}
              className="w-full border-slate-300 rounded-lg text-sm focus:ring-accent focus:border-accent"
              defaultValue="The institutional mandate and future vision of the Gujarat Technological University Central Library."
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-bold text-slate-700">Page Content</label>
              
              {/* Fake WYSIWYG Toolbar */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-md border border-slate-200">
                <button className="p-1.5 text-slate-600 hover:bg-white hover:shadow-sm rounded"><Type size={14} /></button>
                <button className="p-1.5 text-slate-600 hover:bg-white hover:shadow-sm rounded font-serif font-bold">B</button>
                <button className="p-1.5 text-slate-600 hover:bg-white hover:shadow-sm rounded italic font-serif">I</button>
                <div className="w-px h-4 bg-slate-300 mx-1"></div>
                <button className="p-1.5 text-slate-600 hover:bg-white hover:shadow-sm rounded"><LinkIcon size={14} /></button>
                <button className="p-1.5 text-slate-600 hover:bg-white hover:shadow-sm rounded"><ImageIcon size={14} /></button>
              </div>
            </div>
            
            <textarea 
              rows={16}
              className="w-full border-slate-300 rounded-lg text-base focus:ring-accent focus:border-accent leading-relaxed p-4"
              defaultValue={"Our Vision\n\nTo be a premier knowledge hub that empowers the academic community of Gujarat Technological University...\n\nOur Mission\n\n1. Provide access to diverse, high-quality information resources.\n2. Create an inspiring environment for learning and discovery.\n3. Integrate responsive technologies to deliver effective library services."}
            />
          </div>

          <div className="pt-6 border-t border-slate-200 flex justify-end gap-4">
             <button className="px-5 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              Discard Changes
            </button>
             <button className="px-5 py-2 text-sm font-semibold border border-primary text-primary hover:bg-slate-50 rounded-lg transition-colors">
              Save as Draft
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContentEditor;
