/** @type {import('next').NextConfig} */
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      's3-us-west-2.amazonaws.com',
      's3.us-west-2.amazonaws.com',
      'cdn.spencer.felinae98.cn',
      'avatars.githubusercontent.com',
      'avatars0.githubusercontent.com',
      'avatars1.githubusercontent.com',
      'avatars2.githubusercontent.com',
      'avatars3.githubusercontent.com',
      'cdn.nir.land',
      'cn.cdn.nir.land',
      'assets.aquanir.cc',
      'quickview.aquanir.cc',
      'image.nirland.net'
    ]
  },
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
  async redirects() {
    return [
    {
      source: "/posts/index.xml",
      destination: "/feed",
      permanent: false
    },
    {
      source: "/feed.xml",
      destination: "/feed",
      permanent: false
    },
  ]
},
}