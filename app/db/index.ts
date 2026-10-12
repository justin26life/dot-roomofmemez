import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

// Wraps Cloudflare's raw D1 database with Drizzle, so we can write
// TypeScript queries instead of raw SQL.
export function getDb(d1: D1Database) {
  return drizzle(d1, { schema });
}