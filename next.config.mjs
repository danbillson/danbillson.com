/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/cv",
        destination: "/cv.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
