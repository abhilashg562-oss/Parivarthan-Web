import { useState, useEffect } from 'react';
import { RiBriefcaseLine, RiStarLine, RiGroupLine, RiMoneyDollarCircleLine, RiFlashlightFill } from 'react-icons/ri';

const stats = [
    { icon: RiBriefcaseLine, label: 'Jobs Posted', value: 0, target: 12, color: '#00f2ff' },
    { icon: RiStarLine, label: 'Avg Rating', value: 0, target: 4.9, color: '#ffd700', isFloat: true },
    { icon: RiGroupLine, label: 'Workers Hired', value: 0, target: 37, color: '#39ff14' },
    { icon: RiMoneyDollarCircleLine, label: 'Total Spent', value: 0, target: 850, color: '#ff00c8' },
];

export default function DashboardPage() {
    const [visible, setVisible] = useState(false);
    const [counters, setCounters] = useState(stats.map(s => ({ current: 0, target: s.target })));

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 80);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        if (!visible) return;
        const interval = setInterval(() => {
            setCounters(prev => prev.map((c, i) => ({
                ...c,
                current: Math.min(c.current + (stats[i].isFloat ? 0.05 : c.target / 30), c.target),
            })));
        }, 40);
        return () => clearInterval(interval);
    }, [visible]);

    return (
        <div
            className="min-h-screen pb-nav relative overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #0b0b15 0%, #0f0f1a 60%, #150b25 100%)' }}
        >
            {/* BG orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #00f2ff, transparent)' }} />
                <div className="absolute top-32 left-0 w-80 h-80 rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(0,242,255,0.07) 0%, transparent 70%)' }} />
                <div className="absolute bottom-40 right-0 w-64 h-64 rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(138,43,226,0.07) 0%, transparent 70%)' }} />
                <div className="absolute inset-0 opacity-[0.025]" style={{
                    backgroundImage: 'linear-gradient(rgba(0,242,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,255,1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className={`relative z-10 mobile-container mx-auto px-4 py-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                {/* Welcome */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center"
                            style={{ background: 'linear-gradient(135deg, #00f2ff, #8a2be2)', boxShadow: '0 0 20px rgba(0,242,255,0.4)' }}>
                            <RiFlashlightFill size={22} color="#0f0f1a" />
                        </div>
                        <div>
                            <p className="text-xs mb-0.5" style={{ color: 'rgba(220,220,240,0.4)', fontFamily: 'Poppins, sans-serif' }}>
                                Welcome back,
                            </p>
                            <h1 className="text-xl font-black" style={{
                                fontFamily: 'Orbitron, sans-serif',
                                background: 'linear-gradient(135deg, #00f2ff, #ff00c8)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>
                                COMMANDER ⚡
                            </h1>
                        </div>
                    </div>

                    <div className="neon-card p-4 flex items-center gap-3">
                        <span className="text-2xl">🎯</span>
                        <div>
                            <div className="text-sm font-semibold" style={{ color: '#fff' }}>Dashboard Active</div>
                            <div className="text-xs" style={{ color: 'rgba(220,220,240,0.45)' }}>Your hiring command center</div>
                        </div>
                        <span className="badge-available ml-auto">LIVE</span>
                    </div>
                </div>

                {/* Stat cards */}
                <div className="mb-6">
                    <h2 className="text-xs font-semibold tracking-widest mb-4" style={{ fontFamily: 'Orbitron, sans-serif', color: 'rgba(220,220,240,0.4)' }}>
                        YOUR STATS
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            const current = counters[index]?.current ?? 0;
                            const displayValue = stat.isFloat ? current.toFixed(1) : Math.floor(current);
                            const suffix = stat.label === 'Total Spent' ? '₹' : '';
                            return (
                                <div
                                    key={index}
                                    className={`neon-card p-5 text-center transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                                    style={{ transitionDelay: `${200 + index * 80}ms`, borderColor: `${stat.color}25` }}
                                >
                                    <div className="flex justify-center mb-3">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                                            style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}40` }}>
                                            <Icon size={20} style={{ color: stat.color, filter: `drop-shadow(0 0 5px ${stat.color}80)` }} />
                                        </div>
                                    </div>
                                    <div className="text-2xl font-black mb-0.5" style={{
                                        fontFamily: 'Orbitron, sans-serif',
                                        color: stat.color,
                                        textShadow: `0 0 12px ${stat.color}80`,
                                    }}>
                                        {suffix}{displayValue}{stat.label === 'Total Spent' ? '+' : ''}
                                    </div>
                                    <div className="text-[10px]" style={{ color: 'rgba(220,220,240,0.45)' }}>{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Recent Activity placeholder */}
                <div>
                    <h2 className="text-xs font-semibold tracking-widest mb-4" style={{ fontFamily: 'Orbitron, sans-serif', color: 'rgba(220,220,240,0.4)' }}>
                        RECENT ACTIVITY
                    </h2>
                    <div className="neon-card p-6 flex flex-col items-center text-center gap-3">
                        <div className="text-4xl">🚀</div>
                        <div className="text-sm font-semibold" style={{ color: '#fff' }}>No activity yet</div>
                        <div className="text-xs" style={{ color: 'rgba(220,220,240,0.35)' }}>Post your first job to get started</div>
                        <button className="neon-btn text-xs px-6 py-2 mt-2">
                            Post a Job
                        </button>
                    </div>
                </div>

                {/* Quick actions */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                    {[
                        { emoji: '🔍', label: 'Find Workers', color: '#00f2ff' },
                        { emoji: '🗺️', label: 'Map View', color: '#39ff14' },
                        { emoji: '📋', label: 'My Jobs', color: '#ff00c8' },
                    ].map((action, i) => (
                        <div key={i} className="neon-card p-3 flex flex-col items-center gap-1.5 cursor-pointer text-center">
                            <span className="text-xl">{action.emoji}</span>
                            <span className="text-[10px] font-medium" style={{ color: action.color }}>{action.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
