
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { PERSONAL_INFO } from './constants';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  useEffect(() => {
    document.title = "Sunanda Dey | Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-pink-200 selection:text-pink-900">
      <Navbar />

      {/* Background decoration elements - Vibrant Pastel on White */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-purple-300/30 blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-pink-300/30 blur-[100px] mix-blend-multiply" />
        <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-cyan-300/30 blur-[100px] mix-blend-multiply" />
      </div>
      
      <main>
        <Hero />
        
        <div id="about" className="py-20 px-6 max-w-7xl mx-auto">
          {/* Bio Card - Glassmorphism Light */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-xl p-10 md:p-20 rounded-[3rem] border border-white shadow-xl relative overflow-hidden group hover:border-pink-200 transition-colors duration-500"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl opacity-30 group-hover:scale-150 transition-transform duration-700" />
            
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">Bio</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <p className="text-xl text-slate-700 leading-relaxed font-medium">
                "{PERSONAL_INFO.about}"
              </p>
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex gap-4 items-start group/item bg-white/50 p-4 rounded-2xl border border-white/50 shadow-sm"
                >
                  <div className="p-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl text-white font-bold shadow-lg shadow-purple-500/20">01</div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-1 group-hover/item:text-pink-600 transition-colors">Innovation Oriented</h4>
                    <p className="text-slate-600">Always looking for creative ways to solve tourism challenges.</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex gap-4 items-start group/item bg-white/50 p-4 rounded-2xl border border-white/50 shadow-sm"
                >
                  <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl text-white font-bold shadow-lg shadow-cyan-500/20">02</div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-1 group-hover/item:text-cyan-600 transition-colors">Strategically Focused</h4>
                    <p className="text-slate-600">Leveraging data and cultural insights to drive results.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <Experience />
        <Education />
        <Skills />
      </main>

      <Footer />
    </div>
  );
};

export default App;
