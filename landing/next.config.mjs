/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/archivist",
  distDir: "../docs",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
