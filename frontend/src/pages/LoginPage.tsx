import { useState, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { RiUserLine, RiToolsLine, RiEyeLine, RiEyeOffLine, RiFlashlightFill } from 'react-icons/ri';

type LoginType = 'user' | 'provider';

function LoginCard({ type, label, icon, color, glow, onLogin }: {
    type: LoginType;
    label: string;
    icon: React.ReactNode;
    color: string;
    glow: string;
    onLogin: () => void;
}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPwd, setShowPwd] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise(r => setTimeout(r, 900));
        setLoading(false);
        onLogin();
    };

    return (
        <div
            className="neon-card p-6 w-full"
            style={{ borderColor: `${color}30`, boxShadow: `0 0 30px ${glow}` }}
        >
            {/* Card Header */}
            <div className="flex flex-col items-center mb-6">
                <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3"
                    style={{
                        background: `${color}15`,
                        border: `2px solid ${color}50`,
                        boxShadow: `0 0 20px ${glow}`,
                        fontSize: '28px',
                    }}
                >
                    {icon}
                </div>
                <h2 className="text-lg font-bold" style={{ fontFamily: 'Orbitron, sans-serif', color }}>
                    {label}
                </h2>
                <p className="text-xs mt-1" style={{ color: 'rgba(220,220,240,0.4)' }}>
                    {type === 'user' ? 'Find & hire workers' : 'Offer your services'}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="text-xs mb-1.5 block" style={{ color: 'rgba(220,220,240,0.5)', fontFamily: 'Poppins, sans-serif' }}>
                        Email Address
                    </label>
                    <input
                        type="email"
                        className="neon-input"
                        placeholder="enter@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        style={{ borderColor: `${color}40` }}
                    />
                </div>
                <div>
                    <label className="text-xs mb-1.5 block" style={{ color: 'rgba(220,220,240,0.5)', fontFamily: 'Poppins, sans-serif' }}>
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type={showPwd ? 'text' : 'password'}
                            className="neon-input pr-12"
                            placeholder="••••••••"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            style={{ borderColor: `${color}40` }}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPwd(!showPwd)}
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                            style={{ color: 'rgba(220,220,240,0.4)' }}
                        >
                            {showPwd ? <RiEyeOffLine size={17} /> : <RiEyeLine size={17} />}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="neon-btn w-full flex items-center justify-center gap-2"
                    disabled={loading}
                    style={{
                        borderColor: `${color}60`,
                        color,
                        background: loading ? `${color}10` : `${color}0d`,
                    }}
                >
                    {loading ? (
                        <div className="neon-spinner" style={{ width: '18px', height: '18px', borderTopColor: color, boxShadow: `0 0 8px ${glow}` }} />
                    ) : (
                        <>
                            Login as {type === 'user' ? '👤 User' : '🛠️ Provider'}
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}

export default function LoginPage() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 80);
        return () => clearTimeout(t);
    }, []);

    const handleLogin = () => navigate({ to: '/dashboard' });

    return (
        <div
            className="min-h-screen relative overflow-hidden flex flex-col pb-nav"
            style={{ background: 'linear-gradient(160deg, #0b0b15 0%, #0f0f1a 50%, #150b25 100%)' }}
        >
            {/* Background orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-0 w-64 h-64 rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(0,242,255,0.08) 0%, transparent 70%)' }} />
                <div className="absolute bottom-40 right-0 w-64 h-64 rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(255,0,200,0.08) 0%, transparent 70%)' }} />
                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(rgba(0,242,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,255,1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className={`relative z-10 mobile-container mx-auto px-4 py-8 flex flex-col flex-1 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                            style={{ background: 'linear-gradient(135deg, #00f2ff, #8a2be2)', boxShadow: '0 0 25px rgba(0,242,255,0.5)' }}>
                            <RiFlashlightFill size={26} color="#0f0f1a" />
                        </div>
                    </div>
                    <h1 className="text-xl font-black tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif', background: 'linear-gradient(135deg, #00f2ff, #ff00c8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        GIGMARKET
                    </h1>
                    <p className="text-xs mt-1" style={{ color: 'rgba(220,220,240,0.35)' }}>Select your login type to continue</p>
                </div>

                {/* Two login cards */}
                <div className="flex flex-col gap-5">
                    <LoginCard
                        type="user"
                        label="User Login"
                        icon={<RiUserLine style={{ color: '#00f2ff', fontSize: '28px' }} />}
                        color="#00f2ff"
                        glow="rgba(0,242,255,0.15)"
                        onLogin={handleLogin}
                    />
                    <LoginCard
                        type="provider"
                        label="Provider Login"
                        icon={<RiToolsLine style={{ color: '#ff00c8', fontSize: '28px' }} />}
                        color="#ff00c8"
                        glow="rgba(255,0,200,0.15)"
                        onLogin={handleLogin}
                    />
                </div>

                <p className="text-center text-[11px] mt-6" style={{ color: 'rgba(220,220,240,0.25)' }}>
                    🔒 Secure • Encrypted • Trusted
                </p>
            </div>
        </div>
    );
}
