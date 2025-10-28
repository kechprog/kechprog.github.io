'use client';

import { useTheme } from './theme-provider';

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer
      className={`py-8 transition-colors ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
      } border-t`}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p
          className={`${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          © {new Date().getFullYear()} Eduard Kechedzhiev. Built with React.
        </p>
      </div>
    </footer>
  );
}
