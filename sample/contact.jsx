import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowLeft, Sun, Moon } from 'lucide-react';

export default function ContactPage() {
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className={`text-xl mb-12 text-center ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Let's discuss your project, collaboration, or just say hello
          </p>

          {/* Contact Options */}
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <a href="https://github.com/kechprog" target="_blank" rel="noopener noreferrer" 
               className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all hover:scale-105 ${
                 isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-slate-100'
               } shadow-lg`}>
              <Github size={20} />
              <span className="font-medium">GitHub</span>
            </a>
            <a href="https://t.me/Eduardk_k" target="_blank" rel="noopener noreferrer"
               className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all hover:scale-105 ${
                 isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-slate-100'
               } shadow-lg`}>
              <Mail size={20} />
              <span className="font-medium">Telegram</span>
            </a>
            <a href="#" className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all hover:scale-105 ${
              isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-slate-100'
            } shadow-lg`}>
              <Linkedin size={20} />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-12">
            <div className={`flex-1 h-px ${isDark ? 'bg-slate-800' : 'bg-slate-300'}`} />
            <span className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              or send a message
            </span>
            <div className={`flex-1 h-px ${isDark ? 'bg-slate-800' : 'bg-slate-300'}`} />
          </div>

          {/* Email Form */}
          <div className={`rounded-2xl overflow-hidden shadow-xl ${
            isDark ? 'bg-slate-800' : 'bg-white'
          }`}>
            {/* Email Header */}
            <div className={`px-6 py-4 border-b ${
              isDark ? 'border-slate-700 bg-slate-900/50' : 'border-slate-200 bg-slate-50'
            }`}>
              <div className="text-sm font-semibold">New Message</div>
            </div>

            {/* Email Fields */}
            <div className="p-6 space-y-4">
              <div className={`flex items-center border-b pb-3 ${
                isDark ? 'border-slate-700' : 'border-slate-200'
              }`}>
                <label className={`w-24 text-sm font-medium ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>To:</label>
                <input 
                  type="text" 
                  value="Eduard Kechedzhiev"
                  disabled
                  className={`flex-1 bg-transparent outline-none ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                />
              </div>

              <div className={`flex items-center border-b pb-3 ${
                isDark ? 'border-slate-700' : 'border-slate-200'
              }`}>
                <label className={`w-24 text-sm font-medium ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>From:</label>
                <input 
                  type="email" 
                  placeholder="your.email@example.com"
                  className={`flex-1 bg-transparent outline-none placeholder-opacity-50 ${
                    isDark ? 'text-slate-200 placeholder-slate-500' : 'text-slate-700 placeholder-slate-400'
                  }`}
                />
              </div>

              <div className={`flex items-center border-b pb-3 ${
                isDark ? 'border-slate-700' : 'border-slate-200'
              }`}>
                <label className={`w-24 text-sm font-medium ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>Subject:</label>
                <input 
                  type="text" 
                  placeholder="Project collaboration, job opportunity, etc."
                  className={`flex-1 bg-transparent outline-none placeholder-opacity-50 ${
                    isDark ? 'text-slate-200 placeholder-slate-500' : 'text-slate-700 placeholder-slate-400'
                  }`}
                />
              </div>

              <div className="pt-2">
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>Message:</label>
                <textarea 
                  placeholder="Write your message here..."
                  rows="10"
                  className={`w-full bg-transparent outline-none resize-none placeholder-opacity-50 ${
                    isDark ? 'text-slate-200 placeholder-slate-500' : 'text-slate-700 placeholder-slate-400'
                  }`}
                />
              </div>
            </div>

            {/* Send Button */}
            <div className={`px-6 py-4 border-t flex justify-between items-center ${
              isDark ? 'border-slate-700' : 'border-slate-200'
            }`}>
              <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                Note: This form is for demonstration purposes
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-medium">
                Send Message
              </button>
            </div>
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