import { useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { RiDownloadLine, RiArrowRightLine, RiCheckboxCircleLine } from 'react-icons/ri';

const benefits = ['Quick worker hiring', 'Verified professionals', 'Secure payments', '24/7 support'];

export default function CTAFooter() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    const section = document.getElementById('cta-footer');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-footer" className="py-16 relative overflow-hidden" style={{ background: '#0b0b15' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(0,242,255,0.1) 0%, transparent 70%)' }} />
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #ff00c8, transparent)' }} />
      </div>

      <div className={`mobile-container mx-auto px-4 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-6"
          style={{ background: 'rgba(255,0,200,0.08)', border: '1px solid rgba(255,0,200,0.3)', color: '#ff00c8' }}>
          ✨ JOIN 50,000+ HAPPY USERS
        </div>

        <h2 className="text-2xl font-black mb-3 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          <span className="gradient-text-blue">Ready to</span>
          <br />
          <span className="gradient-text-multi">Transform</span>
          <br />
          <span style={{ color: '#fff' }}>Your Hiring?</span>
        </h2>

        <p className="text-sm mb-6 mx-4" style={{ color: 'rgba(220,220,240,0.55)' }}>
          Join employers and workers who trust GigMarket daily.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
              style={{ background: 'rgba(57,255,20,0.08)', border: '1px solid rgba(57,255,20,0.2)', color: '#39ff14' }}>
              <RiCheckboxCircleLine size={13} />
              {b}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 max-w-xs mx-auto">
          <button
            className="neon-btn neon-btn-solid flex items-center justify-center gap-2"
            onClick={() => navigate({ to: '/download' })}
          >
            <RiDownloadLine size={17} />
            Download APK Now
            <RiArrowRightLine size={17} />
          </button>
          <button
            className="neon-btn flex items-center justify-center gap-2"
            onClick={() => navigate({ to: '/about' })}
          >
            Learn More
            <RiArrowRightLine size={16} />
          </button>
        </div>

        <p className="text-[11px] mt-5" style={{ color: 'rgba(220,220,240,0.3)' }}>
          🔒 Free to download • No hidden charges • Cancel anytime
        </p>
      </div>
    </section>
  );
}
