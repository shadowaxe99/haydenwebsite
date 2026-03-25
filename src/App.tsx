import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useSpring, useMotionValueEvent } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Leadership from './components/Leadership';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setShowBackToTop(latest > 0.15);
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && dotRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, .card-hover');
      if (isInteractive) {
        cursorRef.current?.classList.add('cursor-hover');
      } else {
        cursorRef.current?.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Elite Desktop Elements */}
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="custom-cursor-dot" />
      <motion.div className="scroll-progress" style={{ scaleX, transformOrigin: "0%" }} />

      <div className={isCVOpen ? "print:hidden" : ""}>
        <Navbar onOpenCV={() => setIsCVOpen(true)} />
        <main>
          <Hero onOpenCV={() => setIsCVOpen(true)} />
          <About />
          <Experience />
          <Education />
          <Leadership />
          <Interests />
          <Contact />
        </main>
        <Footer />
      </div>

      <AnimatePresence>
        {isCVOpen && <CVModal onClose={() => setIsCVOpen(false)} />}
      </AnimatePresence>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 bg-white border border-slate-100 shadow-xl rounded-full flex items-center justify-center text-brand-navy hover:text-brand-gold hover:border-brand-gold transition-all z-[40] group hidden lg:flex"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
