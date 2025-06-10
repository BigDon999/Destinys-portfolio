/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domains.com'], // Add your image domains if needed
  },
  // Fix for Swiper in production
  webpack: (config) => {
    config.externals = [...config.externals, { swiper: 'swiper' }];
    return config;
  }
}

module.exports = nextConfig