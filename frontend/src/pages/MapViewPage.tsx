import { useState, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { RiMapPinLine, RiArrowLeftLine, RiNavigationLine, RiRefreshLine } from 'react-icons/ri';

const providers = [
    { name: 'Arjun S.', role: 'Electrician', x: 42, y: 35, color: '#00f2ff', available: true },
    { name: 'Priya K.', role: 'Cleaner', x: 65, y: 55, color: '#ff00c8', available: true },
    { name: 'Ravi M.', role: 'Driver', x: 28, y: 62, color: '#39ff14', available: false },
    { name: 'Sita D.', role: 'Nurse', x: 75, y: 28, color: '#8a2be2', available: true },
    { name: 'Kumar J.', role: 'Plumber', x: 52, y: 72, color: '#ffd700', available: true },
];

export default function MapViewPage() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);
    const [radiusVisible, setRadiusVisible] = useState(false);

    useEffect(() => {
        const t1 = setTimeout(() => setVisible(true), 80);
        const t2 = setTimeout(() => setRadiusVisible(true), 600);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    return (
        <div className="min-h-screen flex flex-col pb-nav" style={{ background: '#0b0b15' }}>
            {/* Top bar */}
            <div className="relative z-10 px-4 pt-4 pb-3"
                style={{ background: 'rgba(11,11,21,0.9)', borderBottom: '1px solid rgba(0,242,255,0.12)' }}>
                <div className="mobile-container mx-auto flex items-center gap-3">
                    <button onClick={() => navigate({ to: '/' })} style={{ color: 'rgba(220,220,240,0.5)' }}>
                        <RiArrowLeftLine size={20} />
                    </button>
                    <div className="flex-1">
                        <h1 className="text-sm font-bold" style={{ fontFamily: 'Orbitron, sans-serif', color: '#00f2ff' }}>
                            NEARBY WORKERS
                        </h1>
                        <p className="text-[10px]" style={{ color: 'rgba(220,220,240,0.35)' }}>Within 5km radius</p>
                    </div>
                    <button className="p-2 rounded-lg" style={{ background: 'rgba(0,242,255,0.1)', border: '1px solid rgba(0,242,255,0.25)' }}>
                        <RiRefreshLine size={16} style={{ color: '#00f2ff' }} />
                    </button>
                </div>
            </div>

            {/* Map area */}
            <div className={`relative flex-1 mx-4 mt-4 rounded-2xl overflow-hidden transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    minHeight: '340px',
                    background: 'linear-gradient(135deg, #0d1520 0%, #0a1a14 30%, #120d20 60%, #0d1520 100%)',
                    border: '1px solid rgba(0,242,255,0.2)',
                    boxShadow: '0 0 30px rgba(0,242,255,0.08)',
                }}
            >
                {/* Grid lines (map grid effect) */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'linear-gradient(rgba(0,242,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,255,0.6) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />

                {/* Roads (decorative lines) */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute w-full h-px" style={{ top: '40%', background: 'linear-gradient(90deg, transparent, rgba(0,242,255,0.5), transparent)' }} />
                    <div className="absolute w-full h-px" style={{ top: '65%', background: 'linear-gradient(90deg, transparent, rgba(138,43,226,0.4), transparent)' }} />
                    <div className="absolute h-full w-px" style={{ left: '45%', background: 'linear-gradient(180deg, transparent, rgba(0,242,255,0.4), transparent)' }} />
                    <div className="absolute h-full w-px" style={{ left: '70%', background: 'linear-gradient(180deg, transparent, rgba(255,0,200,0.3), transparent)' }} />
                </div>

                {/* 5km radius circle */}
                <div
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        width: '200px',
                        height: '200px',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        border: '2px solid rgba(0,242,255,0.5)',
                        background: 'rgba(0,242,255,0.03)',
                        boxShadow: '0 0 30px rgba(0,242,255,0.15), inset 0 0 30px rgba(0,242,255,0.05)',
                        transition: 'all 1s ease',
                        opacity: radiusVisible ? 1 : 0,
                    }}
                />

                {/* User location (center) */}
                <div
                    className="absolute"
                    style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                >
                    <div className="relative">
                        <div className="w-5 h-5 rounded-full"
                            style={{ background: '#00f2ff', boxShadow: '0 0 20px rgba(0,242,255,0.8)', border: '2px solid #fff' }} />
                        {/* Pulse rings */}
                        <div className="absolute inset-0 animate-ping rounded-full"
                            style={{ background: 'rgba(0,242,255,0.3)', animationDuration: '2s' }} />
                    </div>
                    <div className="text-[9px] text-center mt-0.5" style={{ color: '#00f2ff', whiteSpace: 'nowrap' }}>YOU</div>
                </div>

                {/* Provider markers */}
                {providers.map((p, index) => (
                    <div
                        key={index}
                        className="absolute cursor-pointer"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            transform: 'translate(-50%, -100%)',
                            zIndex: selected === index ? 20 : 10,
                        }}
                        onClick={() => setSelected(selected === index ? null : index)}
                    >
                        <div className="flex flex-col items-center">
                            <div
                                className="px-2 py-0.5 rounded-full text-[9px] font-semibold mb-0.5 whitespace-nowrap"
                                style={{
                                    background: `${p.color}20`,
                                    border: `1px solid ${p.color}60`,
                                    color: p.color,
                                    display: selected === index ? 'block' : 'none',
                                    boxShadow: `0 0 10px ${p.color}40`,
                                }}
                            >
                                {p.name} · {p.role}
                            </div>
                            <div style={{ position: 'relative' }}>
                                <RiMapPinLine
                                    size={28}
                                    style={{
                                        color: p.color,
                                        filter: `drop-shadow(0 0 8px ${p.color})`,
                                        transition: 'transform 0.2s',
                                        transform: selected === index ? 'scale(1.3)' : 'scale(1)',
                                    }}
                                />
                                {p.available && (
                                    <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
                                        style={{ background: '#39ff14', boxShadow: '0 0 6px rgba(57,255,20,0.8)', border: '1px solid #0b0b15' }} />
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {/* 5km label */}
                <div className="absolute bottom-3 right-3 text-[9px] px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(0,242,255,0.1)', border: '1px solid rgba(0,242,255,0.3)', color: '#00f2ff' }}>
                    ◎ 5km radius
                </div>
            </div>

            {/* Legend / provider list */}
            <div className="mobile-container mx-auto px-4 mt-4 mb-2">
                <h2 className="text-xs font-semibold tracking-widest mb-3" style={{ fontFamily: 'Orbitron, sans-serif', color: 'rgba(220,220,240,0.4)' }}>
                    NEARBY PROVIDERS
                </h2>
                <div className="flex flex-col gap-2">
                    {providers.map((p, i) => (
                        <div
                            key={i}
                            className="neon-card p-3 flex items-center gap-3 cursor-pointer transition-all duration-200"
                            style={{
                                borderColor: selected === i ? `${p.color}50` : `${p.color}15`,
                                boxShadow: selected === i ? `0 0 20px ${p.color}30` : '',
                            }}
                            onClick={() => setSelected(selected === i ? null : i)}
                        >
                            <RiNavigationLine size={18} style={{ color: p.color, filter: `drop-shadow(0 0 5px ${p.color}80)` }} />
                            <div className="flex-1">
                                <div className="text-xs font-semibold" style={{ color: '#fff' }}>{p.name}</div>
                                <div className="text-[10px]" style={{ color: 'rgba(220,220,240,0.4)' }}>{p.role}</div>
                            </div>
                            <span className={p.available ? 'badge-available' : 'badge-unavailable'}>
                                {p.available ? 'Available' : 'Busy'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
