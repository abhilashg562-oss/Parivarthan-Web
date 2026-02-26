import { Link, useRouterState } from '@tanstack/react-router';
import { HiHome, HiMap, HiUser, HiStar, HiDownload } from 'react-icons/hi';

const navItems = [
    { icon: HiHome, label: 'Home', to: '/' },
    { icon: HiMap, label: 'Map', to: '/map' },
    { icon: HiUser, label: 'Login', to: '/login' },
    { icon: HiStar, label: 'Reviews', to: '/reviews' },
    { icon: HiDownload, label: 'Download', to: '/download' },
];

export default function BottomNav() {
    const routerState = useRouterState();
    const currentPath = routerState.location.pathname;

    return (
        <nav
            className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full"
            style={{ maxWidth: '420px' }}
        >
            <div
                className="mx-2 mb-3 rounded-2xl"
                style={{
                    background: 'rgba(11,11,21,0.9)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0,242,255,0.2)',
                    boxShadow: '0 -4px 30px rgba(0,242,255,0.1), 0 4px 30px rgba(0,0,0,0.5)',
                }}
            >
                <div className="flex items-center justify-around px-2 py-3">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = currentPath === item.to || (item.to !== '/' && currentPath.startsWith(item.to));
                        return (
                            <Link key={item.to} to={item.to} className="flex flex-col items-center gap-0.5 group">
                                <div
                                    className="p-2 rounded-xl transition-all duration-300"
                                    style={
                                        isActive
                                            ? {
                                                background: 'rgba(0,242,255,0.15)',
                                                boxShadow: '0 0 15px rgba(0,242,255,0.4)',
                                            }
                                            : {}
                                    }
                                >
                                    <Icon
                                        size={22}
                                        style={{
                                            color: isActive ? '#00f2ff' : 'rgba(220,220,240,0.4)',
                                            filter: isActive ? 'drop-shadow(0 0 6px #00f2ff)' : 'none',
                                            transition: 'all 0.3s ease',
                                        }}
                                    />
                                </div>
                                <span
                                    className="text-[10px] font-medium transition-all duration-300"
                                    style={{
                                        color: isActive ? '#00f2ff' : 'rgba(220,220,240,0.35)',
                                        textShadow: isActive ? '0 0 8px rgba(0,242,255,0.6)' : 'none',
                                        fontFamily: 'Poppins, sans-serif',
                                    }}
                                >
                                    {item.label}
                                </span>
                                {/* Active dot indicator */}
                                {isActive && (
                                    <div
                                        className="w-1 h-1 rounded-full"
                                        style={{ background: '#00f2ff', boxShadow: '0 0 6px #00f2ff' }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
