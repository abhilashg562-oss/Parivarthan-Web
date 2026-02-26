import { Link } from '@tanstack/react-router';
import { RiInstagramLine, RiFacebookCircleLine, RiTwitterLine, RiLinkedinLine, RiMapPinLine, RiMailLine, RiTimeLine, RiFlashlightFill } from 'react-icons/ri';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#0b0b15', borderTop: '1px solid rgba(0,242,255,0.1)' }} className="pb-nav">
      <div className="mobile-container mx-auto px-4 py-10">
        {/* Logo & About */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #00f2ff, #8a2be2)', boxShadow: '0 0 15px rgba(0,242,255,0.4)' }}>
              <RiFlashlightFill size={16} color="#0f0f1a" />
            </div>
            <span className="font-bold tracking-widest text-sm" style={{
              fontFamily: 'Orbitron, sans-serif',
              background: 'linear-gradient(135deg, #00f2ff, #ff00c8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              GIGMARKET
            </span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(220,220,240,0.45)', fontFamily: 'Poppins, sans-serif' }}>
            Connecting employers with trusted local workers. Fast, reliable, and secure.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center gap-3 mt-4">
            {[
              { icon: RiFacebookCircleLine, color: '#00f2ff' },
              { icon: RiTwitterLine, color: '#00f2ff' },
              { icon: RiInstagramLine, color: '#ff00c8' },
              { icon: RiLinkedinLine, color: '#8a2be2' },
            ].map(({ icon: Icon, color }, i) => (
              <a key={i} href="#"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: `${color}0f`,
                  border: `1px solid ${color}30`,
                }}
                onClick={e => e.preventDefault()}
              >
                <Icon size={17} style={{ color }} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="neon-divider" />

        {/* Links grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xs font-semibold mb-3 tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif', color: '#00f2ff' }}>
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'User Manual', to: '/manual' },
                { label: 'Reviews', to: '/reviews' },
                { label: 'Download', to: '/download' },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-xs transition-colors duration-200"
                    style={{ color: 'rgba(220,220,240,0.4)', fontFamily: 'Poppins, sans-serif' }}
                    onMouseOver={e => (e.currentTarget.style.color = '#00f2ff')}
                    onMouseOut={e => (e.currentTarget.style.color = 'rgba(220,220,240,0.4)')}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold mb-3 tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif', color: '#ff00c8' }}>
              SUPPORT
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Complaint Box', to: '/complaints' },
                { label: 'Help Center', to: '#' },
                { label: 'FAQ', to: '#' },
                { label: 'Contact Us', to: '#' },
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.to} className="text-xs transition-colors duration-200"
                    style={{ color: 'rgba(220,220,240,0.4)', fontFamily: 'Poppins, sans-serif' }}
                    onMouseOver={e => (e.currentTarget.style.color = '#ff00c8')}
                    onMouseOut={e => (e.currentTarget.style.color = 'rgba(220,220,240,0.4)')}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="neon-card p-4 mb-6 space-y-2">
          <h3 className="text-xs font-semibold tracking-widest mb-3" style={{ fontFamily: 'Orbitron, sans-serif', color: '#39ff14' }}>
            GET IN TOUCH
          </h3>
          {[
            { icon: RiMapPinLine, text: 'Chennai, Tamil Nadu, India', color: '#00f2ff' },
            { icon: RiMailLine, text: 'support@gigmarket.com', color: '#ff00c8' },
            { icon: RiTimeLine, text: 'Mon–Fri: 9AM–6PM', color: '#39ff14' },
          ].map(({ icon: Icon, text, color }, i) => (
            <div key={i} className="flex items-center gap-2">
              <Icon size={14} style={{ color, flexShrink: 0 }} />
              <span className="text-xs" style={{ color: 'rgba(220,220,240,0.5)' }}>{text}</span>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="text-center">
          <div className="flex justify-center flex-wrap gap-4 mb-3">
            {['Privacy Policy', 'Terms', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="text-[10px] transition-colors"
                style={{ color: 'rgba(220,220,240,0.3)' }}
                onClick={e => e.preventDefault()}>
                {item}
              </a>
            ))}
          </div>
          <p className="text-[10px]" style={{ color: 'rgba(220,220,240,0.25)' }}>
            © {currentYear} GigMarket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
