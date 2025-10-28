'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '../theme-provider';
import { projects } from '@/data/projects';

const AUTO_SCROLL_INTERVAL = 3000; // 20 seconds (4x slower)
const PAUSE_DURATION = 8000; // 8 seconds after manual interaction

export default function ProjectsSection() {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAdvancingRef = useRef(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % projects.length;
      console.log(`[NEXT BUTTON] currentIndex: ${prev} → ${next}`);
      return next;
    });
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
          if (!isAdvancingRef.current) {
            // Set flag to prevent double-firing while state updates
            isAdvancingRef.current = true;

            // Advance to next slide inline - same logic as nextSlide button
            setCurrentIndex((current) => {
              const next = (current + 1) % projects.length;
              console.log(`[AUTO-SCROLL] currentIndex: ${current} → ${next}`);
              return next;
            });

            return 0;
          } else {
            // Flag is set, meaning we already advanced but state hasn't updated yet
            // Force return 0 to prevent progress from going above 100
            return 0;
          }
        }

        // Reset flag once progress is back below threshold
        if (prev < 50 && isAdvancingRef.current) {
          isAdvancingRef.current = false;
        }

        return prev + (100 / (AUTO_SCROLL_INTERVAL / 100));
      });
    }, 100);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPaused]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (autoScrollTimeoutRef.current) clearTimeout(autoScrollTimeoutRef.current);
    };
  }, []);

  // Calculate position of each project relative to current
  const getProjectPosition = (projectIndex: number) => {
    const diff = ((projectIndex - currentIndex + projects.length) % projects.length);

    if (diff === 0) return 'current';
    if (diff === 1) return 'next';
    if (diff === projects.length - 1) return 'prev';
    return 'hidden';
  };

  // Helper to render a project card
  const renderProjectCard = (project: typeof projects[0], index: number) => {
    const position = getProjectPosition(index);
    const isCenter = position === 'current';
    const isPrev = position === 'prev';
    const isNext = position === 'next';
    const isHidden = position === 'hidden';

    return (
      <div
        key={project.id}
        className="absolute top-0 left-1/2 w-full max-w-2xl transition-all duration-700 ease-out"
        style={{
          transform: isCenter
            ? 'translateX(-50%) scale(1) rotateY(0deg)'
            : isPrev
            ? 'translateX(calc(-50% + 400px)) scale(0.8) rotateY(-15deg)'
            : isNext
            ? 'translateX(calc(-50% - 400px)) scale(0.8) rotateY(15deg)'
            : 'translateX(-50%) scale(0.5) rotateY(0deg)',
          transformStyle: 'preserve-3d',
          zIndex: isCenter ? 30 : 10,
          opacity: isHidden ? 0 : isCenter ? 1 : 0.5,
          pointerEvents: isHidden ? 'none' : 'auto',
        }}
      >
        <div
          className={`rounded-2xl overflow-hidden transition-all ${
            isDark
              ? 'bg-slate-800 shadow-xl'
              : 'bg-white shadow-2xl'
          }`}
        >
          {/* Project Image */}
          <div className="relative h-48 md:h-64 bg-slate-700">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Project Content - Fade in/out with center position */}
          <div
            className={`p-8 transition-all duration-500 ${
              isCenter ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <h3
              className={`text-3xl font-bold mb-4 ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`text-lg mb-6 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {project.description}
            </p>

            {/* Tech Stack */}
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
        </div>
      </div>
    );
  };

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
          {/* 3D Carousel Stack */}
          <div
            className="relative h-[500px] md:h-[600px]"
            style={{ perspective: '2000px' }}
          >
            {projects.map((project, index) => renderProjectCard(project, index))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all z-40 ${
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
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all z-40 ${
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
