/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "dl5zpyw5k3jeb.cloudfront.net",
      "images.unsplash.com",
      "placekitten.com",
    ],
  },
};

module.exports = nextConfig;
