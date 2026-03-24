import { motion } from 'motion/react';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-brand-navy p-8 sm:p-12 md:p-24 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-6 block">Get In Touch</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6 md:mb-8 leading-tight">
                Let's discuss the <br />
                <span className="text-brand-gold italic">Future of Law.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-md">
                Open to discussions regarding legal scholarship, advocacy opportunities, and professional collaborations.
              </p>
            </div>
            
            <div className="space-y-6 md:space-y-8">
              <a 
                href="mailto:haydengraham4815@gmail.com" 
                className="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 border border-white/10 hover:border-brand-gold transition-all duration-500 group gap-4 sm:gap-0"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-500">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Email Address</p>
                    <p className="text-white font-serif text-sm sm:text-lg md:text-xl truncate">haydengraham4815@gmail.com</p>
                  </div>
                </div>
                <ArrowUpRight size={24} className="text-white/20 group-hover:text-brand-gold transition-colors self-end sm:self-auto shrink-0" />
              </a>
              
              <a 
                href="tel:336-690-1387" 
                className="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 border border-white/10 hover:border-brand-gold transition-all duration-500 group gap-4 sm:gap-0"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Phone Number</p>
                    <p className="text-white font-serif text-sm sm:text-lg md:text-xl">336.690.1387</p>
                  </div>
                </div>
                <ArrowUpRight size={24} className="text-white/20 group-hover:text-brand-gold transition-colors self-end sm:self-auto shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
