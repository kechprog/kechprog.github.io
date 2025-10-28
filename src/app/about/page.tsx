'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

export default function AboutPage() {
  const { isDark } = useTheme();

  return (
    <main
      className={`min-h-screen py-12 px-6 transition-colors ${
        isDark ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className={`inline-flex items-center gap-2 mb-8 transition-colors ${
            isDark
              ? 'text-slate-300 hover:text-slate-100'
              : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Hero */}
        <div className="text-center">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-8 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            About Me
          </h1>
          <div
            className={`rounded-2xl p-12 ${
              isDark ? 'bg-slate-800' : 'bg-slate-50'
            }`}
          >
            <p
              className={`text-xl ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              This page is coming soon...
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
