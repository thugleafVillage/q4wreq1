/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: ['app']
  },
}

module.exports = nextConfig