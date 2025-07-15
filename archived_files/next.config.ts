/* eslint-disable @typescript-eslint/no-require-imports */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Development optimizations
  reactStrictMode: true,

  // Turbopack configuration (stable)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Image optimization
  images: {
    // remotePatterns replaces deprecated domains
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000', // adjust if you use a different port
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Headers for better caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  // Webpack configuration (only for production builds)
  webpack: (config, { dev }) => {
    // Only apply webpack config for production builds
    if (!dev) {
      // Bundle analyzer
      if (process.env.ANALYZE === 'true') {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const {
          BundleAnalyzerPlugin: bundleAnalyzerPlugin,
        } = require('@next/bundle-analyzer');
        config.plugins.push(
          new bundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
          })
        );
      }
    }
    return config;
  },
};

export default nextConfig;
