'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '../theme-provider';
import { projects } from '@/data/projects';

const AUTO_SCROLL_INTERVAL = 5000; // 5 seconds
const PAUSE_DURATION = 8000; // 8 seconds after manual interaction

export default function ProjectsSection() {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setProgress(0);
    pauseAutoScroll();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setProgress(0);
    pauseAutoScroll();
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    pauseAutoScroll();
  };

  const pauseAutoScroll = () => {
    setIsPaused(true);
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }
    autoScrollTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, PAUSE_DURATION);
  };

  // Auto-scroll and progress bar
  useEffect(() => {
    if (isPaused) return;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => (current + 1) % projects.length);
          return 0;
        }
        return prev + (100 / (AUTO_SCROLL_INTERVAL / 100));
      });
    }, 100);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPaused, currentIndex]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (autoScrollTimeoutRef.current) clearTimeout(autoScrollTimeoutRef.current);
    };
  }, []);

  const currentProject = projects[currentIndex];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-20 px-6 transition-colors scroll-mt-16 ${
        isDark ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            isDark ? 'text-slate-100' : 'text-slate-900'
          }`}
        >
          Featured Projects
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Project Card */}
          <div
            className={`rounded-2xl overflow-hidden transition-all ${
              isDark
                ? 'bg-slate-800 shadow-xl'
                : 'bg-white shadow-2xl'
            }`}
          >
            {/* Project Image */}
            <div className="relative h-64 md:h-96 bg-slate-700">
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Project Content */}
            <div className="p-8">
              <h3
                className={`text-3xl font-bold mb-4 ${
                  isDark ? 'text-slate-100' : 'text-slate-900'
                }`}
              >
                {currentProject.title}
              </h3>
              <p
                className={`text-lg mb-6 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {currentProject.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {currentProject.techStack.map((tech) => (
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
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all ${
              isDark
                ? 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                : 'bg-white hover:bg-slate-100 text-slate-700 shadow-lg'
            }`}
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all ${
              isDark
                ? 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                : 'bg-white hover:bg-slate-100 text-slate-700 shadow-lg'
            }`}
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Progress Bar */}
          <div
            className={`mt-6 h-1 rounded-full overflow-hidden ${
              isDark ? 'bg-slate-700' : 'bg-slate-200'
            }`}
          >
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 w-8'
                    : isDark
                    ? 'bg-slate-700 hover:bg-slate-600'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
