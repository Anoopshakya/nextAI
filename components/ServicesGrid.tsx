
import React from 'react';
import { Database, Shield, Zap, Globe, Package, PieChart, ArrowRight } from 'lucide-react';

const bentoFeatures = [
  {
    title: 'Hybrid Account Management',
    desc: 'Veteran human operators using AI tools for extreme catalog hygiene and variation compliance.',
    icon: <Database className="w-5 h-5" />,
    size: 'lg',
    tags: ['Human Strategy', 'AI Ops']
  },
  {
    title: 'Algorithmic Ads',
    desc: 'Bidding systems optimized for contribution margin, not just vanity ROAS metrics.',
    icon: <Zap className="w-5 h-5" />,
    size: 'sm',
    tags: ['Profit First']
  },
  {
    title: 'Cash Recovery Protocol',
    desc: 'Deep-audit systems that recover the 1-3% of revenue Amazon typically owes you.',
    icon: <Shield className="w-5 h-5" />,
    size: 'sm',
    tags: ['Risk Free']
  },
  {
    title: 'Predictive Supply',
    desc: 'Replenishment forecasting that accounts for lead-time slips and ad-spend correlates.',
    icon: <Package className="w-5 h-5" />,
    size: 'sm',
    tags: ['Logistics']
  },
  {
    title: 'Incrementality SEO',
    desc: 'Content engineering that targets organic keywords with the highest conversion intent.',
    icon: <Globe className="w-5 h-5" />,
    size: 'sm',
    tags: ['Organic']
  },
  {
    title: 'Governance Dashboard',
    desc: 'Weekly accountability reviews with clear actions, owners, and impact tracking.',
    icon: <PieChart className="w-5 h-5" />,
    size: 'lg',
    tags: ['Governance']
  }
];

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="max-w-[1400px] mx-auto px-6 py-24">
      <div className="mb-20">
        <div className="mono text-[10px] text-lime-400 mb-4 uppercase tracking-[0.3em]">Operational_Stack</div>
        <h2 className="text-3xl font-display font-bold text-white mb-4 italic">Human Playbooks. AI Execution.</h2>
        <p className="text-gray-400 max-w-xl text-lg font-medium">
          Veteran-led strategy meets high-speed automation. We help you scale while keeping the overhead lean and the catalog healthy.
        </p>
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
                <div className="w-10 h-10 rounded-lg bg-[#1c2128] border border-white/5 flex items-center justify-center text-[#8cc63f] shadow-inner">
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
            
            <div 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center text-xs font-bold text-[#8cc63f] group cursor-pointer w-fit"
            >
              <span>Explore Capability</span>
              <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
