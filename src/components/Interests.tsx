import { motion } from 'motion/react';
import { INTERESTS } from '../constants';
import { Watch, Trophy, Brain } from 'lucide-react';

const icons = [Trophy, Watch, Brain];

export default function Interests() {
  return (
    <section id="interests" className="section-padding bg-brand-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 skew-x-12 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-navy/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="caps-label">Personal Pursuits</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-navy tracking-tight">Beyond the Law</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {INTERESTS.map((interest, index) => {
            const Icon = icons[index];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transform transition-transform duration-500 group-hover:-translate-y-2"></div>
                <div className="absolute inset-0 border border-brand-navy/5 rounded-2xl transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:border-brand-gold/30"></div>
                
                <div className="relative p-10 sm:p-12 flex flex-col items-center text-center transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-brand-gold/30 transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
                  
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-brand-cream flex items-center justify-center text-brand-navy mb-8 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors duration-500 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-brand-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <Icon size={32} strokeWidth={1} className="relative z-10" />
                  </motion.div>
                  
                  <h3 className="text-2xl lg:text-3xl font-serif text-brand-navy mb-4 group-hover:text-brand-gold transition-colors duration-500">{interest.name}</h3>
                  <p className="text-sm lg:text-base text-slate-500 font-light leading-relaxed">
                    {interest.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Subtle Decorative Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 md:mt-32 text-center relative"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-24 bg-brand-gold/20"></div>
          <div className="bg-brand-cream relative z-10 inline-block px-8 py-4">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand-navy/60 font-bold">
              "When someone asks you to do service, <span className="text-brand-gold">say yes.</span>"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
