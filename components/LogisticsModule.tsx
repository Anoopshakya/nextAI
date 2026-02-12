
import React from 'react';
import { Server, Settings, Activity, Layers } from 'lucide-react';

export const LogisticsModule: React.FC = () => {
  return (
    <section id="logistics" className="max-w-[1400px] mx-auto px-6 py-32 border-y border-white/5 bg-[#010409]">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <div className="mono text-[11px] text-[#8cc63f] mb-6 uppercase tracking-[0.3em]">Module_Logistics_Core</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 italic">
            Forecast with <br />
            <span className="gradient-heading">Extreme Precision.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
            We don't guess stock levels. We smooth 104 weeks of data against promo lifts, lead-time slips, and stockout history to ensure your capital is always working, never trapped in overstock.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: <Server className="w-4 h-4" />, title: 'Regional DC Splits', sub: 'Optimal FBA placement' },
              { icon: <Settings className="w-4 h-4" />, title: 'Lead-Time Modeling', sub: 'Adaptive safety buffer' },
              { icon: <Activity className="w-4 h-4" />, title: 'Ad-Spend Correlates', sub: 'Bidding-aware demand' },
              { icon: <Layers className="w-4 h-4" />, title: 'SKU ROQ Engine', sub: 'Automated restock math' },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[#8cc63f] mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-wide">{item.title}</h4>
                  <p className="text-gray-500 text-[10px] mt-1 font-bold">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="supabase-card p-8 rounded-3xl bg-[#0d1117] border-white/10 shadow-inner relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <h5 className="mono text-[10px] text-gray-500 uppercase">System_Demand_Curve</h5>
                <span className="bg-[#8cc63f]/10 text-[#8cc63f] text-[8px] font-black px-1.5 py-0.5 rounded">OPTIMIZED</span>
              </div>
              <div className="flex space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#8cc63f]"></div>
              </div>
            </div>

            <div className="h-64 flex items-end justify-between gap-2 border-b border-white/10 pb-2 relative">
              {[40, 65, 30, 85, 45, 95, 70, 50, 80, 100, 60, 40].map((h, i) => (
                <div 
                  key={i} 
                  className="w-full bg-[#8cc63f]/20 hover:bg-[#8cc63f] transition-all duration-300 rounded-t-sm cursor-pointer group relative" 
                  style={{ height: `${h}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                    {Math.round(h * 12.5)}u
                  </div>
                </div>
              ))}
              <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-red-500/30 border-t border-dashed border-red-500/50 pointer-events-none">
                 <span className="absolute -top-4 right-0 text-[8px] text-red-500 font-bold uppercase">Critical Buffer</span>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-center">
                <span className="text-[9px] text-gray-500 font-black uppercase block mb-1">Stockout Risk</span>
                <span className="text-[#8cc63f] font-black text-xs">0.2%</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-center">
                <span className="text-[9px] text-gray-500 font-black uppercase block mb-1">Avg Turns</span>
                <span className="text-white font-black text-xs">4.8x</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-center">
                <span className="text-[9px] text-gray-500 font-black uppercase block mb-1">MAPE Conf.</span>
                <span className="text-white font-black text-xs">92.6%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
