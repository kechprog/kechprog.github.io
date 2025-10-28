'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const { isDark } = useTheme();

  return (
    <main
      className={`min-h-screen py-12 px-6 transition-colors ${
        isDark ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
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
        <div className="mb-12">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            Projects
          </h1>
          <p
            className={`text-xl ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            A collection of my work in quantitative finance, machine learning, and systems programming
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl overflow-hidden transition-all ${
                isDark
                  ? 'bg-slate-800 hover:shadow-2xl hover:shadow-blue-900/20'
                  : 'bg-white hover:shadow-2xl shadow-lg'
              }`}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image */}
                <div className="relative h-64 md:h-auto bg-slate-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2
                    className={`text-3xl font-bold mb-4 ${
                      isDark ? 'text-slate-100' : 'text-slate-900'
                    }`}
                  >
                    {project.title}
                  </h2>

                  <p
                    className={`text-lg mb-4 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    {project.extendedDescription}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h3
                      className={`text-lg font-semibold mb-2 ${
                        isDark ? 'text-slate-200' : 'text-slate-800'
                      }`}
                    >
                      Key Features:
                    </h3>
                    <ul
                      className={`list-disc list-inside space-y-1 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {project.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                            isDark
                              ? 'bg-slate-700 text-slate-300'
                              : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      View on GitHub
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                          isDark
                            ? 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                            : 'bg-slate-200 hover:bg-slate-300 text-slate-800'
                        }`}
                      >
                        Live Demo
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
