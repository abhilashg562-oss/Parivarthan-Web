import { useEffect, useState } from 'react';
import { RiFileTextLine, RiGroupLine, RiCheckboxCircleLine, RiDashboardLine, RiArrowRightLine } from 'react-icons/ri';
import { useNavigate } from '@tanstack/react-router';

const steps = [
  { icon: RiFileTextLine, title: 'Post a Job', description: 'Create a job posting with requirements and budget in minutes.', step: '01', color: '#00f2ff', glow: 'rgba(0,242,255,0.4)' },
  { icon: RiGroupLine, title: 'Workers Apply', description: 'Verified workers near you apply with their profiles.', step: '02', color: '#ff00c8', glow: 'rgba(255,0,200,0.4)' },
  { icon: RiCheckboxCircleLine, title: 'Hire Instantly', description: 'Review applications and hire the best worker instantly.', step: '03', color: '#39ff14', glow: 'rgba(57,255,20,0.4)' },
  { icon: RiDashboardLine, title: 'Track Status', description: 'Monitor job progress in real-time via dashboard.', step: '04', color: '#8a2be2', glow: 'rgba(138,43,226,0.4)' },
];

export default function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    const section = document.getElementById('how-it-works');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-16 lg:py-24 relative overflow-hidden" style={{ background: '#0b0b15' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #00f2ff, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #ff00c8, transparent)' }} />
      </div>

      <div className="site-container">
        <div className="text-center mb-12 lg:mb-16">
          <div className="section-badge mb-4" style={{ background: 'rgba(0,242,255,0.08)', border: '1px solid rgba(0,242,255,0.2)', color: '#00f2ff' }}>
            ⚙️ PROTOCOL
          </div>
          <h2 className="font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif', color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Get Started in <span className="gradient-text-multi">4 Steps</span>
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto" style={{ color: 'rgba(220,220,240,0.5)' }}>
            Post • Apply • Hire • Track
          </p>
        </div>

        {/* 2-col mobile → 4-col desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`neon-card p-5 lg:p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms`, borderColor: `${step.color}30` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold" style={{ fontFamily: 'Orbitron, sans-serif', color: step.color, textShadow: `0 0 10px ${step.glow}` }}>
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${step.color}15`, border: `1px solid ${step.color}40` }}>
                    <Icon size={20} style={{ color: step.color, filter: `drop-shadow(0 0 4px ${step.glow})` }} />
                  </div>
                </div>
                <h3 className="font-semibold text-sm lg:text-base mb-2" style={{ color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-xs lg:text-sm leading-relaxed" style={{ color: 'rgba(220,220,240,0.45)' }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <button className="neon-btn flex items-center gap-2 mx-auto" onClick={() => navigate({ to: '/download' })}>
            Start Hiring Now <RiArrowRightLine size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
