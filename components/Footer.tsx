
import React from 'react';
import { Infinity, Twitter, Linkedin, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#010409] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
             <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-6 bg-lime-400 rounded-[4px] flex items-center justify-center">
                <Infinity className="text-black w-4 h-4 stroke-[3]" />
              </div>
              <span className="text-lg font-display font-bold text-white tracking-tight">
                Next<span className="text-lime-400">AI</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-6">
              Operational excellence for Amazon brands. Built on data science, execution, and extreme brand protection.
            </p>
            <div className="flex space-x-4 text-gray-600">
              <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
              <MessageCircle className="w-5 h-5 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Product</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Catalog Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ad Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Logistics Engine</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing Ops</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Legal</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[11px] font-medium text-gray-600 tracking-wider uppercase">
          <p>© 2025 NextAI Commerce. All Rights Reserved.</p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
             <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-lime-500 shadow-[0_0_8px_#84cc16]"></div>
                <span>Systems Healthy</span>
             </div>
             <span>Privacy First</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
