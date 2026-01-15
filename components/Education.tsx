
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { EDUCATION_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <AnimatedSection id="education">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3">
          <div className="sticky top-24">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl font-heading font-black mb-6 leading-tight text-slate-900"
            >
                Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Excellence</span>
            </motion.h2>
            <p className="text-slate-600 leading-relaxed mb-8 font-medium">
              A solid foundation in tourism systems, sustainability, and management from prestigious universities in Italy and India.
            </p>
            <motion.div 
              whileHover={{ scale: 1.02, rotate: 1 }}
              className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-3xl border border-purple-100 inline-flex items-center gap-4 shadow-xl shadow-purple-100/50"
            >
              <div className="p-3 bg-purple-100 rounded-2xl border border-purple-200">
                <Star className="text-purple-600 fill-purple-600" size={24} />
              </div>
              <div>
                <div className="font-bold text-lg text-slate-900">Top Student</div>
                <div className="text-sm text-slate-500">High level of attainment</div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="md:w-2/3 space-y-8">
          {EDUCATION_DATA.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 50 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:border-purple-300 transition-all group shadow-xl shadow-slate-100"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-purple-50 rounded-2xl group-hover:scale-110 transition-transform border border-purple-100">
                  <GraduationCap className="text-purple-600" size={32} />
                </div>
                <span className="px-4 py-1.5 bg-slate-100 rounded-full text-sm font-bold text-slate-600 border border-slate-200">{edu.period}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-purple-600 transition-colors">{edu.degree}</h3>
              <div className="text-lg text-slate-700 font-medium mb-4 flex items-center gap-2">
                {edu.institution} <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> <span className="text-slate-500">{edu.location}</span>
              </div>
              <p className="text-slate-600 leading-relaxed italic font-medium">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Education;
