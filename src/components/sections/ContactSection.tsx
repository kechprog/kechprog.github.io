'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../theme-provider';

export default function ContactSection() {
  const { isDark } = useTheme();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/kechprog',
      color: 'from-slate-600 to-slate-800',
    },
    {
      name: 'Telegram',
      icon: Mail,
      url: 'https://t.me/Eduardk_k',
      color: 'from-blue-500 to-blue-700',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      color: 'from-blue-600 to-blue-800',
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 px-6 transition-colors scroll-mt-16 ${
        isDark ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-slate-100' : 'text-slate-900'
          }`}
        >
          Get in Touch
        </h2>
        <p
          className={`text-lg md:text-xl mb-12 ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          Feel free to reach out for collaborations, opportunities, or just to connect
        </p>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  isDark
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    : 'bg-white hover:bg-slate-50 text-slate-800 shadow-lg'
                }`}
              >
                <Icon className="w-6 h-6" />
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
