import { db } from "~/db";
import { products } from "~/db/schema";

export default defineEventHandler(async (e) => {
  return db.select().from(products).all();
});
