import { nanoid } from "nanoid";
import { db, schema } from "@/database";

type NewProduct = typeof schema.product.$inferInsert;

export default defineAuthenticatedEventHandler(async (event) => {
  const body = await readBody(event);
  const id = nanoid();

  if (!body.name || !body.price || !body.store) {
    throw createError({
      statusCode: 400,
      statusMessage: "Fill out all fields",
    });
  }

  if (isNaN(body.price)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Price must be a number",
    });
  }

  const newProduct: NewProduct = {
    id,
    name: body.name,
    price: body.price,
    store: body.store,
    image: "",
  };

  try {
    await db.insert(schema.product).values(newProduct);
    return newProduct;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Not able to create product",
    });
  }
});
