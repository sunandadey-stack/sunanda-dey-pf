
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Globe, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 px-6 border-t border-slate-100 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-heading font-black mb-8 leading-tight text-slate-900">Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">Connect</span> & Build Something Great.</h2>
            <p className="text-slate-600 text-lg mb-10 max-w-md font-medium">
              Available for new professional opportunities in a dynamic and strategic context. Whether it's sustainable tourism or sales strategy, let's talk!
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-slate-600 hover:text-pink-600 transition-colors group">
                <div className="p-3 bg-white rounded-xl group-hover:bg-pink-50 transition-colors border border-slate-200 shadow-sm">
                  <Mail size={24} />
                </div>
                <span className="text-xl font-bold">{PERSONAL_INFO.email}</span>
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-4 text-slate-600 hover:text-cyan-600 transition-colors group">
                <div className="p-3 bg-white rounded-xl group-hover:bg-cyan-50 transition-colors border border-slate-200 shadow-sm">
                  <Phone size={24} />
                </div>
                <span className="text-xl font-bold">{PERSONAL_INFO.phone}</span>
              </a>
              <div className="flex items-center gap-4 text-slate-600 group">
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <MapPin size={24} />
                </div>
                <span className="text-xl font-bold">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 p-10 rounded-[3rem] border border-white flex flex-col justify-between shadow-2xl shadow-pink-100/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200 blur-[50px] rounded-full -z-10 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-200 blur-[50px] rounded-full -z-10 opacity-50"></div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Quick Message</h3>
              <p className="text-slate-600 mb-8 font-medium">Send me a greeting or a job proposal!</p>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/80 border border-white rounded-2xl px-6 py-4 focus:outline-none focus:border-pink-500 text-slate-900 placeholder-slate-400 focus:ring-1 focus:ring-pink-500 transition-all shadow-sm"
                />
                <textarea 
                  rows={4} 
                  placeholder="How can I help you?" 
                  className="w-full bg-white/80 border border-white rounded-2xl px-6 py-4 focus:outline-none focus:border-pink-500 text-slate-900 placeholder-slate-400 focus:ring-1 focus:ring-pink-500 transition-all resize-none shadow-sm"
                />
                <button 
                  type="button"
                  className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-pink-600 transition-all active:scale-95 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-slate-200">
          <div className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Sunanda Dey. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors"><Globe size={20} /></a>
          </div>
          <div className="text-slate-500 text-sm flex items-center gap-1 font-medium">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Florence
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
