import { Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { RiInformationLine, RiBookOpenLine, RiChat3Line, RiAlertLine, RiDownloadLine, RiArrowRightLine } from 'react-icons/ri';

const navigationItems = [
  { icon: RiInformationLine, title: 'About Application', description: 'Learn about our mission and vision', path: '/about', color: '#00f2ff', glow: 'rgba(0,242,255,0.4)' },
  { icon: RiBookOpenLine, title: 'User Manual', description: 'Step-by-step guides to get started', path: '/manual', color: '#39ff14', glow: 'rgba(57,255,20,0.4)' },
  { icon: RiChat3Line, title: 'Review Centre', description: 'Read and share your experiences', path: '/reviews', color: '#ff00c8', glow: 'rgba(255,0,200,0.4)' },
  { icon: RiAlertLine, title: 'Complaint Box', description: 'Report issues & track status', path: '/complaints', color: '#ffd700', glow: 'rgba(255,215,0,0.4)' },
  { icon: RiDownloadLine, title: 'Download APK', description: 'Get the latest Android app', path: '/download', color: '#8a2be2', glow: 'rgba(138,43,226,0.4)' },
];

export default function NavigationCards() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const section = document.getElementById('navigation');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="navigation" className="py-16 relative" style={{ background: '#0f0f1a' }}>
      <div className="mobile-container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-4"
            style={{ background: 'rgba(138,43,226,0.08)', border: '1px solid rgba(138,43,226,0.3)', color: '#c084fc' }}>
            🚀 EXPLORE
          </div>
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Orbitron, sans-serif', color: '#fff' }}>
            Everything <span className="gradient-text-multi">You Need</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <Link to={item.path}>
                  <div
                    className="neon-card p-4 flex items-center gap-4 group"
                    style={{ borderColor: `${item.color}20` }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}40`,
                      }}
                    >
                      <Icon size={22} style={{ color: item.color, filter: `drop-shadow(0 0 6px ${item.glow})` }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-0.5" style={{ color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-[11px]" style={{ color: 'rgba(220,220,240,0.45)' }}>
                        {item.description}
                      </p>
                    </div>
                    <RiArrowRightLine
                      size={18}
                      className="flex-shrink-0 transition-all duration-300 group-hover:translate-x-1"
                      style={{ color: item.color, filter: `drop-shadow(0 0 4px ${item.glow})` }}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
