import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Eye, User, Layers, ArrowRight } from 'lucide-react';
import SubTeamTabs from './SubTeamTabs';
import { SOCIAL_LINKS } from '../constants';
import * as Icons from 'lucide-react';

interface MainContentProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ toggleTheme, isDark }) => {
  // Animation variants for the "exploded view" effect from center
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-500">
      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-red rounded-br-lg rounded-tl-lg" />
            <span className="font-display font-bold text-xl dark:text-white">OSHSHAROHI</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
              <a href="#about" className="hover:text-brand-red transition-colors">About</a>
              <a href="#team" className="hover:text-brand-red transition-colors">Team</a>
              <a href="#projects" className="hover:text-brand-red transition-colors">Projects</a>
            </div>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            >
              {isDark ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content - "Exploding" from car position concept */}
      <motion.div 
        className="pt-32 pb-12 px-4 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-16">
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-display font-black text-slate-900 dark:text-white mb-4"
          >
            DRIVE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500">FUTURE</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A premier student initiative at BRAC University dedicated to pushing the boundaries of automotive engineering and sustainable mobility.
          </motion.p>
        </div>

        {/* The Core Pillars (Vision, Mission, Advisor) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div variants={itemVariants} className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-l-4 border-brand-red overflow-hidden hover:shadow-2xl transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Eye size={100} className="text-brand-red" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4 text-brand-red">
                <Eye size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 dark:text-white">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To become a global leader in student-led automotive innovation, fostering a culture of excellence where engineering meets sustainability.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-l-4 border-brand-accent overflow-hidden hover:shadow-2xl transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Flag size={100} className="text-brand-accent" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-4 text-brand-accent">
                <Flag size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 dark:text-white">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To design, build, and race high-performance vehicles while empowering students with hands-on technical skills and leadership experience.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-l-4 border-purple-500 overflow-hidden hover:shadow-2xl transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <User size={100} className="text-purple-500" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 text-purple-500">
                <User size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 dark:text-white">Faculty Advisor</h3>
              <div className="flex items-center gap-4 mt-4">
                <img src="https://picsum.photos/100/100?random=10" alt="Advisor" className="w-16 h-16 rounded-full border-2 border-purple-500" />
                <div>
                  <p className="font-bold text-gray-800 dark:text-white">Dr. Arshad Rahman</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Professor, EEE Dept.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sub Teams Section */}
        <motion.section variants={itemVariants} id="team" className="mb-20">
          <SubTeamTabs />
        </motion.section>

        {/* Projects / Gallery Preview */}
        <motion.section variants={itemVariants} id="projects" className="mb-20">
          <div className="bg-brand-dark rounded-3xl p-8 md:p-16 text-center relative overflow-hidden text-white">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
             
             <div className="relative z-10 max-w-3xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Built for Speed. <br/>Engineered for Efficiency.</h2>
               <p className="text-gray-300 mb-8 text-lg">
                 Explore our latest prototype, the OSH-V3, featuring a custom carbon fiber chassis and proprietary battery management system.
               </p>
               <button className="bg-brand-red hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 mx-auto">
                 View Project Portfolio <ArrowRight size={20} />
               </button>
             </div>
          </div>
        </motion.section>

      </motion.div>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-brand-red rounded-lg" />
             <div>
               <h4 className="font-display font-bold text-lg dark:text-white">BRACU OSHSHAROHI</h4>
               <p className="text-xs text-gray-500">© 2024 BRAC University. All rights reserved.</p>
             </div>
          </div>
          
          <div className="flex gap-6">
            {SOCIAL_LINKS.map((link) => {
               const Icon = (Icons as any)[link.icon] || Icons.Link;
               return (
                 <a 
                   key={link.name} 
                   href={link.url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="p-3 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-brand-red hover:text-white transition-all transform hover:-translate-y-1"
                 >
                   <Icon size={20} />
                 </a>
               );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainContent;