import { db } from "~/db";
import { products } from "~/db/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return db
    .insert(products)
    .values({
      ...body,
      createdAt: new Date().toISOString(),
    })
    .execute();
});
