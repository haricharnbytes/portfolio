import React from 'react';
import { Section } from './Section';
import { Mail, Send, MapPin, Linkedin, Github } from 'lucide-react';
import { ABOUT_DATA, SOCIAL_LINKS } from '../constants';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Protocol">
      <div className="grid grid-cols-1 lg:grid-cols-12 brutal-border shadow-brutal-lg dark:shadow-brutal-white bg-white dark:bg-zinc-900">
        
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-4 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 p-12 flex flex-col justify-between border-b-4 lg:border-b-0 lg:border-r-4 border-black dark:border-white">
          <div>
            <h3 className="text-6xl font-black uppercase tracking-tighter mb-10 leading-[0.8]">Initiate_ Contact</h3>
            <p className="text-xl font-bold mb-16 opacity-80 leading-tight">
              Open for collaboration on predictive systems, LLM pipelines, and deep learning research.
            </p>
            
            <div className="space-y-12">
              <a 
                href={`mailto:${ABOUT_DATA.email}`}
                className="flex items-center gap-6 group"
              >
                <div className="p-4 brutal-border border-white dark:border-black group-hover:bg-white dark:group-hover:bg-black group-hover:text-black dark:group-hover:text-white transition-all">
                  <Mail size={32} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black uppercase opacity-50">Email_Address</span>
                  <span className="text-xl font-black uppercase tracking-tighter">{ABOUT_DATA.email}</span>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="p-4 brutal-border border-white dark:border-black">
                  <MapPin size={32} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black uppercase opacity-50">Location_Ref</span>
                  <span className="text-xl font-black uppercase tracking-tighter">{ABOUT_DATA.location}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-20">
            {SOCIAL_LINKS.map(link => (
              <a 
                key={link.platform} 
                href={link.url} 
                className="p-4 brutal-border border-white dark:border-zinc-900 hover:bg-white dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white transition-all"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Form Area */}
        <div className="lg:col-span-8 p-12 md:p-20">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <label className="block text-xs font-black uppercase tracking-widest text-zinc-500">Identity_Name</label>
              <input 
                type="text" 
                className="w-full p-6 brutal-border bg-zinc-50 dark:bg-zinc-800 outline-none focus:bg-zinc-900 focus:text-white dark:focus:bg-white dark:focus:text-zinc-900 transition-all font-bold placeholder:opacity-20"
                placeholder="INPUT_NAME"
              />
            </div>
            
            <div className="space-y-4">
              <label className="block text-xs font-black uppercase tracking-widest text-zinc-500">Access_Email</label>
              <input 
                type="email" 
                className="w-full p-6 brutal-border bg-zinc-50 dark:bg-zinc-800 outline-none focus:bg-zinc-900 focus:text-white dark:focus:bg-white dark:focus:text-zinc-900 transition-all font-bold placeholder:opacity-20"
                placeholder="INPUT_EMAIL"
              />
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <label className="block text-xs font-black uppercase tracking-widest text-zinc-500">Transmission_Data</label>
              <textarea 
                rows={6}
                className="w-full p-6 brutal-border bg-zinc-50 dark:bg-zinc-800 outline-none focus:bg-zinc-900 focus:text-white dark:focus:bg-white dark:focus:text-zinc-900 transition-all font-bold resize-none placeholder:opacity-20"
                placeholder="ENTER_MESSAGE_HERE..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="md:col-span-2 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 py-8 brutal-border shadow-brutal dark:shadow-brutal-white font-black uppercase text-2xl tracking-[0.4em] brutal-btn transition-all flex items-center justify-center gap-6 group"
            >
              Dispatch <Send size={28} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};