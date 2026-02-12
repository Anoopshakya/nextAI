
import React, { useState } from 'react';
import { Send, CheckCircle, BarChart3, Loader2, Database } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    url: '',
    bracket: '$100k - $500k Monthly'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Store in localStorage
    const existingEnquiries = JSON.parse(localStorage.getItem('nextai_enquiries') || '[]');
    const newEnquiry = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('nextai_enquiries', JSON.stringify([...existingEnquiries, newEnquiry]));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (isSuccess) {
    return (
      <section id="contact" className="max-w-4xl mx-auto px-6 lg:px-12 py-12">
        <div className="supabase-card rounded-[2.5rem] p-16 text-center border-lime-400/30">
          <div className="w-20 h-20 bg-lime-400/10 border border-lime-400/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-lime-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Audit Request Received.</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Our Senior Strategists are now mapping your brand's performance gaps. Expect your comprehensive gap analysis within 24 hours.
          </p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="text-lime-400 text-sm font-bold hover:underline"
          >
            Submit another enquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 lg:px-12">
      <div className="glass rounded-[3.5rem] p-10 md:p-16 overflow-hidden relative border-white/10 shadow-2xl">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-2/5">
            <div className="mono text-[10px] text-lime-400 mb-4 uppercase tracking-[0.3em]">Protocol_Audit_Request</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">Secure your <br/><span className="text-[#8cc63f] text-glow">Audit results.</span></h2>
            <p className="text-gray-400 text-lg mb-10 font-medium leading-relaxed">
              We don't just "manage" accounts. We re-engineer them. Get a comprehensive performance gap analysis from veteran human operators.
            </p>
            
            <div className="space-y-6">
              {[
                'SKU-level profitability breakdown',
                'Historical FBA recovery potential',
                'SEO & Incrementality mapping',
                'Predictive replenishment demo'
              ].map((item, i) => (
                <div key={i} className="flex items-center text-gray-300 font-bold text-xs uppercase tracking-wider">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 border border-lime-500/20 flex items-center justify-center mr-4 shrink-0">
                    <CheckCircle className="w-4 h-4 text-lime-500" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center">
              <div className="w-12 h-12 rounded-xl bg-[#1c2128] flex items-center justify-center mr-5 shrink-0 border border-white/5">
                <BarChart3 className="w-6 h-6 text-lime-500" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Next AI Internal Audit</p>
                <p className="text-gray-500 text-xs">Human + AI Analysis Ready</p>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 bg-[#010409]/80 p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Full Name</label>
                  <input 
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text" 
                    className="w-full bg-[#06090e] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-lime-500 transition-all font-medium text-sm placeholder:text-gray-700" 
                    placeholder="Marcus Aurelius" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Work Email</label>
                  <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    className="w-full bg-[#06090e] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-lime-500 transition-all font-medium text-sm placeholder:text-gray-700" 
                    placeholder="ceo@empire.com" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Amazon Brand Store URL</label>
                <input 
                  required
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  type="text" 
                  className="w-full bg-[#06090e] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-lime-500 transition-all font-medium text-sm placeholder:text-gray-700" 
                  placeholder="amazon.com/your-brand" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Current Scale</label>
                <div className="relative">
                  <select 
                    name="bracket"
                    value={formData.bracket}
                    onChange={handleChange}
                    className="w-full bg-[#06090e] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-lime-500 transition-all appearance-none font-medium text-sm cursor-pointer"
                  >
                    <option>$100k - $500k Monthly</option>
                    <option>$500k - $2M Monthly</option>
                    <option>$2M+ Monthly</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <CheckCircle className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </div>
              
              <button 
                disabled={isSubmitting}
                className="w-full bg-[#8cc63f] text-black font-black text-sm uppercase tracking-[0.2em] py-5 rounded-xl shadow-2xl shadow-lime-500/20 flex items-center justify-center group transition-all hover:bg-lime-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-3 animate-spin" />
                    Processing Audit...
                  </>
                ) : (
                  <>
                    Request Strategy Audit
                    <Send className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
              
              <p className="text-[10px] text-center text-gray-600 uppercase tracking-widest font-bold">
                No obligations. High precision results only.
              </p>
            </form>
          </div>
        </div>
      </div>
      
      {/* Hidden/Admin helper to view enquiries (Demo only) */}
      <div className="mt-8 text-center opacity-0 hover:opacity-100 transition-opacity">
        <button 
          onClick={() => {
            const leads = JSON.parse(localStorage.getItem('nextai_enquiries') || '[]');
            console.table(leads);
            alert(`Stored leads: ${leads.length}. Check console for details.`);
          }}
          className="text-[10px] text-gray-700 flex items-center justify-center mx-auto"
        >
          <Database className="w-3 h-3 mr-1" /> View Stored Enquiries (Debug)
        </button>
      </div>
    </section>
  );
};
