/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enable modern image formats for optimization. Local images in /public will continue to work.
    formats: ["image/avif", "image/webp"],
    // If you need to load images from external hosts, add `remotePatterns` or `domains` here.
    // Example:
    // remotePatterns: [ { protocol: 'https', hostname: '**' } ]
  },
}

export default nextConfig
