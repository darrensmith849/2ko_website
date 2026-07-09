import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Default config — uses Cloudflare's built-in incremental cache. Can
// be extended later with KV/R2/D1 bindings if we need shared state
// (e.g. moving the contact-form rate-limit out of in-memory).
export default defineCloudflareConfig();
