/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const path = require("path");
const nextConfig = {
  i18n,
  transpilePackages: ["antd-mobile"],
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};

module.exports = nextConfig;
