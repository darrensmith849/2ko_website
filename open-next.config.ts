import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Minimal config: this is a marketing site with no ISR / on-demand
// revalidation, so no incremental cache (R2/KV) override is needed.
// Add one here later if `use cache` / revalidation gets introduced.
export default defineCloudflareConfig();
