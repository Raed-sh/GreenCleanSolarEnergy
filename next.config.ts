import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "out",
  basePath: "/GreenCleanSolarEnergy", // TODO: this should follow the domain
};

export default nextConfig;
