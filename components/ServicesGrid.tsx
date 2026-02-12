
import React from 'react';
import { 
  Database, 
  Shield, 
  Zap, 
  TrendingUp, 
  PieChart, 
  ArrowRight, 
  Cpu, 
  Mic, 
  Layout, 
  Activity,
  Layers,
  Box
} from 'lucide-react';

interface GraphicProps {
  type: 'core' | 'stack' | 'dial' | 'screen' | 'processor';
  icon: React.ReactNode;
}

const ServiceIllustration: React.FC<GraphicProps> = ({ type, icon }) => {
  return (
    <div className="relative w-full h-56 flex items-center justify-center isometric-view pointer-events-none group-hover:scale-105 transition-all duration-700">
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute w-48 h-48 bg-[#8cc63f]/5 blur-[80px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
      
      {/* 3D Scene Container */}
      <div className="relative iso-card-base animate-floating">
        
        {/* TYPE 1: CORE (Integration) */}
        {type === 'core' && (
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-0 border border-white/5 rounded-full animate-rotation opacity-20"></div>
            <div className="absolute inset-4 border border-[#8cc63f]/20 rounded-full animate-rotation opacity-10" style={{ animationDirection: 'reverse' }}></div>
            <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent border border-white/20 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md">
              <div className="absolute inset-0 bg-[#8cc63f]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="transform rotate-z-[35deg] rotate-x-[-55deg] text-white">
                {icon}
              </div>
            </div>
            {/* Satellite nodes */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-[#8cc63f]/20 border border-[#8cc63f]/40 flex items-center justify-center shadow-xl">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8cc63f] animate-pulse"></div>
            </div>
          </div>
        )}

        {/* TYPE 2: STACK (Notifications) */}
        {type === 'stack' && (
          <div className="relative w-40 h-24">
            {[0, 12, 24].map((z) => (
              <div 
                key={z}
                className="absolute top-0 left-0 w-full h-full bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm"
                style={{ transform: `translateZ(${z}px)`, opacity: 1 - (z/60) }}
              ></div>
            ))}
            <div 
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8cc63f] to-[#8cc63f]/60 border border-white/30 rounded-xl flex items-center justify-between px-5 shadow-[0_20px_40px_rgba(140,198,63,0.3)]"
              style={{ transform: `translateZ(36px)` }}
            >
               <div className="transform rotate-z-[35deg] rotate-x-[-55deg] text-black">
                {icon}
               </div>
               <div className="flex space-x-1.5">
                 <div className="w-1.5 h-1.5 rounded-full bg-black/30"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-black/30"></div>
               </div>
            </div>
          </div>
        )}

        {/* TYPE 3: DIAL (Record & Transcribe) */}
        {type === 'dial' && (
          <div className="relative w-36 h-36 flex items-center justify-center">
            <div className="absolute inset-0 border-[4px] border-white/5 rounded-full"></div>
            <div className="absolute inset-0 border-t-[4px] border-[#8cc63f]/40 rounded-full animate-rotation"></div>
            <div className="w-24 h-24 bg-gradient-to-tr from-[#06090e] to-white/10 border border-white/20 rounded-full flex items-center justify-center shadow-2xl relative">
              <div className="absolute inset-0 bg-[#8cc63f]/5 animate-pulse rounded-full"></div>
              <div className="transform rotate-z-[35deg] rotate-x-[-55deg] text-white">
                {icon}
              </div>
            </div>
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
               <div className="w-2 h-1 bg-[#8cc63f] rounded-full"></div>
            </div>
          </div>
        )}

        {/* TYPE 4: SCREEN (Forecast) */}
        {type === 'screen' && (
          <div className="relative w-44 h-28 bg-white/5 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#8cc63f]/60"></div>
            <div className="p-5 space-y-4">
              <div className="h-2 w-3/4 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#8cc63f]/40 w-1/2 animate-[shimmer_2s_infinite]"></div>
              </div>
              <div className="h-2 w-1/2 bg-[#8cc63f]/20 rounded-full"></div>
              <div className="h-2 w-2/3 bg-white/5 rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
              <div className="transform rotate-z-[35deg] rotate-x-[-55deg] text-[#8cc63f] scale-150">
                {icon}
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-1 bg-white/20 animate-scan-line"></div>
          </div>
        )}

        {/* TYPE 5: PROCESSOR (AI Processes) */}
        {type === 'processor' && (
          <div className="relative w-36 h-36 flex items-center justify-center">
            <div className="absolute inset-0 border border-white/5 rounded-3xl bg-white/[0.02]"></div>
            <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-[#8cc63f] to-black border border-white/20 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(140,198,63,0.3)]">
               <div className="transform rotate-z-[35deg] rotate-x-[-55deg] text-white">
                {icon}
               </div>
            </div>
            {/* Exploded fragments */}
            {[-1, 1].map((x) => (
              [-1, 1].map((y) => (
                <div 
                  key={`${x}-${y}`}
                  className="absolute w-12 h-12 border border-white/10 bg-white/[0.03] rounded-xl backdrop-blur-sm"
                  style={{ transform: `translateX(${x * 60}px) translateY(${y * 60}px) translateZ(-20px)` }}
                ></div>
              ))
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

const services = [
  {
    title: 'Seamless Integration',
    desc: 'Works effortlessly with Amazon Seller Central, 3PL providers, and your existing tech stack through our unified API.',
    icon: <Layout className="w-10 h-10" />,
    type: 'core' as const,
    tags: ['Full Stack', 'API Hub'],
    large: true
  },
  {
    title: 'Performance Alerts',
    desc: 'Stay on top of critical catalog issues with real-time desktop notifications for every account health metric.',
    icon: <Activity className="w-10 h-10" />,
    type: 'stack' as const,
    tags: ['Real-Time', 'Governance'],
    large: true
  },
  {
    title: 'Record & Transcribe',
    desc: 'Automatically capture and analyze every listing update and competitor price move with AI precision.',
    icon: <Mic className="w-8 h-8" />,
    type: 'dial' as const,
    tags: ['Audit', 'Intelligence']
  },
  {
    title: 'Demand Forecasting',
    desc: 'AI-driven replenishment models that ask the right questions and provide instant procurement answers.',
    icon: <TrendingUp className="w-8 h-8" />,
    type: 'screen' as const,
    tags: ['Logistics', 'MAPE']
  },
  {
    title: 'Intelligent AI Processes',
    desc: 'Delivers fast, accurate category summaries and growth strategies powered by proprietary language models.',
    icon: <Cpu className="w-8 h-8" />,
    type: 'processor' as const,
    tags: ['Automation', 'Scale']
  }
];

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="max-w-[1400px] mx-auto px-6 py-24">
      <div className="mb-24 text-center">
        <div className="mono text-[10px] text-[#8cc63f] mb-4 uppercase tracking-[0.5em] font-black">NEXTAI_CAPABILITY_MATRIX</div>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          The Commerce <br />
          <span className="text-[#8cc63f] italic text-glow-lime underline decoration-white/10 underline-offset-[16px]">Operating System.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
          High-performance Amazon account management re-engineered for the AI age. We automate the friction so you can focus on scale.
        </p>
      </div>

      <div className="space-y-8">
        {/* TOP ROW: 2 LARGE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.filter(s => s.large).map((service, idx) => (
            <div 
              key={idx} 
              className="group glass-panel rounded-[3.5rem] p-12 md:p-16 transition-all duration-500 hover:bg-white/[0.05] hover:border-[#8cc63f]/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8cc63f]/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <ServiceIllustration type={service.type} icon={service.icon} />
              
              <div className="mt-12 relative z-10">
                <div className="flex gap-2 mb-6">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-[#8cc63f] border border-[#8cc63f]/20 bg-[#8cc63f]/5 px-4 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 group-hover:text-glow-lime transition-all">{service.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-md font-medium">
                  {service.desc}
                </p>
                <div className="flex items-center text-xs font-black uppercase tracking-[0.2em] text-[#8cc63f] cursor-pointer group/link w-fit border-b border-[#8cc63f]/0 hover:border-[#8cc63f]/40 pb-2 transition-all">
                  <span>Explore Module</span>
                  <ArrowRight className="w-4 h-4 ml-3 transition-transform group-hover/link:translate-x-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW: 3 SMALLER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.filter(s => !s.large).map((service, idx) => (
            <div 
              key={idx} 
              className="group glass-panel rounded-[2.5rem] p-10 transition-all duration-500 hover:bg-white/[0.05] hover:border-[#8cc63f]/30"
            >
              <ServiceIllustration type={service.type} icon={service.icon} />
              
              <div className="mt-10">
                <div className="flex gap-2 mb-5">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-gray-500 border border-white/5 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-[#8cc63f] transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
                  {service.desc}
                </p>
                <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-[#8cc63f] cursor-pointer group/link w-fit">
                  <span>Initialize</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover/link:translate-x-1.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
