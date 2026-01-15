import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };
  
  const letterContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const letter: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    show: { opacity: 1, y: 0, rotateX: 0 }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Animated Background Shapes - Vibrant on White */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 100, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-pink-400/20 rounded-full blur-[80px] -z-10 mix-blend-multiply"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
          x: [0, -100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-[80px] -z-10 mix-blend-multiply"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[100px] -z-10 mix-blend-multiply"
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="z-10"
        >
          <motion.span 
            variants={item}
            className="inline-block px-6 py-2 rounded-full bg-white/50 backdrop-blur-md text-pink-600 text-sm font-bold tracking-widest mb-6 border border-pink-200 uppercase shadow-lg shadow-pink-100"
          >
            Hello! I'm Sunanda
          </motion.span>
          
          <motion.div variants={item} className="mb-8">
            <h1 className="text-6xl md:text-8xl font-heading font-black leading-tight tracking-tight text-slate-900">
              Crafting <br/>
              <motion.span 
                variants={letterContainer}
                initial="hidden"
                animate="show"
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600"
              >
                {"Sustainable".split("").map((char, index) => (
                    <motion.span key={index} variants={letter} className="inline-block">
                        {char}
                    </motion.span>
                ))}
              </motion.span> <br/>
              Journeys.
            </h1>
          </motion.div>
          
          <motion.p 
            variants={item}
            className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium"
          >
            {PERSONAL_INFO.bio}
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a 
              href="#experience" 
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold rounded-2xl flex items-center gap-2 transition-all transform hover:-translate-y-1 shadow-xl shadow-pink-500/30"
            >
              View My Work <ArrowRight size={20} />
            </a>
            <div className="px-6 py-4 flex items-center gap-2 text-slate-600 border border-slate-200 rounded-2xl bg-white/50 backdrop-blur-sm shadow-sm">
              <MapPin size={20} className="text-cyan-500" />
              <span>Based in Florence, IT</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          className="relative hidden md:block"
        >
          {/* Main Image Container */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 aspect-[4/5] bg-slate-100 group"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none mix-blend-overlay"></div>
             <img 
              src="https://picsum.photos/seed/sunanda/800/1000" 
              alt="Sunanda Dey"
              className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
            />
          </motion.div>
          
          {/* Decorative Elements around image */}
          <motion.div 
             animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-400 rounded-full blur-[60px] opacity-40 -z-10" 
          />
          <motion.div 
             animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
             transition={{ duration: 5, repeat: Infinity, delay: 1 }}
             className="absolute top-10 -right-10 w-48 h-48 bg-pink-400 rounded-full blur-[60px] opacity-40 -z-10" 
          />
          
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="absolute top-0 right-0 bg-white/80 backdrop-blur-md border border-white/50 text-slate-900 p-6 rounded-3xl -mr-8 mt-8 shadow-xl font-bold rotate-12"
          >
            <span className="text-3xl text-yellow-500 block">2+</span> Years Exp
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;