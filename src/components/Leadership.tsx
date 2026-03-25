import { motion } from 'motion/react';
import { LEADERSHIP } from '../constants';

export default function Leadership() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="leadership" className="section-padding bg-brand-navy text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <span className="caps-label">Civic Engagement</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 tracking-tight">Service & <br /><span className="text-brand-gold italic font-light">Leadership</span></h2>
            <p className="text-slate-400 font-light leading-relaxed text-lg">
              A commitment to public service that extends beyond professional duties, focusing on food security, ethical mentorship, and community recovery.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-2xl shadow-2xl"
        >
          {LEADERSHIP.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="p-10 bg-brand-navy hover:bg-white/[0.04] transition-all duration-700 group relative flex flex-col h-full"
            >
              {/* Subtle hover accent */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left ease-out"></div>
              
              <div className="flex-1 flex flex-col">
                <span className="text-[10px] font-mono text-slate-500 mb-8 block tracking-[0.3em] uppercase group-hover:text-brand-gold/70 transition-colors duration-500">
                  {item.period}
                </span>
                <h3 className="text-2xl lg:text-3xl font-serif text-brand-gold mb-4 group-hover:text-white transition-colors duration-500 leading-snug">
                  {item.role}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-8 font-bold border-b border-white/10 pb-4 group-hover:border-brand-gold/30 transition-colors duration-500">
                  {item.organization}
                </p>
                <div className="mt-auto">
                  <ul className="space-y-4">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-sm text-slate-400 font-light leading-relaxed flex gap-3 group-hover:text-slate-300 transition-colors duration-500">
                        <span className="text-brand-gold/50 mt-1.5 flex-shrink-0 text-[10px]">◆</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
