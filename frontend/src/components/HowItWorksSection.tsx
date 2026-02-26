import { useEffect, useState } from 'react';
import { RiFileTextLine, RiGroupLine, RiCheckboxCircleLine, RiDashboardLine, RiArrowRightLine } from 'react-icons/ri';
import { useNavigate } from '@tanstack/react-router';

const steps = [
  {
    icon: RiFileTextLine,
    title: 'Post a Job',
    description: 'Create a job posting with requirements and budget in minutes.',
    step: '01',
    color: '#00f2ff',
    glow: 'rgba(0,242,255,0.4)',
  },
  {
    icon: RiGroupLine,
    title: 'Workers Apply',
    description: 'Verified workers near you apply with their profiles.',
    step: '02',
    color: '#ff00c8',
    glow: 'rgba(255,0,200,0.4)',
  },
  {
    icon: RiCheckboxCircleLine,
    title: 'Hire Instantly',
    description: 'Review applications and hire the best worker instantly.',
    step: '03',
    color: '#39ff14',
    glow: 'rgba(57,255,20,0.4)',
  },
  {
    icon: RiDashboardLine,
    title: 'Track Status',
    description: 'Monitor job progress in real-time via dashboard.',
    step: '04',
    color: '#8a2be2',
    glow: 'rgba(138,43,226,0.4)',
  },
];

export default function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const section = document.getElementById('how-it-works');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-16 relative overflow-hidden" style={{ background: '#0b0b15' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #00f2ff, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #ff00c8, transparent)' }} />
      </div>

      <div className="mobile-container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-4"
            style={{ background: 'rgba(0,242,255,0.08)', border: '1px solid rgba(0,242,255,0.2)', color: '#00f2ff' }}>
            ⚙️ PROTOCOL
          </div>
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Orbitron, sans-serif', color: '#ffffff' }}>
            Get Started in <span className="gradient-text-multi">4 Steps</span>
          </h2>
          <p className="text-sm" style={{ color: 'rgba(220,220,240,0.5)' }}>
            Post • Apply • Hire • Track
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`neon-card p-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  borderColor: `${step.color}30`,
                  cursor: 'default',
                }}
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold" style={{
                    fontFamily: 'Orbitron, sans-serif',
                    color: step.color,
                    textShadow: `0 0 10px ${step.glow}`,
                  }}>
                    {step.step}
                  </span>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: `${step.color}15`, border: `1px solid ${step.color}40` }}>
                    <Icon size={18} style={{ color: step.color, filter: `drop-shadow(0 0 4px ${step.glow})` }} />
                  </div>
                </div>
                <h3 className="font-semibold text-sm mb-1" style={{ color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(220,220,240,0.45)' }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button
            className="neon-btn flex items-center gap-2 mx-auto"
            onClick={() => navigate({ to: '/download' })}
          >
            Start Hiring Now
            <RiArrowRightLine size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
