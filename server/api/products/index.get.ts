import { db, schema } from "@/database";
import { Product } from "@/database/schema";

export default defineEventHandler(async (event) => {
  const session = await getSession(event, {
    password: "7e654943-25e6-46de-b94a-6e64b81d7ef7",
  })
  try {
    const products: Product[] = await db.select().from(schema.product);
    setHeader(event, "user-id", session.data?.id || "no-id")
    return products;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Not able to get products",
    });
  }
});
