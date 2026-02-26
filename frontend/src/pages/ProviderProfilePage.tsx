import { useState, useEffect } from 'react';
import { RiStarFill, RiStarLine, RiMapPinLine, RiTimeLine, RiCheckboxCircleLine, RiArrowLeftLine } from 'react-icons/ri';
import { useNavigate } from '@tanstack/react-router';

export default function ProviderProfilePage() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [booked, setBooked] = useState(false);
    const [starsAnimated, setStarsAnimated] = useState(false);

    useEffect(() => {
        const t1 = setTimeout(() => setVisible(true), 80);
        const t2 = setTimeout(() => setStarsAnimated(true), 800);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    const handleConfirm = async () => {
        await new Promise(r => setTimeout(r, 700));
        setBooked(true);
        setTimeout(() => { setShowModal(false); setBooked(false); }, 1800);
    };

    const rating = 4.8;
    const fullStars = Math.floor(rating);

    return (
        <div className="min-h-screen pb-nav relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0b0b15 0%, #0f0f1a 60%, #150b25 100%)' }}>
            {/* BG */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-40 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(255,0,200,0.07) 0%, transparent 70%)' }} />
            </div>

            <div className={`relative z-10 mobile-container mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                {/* Back */}
                <div className="px-4 pt-4">
                    <button onClick={() => navigate({ to: '/' })} className="flex items-center gap-2 text-xs mb-4 transition-colors"
                        style={{ color: 'rgba(220,220,240,0.5)' }}>
                        <RiArrowLeftLine size={15} /> Back
                    </button>
                </div>

                {/* Profile Hero */}
                <div className="flex flex-col items-center px-4 mb-6">
                    {/* Circular neon frame */}
                    <div className="relative mb-4">
                        <div className="w-28 h-28 rounded-full flex items-center justify-center text-4xl"
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,0,200,0.1), rgba(0,242,255,0.1))',
                                border: '3px solid transparent',
                                backgroundClip: 'padding-box',
                                boxShadow: '0 0 0 3px #ff00c8, 0 0 30px rgba(255,0,200,0.5), 0 0 60px rgba(255,0,200,0.2)',
                            }}>
                            🔧
                        </div>
                        <span className="badge-available absolute -bottom-1 -right-1 text-[9px] px-1.5 py-0.5">ONLINE</span>
                    </div>
                    <h1 className="text-xl font-bold mb-1" style={{ fontFamily: 'Orbitron, sans-serif', color: '#fff' }}>
                        Arjun Sharma
                    </h1>
                    <p className="text-xs mb-3" style={{ color: 'rgba(220,220,240,0.5)' }}>⚡ Electrician & Technician</p>

                    {/* Animated Stars */}
                    <div className="flex gap-1 mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                            i < fullStars
                                ? <RiStarFill key={i} size={22} className={`transition-all duration-300 neon-star ${starsAnimated ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
                                    style={{ transitionDelay: `${i * 100}ms` }} />
                                : <RiStarLine key={i} size={22} style={{ color: 'rgba(220,220,240,0.3)' }} />
                        ))}
                        <span className="text-sm ml-1 font-semibold" style={{ color: '#ffd700', textShadow: '0 0 8px rgba(255,215,0,0.6)' }}>
                            {rating}
                        </span>
                    </div>

                    <div className="flex gap-3 text-[11px]" style={{ color: 'rgba(220,220,240,0.5)' }}>
                        <span className="flex items-center gap-1"><RiMapPinLine size={12} /> Chennai, TN</span>
                        <span className="flex items-center gap-1"><RiTimeLine size={12} /> 5+ yrs exp</span>
                    </div>
                </div>

                {/* Neon divider */}
                <hr className="neon-divider mx-4" />

                {/* Details */}
                <div className="px-4 space-y-4 mb-6">
                    <h2 className="text-xs font-semibold tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif', color: '#00f2ff' }}>
                        ABOUT
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(220,220,240,0.6)' }}>
                        Certified electrician with 5+ years in residential and commercial wiring, panel upgrades, motor repairs, and automation systems. Punctual, efficient, and highly rated.
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { label: 'Jobs Done', value: '180+', color: '#00f2ff' },
                            { label: 'Response', value: '<1 hr', color: '#39ff14' },
                            { label: 'Rate/Day', value: '₹1200', color: '#ff00c8' },
                            { label: 'Completed', value: '100%', color: '#ffd700' },
                        ].map(({ label, value, color }, i) => (
                            <div key={i} className="neon-card p-3 text-center" style={{ borderColor: `${color}20` }}>
                                <div className="font-bold text-base" style={{ fontFamily: 'Orbitron, sans-serif', color, textShadow: `0 0 8px ${color}80` }}>{value}</div>
                                <div className="text-[10px]" style={{ color: 'rgba(220,220,240,0.4)' }}>{label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Skills */}
                    <h2 className="text-xs font-semibold tracking-widest pt-2" style={{ fontFamily: 'Orbitron, sans-serif', color: '#ff00c8' }}>
                        SKILLS
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {['Wiring', 'Panel Upgrades', 'Motor Repair', 'AC Installation', 'Solar Setup'].map((skill) => (
                            <span key={skill} className="neon-chip text-[11px] px-3 py-1.5">{skill}</span>
                        ))}
                    </div>

                    {/* Reviews preview */}
                    <h2 className="text-xs font-semibold tracking-widest pt-2" style={{ fontFamily: 'Orbitron, sans-serif', color: '#39ff14' }}>
                        TOP REVIEW
                    </h2>
                    <div className="neon-card p-4" style={{ borderColor: 'rgba(57,255,20,0.2)' }}>
                        <div className="flex gap-1 mb-2">
                            {Array.from({ length: 5 }).map((_, i) => <RiStarFill key={i} size={13} className="neon-star" />)}
                        </div>
                        <p className="text-xs italic" style={{ color: 'rgba(220,220,240,0.6)' }}>
                            "Excellent work! Fixed our entire building wiring in one day. Very professional."
                        </p>
                        <p className="text-[10px] mt-2" style={{ color: 'rgba(220,220,240,0.35)' }}>— Mohan R., Factory Owner</p>
                    </div>
                </div>

                {/* Book Now button */}
                <div className="px-4 pb-4">
                    <button
                        className="neon-btn-pink neon-btn w-full flex items-center justify-center gap-2 py-3 animate-neon-pulse"
                        onClick={() => setShowModal(true)}
                        style={{ fontSize: '0.9rem', fontWeight: 700 }}
                    >
                        🛠️ Book Now
                    </button>
                </div>
            </div>

            {/* Booking Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-end justify-center"
                    style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
                    onClick={e => { if (e.target === e.currentTarget) setShowModal(false); }}
                >
                    <div
                        className="w-full animate-slideUp rounded-t-3xl p-6 pb-10"
                        style={{
                            maxWidth: '420px',
                            background: 'rgba(15,15,26,0.97)',
                            border: '1px solid rgba(255,0,200,0.3)',
                            boxShadow: '0 -8px 40px rgba(255,0,200,0.2)',
                        }}
                    >
                        {booked ? (
                            <div className="flex flex-col items-center py-4 gap-3">
                                <RiCheckboxCircleLine size={48} style={{ color: '#39ff14', filter: 'drop-shadow(0 0 15px rgba(57,255,20,0.7))' }} />
                                <h3 className="text-lg font-bold text-center" style={{ fontFamily: 'Orbitron, sans-serif', color: '#39ff14' }}>
                                    Booking Confirmed!
                                </h3>
                                <p className="text-xs" style={{ color: 'rgba(220,220,240,0.5)' }}>Arjun will contact you shortly</p>
                            </div>
                        ) : (
                            <>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-2xl">🛠️</span>
                                    <h3 className="text-base font-bold" style={{ fontFamily: 'Orbitron, sans-serif', color: '#ff00c8' }}>
                                        Book Arjun Sharma
                                    </h3>
                                </div>
                                <p className="text-xs mb-6" style={{ color: 'rgba(220,220,240,0.4)' }}>Confirm booking for Electrical Work</p>

                                <hr className="neon-divider" style={{ background: 'linear-gradient(90deg, transparent, #ff00c8, transparent)' }} />

                                <div className="space-y-3 mb-6">
                                    {[
                                        { label: 'Service', value: 'Electrical Work', color: '#ff00c8' },
                                        { label: 'Rate/Day', value: '₹1,200', color: '#00f2ff' },
                                        { label: 'Availability', value: 'Today', color: '#39ff14' },
                                    ].map(({ label, value, color }) => (
                                        <div key={label} className="flex justify-between items-center">
                                            <span className="text-xs" style={{ color: 'rgba(220,220,240,0.5)' }}>{label}</span>
                                            <span className="text-xs font-semibold" style={{ color }}>{value}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <button className="neon-btn flex-1 text-xs" onClick={() => setShowModal(false)}>
                                        Cancel
                                    </button>
                                    <button className="neon-btn neon-btn-pink flex-1 text-xs" onClick={handleConfirm}>
                                        ✅ Confirm Booking
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
