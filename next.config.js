/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable React strict mode for better performance
  reactStrictMode: true,
  // Optimize production build
  swcMinify: true,
  // Reduce bundle size
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
