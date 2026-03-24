import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { Publication } from '../types';

export default function ArticleModal({ article, onClose }: { article: Publication, onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-brand-navy/80 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-brand-cream w-full max-w-3xl max-h-full overflow-y-auto shadow-2xl relative p-6 sm:p-8 md:p-16"
      >
        <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-brand-navy transition-colors">
          <X size={24} />
        </button>
        
        <div className="mb-8 md:mb-12 text-center mt-4 md:mt-0">
          <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest mb-4 block">{article.date}</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-navy mb-4 leading-tight">{article.title}</h2>
          <p className="text-xs sm:text-sm text-slate-500 italic">{article.citation}</p>
        </div>
        
        <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-700 font-light leading-relaxed">
          {article.content?.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
