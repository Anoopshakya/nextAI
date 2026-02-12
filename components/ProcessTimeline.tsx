
import React from 'react';

const roadmap = [
  {
    step: '01',
    title: 'Operational Audit',
    desc: 'Deep-scan for catalog suppressed items, Buy Box erosion, and FBA reconciliation gaps.',
    tags: ['Safety', 'Hygiene']
  },
  {
    step: '02',
    title: 'Ad Engineering',
    desc: 'Structural campaign rebuilds using harvest-scale logic and target TACOS isolation.',
    tags: ['Profitability', 'Growth']
  },
  {
    step: '03',
    title: 'Inventory Stabilization',
    desc: 'Connecting AI demand signals to restock recommendations and DC placement.',
    tags: ['Logistics', 'MAPE']
  }
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="max-w-[1000px] mx-auto px-6 py-24">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-display font-bold text-white mb-4 italic">Execution Roadmap</h2>
        <p className="text-gray-400">90 days from operational friction to category dominance.</p>
      </div>

      <div className="space-y-12">
        {roadmap.map((item, idx) => (
          <div key={idx} className="flex gap-8 group">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-lime-400 font-display font-bold text-lg transition-all group-hover:border-lime-400 group-hover:shadow-[0_0_15px_rgba(190,242,100,0.2)]">
                {item.step}
              </div>
              {idx !== roadmap.length - 1 && (
                <div className="w-[1px] h-full bg-gradient-to-b from-lime-400/20 to-transparent mt-4"></div>
              )}
            </div>
            <div className="pb-12">
              <div className="flex gap-2 mb-3">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-500 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
