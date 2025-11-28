import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'portfolio_optimizer',
    title: 'portfolio_optimizer',
    description: 'Portfolio optimization using Modern Portfolio Theory with historical data analysis',
    extendedDescription: 'A comprehensive portfolio optimization tool implementing Modern Portfolio Theory to help investors make data-driven allocation decisions based on historical performance data.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop',
    keyFeatures: [
      'Multiple allocation strategies (equal weight, minimum variance, maximum Sharpe ratio)',
      'Configurable rebalancing periods',
      'Excel export functionality for analysis'
    ],
    techStack: ['Python', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/kechprog/portfolio_optimizer',
    liveUrl: 'https://portfolio-optimizer.app',
  },
  {
    id: 'trends',
    title: 'trends',
    description: 'ML model for market regime classification with 71% OOS accuracy',
    extendedDescription: 'A machine learning model that classifies market regimes with impressive out-of-sample accuracy, helping traders identify trend directions and durations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    keyFeatures: [
      '71% out-of-sample accuracy',
      '±2 day duration accuracy',
      '10-17 day average trend predictions'
    ],
    techStack: ['Python', 'PyTorch', 'Transformers'],
    githubUrl: 'https://github.com/kechprog/trends',
  },
  {
    id: 'trading_strat',
    title: 'trading_strat',
    description: 'Advanced backtesting framework with interactive visualizations',
    extendedDescription: 'A sophisticated backtesting framework designed for systematic trading strategy development, featuring comprehensive visualization tools and performance analytics.',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=400&fit=crop',
    keyFeatures: [
      'Interactive HTML visualizations',
      'Comprehensive equity curve analysis',
      'Multiple strategy support and comparison'
    ],
    techStack: ['Python', 'Pandas'],
    githubUrl: 'https://github.com/kechprog/trading_strat',
  },
  {
    id: 'chess_engine',
    title: 'chess_engine',
    description: 'High-performance chess engine built with Rust and OpenGL rendering',
    extendedDescription: 'A modern chess engine implementation combining Rust\'s performance with OpenGL graphics for smooth, real-time gameplay visualization.',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=400&fit=crop',
    keyFeatures: [
      'Complete chess rules implementation',
      'Move validation and legal move generation',
      'OpenGL-based rendering for smooth graphics'
    ],
    techStack: ['Rust', 'OpenGL'],
    githubUrl: 'https://github.com/kechprog/chess_engine',
    liveUrl: 'https://kechprog.github.io/chess_engine/',
  },
  {
    id: 'dwl',
    title: 'dwl',
    description: 'Customized fork of dwl Wayland window manager',
    extendedDescription: 'A personalized fork of the dwl Wayland compositor, featuring custom patches and configurations for an optimized Linux desktop environment.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=400&fit=crop',
    keyFeatures: [
      'Custom patches and modifications',
      'Lightweight and performant',
      '2 GitHub stars'
    ],
    techStack: ['C'],
    githubUrl: 'https://github.com/kechprog/dwl',
  },
];
