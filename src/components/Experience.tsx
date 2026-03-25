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
          {/* Vertical Line - Desktop */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 md:left-1/2 top-0 w-[1px] bg-brand-navy/10 -translate-x-1/2 hidden md:block"
          ></motion.div>

          {/* Vertical Line - Mobile */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 top-0 w-[1px] bg-brand-navy/10 md:hidden"
          ></motion.div>

          <div className="space-y-24 md:space-y-32">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 pl-8 md:pl-0 relative group/item ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Desktop Hover Background */}
                <div className="absolute inset-0 bg-brand-navy/[0.02] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 rounded-2xl -mx-4 py-8 hidden md:block"></div>

                {/* Content Side */}
                <div className={`w-full md:w-[45%] relative z-10 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-brand-gold font-mono text-xs tracking-widest mb-2 block"
                  >
                    {exp.period}
                  </motion.span>
                  <h3 className="text-2xl md:text-3xl font-serif text-brand-navy mb-1 group-hover/item:text-brand-gold transition-colors duration-500">{exp.organization}</h3>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">{exp.title}</h4>
                  <ul className={`space-y-4 text-sm md:text-base text-slate-600 font-light leading-relaxed ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-md`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className={`flex gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                        <span className="text-brand-gold mt-1.5 flex-shrink-0">•</span>
                        <span className={index % 2 === 0 ? 'md:text-right' : 'text-left'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="w-4 h-4 rounded-full bg-brand-gold border-4 border-brand-cream ring-4 ring-brand-navy/5"
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
