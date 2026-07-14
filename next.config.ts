import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // The default config also covers the Cloudflare worker used by vinext.
    // Netlify's Next.js runtime should type-check only the Next application.
    tsconfigPath: "tsconfig.next.json",
  },
};

export default nextConfig;
