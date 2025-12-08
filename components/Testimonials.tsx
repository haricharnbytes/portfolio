import React from 'react';
import { Section } from './Section';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Endorsements</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Kind words from colleagues and clients I've had the pleasure of working with.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.id} className="bg-slate-50 p-8 rounded-2xl relative">
            <Quote size={40} className="text-teal-100 absolute top-6 left-6 -z-10" />
            
            <p className="text-slate-700 italic mb-6 leading-relaxed relative z-10">
              "{testimonial.text}"
            </p>
            
            <div className="flex items-center">
              {testimonial.image && (
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white shadow-sm"
                />
              )}
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                <p className="text-slate-500 text-xs">{testimonial.role} @ {testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};