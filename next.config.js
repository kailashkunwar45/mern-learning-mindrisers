/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: {
      root: __dirname,
    },
    outputFileTracingRoot: __dirname,
  },
};

module.exports = nextConfig;
