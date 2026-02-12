
import React from 'react';
import { ChevronRight, Infinity, Github } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#06090e]/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-8 h-6 bg-lime-400 rounded-[4px] flex items-center justify-center transition-transform group-hover:scale-110">
              <Infinity className="text-black w-4 h-4 stroke-[3]" />
            </div>
            <span className="text-lg font-display font-bold text-white tracking-tight">
              Next<span className="text-lime-400">AI</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {['Solutions', 'Pricing', 'Docs', 'Case Studies'].map((link) => (
              <a key={link} href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="hidden sm:flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm font-medium mr-4">
            <Github className="w-4 h-4" />
            <span>2.4k stars</span>
          </a>
          <button className="bg-[#1c2128] border border-white/10 hover:border-white/20 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-all">
            Sign In
          </button>
          <button className="bg-lime-400 hover:bg-lime-300 text-black px-4 py-1.5 rounded-md text-sm font-bold flex items-center transition-all">
            Start free audit
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </nav>
  );
};
