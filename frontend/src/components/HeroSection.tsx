import { useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { RiDownloadLine, RiArrowRightLine, RiShieldCheckLine, RiUserLine, RiFlashlightLine } from 'react-icons/ri';

export default function HeroSection() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative overflow-hidden pb-nav"
      style={{
        minHeight: '100svh',
        background: 'linear-gradient(160deg, #0b0b15 0%, #0f0f1a 60%, #150b25 100%)',
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, rgba(0,242,255,0.12) 0%, transparent 70%)', animationDuration: '4s' }} />
        <div className="absolute bottom-32 right-1/4 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, rgba(255,0,200,0.1) 0%, transparent 70%)', animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[700px] md:h-[700px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(138,43,226,0.07) 0%, transparent 70%)' }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(0,242,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* ─── DESKTOP: two-column layout ─── */}
      <div className="site-container relative z-10 flex flex-col lg:flex-row lg:items-center lg:gap-16 pt-10 lg:pt-0" style={{ minHeight: 'inherit' }}>

        {/* LEFT: Text content */}
        <div className={`flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:py-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
            style={{
              background: 'rgba(0,242,255,0.08)',
              border: '1px solid rgba(0,242,255,0.3)',
              color: '#00f2ff',
              boxShadow: '0 0 15px rgba(0,242,255,0.15)',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] animate-pulse" style={{ boxShadow: '0 0 6px #00f2ff' }} />
            ⚡ Trusted by 10,000+ Employers Across India
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="font-black leading-tight tracking-wide"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
              }}>
              <span className="gradient-text-blue">HIRE</span>
              {' '}<span style={{ background: 'linear-gradient(135deg, #ff00c8, #8a2be2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>TRUSTED</span>
              <br />
              <span className="gradient-text-multi">LOCAL WORKERS</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{ color: 'rgba(220,220,240,0.6)', fontFamily: 'Poppins, sans-serif' }}>
              Connect with verified workers for factory work, construction, school staff, drivers, cleaners, and more. Fast, reliable, and trusted by thousands across India.
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex gap-6 lg:gap-10">
            {[
              { icon: RiUserLine, value: '50K+', label: 'Workers', color: '#00f2ff' },
              { icon: RiShieldCheckLine, value: '100%', label: 'Verified', color: '#39ff14' },
              { icon: RiFlashlightLine, value: '24/7', label: 'Support', color: '#ff00c8' },
            ].map(({ icon: Icon, value, label, color }, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex items-center gap-1">
                  <Icon size={14} style={{ color }} />
                  <span className="font-bold" style={{ color, fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(1rem, 2vw, 1.4rem)', textShadow: `0 0 10px ${color}80` }}>
                    {value}
                  </span>
                </div>
                <span className="text-[10px] md:text-xs" style={{ color: 'rgba(220,220,240,0.4)', fontFamily: 'Poppins, sans-serif' }}>{label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none lg:w-auto">
            <button
              className="neon-btn neon-btn-solid"
              style={{ padding: '14px 32px', fontSize: '0.9rem' }}
              onClick={() => navigate({ to: '/download' })}
            >
              <RiDownloadLine size={18} />
              Download APK
            </button>
            <button
              className="neon-btn"
              style={{ padding: '14px 32px', fontSize: '0.9rem' }}
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
              <RiArrowRightLine size={18} />
            </button>
          </div>

          {/* Trust card */}
          <div
            className="neon-card p-4 flex items-center gap-3 w-full max-w-xs sm:max-w-sm"
            style={{ transitionDelay: '400ms' }}
          >
            <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(57,255,20,0.2), rgba(0,242,255,0.1))', border: '1px solid rgba(57,255,20,0.4)' }}>
              <RiShieldCheckLine size={20} style={{ color: '#39ff14', filter: 'drop-shadow(0 0 6px #39ff14)' }} />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold" style={{ color: '#39ff14', fontFamily: 'Orbitron, sans-serif' }}>VERIFIED WORKERS</div>
              <div className="text-[10px]" style={{ color: 'rgba(220,220,240,0.5)' }}>Background checked • 100% trusted</div>
            </div>
            <span className="badge-available ml-auto">LIVE</span>
          </div>
        </div>

        {/* RIGHT: Visual panel (desktop only) */}
        <div
          className={`hidden lg:flex flex-1 flex-col items-center justify-center gap-6 py-24 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
          {/* Big neon card grid */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            {[
              { emoji: '🏭', label: 'Factory Work', workers: '5,000+', color: '#00f2ff' },
              { emoji: '🏗️', label: 'Construction', workers: '4,800+', color: '#ff00c8' },
              { emoji: '🔧', label: 'Technicians', workers: '2,900+', color: '#8a2be2' },
              { emoji: '🚗', label: 'Drivers', workers: '4,200+', color: '#39ff14' },
              { emoji: '🏫', label: 'School Staff', workers: '3,200+', color: '#ffd700' },
              { emoji: '🤝', label: 'Helpers', workers: '6,500+', color: '#00f2ff' },
            ].map((cat, i) => (
              <div
                key={i}
                className="neon-card p-4 flex flex-col items-center text-center gap-2 cursor-default"
                style={{
                  borderColor: `${cat.color}22`,
                  transitionDelay: `${200 + i * 60}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.7s ease',
                }}
              >
                <span className="text-2xl">{cat.emoji}</span>
                <div className="text-xs font-semibold" style={{ color: '#fff' }}>{cat.label}</div>
                <div className="text-[10px] font-bold" style={{ color: cat.color, textShadow: `0 0 8px ${cat.color}80` }}>{cat.workers}</div>
              </div>
            ))}
          </div>

          {/* Floating live indicator */}
          <div
            className="neon-card px-5 py-3 flex items-center gap-3"
            style={{ borderColor: 'rgba(57,255,20,0.3)', boxShadow: '0 0 20px rgba(57,255,20,0.1)' }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#39ff14] animate-pulse" style={{ boxShadow: '0 0 8px #39ff14' }} />
            <span className="text-sm font-medium" style={{ color: '#39ff14', fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem' }}>
              WORKERS AVAILABLE NOW
            </span>
            <span className="text-sm font-bold" style={{ color: '#fff', fontFamily: 'Orbitron, sans-serif' }}>2,847</span>
          </div>
        </div>

      </div>

      {/* Scroll indicator (hidden on desktop) */}
      <div className="lg:hidden flex flex-col items-center gap-2 mt-6 pb-2" style={{ color: 'rgba(220,220,240,0.3)' }}>
        <span className="text-[10px]" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.1em' }}>SCROLL TO EXPLORE</span>
        <div className="w-px h-8 rounded-full" style={{ background: 'linear-gradient(180deg, rgba(0,242,255,0.5), transparent)' }} />
      </div>
    </section>
  );
}
