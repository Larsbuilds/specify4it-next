const withNextIntl = require('next-intl/plugin')('./app/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: '.next',
  generateBuildId: async () => {
    return 'development-build'
  },
  // Optimize performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion'],
  },
  // Reduce development logging
  logging: {
    level: 'error',
    fullUrl: false,
  },
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // Prevent initial HTML flash
  poweredByHeader: false
}

module.exports = withNextIntl(nextConfig);