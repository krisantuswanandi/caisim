import { nanoid } from "nanoid";
import { db, schema } from "@/database";

type NewProduct = typeof schema.product.$inferInsert;

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id = nanoid();

  if (!body.hash) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid URL",
    });
  }

  const newProduct: NewProduct = {
    id,
    name: body.name,
    price: body.price,
    store: body.store,
    image: body.hash,
  };

  try {
    // await db.insert(schema.product).values(newProduct);
    return newProduct;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Not able to create product",
    });
  }
});
