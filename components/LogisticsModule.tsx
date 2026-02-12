
import React from 'react';
import { Server, Settings, Activity, Layers } from 'lucide-react';

export const LogisticsModule: React.FC = () => {
  return (
    <section id="logistics" className="max-w-[1400px] mx-auto px-6 py-32 border-y border-white/5 bg-[#010409]">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <div className="mono text-[11px] text-lime-400 mb-6 uppercase tracking-[0.3em]">Module_Logistics_Core</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
            Solve the Inventory <br />
            <span className="gradient-heading">Bullwhip Effect.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Our Replenishment Engine treats your inventory as a high-availability database. We forecast demand with 99.2% accuracy, ensuring you never miss a sale window while minimizing excess storage fees.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: <Server />, title: 'Regional DC Splits', sub: 'Optimal placement math' },
              { icon: <Settings />, title: 'Lead-Time Slip', sub: 'Adaptive buffer modeling' },
              { icon: <Activity />, title: 'CVR Lift Signals', sub: 'Ad-spend correlated demand' },
              { icon: <Layers />, title: 'SKU ROP Engine', sub: 'Automated reorder triggers' },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="text-lime-400 mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide">{item.title}</h4>
                  <p className="text-gray-500 text-xs mt-1">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="supabase-card p-8 rounded-3xl bg-[#0d1117] border-white/10 shadow-inner relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <h5 className="mono text-xs text-gray-500">REAL_TIME_DEMAND_CURVE</h5>
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-lime-500"></div>
              </div>
            </div>

            <div className="h-64 flex items-end justify-between gap-2 border-b border-white/10 pb-2">
              {[40, 65, 30, 85, 45, 95, 70, 50, 80, 100, 60, 40].map((h, i) => (
                <div 
                  key={i} 
                  className="w-full bg-lime-400/20 hover:bg-lime-400 transition-colors rounded-t-sm" 
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <span className="text-[10px] text-gray-500 font-bold uppercase block mb-1">Stockout Risk</span>
                <span className="text-lime-400 font-bold">Low (0.2%)</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <span className="text-[10px] text-gray-500 font-bold uppercase block mb-1">DOH Projection</span>
                <span className="text-white font-bold">24 Days</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <span className="text-[10px] text-gray-500 font-bold uppercase block mb-1">MAPE Deviation</span>
                <span className="text-white font-bold">&lt; 7.4%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
