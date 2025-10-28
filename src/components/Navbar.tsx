'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './theme-provider';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const { isDark } = useTheme();
  const isHomePage = pathname === '/';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        isDark
          ? 'bg-slate-900/80 backdrop-blur-lg'
          : 'bg-white/80 backdrop-blur-lg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className={`text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent`}
          >
            Eduard Kechedzhiev
          </Link>

          <div className="flex items-center gap-6">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    pathname === link.href
                      ? 'text-blue-600 font-semibold'
                      : isDark
                      ? 'text-slate-300 hover:text-slate-100'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
