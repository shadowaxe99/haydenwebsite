import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EDUCATION, PUBLICATIONS } from '../constants';
import ArticleModal from './ArticleModal';
import { Publication } from '../types';
import { ArrowRight } from 'lucide-react';

export default function Education() {
  const [activeArticle, setActiveArticle] = useState<Publication | null>(null);

  return (
    <section id="education" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Education */}
          <div>
            <span className="caps-label">Academic Foundation</span>
            <h2 className="text-4xl sm:text-5xl font-serif text-brand-navy mb-8 sm:mb-12">Education</h2>
            
            <div className="space-y-12 sm:space-y-16">
              {EDUCATION.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 sm:gap-0 mb-4">
                    <h3 className="text-xl sm:text-2xl font-serif text-brand-navy">{edu.institution}</h3>
                    <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest">{edu.period}</span>
                  </div>
                  <p className="text-base sm:text-lg font-medium text-slate-700 mb-6">{edu.degree}</p>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {edu.details.map((detail, i) => (
                      <div key={i} className="flex items-start sm:items-center gap-3 text-xs text-slate-500 uppercase tracking-widest font-semibold">
                        <div className="w-1 h-1 bg-brand-gold rounded-full shrink-0 mt-1.5 sm:mt-0"></div>
                        <span className="leading-snug">{detail}</span>
                      </div>
                    ))}
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
            
            <div className="space-y-12">
              {PUBLICATIONS.map((pub, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative pl-6 sm:pl-8 border-l border-brand-navy/10"
                >
                  <div className="absolute left-0 top-0 w-[2px] h-0 bg-brand-gold group-hover:h-full transition-all duration-500"></div>
                  <span className="text-[10px] font-mono text-slate-400 mb-2 block uppercase tracking-widest">{pub.date}</span>
                  <h3 className="text-lg sm:text-xl font-serif text-brand-navy group-hover:text-brand-gold transition-colors mb-3 leading-snug">
                    "{pub.title}"
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 italic font-light leading-relaxed mb-4">
                    {pub.citation}
                  </p>
                  {pub.content && (
                    <button 
                      onClick={() => setActiveArticle(pub)}
                      className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest font-bold text-brand-gold hover:text-brand-navy transition-colors"
                    >
                      Read Full Text <ArrowRight size={14} />
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
