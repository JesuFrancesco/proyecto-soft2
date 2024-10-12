import { SITE } from "./config.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: SITE.basePathname !== "/" ? SITE.basePathname : "",
  
  // trailingSlash: SITE.trailingSlash,
  // output: "export",

  trailingSlash: true,
  reactStrictMode: true,

  swcMinify: true,
  poweredByHeader: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
