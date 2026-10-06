/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "firebasestorage.googleapis.com",
      "firebasestorage.app",
    ],
  },
};

module.exports = nextConfig;