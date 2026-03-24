/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'reliance-eng.com',
        pathname: '/wp-content/**',
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
