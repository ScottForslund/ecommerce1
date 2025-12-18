/** @type {import('next').Config} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/ecommerce1",
  assetPrefix: "/ecommerce1/",
  trailingSlash: true,
};

module.exports = nextConfig;
