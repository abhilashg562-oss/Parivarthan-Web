import { useEffect, useState } from 'react';
import { RiFlashlightFill } from 'react-icons/ri';

const categories = [
  { name: 'Factory Work', emoji: '🏭', workers: '5,000+', color: '#00f2ff' },
  { name: 'School Staff', emoji: '🏫', workers: '3,200+', color: '#ff00c8' },
  { name: 'Construction', emoji: '🏗️', workers: '4,800+', color: '#ffd700' },
  { name: 'Helpers', emoji: '🤝', workers: '6,500+', color: '#39ff14' },
  { name: 'Drivers', emoji: '🚗', workers: '4,200+', color: '#00f2ff' },
  { name: 'Cleaners', emoji: '🧹', workers: '5,100+', color: '#ff00c8' },
  { name: 'Technicians', emoji: '🔧', workers: '2,900+', color: '#8a2be2' },
];

export default function WorkerCategoriesGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeChip, setActiveChip] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    const el = document.getElementById('categories');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="categories" className="py-16 lg:py-24 relative" style={{ background: '#0f0f1a' }}>
      <div className="site-container">
        <div className="text-center mb-10">
          <div className="section-badge mb-4" style={{ background: 'rgba(0,242,255,0.08)', border: '1px solid rgba(0,242,255,0.25)', color: '#00f2ff' }}>
            🔍 BROWSE
          </div>
          <h2 className="font-bold mb-2" style={{ fontFamily: 'Orbitron, sans-serif', color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Find By <span className="gradient-text-multi">Category</span>
          </h2>
          <p className="text-xs lg:text-sm" style={{ color: 'rgba(220,220,240,0.5)' }}>Tap a category to filter workers</p>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveChip(activeChip === index ? null : index)}
              className="neon-chip"
              style={activeChip === index ? {
                background: `${cat.color}20`,
                borderColor: `${cat.color}60`,
                color: cat.color,
                boxShadow: `0 0 12px ${cat.color}40`,
              } : {}}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>

        {/* 2-col mobile → 4-col md → 8-col lg (all in one row on large screens) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-3 lg:gap-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`neon-card p-4 lg:p-5 text-center cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${activeChip === index ? 'scale-[1.04]' : ''}`}
              style={{
                transitionDelay: `${index * 70}ms`,
                borderColor: activeChip === index ? `${cat.color}50` : `${cat.color}15`,
                boxShadow: activeChip === index ? `0 0 25px ${cat.color}30` : '',
              }}
              onClick={() => setActiveChip(activeChip === index ? null : index)}
            >
              <div className="text-3xl lg:text-4xl mb-2">{cat.emoji}</div>
              <div className="font-semibold text-xs mb-1" style={{ color: activeChip === index ? cat.color : '#fff', fontFamily: 'Poppins, sans-serif' }}>
                {cat.name}
              </div>
              <div className="text-[10px] font-semibold" style={{ color: cat.color, textShadow: `0 0 8px ${cat.color}80` }}>
                {cat.workers}
              </div>
            </div>
          ))}
          {/* View all */}
          <div className="neon-card p-4 lg:p-5 text-center cursor-pointer flex flex-col items-center justify-center gap-2"
            style={{ borderColor: 'rgba(138,43,226,0.3)' }}>
            <RiFlashlightFill size={24} style={{ color: '#8a2be2', filter: 'drop-shadow(0 0 6px rgba(138,43,226,0.6))' }} />
            <div className="text-xs font-semibold" style={{ color: '#8a2be2', fontFamily: 'Orbitron, sans-serif', fontSize: '0.65rem' }}>
              VIEW ALL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
