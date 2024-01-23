import type { Config } from "drizzle-kit";
export default {
  schema: "./db/schema.ts",
  dbCredentials: {
    url: "file:./local.db",
  },
  driver: "turso",
  out: "./db/drizzle",
} satisfies Config;
