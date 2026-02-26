import { useEffect, useState } from 'react';
import { RiStarFill, RiDoubleQuotesL, RiBuildingLine, RiUserLine } from 'react-icons/ri';

const testimonials = [
  { name: 'Rajesh Kumar', role: 'Factory Owner', type: 'Employer', rating: 5, text: 'GigMarket helped me find reliable workers in 2 days. The verification process gives me peace of mind!', avatar: 'RK', color: '#00f2ff', glow: 'rgba(0,242,255,0.4)' },
  { name: 'Priya Sharma', role: 'Construction Worker', type: 'Worker', rating: 5, text: 'I found consistent work through GigMarket. Payments are always on time. This platform changed my life!', avatar: 'PS', color: '#ff00c8', glow: 'rgba(255,0,200,0.4)' },
  { name: 'Mohammed Ali', role: 'School Administrator', type: 'Employer', rating: 5, text: 'Quality workers and quick hiring exceeded our expectations. Highly recommend!', avatar: 'MA', color: '#39ff14', glow: 'rgba(57,255,20,0.4)' },
  { name: 'Sunita Devi', role: 'Cleaner', type: 'Worker', rating: 5, text: 'GigMarket gave me access to many opportunities. The platform is trustworthy. Thank you!', avatar: 'SD', color: '#8a2be2', glow: 'rgba(138,43,226,0.4)' },
];

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    const el = document.getElementById('testimonials');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-16 lg:py-24 relative" style={{ background: '#0b0b15' }}>
      <div className="site-container">
        <div className="text-center mb-12">
          <div className="section-badge mb-4" style={{ background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.3)', color: '#ffd700' }}>
            ⭐ TESTIMONIALS
          </div>
          <h2 className="font-bold mb-3" style={{ fontFamily: 'Orbitron, sans-serif', color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            What Users <span className="gradient-text-multi">Say</span>
          </h2>
        </div>

        {/* Summary row */}
        <div className="flex justify-center gap-12 lg:gap-20 mb-12">
          {[
            { value: '50K+', label: 'Workers', color: '#00f2ff' },
            { value: '10K+', label: 'Employers', color: '#39ff14' },
            { value: '4.9/5', label: 'Rating', color: '#ffd700' },
          ].map(({ value, label, color }, i) => (
            <div key={i} className="text-center">
              <div className="font-black" style={{ fontFamily: 'Orbitron, sans-serif', color, textShadow: `0 0 12px ${color}80`, fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}>
                {value}
              </div>
              <div className="text-xs lg:text-sm" style={{ color: 'rgba(220,220,240,0.4)' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* 1-col mobile → 2-col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`neon-card p-5 lg:p-7 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms`, borderColor: `${t.color}25` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{ background: `${t.color}20`, border: `2px solid ${t.color}60`, color: t.color, boxShadow: `0 0 15px ${t.glow}` }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm lg:text-base" style={{ color: '#fff' }}>{t.name}</div>
                    <div className="flex items-center gap-1 text-xs" style={{ color: 'rgba(220,220,240,0.5)' }}>
                      {t.type === 'Employer' ? <RiBuildingLine size={11} /> : <RiUserLine size={11} />}
                      {t.role}
                    </div>
                  </div>
                </div>
                <RiDoubleQuotesL size={24} style={{ color: t.color, opacity: 0.4 }} />
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => <RiStarFill key={i} size={15} className="neon-star" />)}
              </div>
              <p className="text-xs lg:text-sm leading-relaxed italic" style={{ color: 'rgba(220,220,240,0.65)' }}>
                "{t.text}"
              </p>
              <div className="mt-3">
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: `${t.color}15`, border: `1px solid ${t.color}40`, color: t.color }}>
                  {t.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
