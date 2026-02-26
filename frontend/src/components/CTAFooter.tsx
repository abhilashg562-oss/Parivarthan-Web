import { useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { RiDownloadLine, RiArrowRightLine, RiCheckboxCircleLine } from 'react-icons/ri';

const benefits = ['Quick worker hiring', 'Verified professionals', 'Secure payments', '24/7 support'];

export default function CTAFooter() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.3 });
    const el = document.getElementById('cta-footer');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-footer" className="py-16 lg:py-24 relative overflow-hidden" style={{ background: '#0b0b15' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(0,242,255,0.08) 0%, transparent 70%)' }} />
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #ff00c8, transparent)' }} />
      </div>

      <div className={`site-container text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="section-badge mb-6 mx-auto" style={{ background: 'rgba(255,0,200,0.08)', border: '1px solid rgba(255,0,200,0.3)', color: '#ff00c8' }}>
          ✨ JOIN 50,000+ HAPPY USERS
        </div>

        <h2 className="font-black mb-4 leading-tight mx-auto" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', maxWidth: '800px' }}>
          <span className="gradient-text-blue">Ready to Transform</span>{' '}
          <span className="gradient-text-multi">Your Hiring?</span>
        </h2>

        <p className="text-sm md:text-base lg:text-lg mb-8 mx-auto" style={{ color: 'rgba(220,220,240,0.55)', maxWidth: '560px' }}>
          Join employers and workers who trust GigMarket daily for fast, verified hiring across India.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs lg:text-sm"
              style={{ background: 'rgba(57,255,20,0.08)', border: '1px solid rgba(57,255,20,0.2)', color: '#39ff14' }}>
              <RiCheckboxCircleLine size={14} />
              {b}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="neon-btn neon-btn-solid flex items-center justify-center gap-2"
            style={{ padding: '14px 36px', fontSize: '0.95rem' }}
            onClick={() => navigate({ to: '/download' })}>
            <RiDownloadLine size={18} /> Download APK Now <RiArrowRightLine size={18} />
          </button>
          <button className="neon-btn flex items-center justify-center gap-2"
            style={{ padding: '14px 36px', fontSize: '0.95rem' }}
            onClick={() => navigate({ to: '/about' })}>
            Learn More <RiArrowRightLine size={16} />
          </button>
        </div>

        <p className="text-xs mt-6" style={{ color: 'rgba(220,220,240,0.3)' }}>
          🔒 Free to download • No hidden charges • Cancel anytime
        </p>
      </div>
    </section>
  );
}
