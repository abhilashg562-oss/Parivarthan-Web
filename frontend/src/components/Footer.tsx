import { Link } from '@tanstack/react-router';
import { RiInstagramLine, RiFacebookCircleLine, RiTwitterLine, RiLinkedinLine, RiMapPinLine, RiMailLine, RiTimeLine, RiFlashlightFill } from 'react-icons/ri';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#0a0a14', borderTop: '1px solid rgba(0,242,255,0.1)' }} className="pb-nav">
      <div className="site-container py-12 lg:py-16">
        {/* Desktop: 4-column grid, Mobile: stacked */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #00f2ff, #8a2be2)', boxShadow: '0 0 15px rgba(0,242,255,0.4)' }}>
                <RiFlashlightFill size={18} color="#0f0f1a" />
              </div>
              <span className="font-bold tracking-widest text-sm" style={{ fontFamily: 'Orbitron, sans-serif', background: 'linear-gradient(135deg, #00f2ff, #ff00c8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                GIGMARKET
              </span>
            </div>
            <p className="text-xs lg:text-sm leading-relaxed mb-5" style={{ color: 'rgba(220,220,240,0.45)', fontFamily: 'Poppins, sans-serif' }}>
              Connecting employers with trusted local workers. Fast, reliable, and secure across India.
            </p>
            {/* Social */}
            <div className="flex gap-2">
              {[
                { icon: RiFacebookCircleLine, color: '#00f2ff' },
                { icon: RiTwitterLine, color: '#00f2ff' },
                { icon: RiInstagramLine, color: '#ff00c8' },
                { icon: RiLinkedinLine, color: '#8a2be2' },
              ].map(({ icon: Icon, color }, i) => (
                <a key={i} href="#" onClick={e => e.preventDefault()}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: `${color}0f`, border: `1px solid ${color}30` }}>
                  <Icon size={17} style={{ color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold mb-4 tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif', color: '#00f2ff' }}>
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'User Manual', to: '/manual' },
                { label: 'Reviews', to: '/reviews' },
                { label: 'Download APK', to: '/download' },
                { label: 'Dashboard', to: '/dashboard' },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm transition-colors duration-200 hover:text-[#00f2ff]"
                    style={{ color: 'rgba(220,220,240,0.4)', fontFamily: 'Poppins, sans-serif' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-semibold mb-4 tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif', color: '#ff00c8' }}>
              SUPPORT
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Complaint Box', to: '/complaints' },
                { label: 'Help Center', to: '#' },
                { label: 'FAQ', to: '#' },
                { label: 'Contact Us', to: '#' },
                { label: 'Privacy Policy', to: '#' },
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.to} className="text-sm transition-colors duration-200 hover:text-[#ff00c8]"
                    style={{ color: 'rgba(220,220,240,0.4)', fontFamily: 'Poppins, sans-serif' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold mb-4 tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif', color: '#39ff14' }}>
              GET IN TOUCH
            </h3>
            <div className="space-y-3">
              {[
                { icon: RiMapPinLine, text: 'Mysuru, Karnataka, India', color: '#00f2ff' },
                { icon: RiMailLine, text: 'support@gigmarket.com', color: '#ff00c8' },
                { icon: RiTimeLine, text: 'Mon–Fri: 9AM–6PM IST', color: '#39ff14' },
              ].map(({ icon: Icon, text, color }, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <Icon size={14} style={{ color, flexShrink: 0 }} />
                  <span className="text-xs lg:text-sm" style={{ color: 'rgba(220,220,240,0.5)' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="neon-divider" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs" style={{ color: 'rgba(220,220,240,0.25)' }}>
            © {currentYear} GigMarket · Parivarthan. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <a key={item} href="#" onClick={e => e.preventDefault()}
                className="text-xs transition-colors hover:text-[#00f2ff]"
                style={{ color: 'rgba(220,220,240,0.3)' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
