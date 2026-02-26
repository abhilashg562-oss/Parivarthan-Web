import { Link, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { RiFlashlightFill } from 'react-icons/ri';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Manual', to: '/manual' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Map', to: '/map' },
  { label: 'Complaints', to: '/complaints' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header
      className="sticky top-0 z-40 w-full"
      style={{
        background: 'rgba(11,11,21,0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0,242,255,0.15)',
        boxShadow: '0 2px 20px rgba(0,242,255,0.08)',
      }}
    >
      <div className="site-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, #00f2ff, #8a2be2)',
                boxShadow: '0 0 15px rgba(0,242,255,0.5)',
              }}
            >
              <RiFlashlightFill size={20} color="#0f0f1a" />
            </div>
            <span
              className="font-black tracking-widest uppercase text-sm"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                background: 'linear-gradient(135deg, #00f2ff, #ff00c8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Parivarthan
            </span>
          </Link>

          {/* Desktop Navigation — hidden on mobile */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ color: 'rgba(220,220,240,0.65)', fontFamily: 'Poppins, sans-serif' }}
                activeProps={{
                  style: {
                    color: '#00f2ff',
                    background: 'rgba(0,242,255,0.08)',
                    textShadow: '0 0 8px rgba(0,242,255,0.5)',
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right actions — hidden on mobile */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="neon-btn text-xs"
              onClick={() => navigate({ to: '/download' })}
            >
              Download APK
            </button>
            <button
              className="neon-btn-solid neon-btn text-xs"
              onClick={() => navigate({ to: '/login' })}
            >
              Login
            </button>
          </div>

          {/* Mobile hamburger — hidden on desktop */}
          <button
            className="md:hidden p-2 rounded-lg transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              color: menuOpen ? '#00f2ff' : 'rgba(220,220,240,0.6)',
              filter: menuOpen ? 'drop-shadow(0 0 6px #00f2ff)' : 'none',
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t" style={{ borderColor: 'rgba(0,242,255,0.1)', background: 'rgba(11,11,21,0.98)' }}>
          <nav className="site-container py-4 flex flex-col gap-3">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium py-2 px-3 rounded-lg transition-all duration-200"
                style={{ color: 'rgba(220,220,240,0.7)', fontFamily: 'Poppins, sans-serif' }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-2">
              <button className="neon-btn flex-1 text-xs" onClick={() => { setMenuOpen(false); navigate({ to: '/download' }); }}>
                Download APK
              </button>
              <button className="neon-btn-solid neon-btn flex-1 text-xs" onClick={() => { setMenuOpen(false); navigate({ to: '/login' }); }}>
                Login
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
