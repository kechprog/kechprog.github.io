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
        <div className="text-center mb-16">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            About Me
          </h1>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Who I Am */}
          <section>
            <h2
              className={`text-3xl font-bold mb-4 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              Who I Am
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              2A Mathematical Finance student at University of Waterloo. I build systems
              that turn data into decisions—mostly around markets, optimization, and
              pattern recognition.
            </p>
          </section>

          {/* How I Got Here */}
          <section>
            <h2
              className={`text-3xl font-bold mb-4 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              How I Got Here
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              At 12, I watched my father run trading strategies and wondered how math
              could predict markets. At 17, I built my first forecast model for a high
              school project and it actually worked. That was it—I knew what I wanted to study.
            </p>
          </section>

          {/* What I Build */}
          <section>
            <h2
              className={`text-3xl font-bold mb-4 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              What I Build
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Quantitative systems that solve real problems. A portfolio optimizer managing
              actual capital. ML models classifying market patterns from gigabytes of data.
              Trading strategies that account for real market constraints, not just backtest
              fantasies.
            </p>
          </section>

          {/* My Approach */}
          <section>
            <h2
              className={`text-3xl font-bold mb-4 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              My Approach
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              I care more about results I can defend than impressive-looking numbers.
              If a model shows 90% accuracy, my first instinct is skepticism. I'd rather
              have 71% I trust than 95% I don't understand.
            </p>
          </section>

          {/* Current Focus */}
          <section>
            <h2
              className={`text-3xl font-bold mb-4 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              Current Focus
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Building better risk management systems and exploring how ML applies to
              financial markets. Also figuring out how to explain complex analysis to
              people who don't care about covariance matrices.
            </p>
          </section>

          {/* Beyond Code */}
          <section>
            <h2
              className={`text-3xl font-bold mb-4 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              Beyond Code
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Currently in Waterloo. When I'm not debugging models or optimizing
              portfolios, I'm usually thinking about why markets behave the way they do.
            </p>
          </section>

          {/* What I'm Looking For */}
          <section>
            <h2
              className={`text-3xl font-bold mb-4 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              What I'm Looking For
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Co-op positions in quantitative research, data science, or financial
              engineering. Somewhere I can build things that matter and learn from
              people who've done it longer than I have.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
