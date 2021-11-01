/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const path = require('path')
module.exports = {
  reactStrictMode: true,
  experimental: {
    granularChunks: true
  },
  env: {
    PUBLIC_URL: "https://emma2637.github.io/wild-riders-app",
    assetPrefix: './'
  },
  // productionBrowserSourceMaps: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'st4.depositphotos.com', 'cdn.zeplin.io', 'thumbor.forbes.com', 'images.unsplash.com'],
  },
  i18n
}