import { motion } from 'motion/react';
import { ArrowRight, FileText, Linkedin } from 'lucide-react';

export default function Hero({ onOpenCV }: { onOpenCV: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-navy text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 skew-x-12 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-navy to-transparent z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="caps-label">University of North Carolina School of Law</span>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif mb-6 md:mb-8 leading-[1] md:leading-[0.9] tracking-tighter">
              Hayden <br />
              <span className="text-brand-gold italic">Graham</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end">
              <p className="text-base sm:text-lg md:text-xl font-light text-slate-300 leading-relaxed text-balance">
                A scholar of philosophy and ethics transitioning to the legal profession. Dedicated to advocacy that recognizes human dignity through the lens of recovery and service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <motion.a 
                  href="#about"
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-brand-gold group border border-brand-gold/30 sm:border-transparent p-4 sm:p-0 rounded-full sm:rounded-none"
                >
                  Explore Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <button 
                  onClick={onOpenCV}
                  className="flex items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-white/80 hover:text-white transition-colors border border-white/20 sm:border-transparent p-4 sm:p-0 rounded-full sm:rounded-none"
                >
                  <FileText size={18} /> Curriculum Vitae
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vertical Rail Text & Social */}
      <div className="absolute right-12 bottom-24 hidden lg:flex flex-col items-center gap-8">
        <a href="https://www.linkedin.com/in/hayden-graham-5a687624b/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-gold transition-colors">
          <Linkedin size={20} />
        </a>
        <div className="w-[1px] h-12 bg-white/20"></div>
        <span className="writing-mode-vertical-rl rotate-180 text-[10px] uppercase tracking-[0.5em] text-white/20 font-mono mt-4">
          UNC LAW • CLASS OF 2029 • CHAPEL HILL, NC
        </span>
      </div>
    </section>
  );
}
