
import React from 'react';
import { ArrowRight, Play, Terminal, Cpu, Users, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden grid-bg">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-3/5">
          <div className="inline-flex items-center space-x-2 bg-lime-400/10 border border-lime-400/20 px-3 py-1 rounded-full mb-8">
            <Cpu className="w-3 h-3 text-lime-400" />
            <span className="text-lime-400 text-[11px] font-bold uppercase tracking-widest">Human Strategy + AI Execution</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-8 tracking-tight">
            Scale Faster on Amazon <br />
            <span className="text-[#8cc63f] text-glow">with Human + AI.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl font-medium">
            Get a partner that optimizes listings, profits, ads, and inventory while recovering cash you’re owed. We combine veteran operator playbooks with automation to lift contribution margin and keep your catalog healthy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-md font-bold text-base hover:bg-gray-200 transition-all flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Start free audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="w-full sm:w-auto bg-[#1c2128] border border-white/10 text-white px-8 py-3 rounded-md font-bold text-base hover:bg-[#2d333b] transition-all flex items-center justify-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Meet the Operators</span>
            </button>
          </div>
        </div>

        <div className="lg:w-2/5 w-full relative">
          <div className="supabase-card p-1 rounded-2xl glow-lime bg-[#0d1117] border-white/10 shadow-2xl relative overflow-hidden group">
            {/* Animated Scan Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8cc63f]/30 to-transparent blur-sm animate-scan pointer-events-none z-20"></div>
            
            <div className="bg-[#010409] rounded-xl p-6 border border-white/5 relative z-10">
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-gray-500" />
                  <span className="mono text-[10px] text-gray-500">NEXTAI-PROTOCOL_V4.0</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative w-2 h-2">
                    <div className="absolute inset-0 bg-lime-500 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-2 h-2 bg-lime-500 rounded-full"></div>
                  </div>
                  <div className="text-[9px] mono text-lime-500 tracking-tighter uppercase font-bold">Protocol_Active</div>
                </div>
              </div>
              
              <div className="space-y-7">
                {[
                  { label: 'Listing Health', status: 'Enhanced', val: '100%', delay: '0s' },
                  { label: 'ROAS Performance', status: 'Lifting', val: '88%', delay: '0.2s' },
                  { label: 'Capital Recovery', status: 'Syncing', val: '92%', delay: '0.4s' },
                ].map((stat, i) => (
                  <div key={i} className="relative overflow-hidden group">
                    <div className="flex justify-between text-[11px] mb-2.5">
                      <span className="text-gray-400 uppercase tracking-widest font-bold flex items-center">
                        <Activity className="w-3 h-3 mr-1.5 text-gray-600" />
                        {stat.label}
                      </span>
                      <span className="text-lime-400 font-bold bg-lime-400/5 px-2 py-0.5 rounded text-[9px]">{stat.status}</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden relative">
                      {/* Animated Shimmer on the bar */}
                      <div 
                        className="absolute top-0 left-0 h-full bg-[#8cc63f] transition-all duration-[2000ms] ease-out rounded-full shadow-[0_0_10px_rgba(140,198,63,0.4)]" 
                        style={{ width: stat.val, transitionDelay: stat.delay }}
                      >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-[#010409] bg-[#1c2128] flex items-center justify-center transition-transform hover:-translate-y-1 hover:scale-110 cursor-help">
                      <Users className="w-3.5 h-3.5 text-gray-500" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1 italic">Operator Oversight</span>
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className="w-1 h-1 bg-lime-500/50 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dynamic Floating Labels */}
            <div className="absolute -top-6 -right-4 p-4 glass rounded-xl border border-white/10 shadow-2xl float z-30 group-hover:border-lime-400/30 transition-colors">
              <div className="text-[10px] text-gray-400 uppercase tracking-tighter mb-1 font-bold">Contribution Lift</div>
              <div className="text-sm text-lime-400 font-black">+14.2%</div>
            </div>

            <div className="absolute -bottom-4 -left-6 p-3 glass rounded-xl border border-white/10 shadow-xl float z-30" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-[10px] text-white font-bold tracking-tighter uppercase">AI_ADAPTIVE_BIDDING</span>
              </div>
            </div>
          </div>
          
          {/* Subtle background glow behind the card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#8cc63f]/5 blur-[100px] -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
