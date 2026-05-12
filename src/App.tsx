import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Scale, Heart, Mail, ExternalLink, ScrollText, ChevronRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-text-main font-sans selection:bg-gold/20 selection:text-gold overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-12 py-8 flex justify-between items-center bg-dark-bg/80 backdrop-blur-md border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xs font-light tracking-[0.4em] uppercase text-gold"
        >
          Scholar & Advocate
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-8 items-center"
        >
          <div className="flex space-x-8 text-[11px] uppercase tracking-widest opacity-60 hidden md:flex">
            <a href="#philosophy" className="hover:text-gold transition-colors">Philosophy</a>
            <span>•</span>
            <a href="#ethics" className="hover:text-gold transition-colors">Ethics</a>
            <span>•</span>
            <a href="#advocacy" className="hover:text-gold transition-colors">Advocacy</a>
          </div>
          <a href="mailto:haydengraham4815@gmail.com" className="p-2 border border-white/10 rounded-full hover:bg-white/5 hover:border-gold/50 transition-all">
            <Mail size={16} className="text-gold" />
          </a>
        </motion.div>
      </nav>

      <main>
        {/* Split Hero Section */}
        <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-12 pt-24">
          {/* Main Content Area */}
          <div className="lg:col-span-7 flex flex-col justify-center px-8 lg:px-24 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <span className="text-gold font-serif italic text-2xl">H. Graham</span>
              </div>
              <h1 className="font-serif text-7xl md:text-[84px] leading-[0.9] font-light tracking-tight mb-10 text-text-main">
                Hayden<br />
                <span className="italic">Graham</span>
              </h1>
              <p className="text-xl leading-relaxed text-text-muted font-light max-w-md mb-12">
                A transition from academic philosophy to the practice of law, 
                dedicated to advocacy that recognizes human dignity through the lens of recovery and service.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="h-[1px] w-24 bg-gold/50"></div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">In Transition to the Bar</div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-5 border-l border-white/5 bg-dark-surface p-8 lg:p-16 flex flex-col justify-between">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-16"
            >
              <section id="philosophy">
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-6 font-bold">Core Philosophy</h3>
                <div className="bg-white/[0.03] border border-white/[0.08] p-8 rounded-sm">
                  <p className="font-serif italic text-2xl leading-snug text-text-main opacity-90">
                    "The moral imperative of law is not merely the administration of rules, but the restoration of the individual within the community."
                  </p>
                </div>
              </section>

              <section id="advocacy" className="space-y-8">
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">Strategic Areas</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-center space-x-6 border-b border-white/5 pb-6 group cursor-default">
                    <span className="text-gold font-serif text-3xl opacity-50 group-hover:opacity-100 transition-opacity">01</span>
                    <div className="text-lg tracking-wide font-light">Human Dignity & Rights</div>
                  </div>
                  <div className="flex items-center space-x-6 border-b border-white/5 pb-6 group cursor-default">
                    <span className="text-gold font-serif text-3xl opacity-50 group-hover:opacity-100 transition-opacity">02</span>
                    <div className="text-lg tracking-wide font-light">Ethical Legal Frameworks</div>
                  </div>
                  <div className="flex items-center space-x-6 border-b border-white/5 pb-6 group cursor-default">
                    <span className="text-gold font-serif text-3xl opacity-50 group-hover:opacity-100 transition-opacity">03</span>
                    <div className="text-lg tracking-wide font-light">Advocacy for Recovery</div>
                  </div>
                </div>
              </section>
            </motion.div>

            <div className="pt-12">
              <a 
                href="mailto:haydengraham4815@gmail.com"
                className="w-full inline-block px-10 py-5 border border-gold text-gold text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-gold hover:text-black transition-all duration-300 text-center"
              >
                Connect / Inquire
              </a>
            </div>
          </div>
        </section>

        {/* Transitional Section (Legacy Content Integrated) */}
        <section id="ethics" className="py-32 px-8 lg:px-24 bg-dark-bg border-t border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-5xl font-serif text-text-main leading-tight">
                  Bridging the gap between <br />
                  <span className="italic text-gold">thought and action.</span>
                </h2>
                <div className="w-20 h-[1px] bg-gold/50" />
              </div>
              
              <div className="space-y-8 text-text-muted font-light text-xl leading-relaxed">
                <p>
                  With roots deep in academic inquiry into ethics and the human condition, 
                  my path has evolved into a practical pursuit of justice. The transition 
                  from philosophy to law is not a change of heart, but a change of medium.
                </p>
                <p>
                  I believe that the law is at its most powerful when it is rooted in 
                  compassion and an unwavering commitment to the dignity of every individual.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/5 group">
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200" 
                alt="Classic library" 
                className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-60" />
              <div className="absolute bottom-12 left-12">
                <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-2 text-gold">Scholarly Foundations</p>
                <p className="text-3xl font-serif">A quest for ethical clarity.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="h-20 lg:h-24 px-12 flex flex-col lg:flex-row items-center justify-between bg-black text-[#666] text-[10px] tracking-[0.3em] font-bold border-t border-white/5">
        <div className="mb-4 lg:mb-0">© 2024 HAYDEN GRAHAM</div>
        <div className="flex space-x-10">
          <a href="#" className="hover:text-gold transition-colors">CURRICULUM VITAE</a>
          <a href="#" className="hover:text-gold transition-colors">PORTFOLIO</a>
          <a href="mailto:haydengraham4815@gmail.com" className="hover:text-gold transition-colors">CONTACT</a>
        </div>
      </footer>
    </div>
  );
}
