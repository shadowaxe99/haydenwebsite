import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#F8F7F4] relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="caps-label">Professional History</span>
            <h2 className="text-5xl md:text-6xl font-serif text-brand-navy">Career <span className="text-brand-gold italic">Timeline</span></h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 font-light max-w-xs text-sm leading-relaxed"
          >
            A diverse professional background spanning legal services, recovery coordination, and community support.
          </motion.p>
        </div>

        <div className="grid gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          {EXPERIENCE.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 md:p-12 flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start hover:bg-brand-cream transition-colors duration-500"
            >
              <div className="lg:col-span-3">
                <span className="text-[10px] font-mono text-brand-gold uppercase tracking-[0.3em] mb-4 block">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-serif text-brand-navy group-hover:text-brand-gold transition-colors duration-500">
                  {exp.organization}
                </h3>
              </div>

              <div className="lg:col-span-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Role</h4>
                <p className="text-brand-navy font-medium">{exp.title}</p>
              </div>

              <div className="lg:col-span-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Key Responsibilities</h4>
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-slate-600 font-light leading-relaxed flex gap-3">
                      <span className="text-brand-gold/40 mt-1.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
