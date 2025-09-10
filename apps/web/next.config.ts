import { withIntl } from "@adel/internationalization/nextjs/config"
import { createContentCollectionPlugin } from "@content-collections/next"
import { createConfig, withBundleAnalyzer } from "@tooling/next-config"

// Verify environment variables
import "~/shared/env"

const withContentCollections = createContentCollectionPlugin({
  configPath: "src/content-collections.ts",
})

let nextConfig = createConfig({
  experimental: {
    viewTransition: true,
  },
})

nextConfig = withBundleAnalyzer(nextConfig)
nextConfig = withIntl(nextConfig)
nextConfig = withContentCollections(nextConfig)

export default nextConfig
