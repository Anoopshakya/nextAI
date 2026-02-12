
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
              src="https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/logo.png" 
              alt="Next AI Logo" 
              className="h-8 md:h-9 object-contain hidden" // Hidden until actual file path is known, but I'll use a stylized reconstruction below for reliability
            />
            {/* High-fidelity CSS/SVG reconstruction of the attached logo for immediate visual parity */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-7 bg-[#8cc63f] rounded-[8px] flex items-center justify-center rotate-[-2deg] shadow-[0_0_15px_rgba(140,198,63,0.3)]">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M7 12c0-3 2-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5z" opacity="0.2" />
                  <path d="M4 12c0-4 3-7 8-7s8 3 8 7-3 7-8 7-8-3-8-7z" strokeOpacity="0.1" />
                  <path d="M8 12c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5-1.5 3.5-4 3.5-4-1.5-4-3.5z" />
                </svg>
              </div>
              <div className="flex items-baseline space-x-1 font-display font-black tracking-tight text-2xl">
                <span className="text-[#334155]">Next</span>
                <span className="text-[#8cc63f]">AI</span>
              </div>
            </div>
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
