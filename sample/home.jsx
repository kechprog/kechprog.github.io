import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, ChevronLeft, ChevronRight, Sun, Moon } from 'lucide-react';

export default function Portfolio() {
  const [theme, setTheme] = useState('light');
  const [manualTheme, setManualTheme] = useState(null);
  const [currentProject, setCurrentProject] = useState(0);
  const [progress, setProgress] = useState(0);
  const carouselRef = useRef(null);
  const autoScrollInterval = useRef(null);
  const progressInterval = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAutoScroll();
          } else {
            stopAutoScroll();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      observer.disconnect();
      stopAutoScroll();
    };
  }, []);

  const startAutoScroll = () => {
    stopAutoScroll();
    setProgress(0);
    
    autoScrollInterval.current = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
      setProgress(0);
    }, 4000);

    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / 4000) * 50;
      });
    }, 50);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
      progressInterval.current = null;
    }
  };

  const nextProject = () => {
    stopAutoScroll();
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setTimeout(startAutoScroll, 8000);
  };

  const prevProject = () => {
    stopAutoScroll();
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(startAutoScroll, 8000);
  };

  const projects = [
    {
      title: 'portfolio_optimizer',
      description: 'Modern Portfolio Theory implementation with GUI for portfolio comparison and analysis',
      tech: ['Python', 'MPT', 'GUI'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop',
    },
    {
      title: 'trends',
      description: 'ML-based stock market regime classifier using Transformers. 71% accuracy on OOS testing',
      tech: ['Python', 'ML', 'Transformers'],
      image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=400&fit=crop',
    },
    {
      title: 'trading_strat',
      description: 'Trading strategy backtesting framework with interactive Plotly visualizations',
      tech: ['Python', 'Plotly', 'Backtesting'],
      image: 'https://images.unsplash.com/photo-1642790551116-18e150f248e5?w=800&h=400&fit=crop',
    },
    {
      title: 'chess_engine',
      description: 'Chess game implementation with OpenGL graphics rendering',
      tech: ['Rust', 'OpenGL', 'Game Dev'],
      image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=400&fit=crop',
    },
    {
      title: 'dwl',
      description: 'DWL Wayland window manager fork with custom features',
      tech: ['C', 'Wayland', 'Systems'],
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=400&fit=crop',
    },
  ];

  const isDark = theme === 'dark';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const target = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: target,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg transition-colors ${
        isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'
      } border-b`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Eduard Kechedzhiev
          </div>
          <div className="flex gap-8 items-center">
            <a href="#" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
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
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className={`w-32 h-32 mx-auto rounded-full mb-6 ${
              isDark ? 'bg-gradient-to-br from-blue-600 to-violet-600' : 'bg-gradient-to-br from-blue-500 to-violet-500'
            } flex items-center justify-center text-4xl font-bold text-white`}>
              EK
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Eduard Kechedzhiev
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Quantitative Developer & Systems Programmer
          </p>
          
          <p className={`text-lg mb-12 max-w-2xl mx-auto ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Building algorithmic trading systems, portfolio optimization tools, and low-level systems software. 
            Passionate about finance, machine learning, and performance-critical applications.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 rounded-lg border-2 transition-all hover:scale-105 ${
                isDark 
                  ? 'border-slate-700 hover:border-blue-600 hover:text-blue-400' 
                  : 'border-slate-300 hover:border-blue-600 hover:text-blue-600'
              }`}
            >
              Get in Touch
            </button>
          </div>

          <a href="#about" className="block">
            <ChevronDown className="mx-auto animate-bounce opacity-50 hover:opacity-100 transition-opacity cursor-pointer" size={32} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-24 pb-12 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Main Bio */}
            <div className={`sm:col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl p-8 ${
              isDark ? 'bg-slate-800/50' : 'bg-white'
            } shadow-xl flex flex-col justify-center`}>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Developer & Quant
              </h3>
              <p className={`text-lg leading-relaxed mb-4 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                I'm Eduard, a developer from Toronto focused on the intersection of finance and technology. 
                I spend most of my time building quantitative trading systems and working on systems-level projects in Rust and C.
              </p>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                My recent work includes developing a stock market regime classifier with transformer models achieving 71% OOS accuracy, 
                and building portfolio optimization tools based on Modern Portfolio Theory.
              </p>
            </div>

            {/* Key Achievement */}
            <div className={`rounded-2xl p-6 ${
              isDark ? 'bg-gradient-to-br from-violet-900/50 to-fuchsia-900/50' : 'bg-gradient-to-br from-violet-50 to-fuchsia-50'
            } shadow-xl flex flex-col justify-center items-center text-center`}>
              <div className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-2">
                71%
              </div>
              <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                OOS accuracy on market regime classification
              </p>
            </div>

            {/* Location & Status */}
            <div className={`rounded-2xl p-6 ${
              isDark ? 'bg-slate-800/50' : 'bg-white'
            } shadow-xl flex flex-col justify-center`}>
              <h3 className="text-xl font-bold mb-3">Based in</h3>
              <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                📍 Toronto, ON
              </p>
              <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Awaiting university admissions
              </p>
            </div>

            {/* Current Focus */}
            <div className={`sm:col-span-2 lg:col-span-2 rounded-2xl p-6 ${
              isDark ? 'bg-gradient-to-br from-blue-900/50 to-violet-900/50' : 'bg-gradient-to-br from-blue-50 to-violet-50'
            } shadow-xl flex flex-col justify-center`}>
              <h3 className="text-xl font-bold mb-3">Currently</h3>
              <p className={`${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Building algorithmic trading strategies and exploring ML applications in quantitative finance
              </p>
            </div>

            {/* Interests */}
            <div className={`sm:col-span-2 rounded-2xl p-6 ${
              isDark ? 'bg-slate-800/50' : 'bg-white'
            } shadow-xl flex flex-col justify-center`}>
              <h3 className="text-xl font-bold mb-3">Interests</h3>
              <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Performance-critical applications, algorithmic trading, ML for finance, systems programming
              </p>
            </div>

            {/* Tech Stack */}
            <div className={`sm:col-span-2 lg:col-span-4 rounded-2xl p-6 ${
              isDark ? 'bg-slate-800/50' : 'bg-white'
            } shadow-xl`}>
              <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Python', color: 'from-blue-500 to-yellow-500' },
                  { name: 'Rust', color: 'from-orange-600 to-orange-400' },
                  { name: 'C', color: 'from-blue-700 to-blue-500' },
                  { name: 'PyTorch', color: 'from-red-600 to-orange-500' },
                  { name: 'Transformers', color: 'from-purple-600 to-pink-500' },
                  { name: 'OpenGL', color: 'from-green-600 to-blue-500' },
                  { name: 'Pandas', color: 'from-indigo-600 to-blue-400' },
                  { name: 'NumPy', color: 'from-blue-600 to-cyan-400' },
                ].map((tech, i) => (
                  <span key={i} className={`px-4 py-2 rounded-lg bg-gradient-to-r ${tech.color} text-white font-medium shadow-md hover:scale-105 transition-transform`}>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-24 px-6 ${
        isDark ? 'bg-slate-800/30' : 'bg-slate-100'
      }`} ref={carouselRef}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-4">
                    <div className={`rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto ${
                      isDark ? 'bg-slate-800' : 'bg-white'
                    }`}>
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="h-80 overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="p-8 flex flex-col justify-center">
                          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                          <p className={`mb-6 text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech, i) => (
                              <span key={i} className={`px-3 py-1 rounded-full text-sm ${
                                isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-700'
                              }`}>
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg">
                            View Project <ExternalLink size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className={`absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all hover:scale-110 ${
                isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-slate-100'
              } shadow-lg`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className={`absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all hover:scale-110 ${
                isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-slate-100'
              } shadow-lg`}
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    stopAutoScroll();
                    setCurrentProject(idx);
                    setProgress(0);
                    setTimeout(startAutoScroll, 8000);
                  }}
                  className={`h-2 rounded-full transition-all relative overflow-hidden ${
                    idx === currentProject 
                      ? 'w-8' 
                      : `w-2 ${isDark ? 'bg-slate-700' : 'bg-slate-300'}`
                  }`}
                >
                  {idx === currentProject && (
                    <>
                      <div className={`absolute inset-0 ${isDark ? 'bg-blue-900' : 'bg-blue-200'}`} />
                      <div 
                        className={`absolute inset-0`}
                        style={{
                          width: `${progress}%`,
                          transition: 'width 0.05s linear',
                          background: isDark 
                            ? 'linear-gradient(to right, #1e3a8a 0%, #1e3a8a 60%, #2563eb 80%, #7c3aed 100%)' 
                            : 'linear-gradient(to right, #bfdbfe 0%, #bfdbfe 60%, #3b82f6 80%, #8b5cf6 100%)'
                        }}
                      />
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className={`text-xl mb-12 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Interested in collaborating or want to discuss a project? Feel free to reach out!
          </p>
          
          <div className="flex gap-6 justify-center">
            <a href="https://github.com/kechprog" target="_blank" rel="noopener noreferrer" 
               className={`p-4 rounded-full transition-all hover:scale-110 ${
                 isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-slate-100'
               } shadow-lg`}>
              <Github size={28} />
            </a>
            <a href="https://t.me/Eduardk_k" target="_blank" rel="noopener noreferrer"
               className={`p-4 rounded-full transition-all hover:scale-110 ${
                 isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-slate-100'
               } shadow-lg`}>
              <Mail size={28} />
            </a>
            <a href="#" className={`p-4 rounded-full transition-all hover:scale-110 ${
              isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-slate-100'
            } shadow-lg`}>
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center border-t ${
        isDark ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-600'
      }`}>
        <p>© 2025 Eduard Kechedzhiev. Built with React.</p>
      </footer>
    </div>
  );
}