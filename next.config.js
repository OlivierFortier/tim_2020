const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  crossOrigin: 'anonymous',
  images: {
    domains: ['assets.vercel.com', 'images.ctfassets.net', 'ctfassets.net'],
  },
  experimental: {
    optimizeFonts: true,
  },
});
