import { db, schema } from "@/database";
import { Product } from "@/database/schema";

export default defineEventHandler(async () => {
  try {
    const products: Product[] = await db.select().from(schema.product);
    return products;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Not able to get products",
    });
  }
});
