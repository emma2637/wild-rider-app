/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const path = require('path')
module.exports = {
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.mdx/,
  //     use: [
  //       options.defaultLoaders.babel,
  //       {
  //         loader: '@mdx-js/loader',
  //         options: pluginOptions.options,
  //       },
  //     ],
  //   })

  //   // Important: return the modified config
  //   return config
  // },
  reactStrictMode: true,
  // experimental: {
  //   granularChunks: true
  // },
  // productionBrowserSourceMaps: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  i18n
}