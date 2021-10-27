/** @type {import('next').NextConfig} */

const path = require('path')
module.exports = {
  reactStrictMode: true,
  experimental: {
    granularChunks: true
  },
  // productionBrowserSourceMaps: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com','st4.depositphotos.com','cdn.zeplin.io','thumbor.forbes.com','images.unsplash.com'],
  }
}
// const withImages = require('next-images')
// module.exports = withImages({
//   exclude: path.resolve(__dirname, 'public/svg'),
//   webpack(config, options) {
//     return config
//   }
// })