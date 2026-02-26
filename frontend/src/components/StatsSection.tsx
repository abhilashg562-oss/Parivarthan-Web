import { useEffect, useState } from 'react';
import { RiGroupLine, RiBriefcaseLine, RiStarLine, RiMapPinLine, RiTrophyLine } from 'react-icons/ri';

const stats = [
  { icon: RiGroupLine, value: '50,000+', label: 'Active Workers', desc: 'Verified & ready', color: '#00f2ff', glow: 'rgba(0,242,255,0.5)' },
  { icon: RiBriefcaseLine, value: '100K+', label: 'Jobs Done', desc: 'Successful hires', color: '#39ff14', glow: 'rgba(57,255,20,0.5)' },
  { icon: RiStarLine, value: '4.9/5', label: 'Avg Rating', desc: 'Based on reviews', color: '#ffd700', glow: 'rgba(255,215,0,0.5)' },
  { icon: RiMapPinLine, value: '500+', label: 'Cities', desc: 'Pan India', color: '#ff00c8', glow: 'rgba(255,0,200,0.5)' },
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.3 });
    const el = document.getElementById('stats');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-16 lg:py-24 relative overflow-hidden" style={{ background: '#0b0b15' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #8a2be2, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #00f2ff, transparent)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-[600px] lg:h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(138,43,226,0.08) 0%, transparent 70%)' }} />
      </div>

      <div className="site-container">
        <div className="text-center mb-12">
          <div className="section-badge mb-4" style={{ background: 'rgba(138,43,226,0.08)', border: '1px solid rgba(138,43,226,0.3)', color: '#c084fc' }}>
            📊 IMPACT
          </div>
          <h2 className="font-bold" style={{ fontFamily: 'Orbitron, sans-serif', color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Trusted by <span className="gradient-text-multi">Thousands</span>
          </h2>
        </div>

        {/* 2-col mobile → 4-col desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`neon-card p-6 lg:p-8 text-center transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${index * 80}ms`, borderColor: `${stat.color}25` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}40` }}>
                    <Icon size={26} style={{ color: stat.color, filter: `drop-shadow(0 0 6px ${stat.glow})` }} />
                  </div>
                </div>
                <div className="font-black mb-1" style={{
                  fontFamily: 'Orbitron, sans-serif',
                  color: stat.color,
                  textShadow: `0 0 15px ${stat.glow}`,
                  fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
                }}>
                  {stat.value}
                </div>
                <div className="font-semibold mb-1" style={{ color: 'rgba(220,220,240,0.9)', fontSize: '0.9rem' }}>{stat.label}</div>
                <div className="text-xs" style={{ color: 'rgba(220,220,240,0.4)' }}>{stat.desc}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,215,0,0.3)' }}>
            <RiTrophyLine size={22} style={{ color: '#ffd700', filter: 'drop-shadow(0 0 6px rgba(255,215,0,0.6))' }} />
            <span className="text-sm font-medium" style={{ color: 'rgba(220,220,240,0.7)', fontFamily: 'Poppins, sans-serif' }}>
              Award Winning Platform 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
