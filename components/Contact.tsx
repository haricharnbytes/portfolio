import React from 'react';
import { Section } from './Section';
import { Mail, Send, MapPin } from 'lucide-react';
import { ABOUT_DATA, SOCIAL_LINKS } from '../constants';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 brutal-border shadow-brutal-lg dark:shadow-brutal-white bg-white dark:bg-zinc-900 overflow-hidden">
        
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 p-8 md:p-12 flex flex-col justify-between border-b-4 lg:border-b-0 lg:border-r-4 border-black dark:border-white">
          <div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Initiate_<br />Contact
            </h3>
            <p className="text-lg font-bold mb-12 opacity-80 leading-tight max-w-sm">
              Open for collaboration on predictive systems, LLM pipelines, and deep learning research.
            </p>
            
            <div className="space-y-8 md:space-y-10">
              <a 
                href={`mailto:${ABOUT_DATA.email}`}
                className="flex items-center gap-4 md:gap-6 group"
              >
                <div className="p-3 md:p-4 brutal-border border-white dark:border-black group-hover:bg-white dark:group-hover:bg-black group-hover:text-black dark:group-hover:text-white transition-all shrink-0">
                  <Mail size={24} className="md:w-8 md:h-8" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-black uppercase opacity-60 tracking-widest">Email_Address</span>
                  <span className="text-sm md:text-xl font-black uppercase tracking-tighter truncate">{ABOUT_DATA.email}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 md:gap-6">
                <div className="p-3 md:p-4 brutal-border border-white dark:border-black shrink-0">
                  <MapPin size={24} className="md:w-8 md:h-8" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase opacity-60 tracking-widest">Location_Ref</span>
                  <span className="text-sm md:text-xl font-black uppercase tracking-tighter">{ABOUT_DATA.location}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-12 md:mt-16">
            {SOCIAL_LINKS.map(link => (
              <a 
                key={link.platform} 
                href={link.url} 
                title={link.platform}
                className="p-3 md:p-4 brutal-border border-white dark:border-zinc-900 hover:bg-white dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white transition-all"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Form Area */}
        <div className="lg:col-span-7 p-8 md:p-12 lg:p-16">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-3">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Identity_Name
              </label>
              <input 
                type="text" 
                required
                className="w-full p-4 md:p-6 brutal-border bg-zinc-50 dark:bg-zinc-800 outline-none focus:ring-0 focus:bg-zinc-900 focus:text-white dark:focus:bg-white dark:focus:text-zinc-900 transition-all font-bold placeholder:opacity-30 placeholder:text-zinc-400"
                placeholder="INPUT_NAME"
              />
            </div>
            
            <div className="space-y-3">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Access_Email
              </label>
              <input 
                type="email" 
                required
                className="w-full p-4 md:p-6 brutal-border bg-zinc-50 dark:bg-zinc-800 outline-none focus:ring-0 focus:bg-zinc-900 focus:text-white dark:focus:bg-white dark:focus:text-zinc-900 transition-all font-bold placeholder:opacity-30 placeholder:text-zinc-400"
                placeholder="INPUT_EMAIL"
              />
            </div>
            
            <div className="md:col-span-2 space-y-3">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Transmission_Data
              </label>
              <textarea 
                rows={5}
                required
                className="w-full p-4 md:p-6 brutal-border bg-zinc-50 dark:bg-zinc-800 outline-none focus:ring-0 focus:bg-zinc-900 focus:text-white dark:focus:bg-white dark:focus:text-zinc-900 transition-all font-bold resize-none placeholder:opacity-30 placeholder:text-zinc-400"
                placeholder="ENTER_MESSAGE_HERE..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="md:col-span-2 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 py-6 md:py-8 brutal-border shadow-brutal dark:shadow-brutal-white font-black uppercase text-xl md:text-2xl tracking-[0.3em] brutal-btn transition-all flex items-center justify-center gap-4 group hover:translate-x-1 hover:-translate-y-1"
            >
              Dispatch 
              <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform md:w-7 md:h-7" />
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};