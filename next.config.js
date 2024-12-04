/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/564x/**',
      },
      {
        protocol: 'https',
        hostname: 'img.shields.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app', // Ajout pour GitHub Readme Stats
        pathname: '/**', // Autorise tous les chemins
      },
      {
        protocol: 'https',
        hostname: 'github-readme-activity-graph.vercel.app', // Ajout pour GitHub Activity Graph
        pathname: '/**', // Autorise tous les chemins
      },
      {
        protocol: 'https',
        hostname: 'github-readme-streak-stats.herokuapp.com', // Ajout pour GitHub Streak Stats
        pathname: '/**', // Autorise tous les chemins
      },
    ],
  },
};

module.exports = nextConfig;
