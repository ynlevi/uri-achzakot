/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "netzahyehuda.org",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
