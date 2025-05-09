/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sixsense-z2fk.onrender.comundefined",
      },
      {
        protocol: "https",
        hostname: "6sense-backend-v2.vercel.app",
      },
    ],
  },
};

export default nextConfig;
