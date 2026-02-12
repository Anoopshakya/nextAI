
import React from 'react';

export const KPISection: React.FC = () => {
  const stats = [
    { label: 'Avg. Ad Cost Reduction', val: '-18%' },
    { label: 'Working Capital Recovery', val: '$4.2M' },
    { label: 'MAPE Forecast Dev.', val: '7.4%' },
    { label: 'Category Ownership', val: '24' },
  ];

  return (
    <div className="bg-[#06090e] py-20 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center lg:text-left">
          {stats.map((stat, i) => (
            <div key={i} className="relative group">
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 transition-transform group-hover:translate-x-1">
                {stat.val}
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
