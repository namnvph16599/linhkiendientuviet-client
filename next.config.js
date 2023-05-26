/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com', 'cdn.sforum.vn','anvientv.com.vn','i1-dulich.vnecdn.net']
  },
  transpilePackages: ['antd-mobile'],
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

module.exports = nextConfig;
