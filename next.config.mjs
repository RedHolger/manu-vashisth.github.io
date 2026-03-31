/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['ghchart.rshah.org'],
  },
  transpilePackages: ['motion'],   // ← This was the missing piece
};

export default nextConfig;