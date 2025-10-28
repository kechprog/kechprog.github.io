'use client';

import Link from 'next/link';
import { ArrowLeft, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

export default function ContactPage() {
  const { isDark } = useTheme();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/kechprog',
    },
    {
      name: 'Telegram',
      icon: Mail,
      url: 'https://t.me/Eduardk_k',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
    },
  ];

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
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p
            className={`text-xl ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Let's connect and discuss opportunities
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 ${
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

        {/* Mock Email Form */}
        <div
          className={`rounded-2xl overflow-hidden transition-all ${
            isDark ? 'bg-slate-800 shadow-2xl' : 'bg-white shadow-2xl'
          }`}
        >
          <div className="p-8">
            <h2
              className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              Send a Message
            </h2>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* To Field (disabled) */}
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  To
                </label>
                <input
                  type="text"
                  value="eduard@example.com"
                  disabled
                  className={`w-full px-4 py-3 border-b-2 bg-transparent focus:outline-none ${
                    isDark
                      ? 'border-slate-700 text-slate-400'
                      : 'border-slate-300 text-slate-500'
                  }`}
                />
              </div>

              {/* From Field */}
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  From
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 border-b-2 bg-transparent focus:outline-none transition-colors ${
                    isDark
                      ? 'border-slate-700 text-slate-200 placeholder-slate-500 focus:border-blue-500'
                      : 'border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-600'
                  }`}
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className={`w-full px-4 py-3 border-b-2 bg-transparent focus:outline-none transition-colors ${
                    isDark
                      ? 'border-slate-700 text-slate-200 placeholder-slate-500 focus:border-blue-500'
                      : 'border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-600'
                  }`}
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  rows={8}
                  placeholder="Your message here..."
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-transparent focus:outline-none transition-colors resize-none ${
                    isDark
                      ? 'border-slate-700 text-slate-200 placeholder-slate-500 focus:border-blue-500'
                      : 'border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-600'
                  }`}
                />
              </div>

              {/* Send Button */}
              <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Send Message
              </button>

              {/* Disclaimer */}
              <p
                className={`text-sm text-center ${
                  isDark ? 'text-slate-500' : 'text-slate-500'
                }`}
              >
                This form is for demonstration purposes. Please use the social links above to contact me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
