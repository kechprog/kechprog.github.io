'use client';

import { useTheme } from '../theme-provider';

export default function AboutSection() {
  const { isDark } = useTheme();

  const techStack = [
    'Python',
    'Rust',
    'C',
    'PyTorch',
    'Transformers',
    'OpenGL',
    'Pandas',
    'NumPy',
  ];

  const cardClass = `rounded-2xl p-6 transition-all ${
    isDark
      ? 'bg-slate-800 hover:shadow-xl hover:shadow-blue-900/20'
      : 'bg-white hover:shadow-xl shadow-lg'
  }`;

  return (
    <section
      id="about"
      className={`py-20 px-6 transition-colors scroll-mt-16 ${
        isDark ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            isDark ? 'text-slate-100' : 'text-slate-900'
          }`}
        >
          About Me
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Main Bio Card - 2x2 */}
          <div className={`${cardClass} md:col-span-2 md:row-span-2`}>
            <h3
              className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              Hi, I'm Eduard
            </h3>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              I'm a quantitative developer and systems programmer with a passion for
              building high-performance trading systems. My work focuses on developing
              machine learning models for market analysis, implementing efficient
              backtesting frameworks, and creating performance-critical applications
              in Rust and C.
            </p>
          </div>

          {/* Achievement Card */}
          <div className={`${cardClass} md:col-span-2`}>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-2">
                71%
              </div>
              <p
                className={`text-lg font-semibold ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                Out-of-Sample Accuracy
              </p>
              <p
                className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Market regime classification model
              </p>
            </div>
          </div>

          {/* Location Card */}
          <div className={cardClass}>
            <h4
              className={`text-xl font-bold mb-2 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              Location
            </h4>
            <p
              className={`${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Toronto, Canada
            </p>
            <p
              className={`text-sm mt-2 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Awaiting university admissions
            </p>
          </div>

          {/* Current Focus Card */}
          <div className={cardClass}>
            <h4
              className={`text-xl font-bold mb-2 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              Current Focus
            </h4>
            <p
              className={`${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Building quantitative trading strategies
            </p>
          </div>

          {/* Interests Card */}
          <div className={`${cardClass} md:col-span-2`}>
            <h4
              className={`text-xl font-bold mb-2 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              Interests
            </h4>
            <p
              className={`${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Performance-critical applications, machine learning for finance,
              systems programming, and low-level graphics programming
            </p>
          </div>

          {/* Tech Stack Card - Full Width */}
          <div className={`${cardClass} md:col-span-4`}>
            <h4
              className={`text-xl font-bold mb-4 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
