import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/services/marketing-agency-for-hispanic-businesses",
        destination: "/services/bilingual-marketing-agency",
        permanent: true,
      },
      {
        source: "/services/latino-owned-business-marketing",
        destination: "/services/bilingual-marketing-agency",
        permanent: true,
      },
      {
        source: "/industries/hispanic-owned-businesses",
        destination: "/industries/bilingual-cross-border-companies",
        permanent: true,
      },
      {
        source: "/industries/latino-owned-businesses",
        destination: "/industries/bilingual-cross-border-companies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
