module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'], // Add your image domains here
  },
  eslint: {
    // Warning: this disables ESLint checks during production builds.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: this disables type checking during production builds.
    ignoreBuildErrors: true,
  },
};