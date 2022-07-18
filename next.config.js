/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.themealdb.com'],
    minimumCacheTTL: 60,
  },
  env: {
    API_URL: 'https://www.themealdb.com/api/json/v1/1',
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/categories',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
