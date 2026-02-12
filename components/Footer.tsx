
import React from 'react';
import { Twitter, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#010409] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-9 h-6 bg-[#8cc63f] rounded-[6px] flex items-center justify-center rotate-[-2deg]">
                 <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="4">
                  <path d="M8 12c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5-1.5 3.5-4 3.5-4-1.5-4-3.5z" />
                </svg>
              </div>
              <div className="flex items-baseline space-x-1 font-display font-black tracking-tight text-xl">
                <span className="text-white">Next</span>
                <span className="text-[#8cc63f]">AI</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-8 font-medium">
              Transforming Amazon operations through data science and operational mastery. We help brands dominate their categories with precision execution.
            </p>
            <div className="flex space-x-5">
              {[Twitter, Linkedin, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-lime-400 hover:border-lime-400/30 transition-all group">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8 opacity-50">Capabilities</h5>
            <ul className="space-y-4 text-sm font-semibold text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors flex items-center group">Catalog Ops <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center group">Ad Management <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center group">FBA Recovery <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center group">Demand Engine <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" /></a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8 opacity-50">Intelligence</h5>
            <ul className="space-y-4 text-sm font-semibold text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Audit Protocol</a></li>
              <li><a href="#" className="hover:text-white transition-colors">MAPE Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Whitepapers</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8 opacity-50">Next AI</h5>
            <ul className="space-y-4 text-sm font-semibold text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partnerships</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-lime-400">Join the Team</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[10px] font-bold text-gray-600 tracking-widest uppercase">
          <p>© 2025 Next AI Commerce. High Performance Amazon Operations.</p>
          <div className="flex items-center space-x-8 mt-6 sm:mt-0">
             <div className="flex items-center space-x-1.5 group">
                <div className="w-1.5 h-1.5 rounded-full bg-lime-500 shadow-[0_0_8px_#84cc16] animate-pulse"></div>
                <span className="group-hover:text-white transition-colors">Network: Active</span>
             </div>
             <a href="#" className="hover:text-white transition-colors">Privacy & Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
