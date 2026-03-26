import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EDUCATION, PUBLICATIONS } from '../constants';
import ArticleModal from './ArticleModal';
import { Publication } from '../types';
import { ArrowRight } from 'lucide-react';

export default function Education() {
  const [activeArticle, setActiveArticle] = useState<Publication | null>(null);

  return (
    <section id="education" className="section-padding bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-cream/30 to-transparent pointer-events-none"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Education */}
          <div>
            <span className="caps-label">Academic Foundation</span>
            <h2 className="text-4xl sm:text-5xl font-serif text-brand-navy mb-8 sm:mb-12">Education</h2>
            
            <div className="space-y-8 sm:space-y-12">
              {EDUCATION.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-brand-navy/[0.02] border border-brand-navy/5 rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:bg-brand-navy/[0.04]"></div>
                  <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-brand-gold/20 rounded-r-full group-hover:bg-brand-gold transition-colors duration-500"></div>
                  
                  <div className="relative p-8 sm:p-10">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 sm:gap-4 mb-4">
                      <h3 className="text-xl sm:text-3xl font-serif text-brand-navy group-hover:text-brand-gold transition-colors duration-500 break-words">{edu.institution}</h3>
                      <span className="text-[10px] font-mono text-brand-gold uppercase tracking-[0.2em] font-bold bg-brand-gold/10 px-3 py-1 rounded-full w-fit shrink-0">{edu.period}</span>
                    </div>
                    <p className="text-lg sm:text-xl font-medium text-slate-700 mb-8 font-serif italic">{edu.degree}</p>
                    
                    <div className="grid grid-cols-1 gap-4">
                      {edu.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-4 text-xs sm:text-sm text-slate-600 uppercase tracking-widest font-semibold">
                          <motion.div 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                            className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0 mt-1.5"
                          ></motion.div>
                          <span className="leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Scholarship */}
          <div className="relative">
            <div className="absolute -right-24 top-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <span className="caps-label">Intellectual Contributions</span>
            <h2 className="text-4xl sm:text-5xl font-serif text-brand-navy mb-8 sm:mb-12">Scholarship</h2>
            
            <div className="space-y-10">
              {PUBLICATIONS.map((pub, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative pl-8 sm:pl-10 py-2"
                >
                  <div className="absolute left-0 top-0 w-[1px] h-full bg-brand-navy/10"></div>
                  <div className="absolute left-0 top-0 w-[3px] h-0 bg-brand-gold group-hover:h-full transition-all duration-700 ease-out"></div>
                  
                  <span className="text-[10px] font-mono text-slate-400 mb-3 block uppercase tracking-[0.3em] group-hover:text-brand-gold transition-colors duration-500">{pub.date}</span>
                  <h3 className="text-xl sm:text-2xl font-serif text-brand-navy group-hover:text-brand-gold transition-colors duration-500 mb-4 leading-snug">
                    "{pub.title}"
                  </h3>
                  <p className="text-sm text-slate-500 italic font-light leading-relaxed mb-6 border-l-2 border-slate-200 pl-4">
                    {pub.citation}
                  </p>
                  {pub.content && (
                    <button 
                      onClick={() => setActiveArticle(pub)}
                      className="inline-flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-brand-navy hover:text-brand-gold transition-colors group/btn"
                    >
                      <span className="border-b border-brand-navy/30 group-hover/btn:border-brand-gold pb-1 transition-colors">Read Full Text</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeArticle && (
          <ArticleModal article={activeArticle} onClose={() => setActiveArticle(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
