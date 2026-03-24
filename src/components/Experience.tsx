import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-brand-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 pointer-events-none"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="caps-label">Professional History</span>
          <h2 className="text-5xl font-serif text-brand-navy">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 md:left-1/2 top-0 w-[1px] bg-brand-navy/10 -translate-x-1/2 hidden md:block"
          ></motion.div>

          <div className="space-y-24">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content Side */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-brand-gold font-mono text-xs tracking-widest mb-2 block">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-serif text-brand-navy mb-1">{exp.organization}</h3>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">{exp.title}</h4>
                  <ul className={`space-y-3 text-sm text-slate-600 font-light leading-relaxed ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-md`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className={`flex gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                        <span className="text-brand-gold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Center Dot */}
                <div className="relative z-10 hidden md:block">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    className="w-3 h-3 rounded-full bg-brand-gold border-4 border-brand-cream ring-1 ring-brand-navy/10"
                  ></motion.div>
                </div>

                {/* Empty Side for Spacing */}
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
