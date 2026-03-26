import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, FileText, Linkedin } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Hero({ onOpenCV }: { onOpenCV: () => void }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const titleText = "Hayden";
  const subtitleText = "Graham";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-brand-navy text-white overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        style={{ y: y2 }}
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 2, 0],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[60%] h-[120%] bg-brand-gold skew-x-12 translate-x-1/4 pointer-events-none origin-top-right blur-3xl"
      ></motion.div>
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-brand-navy to-transparent z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            style={{ y: y1, opacity }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="caps-label inline-block mb-6 text-brand-gold/80"
            >
              University of North Carolina School of Law
            </motion.span>
            
            <motion.h1 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-7xl md:text-[8rem] font-serif mb-8 md:mb-12 leading-[0.85] tracking-tighter perspective-1000"
            >
              <div className="flex flex-wrap overflow-hidden pb-2">
                {titleText.split('').map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block origin-bottom">
                    {char}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap overflow-hidden text-brand-gold italic font-light">
                {subtitleText.split('').map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block origin-bottom">
                    {char}
                  </motion.span>
                ))}
              </div>
            </motion.h1>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.2 }}
                className="text-base sm:text-lg md:text-xl font-light text-slate-300/90 leading-relaxed text-balance"
              >
                A scholar of philosophy and ethics transitioning to the legal profession. Dedicated to advocacy that recognizes human dignity through the lens of recovery and service.
              </motion.p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-end">
                <motion.a 
                  href="#about"
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-brand-gold group border border-brand-gold/30 sm:border-transparent p-4 sm:p-0 rounded-full sm:rounded-none w-full sm:w-auto"
                >
                  Explore Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <div className="flex items-center gap-6 w-full sm:w-auto justify-center sm:justify-start">
                  <MagneticButton onClick={onOpenCV}>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-white hover:text-brand-gold transition-all border border-white/20 hover:border-brand-gold/50 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 cursor-pointer"
                    >
                      <FileText size={18} /> Curriculum Vitae
                    </motion.div>
                  </MagneticButton>
                  
                  <MagneticButton href="https://www.linkedin.com/in/hayden-graham-5a687624b/" target="_blank" rel="noopener noreferrer">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="text-white/60 hover:text-brand-gold transition-all p-2 cursor-pointer"
                      title="LinkedIn Profile"
                    >
                      <Linkedin size={22} />
                    </motion.div>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vertical Rail Text & Social */}
      <div className="absolute right-12 bottom-24 hidden lg:flex flex-col items-center gap-8 z-30">
        <div className="w-[1px] h-12 bg-white/20"></div>
        <span className="[writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.5em] text-white/20 font-mono mt-4">
          UNC LAW • CLASS OF 2029 • CHAPEL HILL, NC
        </span>
      </div>

      {/* Elite Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden xl:flex flex-col items-center gap-4 z-30 hide-on-short-screens"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold/50 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
