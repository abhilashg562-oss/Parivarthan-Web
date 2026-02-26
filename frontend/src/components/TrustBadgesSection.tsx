import { useEffect, useState } from 'react';
import { RiShieldCheckLine, RiBankCardLine, RiStarLine, RiCheckboxCircleLine, RiLockLine } from 'react-icons/ri';

const badges = [
  { icon: RiShieldCheckLine, title: 'Verified Platform', description: 'All workers background-checked', stat: '100%', color: '#39ff14', glow: 'rgba(57,255,20,0.4)' },
  { icon: RiBankCardLine, title: 'Secure Payments', description: 'Multi-option with encryption', stat: 'SSL', color: '#00f2ff', glow: 'rgba(0,242,255,0.4)' },
  { icon: RiStarLine, title: 'Quality Service', description: 'Rated 4.9/5 by users', stat: '4.9★', color: '#ffd700', glow: 'rgba(255,215,0,0.4)' },
];

export default function TrustBadgesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const section = document.getElementById('trust-badges');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="trust-badges" className="py-16 relative" style={{ background: '#0f0f1a' }}>
      <div className="mobile-container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-4"
            style={{ background: 'rgba(57,255,20,0.08)', border: '1px solid rgba(57,255,20,0.25)', color: '#39ff14' }}>
            🔒 TRUST & SAFETY
          </div>
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Orbitron, sans-serif', color: '#fff' }}>
            Why Trust <span className="gradient-text-multi">GigMarket</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className={`neon-card p-5 flex items-center gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms`, borderColor: `${badge.color}25` }}
              >
                <div className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center relative"
                  style={{ background: `${badge.color}12`, border: `1px solid ${badge.color}40` }}>
                  <Icon size={26} style={{ color: badge.color, filter: `drop-shadow(0 0 6px ${badge.glow})` }} />
                  {/* Stat overlay */}
                  <div className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full text-[9px] font-bold"
                    style={{ background: badge.color, color: '#0f0f1a' }}>
                    {badge.stat}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-0.5" style={{ color: '#fff' }}>{badge.title}</h3>
                  <p className="text-xs" style={{ color: 'rgba(220,220,240,0.45)' }}>{badge.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {[
            { icon: RiCheckboxCircleLine, text: 'Verified Workers', color: '#39ff14' },
            { icon: RiLockLine, text: 'Secure Transactions', color: '#00f2ff' },
            { icon: RiShieldCheckLine, text: 'Trusted Platform', color: '#ff00c8' },
          ].map(({ icon: Icon, text, color }, i) => (
            <div key={i} className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs"
              style={{ background: `${color}08`, border: `1px solid ${color}25`, color }}>
              <Icon size={13} />
              {text}
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-xs" style={{ color: 'rgba(220,220,240,0.3)' }}>
            🔒 Your data is protected with enterprise-grade security
          </p>
        </div>
      </div>
    </section>
  );
}
