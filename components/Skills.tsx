
import React from 'react';
import { motion } from 'framer-motion';
import { Languages, ShieldCheck, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { SKILLS, LANGUAGES } from '../constants';

const Skills: React.FC = () => {
  return (
    <AnimatedSection id="skills" className="bg-gradient-to-b from-slate-50/0 via-slate-50 to-slate-50/0 rounded-[4rem]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-heading font-black mb-4 text-slate-900"
          >
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Languages</span>
          </motion.h2>
          <p className="text-slate-600 font-medium">A versatile toolkit designed for the modern travel industry.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Skills */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Zap className="text-yellow-500" size={24} />
              <h3 className="text-2xl font-bold text-slate-900">Industry Expertise</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  className={`px-6 py-3 rounded-2xl border font-bold transition-all cursor-default shadow-sm
                    ${i % 3 === 0 ? 'bg-pink-50 text-pink-700 border-pink-100 hover:bg-pink-100 hover:border-pink-300' : 
                      i % 3 === 1 ? 'bg-cyan-50 text-cyan-700 border-cyan-100 hover:bg-cyan-100 hover:border-cyan-300' :
                      'bg-purple-50 text-purple-700 border-purple-100 hover:bg-purple-100 hover:border-purple-300'}
                  `}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Languages className="text-pink-500" size={24} />
              <h3 className="text-2xl font-bold text-slate-900">Languages</h3>
            </div>
            <div className="space-y-6">
              {LANGUAGES.map((lang, i) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg text-slate-800">{lang.name}</span>
                    <span className="text-pink-600 font-bold text-sm">{lang.level}</span>
                  </div>
                  <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: lang.level === 'Fluent' ? '100%' : '30%' }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      className={`h-full ${lang.level === 'Fluent' ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-slate-400'}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="mt-12 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl border border-emerald-100 shadow-sm"
            >
                <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck size={20} className="text-emerald-600" />
                    <span className="font-bold uppercase tracking-widest text-xs text-emerald-700">Legal Compliance</span>
                </div>
                <p className="text-sm text-emerald-800">Eligible to work in Italy: <strong>Yes</strong></p>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
