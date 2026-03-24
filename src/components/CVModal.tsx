import { motion } from 'motion/react';
import { X, Download } from 'lucide-react';
import { EDUCATION, EXPERIENCE, LEADERSHIP, PUBLICATIONS, INTERESTS } from '../constants';

export default function CVModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-brand-navy/80 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="bg-white w-full max-w-5xl max-h-full overflow-y-auto shadow-2xl relative"
      >
        <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 p-4 flex justify-between items-center z-10 print:hidden">
          <h2 className="font-serif text-xl text-brand-navy">Curriculum Vitae</h2>
          <div className="flex gap-4">
            <button onClick={() => window.print()} className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-gold hover:text-brand-navy transition-colors">
              <Download size={16} /> <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button onClick={onClose} className="text-slate-400 hover:text-brand-navy transition-colors">
              <X size={24} />
            </button>
          </div>
        </div>
        
        <div className="p-6 sm:p-8 md:p-16 print:p-0">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-serif text-brand-navy mb-2">Hayden Flynn Graham</h1>
            <p className="text-xs sm:text-sm text-slate-600 font-mono">Chapel Hill, NC 27516 | haydengraham4815@gmail.com | 336-690-1387</p>
          </div>
          
          <div className="mb-10">
            <h2 className="text-lg uppercase tracking-widest font-bold border-b-2 border-brand-navy pb-2 mb-6 text-brand-navy">Education</h2>
            {EDUCATION.map((edu, i) => (
              <div key={i} className="mb-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 gap-1 sm:gap-0">
                  <h3 className="font-bold text-brand-navy">{edu.institution}</h3>
                  <span className="text-xs sm:text-sm font-mono text-slate-600">{edu.location}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-1 sm:gap-0">
                  <p className="italic text-slate-800">{edu.degree}</p>
                  <span className="text-xs sm:text-sm font-mono text-slate-600">{edu.period}</span>
                </div>
                <ul className="list-disc list-outside ml-5 text-sm text-slate-700 space-y-1">
                  {edu.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <h2 className="text-lg uppercase tracking-widest font-bold border-b-2 border-brand-navy pb-2 mb-6 text-brand-navy">Professional Experience</h2>
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="mb-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 gap-1 sm:gap-0">
                  <h3 className="font-bold text-brand-navy">{exp.organization}</h3>
                  <span className="text-xs sm:text-sm font-mono text-slate-600">{exp.location}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-1 sm:gap-0">
                  <p className="italic text-slate-800">{exp.title}</p>
                  <span className="text-xs sm:text-sm font-mono text-slate-600">{exp.period}</span>
                </div>
                <ul className="list-disc list-outside ml-5 text-sm text-slate-700 space-y-1">
                  {exp.description.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <h2 className="text-lg uppercase tracking-widest font-bold border-b-2 border-brand-navy pb-2 mb-6 text-brand-navy">Leadership & Community Service</h2>
            {LEADERSHIP.map((item, i) => (
              <div key={i} className="mb-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 gap-1 sm:gap-0">
                  <h3 className="font-bold text-brand-navy">{item.organization}</h3>
                  <span className="text-xs sm:text-sm font-mono text-slate-600">{item.period}</span>
                </div>
                <p className="italic text-slate-800 mb-2">{item.role}</p>
                <ul className="list-disc list-outside ml-5 text-sm text-slate-700 space-y-1">
                  {item.description.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <h2 className="text-lg uppercase tracking-widest font-bold border-b-2 border-brand-navy pb-2 mb-6 text-brand-navy">Publications & Selected Writings</h2>
            <ul className="space-y-4 text-sm text-slate-700">
              {PUBLICATIONS.map((pub, i) => (
                <li key={i}>
                  <strong>Graham, Hayden.</strong> "{pub.title}." <em>{pub.citation}</em>. {pub.date}.
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-lg uppercase tracking-widest font-bold border-b-2 border-brand-navy pb-2 mb-6 text-brand-navy">Interests</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {INTERESTS.map(i => `${i.name} (${i.detail})`).join(' | ')}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
