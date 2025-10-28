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
          {/* Who I Am - Top Left */}
          <div className={`${cardClass} lg:col-span-2`}>
            <h3
              className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              Who I Am
            </h3>
            <p
              className={`text-base leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              2A Mathematical Finance student at University of Waterloo. I build systems
              that turn data into decisions—mostly around markets, optimization, and
              pattern recognition.
            </p>
          </div>

          {/* What I'm Looking For - Entire Right Side */}
          <div className={`${cardClass} lg:col-span-2 lg:row-span-2`}>
            <h4
              className={`text-xl font-bold mb-4 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              What I'm Looking For
            </h4>
            <ul
              className={`space-y-3 text-base ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>Co-op positions in quantitative research, data science, or financial engineering</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>Opportunities to build things that matter</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>Teams where I can learn from experienced practitioners</span>
              </li>
            </ul>
          </div>

          {/* Location - Bottom Left */}
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
              Waterloo, ON
            </p>
          </div>

          {/* Current Focus - Bottom Left */}
          <div className={cardClass}>
            <h4
              className={`text-xl font-bold mb-2 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              Current Focus
            </h4>
            <p
              className={`text-sm ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Risk management systems and ML for financial markets
            </p>
          </div>

          {/* Tech Stack Card - Full Width */}
          <div className={`${cardClass} lg:col-span-4`}>
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
