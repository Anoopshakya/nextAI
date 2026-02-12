
import React from 'react';
import { ChevronRight, Github } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#06090e]/85 backdrop-blur-md border-b border-white/5 py-3 shadow-2xl' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          {/* Brand Logo */}
          <a href="/" className="flex items-center group transition-opacity hover:opacity-90">
            <img 
              src="logo.png" 
              alt="Next AI Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>
          
          <div className="hidden lg:flex items-center space-x-8">
            {['Solutions', 'Methodology', 'Case Studies', 'Insights'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-semibold text-gray-400 hover:text-white transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-lime-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://github.com" className="hidden sm:flex items-center space-x-2 text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mr-4">
            <Github className="w-4 h-4" />
            <span>Operational Hub</span>
          </a>
          <button className="bg-[#1c2128] border border-white/5 hover:bg-[#2d333b] hover:border-white/20 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg">
            Client Portal
          </button>
          <button className="bg-[#8cc63f] hover:bg-[#a3d95d] text-black px-6 py-2 rounded-lg text-sm font-black uppercase tracking-wider flex items-center transition-all shadow-[0_0_20px_rgba(140,198,63,0.2)] hover:shadow-[0_0_30px_rgba(140,198,63,0.4)]">
            Free Audit
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </nav>
  );
};
