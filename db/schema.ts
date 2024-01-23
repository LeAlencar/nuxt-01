import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  firstName: text("first_name"),
  email: text("email").unique(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const products = sqliteTable("products", {
  id: integer("id").primaryKey(),
  name: text("name"),
  price: integer("price"),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});
