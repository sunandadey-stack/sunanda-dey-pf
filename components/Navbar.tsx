
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg py-4 border-b border-slate-100 shadow-sm' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-center md:justify-between items-center">
          <motion.a 
            href="#" 
            className="text-2xl font-heading font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SUNANDA.DEY
          </motion.a>
          
          <div className="hidden md:block">
            <a href="#contact" className="px-5 py-2 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-pink-500 transition-colors shadow-lg">
                Get in Touch
            </a>
          </div>
        </div>
      </motion.nav>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 origin-left z-50"
        style={{ scaleX }}
      />
    </>
  );
};

export default Navbar;
