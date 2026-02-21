/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
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
                'trust-blue': {
                    DEFAULT: 'rgb(var(--trust-blue))',
                    dark: 'rgb(var(--trust-blue-dark))'
                },
                'trust-green': {
                    DEFAULT: 'rgb(var(--trust-green))',
                    dark: 'rgb(var(--trust-green-dark))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                xl: 'calc(var(--radius) + 4px)',
                '2xl': 'calc(var(--radius) + 8px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                soft: '0 2px 8px rgba(0,0,0,0.08)',
                medium: '0 4px 16px rgba(0,0,0,0.12)',
                large: '0 8px 32px rgba(0,0,0,0.16)'
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
                display: ['Inter', 'system-ui', 'sans-serif']
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/container-queries'),
        require('tailwindcss-animate')
    ]
};
