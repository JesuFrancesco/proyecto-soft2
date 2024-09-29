import { SITE } from "./config.js"

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  
    trailingSlash: SITE.trailingSlash,
    basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',
  
    swcMinify: true,
    poweredByHeader: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'source.unsplash.com',
        },
      ],
    }
  };

export default nextConfig;
