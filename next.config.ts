import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  async redirects() {
    return [
      {
        source: '/privacy-policy.php',
        destination: '/privacy_policy',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/aboutus.php',
        destination: '/about_us',
        permanent: true,
      },
      {
        source: '/knowledgebase',
        destination: '/blogs',
        permanent: true,
      }
    ];
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
