/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;