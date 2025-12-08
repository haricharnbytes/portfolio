import React from 'react';
import { Section } from './Section';
import { Mail, Send } from 'lucide-react';
import { ABOUT_DATA } from '../constants';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700">
        <div className="flex flex-col md:flex-row">
          {/* Contact Info Side */}
          <div className="bg-primary dark:bg-slate-900 p-10 text-white md:w-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm currently interested in new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="flex items-center gap-3 text-slate-300 mb-4">
                <Mail size={18} className="text-accent" />
                <a href={`mailto:${ABOUT_DATA.email}`} className="hover:text-white transition-colors">
                  {ABOUT_DATA.email}
                </a>
              </div>
            </div>
            
            <div className="mt-12 md:mt-0">
              <p className="text-sm text-slate-400">Response time: Within 24 hours</p>
            </div>
          </div>
          
          {/* Form Side */}
          <div className="p-10 md:w-3/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-slate-800 dark:text-slate-100 transition-all"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-slate-800 dark:text-slate-100 transition-all"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-slate-800 dark:text-slate-100 transition-all resize-none"
                  placeholder="Hello, I'd like to discuss..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-accent text-white font-medium py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-accent/20"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};