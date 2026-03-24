import { motion } from 'motion/react';
import { LEADERSHIP } from '../constants';

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-brand-navy text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="caps-label">Civic Engagement</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-6">Service & <br /><span className="text-brand-gold italic">Leadership</span></h2>
            <p className="text-slate-400 font-light leading-relaxed">
              A commitment to public service that extends beyond professional duties, focusing on food security, ethical mentorship, and community recovery.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {LEADERSHIP.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 bg-brand-navy hover:bg-white/5 transition-colors duration-500 group"
            >
              <div className="h-full flex flex-col">
                <span className="text-[10px] font-mono text-slate-500 mb-6 block tracking-widest uppercase">
                  {item.period}
                </span>
                <h3 className="text-xl font-serif text-brand-gold mb-2 group-hover:text-white transition-colors">
                  {item.role}
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-6 font-bold">
                  {item.organization}
                </p>
                <div className="mt-auto">
                  <ul className="space-y-3">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-xs text-slate-400 font-light leading-relaxed flex gap-2">
                        <span className="text-brand-gold mt-1">•</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
