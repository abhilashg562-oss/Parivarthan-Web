import { useEffect, useState } from 'react';
import { RiShieldCheckLine, RiMapPinLine, RiFlashlightLine, RiStarLine, RiBriefcaseLine, RiTimeLine, RiBankCardLine, RiHeadphoneLine } from 'react-icons/ri';

const features = [
  { icon: RiShieldCheckLine, title: 'Verified Workers', description: 'Background-checked for your safety', color: '#39ff14', glow: 'rgba(57,255,20,0.4)' },
  { icon: RiMapPinLine, title: 'Location Based', description: 'Find workers near you instantly', color: '#00f2ff', glow: 'rgba(0,242,255,0.4)' },
  { icon: RiFlashlightLine, title: 'Quick Hiring', description: 'Hire workers in minutes', color: '#ffd700', glow: 'rgba(255,215,0,0.4)' },
  { icon: RiStarLine, title: 'Ratings & Reviews', description: 'Transparent worker feedback', color: '#ff00c8', glow: 'rgba(255,0,200,0.4)' },
  { icon: RiBriefcaseLine, title: 'Multi-Category', description: '7+ job categories on one platform', color: '#8a2be2', glow: 'rgba(138,43,226,0.4)' },
  { icon: RiTimeLine, title: 'Real-Time Tracking', description: 'Monitor job progress live', color: '#00f2ff', glow: 'rgba(0,242,255,0.4)' },
  { icon: RiBankCardLine, title: 'Secure Payments', description: 'Multiple secure payment options', color: '#39ff14', glow: 'rgba(57,255,20,0.4)' },
  { icon: RiHeadphoneLine, title: '24/7 Support', description: 'Round-the-clock assistance', color: '#ff00c8', glow: 'rgba(255,0,200,0.4)' },
];

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    const el = document.getElementById('features');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-16 lg:py-24 relative" style={{ background: '#0f0f1a' }}>
      <div className="site-container">
        <div className="text-center mb-12">
          <div className="section-badge mb-4" style={{ background: 'rgba(57,255,20,0.08)', border: '1px solid rgba(57,255,20,0.25)', color: '#39ff14' }}>
            🛡️ FEATURES
          </div>
          <h2 className="font-bold mb-3" style={{ fontFamily: 'Orbitron, sans-serif', color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Why <span className="gradient-text-multi">GigMarket?</span>
          </h2>
          <p className="text-sm md:text-base" style={{ color: 'rgba(220,220,240,0.5)' }}>
            Built for speed, trust, and reliability
          </p>
        </div>

        {/* 2-col mobile → 4-col desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`neon-card p-5 lg:p-6 cursor-default transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 60}ms`, borderColor: `${feature.color}20` }}
              >
                <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${feature.color}12`, border: `1px solid ${feature.color}35` }}>
                  <Icon size={22} style={{ color: feature.color, filter: `drop-shadow(0 0 5px ${feature.glow})` }} />
                </div>
                <h3 className="font-semibold text-xs lg:text-sm mb-1" style={{ color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-[11px] lg:text-xs leading-relaxed" style={{ color: 'rgba(220,220,240,0.4)' }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
