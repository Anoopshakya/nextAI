
import React from 'react';
import { Database, Shield, Zap, Globe, Package, PieChart } from 'lucide-react';

const bentoFeatures = [
  {
    title: 'Account Management',
    desc: 'Full-stack operational support from catalog hygiene to policy appeals.',
    icon: <Database className="w-5 h-5" />,
    size: 'lg',
    tags: ['Brand Protection', 'Compliance']
  },
  {
    title: 'Precision Advertising',
    desc: 'AI-driven bidding that prioritizes incrementality and NTB.',
    icon: <Zap className="w-5 h-5" />,
    size: 'sm',
    tags: ['ROAS']
  },
  {
    title: 'Zero-Risk Recovery',
    desc: 'FBA audits that put money back into your working capital.',
    icon: <Shield className="w-5 h-5" />,
    size: 'sm',
    tags: ['Reimbursement']
  },
  {
    title: 'Logistics Engine',
    desc: 'Demand forecasting with 104-week historical smoothing.',
    icon: <Package className="w-5 h-5" />,
    size: 'sm',
    tags: ['Forecasting']
  },
  {
    title: 'Global SEO',
    desc: 'Multi-marketplace keyword mapping and A+ content localized for scale.',
    icon: <Globe className="w-5 h-5" />,
    size: 'sm',
    tags: ['Localization']
  },
  {
    title: 'Insights Dashboard',
    desc: 'Weekly scorecards and monthly reviews with actionable owner-dates.',
    icon: <PieChart className="w-5 h-5" />,
    size: 'lg',
    tags: ['Analytics']
  }
];

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="max-w-[1400px] mx-auto px-6 py-24">
      <div className="mb-20">
        <h2 className="text-3xl font-display font-bold text-white mb-4">Infrastructure for Growth</h2>
        <p className="text-gray-400 max-w-xl">Every module you need to build a market leader, integrated into a single operational workflow.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bentoFeatures.map((feature, idx) => (
          <div 
            key={idx} 
            className={`supabase-card rounded-2xl p-8 flex flex-col justify-between ${
              feature.size === 'lg' ? 'md:col-span-2' : ''
            }`}
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#1c2128] border border-white/5 flex items-center justify-center text-lime-400">
                  {feature.icon}
                </div>
                <div className="flex gap-2">
                  {feature.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-widest text-gray-500 border border-white/10 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {feature.desc}
              </p>
            </div>
            
            <div className="flex items-center text-xs font-bold text-lime-400 group cursor-pointer">
              <span>View Module</span>
              <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
