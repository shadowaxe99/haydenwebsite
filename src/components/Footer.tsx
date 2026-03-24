import { Mail, Phone, MapPin, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-cream py-16 md:py-24 px-6 border-t border-brand-navy/5">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16 mb-16 md:mb-24">
          <div className="max-w-sm">
            <h2 className="text-3xl font-serif text-brand-navy mb-6 tracking-tighter">H.F.G<span className="text-brand-gold">.</span></h2>
            <p className="text-slate-500 font-light leading-relaxed text-sm">
              Future legal professional at the University of North Carolina School of Law. Dedicated to the intersection of ethics, recovery, and advocacy.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-navy mb-6">Navigation</h4>
              <ul className="space-y-4 text-xs text-slate-500 font-medium uppercase tracking-widest">
                <li><a href="#about" className="hover:text-brand-gold transition-colors">About</a></li>
                <li><a href="#experience" className="hover:text-brand-gold transition-colors">Experience</a></li>
                <li><a href="#education" className="hover:text-brand-gold transition-colors">Education</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-navy mb-6">Connect</h4>
              <ul className="space-y-4 text-xs text-slate-500 font-medium uppercase tracking-widest">
                <li><a href="https://www.linkedin.com/in/hayden-graham-5a687624b/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">LinkedIn</a></li>
                <li><a href="mailto:haydengraham4815@gmail.com" className="hover:text-brand-gold transition-colors">Email</a></li>
                <li><a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 flex justify-start md:justify-end">
              <button 
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full border border-brand-navy/10 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-500 group"
              >
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-brand-navy/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">
            © {new Date().getFullYear()} Hayden Flynn Graham
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">UNC Law Class of 2029</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">Chapel Hill, NC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
