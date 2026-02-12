
import React from 'react';
import { ArrowRight, Play, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden grid-bg">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-3/5">
          <div className="inline-flex items-center space-x-2 bg-lime-400/10 border border-lime-400/20 px-3 py-1 rounded-full mb-8">
            <span className="text-lime-400 text-[11px] font-bold uppercase tracking-widest">v4.0 Launch: AI Core Engine</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-8 tracking-tight">
            The infrastructure for <br />
            <span className="text-lime-400">Amazon Dominance.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl font-medium">
            NextAI Commerce provides the operational platform for high-velocity brands. Manage your catalog, optimize ads, and forecast inventory with developer-grade precision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-md font-bold text-base hover:bg-gray-200 transition-all flex items-center justify-center">
              Request Free Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="w-full sm:w-auto bg-[#1c2128] border border-white/10 text-white px-8 py-3 rounded-md font-bold text-base hover:bg-[#2d333b] transition-all flex items-center justify-center space-x-2">
              <Play className="w-4 h-4 fill-current" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        <div className="lg:w-2/5 w-full relative">
          <div className="supabase-card p-1 rounded-2xl glow-lime bg-[#0d1117] border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="bg-[#010409] rounded-xl p-6 border border-white/5">
              <div className="flex items-center space-x-2 mb-6 border-b border-white/5 pb-4">
                <Terminal className="w-4 h-4 text-gray-500" />
                <span className="mono text-[10px] text-gray-500">NEXTAI-REPLENISHMENT-ENGINE --RUN</span>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: 'Inventory Sync', status: 'Healthy', val: '100%' },
                  { label: 'Buy Box Ownership', status: 'Stable', val: '99.4%' },
                  { label: 'Forecast Confidence', status: 'Optimized', val: '94.2%' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[11px] mb-2">
                      <span className="text-gray-400 uppercase tracking-widest font-bold">{stat.label}</span>
                      <span className="text-lime-400 font-bold">{stat.status}</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-lime-400 h-full transition-all duration-1000 ease-out" style={{ width: stat.val }}></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border border-black bg-gray-800"></div>
                  ))}
                </div>
                <span className="text-[10px] text-gray-500 font-medium">+24 brands scaling now</span>
              </div>
            </div>
            
            {/* Visual float elements */}
            <div className="absolute -top-4 -right-4 p-4 glass rounded-xl border border-white/10 shadow-2xl float">
              <div className="text-xs text-lime-400 font-bold">ROAS 4.8x</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
