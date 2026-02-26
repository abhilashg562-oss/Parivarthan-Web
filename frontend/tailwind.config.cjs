/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1.5rem',
                md: '2rem',
                lg: '3rem',
                xl: '4rem',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1440px',
            }
        },
        extend: {
            colors: {
                border: 'rgb(var(--border))',
                input: 'rgb(var(--input))',
                ring: 'rgb(var(--ring))',
                background: 'rgb(var(--background))',
                foreground: 'rgb(var(--foreground))',
                primary: {
                    DEFAULT: 'rgb(var(--primary))',
                    foreground: 'rgb(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'rgb(var(--secondary))',
                    foreground: 'rgb(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'rgb(var(--destructive))',
                    foreground: 'rgb(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'rgb(var(--muted))',
                    foreground: 'rgb(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'rgb(var(--accent))',
                    foreground: 'rgb(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'rgb(var(--popover))',
                    foreground: 'rgb(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'rgb(var(--card))',
                    foreground: 'rgb(var(--card-foreground))'
                },
                'trust-blue': { DEFAULT: '#00f2ff', dark: '#00b8c8' },
                'trust-green': { DEFAULT: '#39ff14', dark: '#2acc10' },
                'neon-blue': '#00f2ff',
                'neon-pink': '#ff00c8',
                'neon-purple': '#8a2be2',
                'neon-green': '#39ff14',
                'cyber-dark': '#0f0f1a',
                'cyber-darker': '#0b0b15',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                xl: '20px',
                '2xl': '24px',
                '3xl': '30px',
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                soft: '0 2px 8px rgba(0,0,0,0.08)',
                medium: '0 4px 16px rgba(0,0,0,0.12)',
                large: '0 8px 32px rgba(0,0,0,0.16)',
                'neon-blue': '0 0 20px rgba(0,242,255,0.6), 0 0 40px rgba(0,242,255,0.3)',
                'neon-pink': '0 0 20px rgba(255,0,200,0.6), 0 0 40px rgba(255,0,200,0.3)',
                'neon-purple': '0 0 20px rgba(138,43,226,0.6), 0 0 40px rgba(138,43,226,0.3)',
                'neon-green': '0 0 20px rgba(57,255,20,0.6), 0 0 40px rgba(57,255,20,0.3)',
                'neon-card': '0 8px 32px rgba(0,242,255,0.1), inset 0 0 80px rgba(0,242,255,0.03)',
            },
            fontFamily: {
                sans: ['Poppins', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
                display: ['Orbitron', 'Poppins', 'system-ui', 'sans-serif'],
                orbitron: ['Orbitron', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            maxWidth: {
                'site': '1440px',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'neon-pulse': {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0,242,255,0.6), 0 0 40px rgba(0,242,255,0.3)' },
                    '50%': { opacity: '0.7', boxShadow: '0 0 40px rgba(0,242,255,0.9), 0 0 70px rgba(0,242,255,0.5)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'fadeIn': {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                'slideUp': {
                    from: { opacity: '0', transform: 'translateY(100%)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                'spin-neon': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                },
                'text-glow': {
                    '0%, 100%': { textShadow: '0 0 10px rgba(0,242,255,0.5)' },
                    '50%': { textShadow: '0 0 25px rgba(0,242,255,0.9), 0 0 50px rgba(0,242,255,0.5)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
                'float': 'float 4s ease-in-out infinite',
                'gradient-shift': 'gradient-shift 6s ease infinite',
                'fadeIn': 'fadeIn 0.6s ease-out forwards',
                'slideUp': 'slideUp 0.4s ease-out forwards',
                'spin-neon': 'spin-neon 1s linear infinite',
                'text-glow': 'text-glow 2s ease-in-out infinite',
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/container-queries'),
        require('tailwindcss-animate')
    ]
};
