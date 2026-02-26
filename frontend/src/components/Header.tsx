import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { RiFlashlightFill } from 'react-icons/ri';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full"
        style={{
          background: 'rgba(11,11,21,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,242,255,0.15)',
          boxShadow: '0 2px 20px rgba(0,242,255,0.08)',
        }}
      >
        <div className="mobile-container mx-auto">
          <div className="flex items-center justify-between px-4 h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #00f2ff, #8a2be2)',
                  boxShadow: '0 0 15px rgba(0,242,255,0.5)',
                }}
              >
                <RiFlashlightFill size={18} color="#0f0f1a" />
              </div>
              <span
                className="font-bold text-sm tracking-widest uppercase"
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

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="neon-btn text-xs px-4 py-1.5 hidden sm:block"
                style={{ fontSize: '0.72rem' }}
              >
                Login
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1.5 rounded-lg transition-all duration-300"
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
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div
            className="mobile-container mx-auto border-t"
            style={{ borderColor: 'rgba(0,242,255,0.1)' }}
          >
            <nav className="px-4 py-4 flex flex-col gap-3">
              {[
                { label: '🏠 Home', to: '/' },
                { label: '📖 About', to: '/about' },
                { label: '📋 Manual', to: '/manual' },
                { label: '⭐ Reviews', to: '/reviews' },
                { label: '📣 Complaints', to: '/complaints' },
                { label: '📱 Download', to: '/download' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm font-medium py-1.5 transition-all duration-200"
                  style={{ color: 'rgba(220,220,240,0.7)', fontFamily: 'Poppins, sans-serif' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/login"
                className="neon-btn text-xs text-center mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Login / Sign Up
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
