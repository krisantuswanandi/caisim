import { InferSelectModel } from "drizzle-orm";
import { sqliteTable, text, real } from "drizzle-orm/sqlite-core";

export const product = sqliteTable("product", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  image: text("image"),
  price: real("price").notNull(),
  store: text("store").notNull(),
});

export type Product = InferSelectModel<typeof product>;
