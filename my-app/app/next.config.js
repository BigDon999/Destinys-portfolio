/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Fix Swiper module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      'swiper/react': 'swiper/react/swiper-react.js',
      'swiper/css': 'swiper/swiper.min.css',
      'swiper/modules': 'swiper/modules/swiper-modules.js',
    };
    return config;
  },
};
module.exports = nextConfig;