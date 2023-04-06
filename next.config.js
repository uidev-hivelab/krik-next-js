/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    fiber: false,
    includePaths: [path.join(__dirname,'styles')],
    prependData: `@import "./base.scss";`
  },
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  }
}

module.exports = nextConfig
