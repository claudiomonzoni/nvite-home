import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL || process.env.ASTRO_DB_REMOTE_URL || "file:local.db",
    authToken: process.env.TURSO_AUTH_TOKEN || process.env.ASTRO_DB_APP_TOKEN,
  },
});
