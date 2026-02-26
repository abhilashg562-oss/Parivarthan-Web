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
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    const section = document.getElementById('stats');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-16 relative overflow-hidden" style={{ background: '#0b0b15' }}>
      {/* Diagonal neon glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #8a2be2, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #00f2ff, transparent)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(138,43,226,0.08) 0%, transparent 70%)' }} />
      </div>

      <div className="mobile-container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-4"
            style={{ background: 'rgba(138,43,226,0.08)', border: '1px solid rgba(138,43,226,0.3)', color: '#c084fc' }}>
            📊 IMPACT
          </div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif', color: '#fff' }}>
            Trusted by <span className="gradient-text-multi">Thousands</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`neon-card p-5 text-center transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${index * 80}ms`, borderColor: `${stat.color}25` }}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}40` }}>
                    <Icon size={22} style={{ color: stat.color, filter: `drop-shadow(0 0 6px ${stat.glow})` }} />
                  </div>
                </div>
                <div className="text-2xl font-black mb-0.5" style={{
                  fontFamily: 'Orbitron, sans-serif',
                  color: stat.color,
                  textShadow: `0 0 15px ${stat.glow}`,
                }}>
                  {stat.value}
                </div>
                <div className="text-xs font-semibold mb-0.5" style={{ color: 'rgba(220,220,240,0.9)' }}>{stat.label}</div>
                <div className="text-[10px]" style={{ color: 'rgba(220,220,240,0.4)' }}>{stat.desc}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,215,0,0.3)' }}>
            <RiTrophyLine size={20} style={{ color: '#ffd700', filter: 'drop-shadow(0 0 6px rgba(255,215,0,0.6))' }} />
            <span className="text-xs font-medium" style={{ color: 'rgba(220,220,240,0.7)', fontFamily: 'Poppins, sans-serif' }}>
              Award Winning Platform 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
