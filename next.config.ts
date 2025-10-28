import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
