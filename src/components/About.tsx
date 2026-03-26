import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

function Counter({ from, to, suffix, prefix = "" }: { from: number, to: number, suffix: string, prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(from, {
    mass: 1,
    stiffness: 50,
    damping: 30,
    restDelta: 0.001
  });
  
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(to);
    }
  }, [isInView, spring, to]);

  // We use a local state to force re-render because we're rendering into a plain span
  // Alternatively, we could use <motion.span>{display}</motion.span> if display is a MotionValue
  const [current, setCurrent] = useState(from);
  
  useEffect(() => {
    return display.on("change", (latest) => {
      setCurrent(latest);
    });
  }, [display]);

  return <span ref={ref}>{prefix}{current}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="caps-label">Personal Ethos</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-brand-navy mb-8 leading-tight">
                <span className="block sm:whitespace-nowrap">Advocacy as an</span>
                <span className="text-brand-gold italic block sm:whitespace-nowrap">Act of Grace</span>
              </h2>
              
              <div className="p-8 bg-brand-cream border-l-4 border-brand-gold relative">
                <div className="absolute top-4 left-4 text-6xl text-brand-gold/20 font-serif leading-none">"</div>
                <p className="text-brand-navy font-serif text-xl italic leading-relaxed relative z-10 pl-4">
                  The law can recognize a person's full humanity even at their lowest point. I want to advocate for people whose own causes and effects are inducing their afflictions.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg text-slate-700 leading-relaxed font-light space-y-6"
            >
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-brand-gold first-letter:mr-3 first-letter:float-left first-line:uppercase first-line:tracking-widest">
                My path to the University of North Carolina School of Law is rooted in a unique intersection of academic rigor and lived experience. As a student of Analytic Philosophy, I explored the metaphysics of free will—a study that became deeply personal through my journey in recovery.
              </p>
              <p>
                I believe that human behavior is the product of countless prior causes—upbringing, circumstance, and luck. This perspective doesn't excuse wrongdoing; rather, it invites a deeper understanding of how it came to be. It is this intellectual foundation that I bring to my legal training.
              </p>
              <p>
                With professional experience ranging from senior estate planning to coordinating recovery programs, I have developed a versatile skill set centered on meticulous detail and compassionate communication. I am prepared to bring this urgency and perspective to the most challenging legal environments.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-brand-navy font-serif text-4xl mb-2">
                    <Counter from={0} to={25} suffix="k+" />
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Bags of food packaged for children</p>
                </div>
                <div>
                  <h4 className="text-brand-navy font-serif text-4xl mb-2">
                    <Counter from={0} to={50} prefix="$" suffix="M+" />
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Assets funded to client trusts</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
