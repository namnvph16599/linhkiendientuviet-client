/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
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
