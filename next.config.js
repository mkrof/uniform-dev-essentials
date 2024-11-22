const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_APP_VERSION: process.env.npm_package_version,
    NEXT_PUBLIC_BUILD_TIMESTAMP: String(new Date().valueOf()),
  },
  publicRuntimeConfig: {
    applicationId: process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
    algoliaApiKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY,
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '*' }],
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536],
  },
};

module.exports = nextConfig;
