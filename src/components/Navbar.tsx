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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-10'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
        <a href="#" className={`font-serif text-2xl tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-brand-navy' : 'text-white'}`}>
          H.F.G<span className="text-brand-gold">.</span>
        </a>

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
              className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 rounded-full border transition-all ${isScrolled ? 'border-brand-navy/20 text-brand-navy hover:bg-brand-navy hover:text-white' : 'border-white/20 text-white hover:bg-white hover:text-brand-navy'}`}
            >
              <FileText size={14} /> CV
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl overflow-hidden md:hidden"
          >
            <div className="flex flex-col items-center py-12 gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-brand-navy text-sm uppercase tracking-widest font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {onOpenCV && (
                <button 
                  onClick={() => {
                    onOpenCV();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-brand-navy text-sm uppercase tracking-widest font-bold border border-brand-navy/20 px-6 py-2 rounded-full"
                >
                  <FileText size={16} /> View CV
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
