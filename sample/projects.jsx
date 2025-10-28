import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sun, Moon, ExternalLink, Github } from 'lucide-react';

export default function ProjectsPage() {
  const [theme, setTheme] = useState('light');
  const [manualTheme, setManualTheme] = useState(null);

  useEffect(() => {
    if (manualTheme) {
      setTheme(manualTheme);
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');

    const handler = (e) => {
      if (!manualTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [manualTheme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setManualTheme(newTheme);
    setTheme(newTheme);
  };

  const isDark = theme === 'dark';

  const projects = [
    {
      title: 'portfolio_optimizer',
      description: 'Modern Portfolio Theory implementation with GUI for portfolio comparison and allocation analysis. Features multiple allocation strategies with configurable rebalancing periods, interactive time-series visualizations with dividend options, and Excel export functionality for detailed analysis.',
      tech: ['Python', 'MPT', 'GUI', 'Pandas', 'NumPy'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop',
      highlights: [
        'Multiple allocation strategies',
        'Configurable rebalancing',
        'Interactive graphical analysis',
        'Excel export for allocations'
      ]
    },
    {
      title: 'trends',
      description: 'ML-based stock market regime classifier using Transformer models. Achieves 71% accuracy on out-of-sample testing with duration prediction accuracy of ±2 days for trends averaging 10-17 days. Implements rule-based training data generation for regime classification.',
      tech: ['Python', 'ML', 'Transformers', 'PyTorch'],
      image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=400&fit=crop',
      highlights: [
        '71% OOS accuracy',
        '±2 day duration accuracy',
        'Transformer-based architecture',
        '10-17 day average trend detection'
      ]
    },
    {
      title: 'trading_strat',
      description: 'Comprehensive trading strategy development and backtesting framework. Features interactive Plotly visualizations exportable as HTML, detailed equity curve analysis, and strategy performance metrics. Designed for rigorous testing and validation of algorithmic trading strategies.',
      tech: ['Python', 'Plotly', 'Backtesting'],
      image: 'https://images.unsplash.com/photo-1642790551116-18e150f248e5?w=800&h=400&fit=crop',
      highlights: [
        'Interactive HTML visualizations',
        'Strategy performance analysis',
        'Equity curve tracking',
        'Comprehensive backtesting'
      ]
    },
    {
      title: 'chess_engine',
      description: 'Chess game implementation with OpenGL-based graphics rendering. Features complete chess rule implementation, move validation, and visual board representation. Built from scratch to explore game development and graphics programming.',
      tech: ['Rust', 'OpenGL', 'Game Dev'],
      image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=400&fit=crop',
      highlights: [
        'OpenGL graphics rendering',
        'Complete chess rules',
        'Move validation system',
        'Built from scratch'
      ]
    },
    {
      title: 'dwl',
      description: 'Fork of the DWL Wayland window manager with custom features and enhancements. Demonstrates systems programming expertise and contribution to low-level software. Features improved functionality and performance optimizations.',
      tech: ['C', 'Wayland', 'Systems'],
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=400&fit=crop',
      highlights: [
        'Wayland compositor',
        'Custom feature additions',
        'Systems-level programming',
        '2 GitHub stars'
      ]
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg transition-colors ${
        isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'
      } border-b`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft size={20} />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Back to Home
            </span>
          </a>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-200'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className={`text-xl mb-12 text-center ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A collection of my work in quantitative finance, machine learning, and systems programming
          </p>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all ${
                isDark ? 'bg-slate-800' : 'bg-white'
              }`}>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-64 md:h-auto overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                    <p className={`mb-6 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold mb-2 uppercase tracking-wide">Key Features:</h3>
                      <ul className={`space-y-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className={`px-3 py-1 rounded-full text-sm ${
                          isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-700'
                        }`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                        <Github size={18} />
                        View on GitHub
                      </a>
                      <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`py-8 text-center border-t ${
        isDark ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-600'
      }`}>
        <p>© 2025 Eduard Kechedzhiev. Built with React.</p>
      </footer>
    </div>
  );
}