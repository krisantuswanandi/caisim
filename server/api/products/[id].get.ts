import { eq } from "drizzle-orm";
import { db, schema } from "@/database";
import { Product } from "@/database/schema";

export default defineAuthenticatedEventHandler(async (event) => {
  const id = getRouterParam(event, "id") || "";

  try {
    const product: Product[] = await db
      .select()
      .from(schema.product)
      .where(eq(schema.product.id, id));

    if (product.length !== 1) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not available",
      });
    }

    return product[0];
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Not able to get product",
    });
  }
});
