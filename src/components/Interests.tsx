import { motion } from 'motion/react';
import { INTERESTS } from '../constants';
import { Watch, Trophy, Brain } from 'lucide-react';

const icons = [Trophy, Watch, Brain];

export default function Interests() {
  return (
    <section id="interests" className="section-padding bg-brand-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 skew-x-12 translate-x-1/2 pointer-events-none"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="caps-label">Personal Pursuits</span>
          <h2 className="text-5xl md:text-6xl font-serif text-brand-navy">Beyond the Law</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {INTERESTS.map((interest, index) => {
            const Icon = icons[index];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-10 card-hover flex flex-col items-center text-center group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-16 h-16 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-gold mb-8 group-hover:bg-brand-navy group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-brand-navy mb-4">{interest.name}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed max-w-[240px]">
                  {interest.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
        
        {/* Subtle Decorative Quote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-24 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
            "When someone asks you to do service, say yes."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
