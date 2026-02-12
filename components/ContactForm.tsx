
import React from 'react';
import { Send, CheckCircle, BarChart3 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 lg:px-12">
      <div className="glass rounded-[3.5rem] p-10 md:p-16 overflow-hidden relative border-white/10 shadow-2xl">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-2/5">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-8 leading-tight">Secure your <br/><span className="text-lime-500 text-glow">Audit results.</span></h2>
            <p className="text-slate-400 text-lg mb-10 font-medium">
              One of our Senior Strategists will prepare a comprehensive performance gap analysis for your brand.
            </p>
            
            <div className="space-y-6">
              {[
                'SKU-level profitability breakdown',
                'Historical FBA recovery potential',
                'SEO & Incrementality mapping',
                'Predictive replenishment demo'
              ].map((item, i) => (
                <div key={i} className="flex items-center text-slate-300 font-bold text-sm uppercase tracking-wider">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 border border-lime-500/20 flex items-center justify-center mr-4">
                    <CheckCircle className="w-4 h-4 text-lime-500" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center">
              <BarChart3 className="w-10 h-10 text-lime-500 mr-5" />
              <div>
                <p className="text-white font-bold text-sm">Next AI Internal Audit</p>
                <p className="text-slate-500 text-xs">Standard response time: &lt; 24h</p>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 bg-slate-900/50 p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-lime-500 transition-all font-medium" placeholder="Marcus Aurelius" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Work Email</label>
                  <input type="email" className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-lime-500 transition-all font-medium" placeholder="ceo@empire.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Amazon Brand URL</label>
                <input type="text" className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-lime-500 transition-all font-medium" placeholder="amazon.com/your-brand" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Scale Bracket</label>
                <select className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-lime-500 transition-all appearance-none font-medium">
                  <option className="bg-slate-900">$100k - $500k Monthly</option>
                  <option className="bg-slate-900">$500k - $2M Monthly</option>
                  <option className="bg-slate-900">$2M+ Monthly</option>
                </select>
              </div>
              <button className="w-full bg-lime-500 text-slate-950 font-black text-sm uppercase tracking-[0.2em] py-5 rounded-2xl shadow-2xl shadow-lime-500/20 flex items-center justify-center group transition-all hover:bg-lime-400">
                Request Strategy Audit
                <Send className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
