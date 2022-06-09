/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  async rewrites() {
    return [
      {
        source: '/crochet',
        destination: '/crochet.html',
      },
      {
        source: '/knit',
        destination: '/knit.html',
      },
    ]
  },
}

module.exports = nextConfig
