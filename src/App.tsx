import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
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

  return (
    <div className="min-h-screen">
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

      <AnimatePresence>
        {isCVOpen && <CVModal onClose={() => setIsCVOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
