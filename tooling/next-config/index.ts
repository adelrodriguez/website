import bundleAnalyzer from "@next/bundle-analyzer"
import type { NextConfig } from "next"

export function createConfig(config: NextConfig = {}): NextConfig {
  return {
    ...config,
    typedRoutes: true,
    serverExternalPackages: ["pino", "@axiomhq/pino"],
    transpilePackages: [
      "@adel/ai",
      "@adel/analytics",
      "@adel/auth",
      "@adel/db",
      "@adel/email",
      "@adel/env",
      "@adel/internationalization",
      "@adel/kv",
      "@adel/observability",
      "@adel/queue",
      "@adel/security",
      "@adel/ui",
      "@adel/utils",
    ],
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }
}

export const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})
