/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["robohash.org"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
