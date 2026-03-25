import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar({ onOpenCV }: { onOpenCV?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Interests', href: '#interests' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-4 shadow-sm border-b border-slate-100/50' : 'bg-transparent py-10'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
        <motion.a 
          href="/" 
          whileHover={{ y: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`font-serif text-2xl tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-brand-navy' : 'text-white'}`}
        >
          H.F.G<span className="text-brand-gold">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className={`nav-link ${isScrolled ? 'text-brand-navy' : 'text-white/70 hover:text-white'}`}
            >
              {item.name}
            </a>
          ))}
          {onOpenCV && (
            <button 
              onClick={onOpenCV}
              className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold px-6 py-3 rounded-full border transition-all duration-500 ${isScrolled ? 'border-brand-navy/20 text-brand-navy hover:bg-brand-navy hover:text-white' : 'border-white/30 text-white hover:bg-white hover:text-brand-navy'}`}
            >
              <FileText size={14} /> View CV
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden transition-colors duration-500 ${isScrolled ? 'text-brand-navy' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-navy z-[60] md:hidden flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-10 right-6 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a 
                  key={item.name} 
                  href={item.href} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-white text-3xl font-serif italic hover:text-brand-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 + 0.3 }}
                className="mt-8"
              >
                {onOpenCV && (
                  <button 
                    onClick={() => {
                      onOpenCV();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-3 text-brand-gold text-sm uppercase tracking-[0.3em] font-bold border border-brand-gold/30 px-8 py-4 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all"
                  >
                    <FileText size={20} /> Curriculum Vitae
                  </button>
                )}
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 text-white text-[10px] uppercase tracking-[0.5em] font-mono"
            >
              H.F.G. • CHAPEL HILL, NC
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
