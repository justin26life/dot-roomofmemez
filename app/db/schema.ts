import { sql } from "drizzle-orm";
import {
  sqliteTable,
  text,
  integer,
  primaryKey,
} from "drizzle-orm/sqlite-core";

// The category circles at the top of Home
export const categories = sqliteTable("categories", {
  id: text("id").primaryKey(), // e.g. "animals"
  name: text("name").notNull(),
  icon: text("icon").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

// Every meme ever posted
export const memes = sqliteTable("memes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  caption: text("caption").notNull().default(""),
  mediaType: text("media_type", { enum: ["image", "gif", "clip"] }).notNull(),
  // The file's name inside R2 storage (the file itself is NOT in the database)
  mediaKey: text("media_key").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});

// Links memes to categories. A meme with no category has no rows here.
export const memeCategories = sqliteTable(
  "meme_categories",
  {
    memeId: integer("meme_id")
      .notNull()
      .references(() => memes.id, { onDelete: "cascade" }),
    categoryId: text("category_id")
      .notNull()
      .references(() => categories.id, { onDelete: "cascade" }),
  },
  (t) => [primaryKey({ columns: [t.memeId, t.categoryId] })]
);