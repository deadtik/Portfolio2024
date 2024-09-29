/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true, // Removed trailing comma here
}; // Added a semicolon to end the object definition

module.exports = nextConfig;
