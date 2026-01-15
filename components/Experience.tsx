
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <AnimatedSection id="experience" className="bg-slate-50 border border-slate-100 rounded-[4rem] my-20 shadow-sm">
      <div className="text-center mb-16 pt-10">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-black mb-4 text-slate-900"
        >
            My Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Path</span>
        </motion.h2>
        <p className="text-slate-600 max-w-2xl mx-auto font-medium">Connecting travelers to meaningful experiences through sales and strategic planning.</p>
      </div>

      <div className="space-y-12 pb-10">
        {EXPERIENCE_DATA.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative grid md:grid-cols-[1fr_auto_1fr] gap-8 items-start"
          >
            {/* Left side for desktop */}
            <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:order-3'}`}>
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(6, 182, 212, 0.15)" }}
                className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-cyan-400 transition-all group shadow-lg shadow-slate-200/50"
              >
                <span className="inline-block px-3 py-1 rounded-lg bg-cyan-50 text-cyan-600 font-bold text-xs uppercase tracking-widest mb-3 border border-cyan-100">{exp.period}</span>
                <h3 className="text-2xl font-bold mb-1 text-slate-900">{exp.role}</h3>
                <h4 className="text-lg text-slate-600 font-bold mb-4 flex items-center gap-2 md:justify-end">
                   {index % 2 !== 0 && <Briefcase size={18} className="text-pink-500" />}
                   {exp.company}
                   {index % 2 === 0 && <Briefcase size={18} className="text-pink-500" />}
                </h4>
                <div className="flex items-center gap-2 text-slate-500 mb-6 md:justify-end font-medium">
                   <MapPin size={16} className="text-slate-400"/>
                   <span>{exp.location}</span>
                </div>
                <ul className="space-y-2 text-slate-600 text-sm font-medium">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2 md:flex-row-reverse">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Center Timeline Dot */}
            <div className="hidden md:flex flex-col items-center h-full">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-5 h-5 rounded-full bg-cyan-500 border-4 border-white shadow-lg z-10" 
              />
              <div className="w-0.5 h-full bg-slate-200" />
            </div>

            {/* Empty space for alternative desktop sides */}
            <div className="hidden md:block" />
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;
