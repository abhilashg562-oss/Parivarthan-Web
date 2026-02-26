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
    <section className="relative overflow-hidden pb-nav" style={{ minHeight: '100svh', background: 'linear-gradient(180deg, #0b0b15 0%, #0f0f1a 100%)' }}>
      {/* Neon Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 left-1/4 w-72 h-72 rounded-full blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, rgba(0,242,255,0.12) 0%, transparent 70%)', animationDuration: '4s' }} />
        <div className="absolute bottom-32 right-1/4 w-72 h-72 rounded-full blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, rgba(255,0,200,0.1) 0%, transparent 70%)', animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(138,43,226,0.07) 0%, transparent 70%)' }} />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(0,242,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 mobile-container mx-auto px-4 pt-10 flex flex-col items-center text-center gap-6">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{
            background: 'rgba(0,242,255,0.08)',
            border: '1px solid rgba(0,242,255,0.3)',
            color: '#00f2ff',
            fontFamily: 'Poppins, sans-serif',
            boxShadow: '0 0 15px rgba(0,242,255,0.15)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] animate-pulse" style={{ boxShadow: '0 0 6px #00f2ff' }} />
          ⚡ Trusted by 10,000+ Employers Across India
        </div>

        {/* Main Heading */}
        <div
          className={`space-y-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h1 className="text-4xl font-black leading-tight tracking-wide" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="gradient-text-blue">HIRE</span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #ff00c8, #8a2be2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>TRUSTED</span>
            <br />
            <span className="gradient-text-multi">WORKERS</span>
          </h1>
          <p className="text-sm leading-relaxed px-4" style={{ color: 'rgba(220,220,240,0.6)', fontFamily: 'Poppins, sans-serif' }}>
            Connect with verified workers • Fast, reliable & secure
          </p>
        </div>

        {/* Stats Row */}
        <div
          className={`flex gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {[
            { icon: RiUserLine, value: '50K+', label: 'Workers', color: '#00f2ff' },
            { icon: RiShieldCheckLine, value: '100%', label: 'Verified', color: '#39ff14' },
            { icon: RiFlashlightLine, value: '24/7', label: 'Support', color: '#ff00c8' },
          ].map(({ icon: Icon, value, label, color }, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1">
                <Icon size={14} style={{ color }} />
                <span className="text-lg font-bold" style={{ color, fontFamily: 'Orbitron, sans-serif', fontSize: '1.1rem', textShadow: `0 0 10px ${color}80` }}>
                  {value}
                </span>
              </div>
              <span className="text-[10px]" style={{ color: 'rgba(220,220,240,0.4)', fontFamily: 'Poppins, sans-serif' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col gap-3 w-full max-w-xs transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <button
            className="neon-btn-solid neon-btn flex items-center justify-center gap-2"
            onClick={() => navigate({ to: '/download' })}
          >
            <RiDownloadLine size={17} />
            Download APK
          </button>
          <button
            className="neon-btn flex items-center justify-center gap-2"
            onClick={() => { document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Get Started
            <RiArrowRightLine size={17} />
          </button>
        </div>

        {/* Glassmorphism floating card */}
        <div
          className={`neon-card p-4 w-full max-w-xs flex items-center gap-3 transition-all duration-700 delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ marginTop: '8px' }}
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

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 mt-4" style={{ color: 'rgba(220,220,240,0.3)' }}>
          <span className="text-[10px]" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.1em' }}>SCROLL TO EXPLORE</span>
          <div className="w-px h-8 rounded-full" style={{ background: 'linear-gradient(180deg, rgba(0,242,255,0.5), transparent)' }} />
        </div>
      </div>
    </section>
  );
}
