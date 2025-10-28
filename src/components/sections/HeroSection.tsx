'use client';

import { ChevronDown } from 'lucide-react';
import { useTheme } from '../theme-provider';
import { scrollToSection } from '@/lib/utils';

export default function HeroSection() {
  const { isDark } = useTheme();

  return (
    <section
      id="hero"
      className={`h-[85vh] min-h-[600px] flex flex-col items-center justify-center px-6 transition-colors ${
        isDark ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div
          className={`w-32 h-32 rounded-full mx-auto mb-8 flex items-center justify-center text-3xl font-bold ${
            isDark
              ? 'bg-gradient-to-br from-blue-600 to-violet-600 text-white'
              : 'bg-gradient-to-br from-blue-500 to-violet-500 text-white'
          }`}
        >
          EK
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          Eduard Kechedzhiev
        </h1>

        {/* Title */}
        <p
          className={`text-2xl md:text-3xl font-semibold mb-6 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}
        >
          Quantitative Developer & Systems Programmer
        </p>

        {/* Description */}
        <p
          className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          Building quantitative trading systems and performance-critical applications.
          Focused on machine learning, systems programming, and financial modeling.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              isDark
                ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
            }`}
          >
            Get in Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="mt-16 animate-bounce cursor-pointer focus:outline-none"
          aria-label="Scroll to about section"
        >
          <ChevronDown
            className={`w-8 h-8 mx-auto transition-colors ${
              isDark ? 'text-slate-500 hover:text-slate-400' : 'text-slate-400 hover:text-slate-500'
            }`}
          />
        </button>
      </div>
    </section>
  );
}
