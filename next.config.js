/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const path = require('path')
module.exports = {
  
  reactStrictMode: true,
  
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  i18n:{
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'es', 'de'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
  }
}