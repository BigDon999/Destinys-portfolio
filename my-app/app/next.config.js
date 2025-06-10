/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Fix for Swiper in production
  webpack: (config) => {
    config.externals = [...config.externals, { swiper: 'swiper' }];
    return config;
  }
}

module.exports = nextConfig