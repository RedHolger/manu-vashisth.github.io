/** @type {import('next').NextConfig} */
const pagesBuild = process.env.GITHUB_PAGES === 'true';
const basePath = pagesBuild ? '/manu-vashisth.github.io' : '';
const nextConfig = {
  ...(pagesBuild ? { output: 'export', trailingSlash: true } : {}),
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  reactStrictMode: true,
  devIndicators: false,
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
  transpilePackages: ['motion', 'three'],
};

export default nextConfig;