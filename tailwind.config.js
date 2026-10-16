/** @type {import('tailwindcss').Config} */
const __codewithchatTailwindConfig = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        app: {
          bg: 'var(--app-bg)',
          surface: 'var(--app-surface)',
          'surface-muted': 'var(--app-surface-muted)',
          text: 'var(--app-text)',
          muted: 'var(--app-muted)',
          border: 'var(--app-border)',
          accent: 'var(--app-accent)',
          'on-accent': 'var(--app-on-accent)',
        }
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        pulseSubtle: 'pulseSubtle 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
;
/* CodewithChat: production Tailwind content */
const __codewithchatContent = __codewithchatTailwindConfig.content;
const __codewithchatFiles = Array.isArray(__codewithchatContent)
  ? __codewithchatContent
  : (__codewithchatContent?.files || []);
export default {
  ...__codewithchatTailwindConfig,
  content: {
    relative: true,
    ...(Array.isArray(__codewithchatContent) ? {} : __codewithchatContent),
    files: [...new Set([
      ...__codewithchatFiles,
      ...[
  "./index.html",
  "./src/App.tsx",
  "./src/components/Contact.tsx",
  "./src/components/Footer.tsx",
  "./src/components/Hero.tsx",
  "./src/components/Navbar.tsx",
  "./src/components/Projects.tsx",
  "./src/components/Skills.tsx",
  "./src/components/TerminalSection.tsx",
  "./src/components/common/ErrorBoundary.tsx",
  "./src/components/common/SafeImage.tsx",
  "./src/data/portfolioData.ts",
  "./src/main.tsx",
  "./src/vite-env.d.ts"
],
    ])],
  },
};
