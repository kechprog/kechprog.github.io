'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from './theme-provider';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors ${
        isDark
          ? 'bg-slate-800 hover:bg-slate-700'
          : 'bg-slate-200 hover:bg-slate-300'
      }`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-slate-300" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700" />
      )}
    </button>
  );
}
