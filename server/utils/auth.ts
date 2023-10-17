import type { EventHandler, EventHandlerRequest } from "h3";

export const defineAuthenticatedEventHandler = <
  T extends EventHandlerRequest,
  D
>(
  handler: EventHandler<T, D>
): EventHandler<T, D> => {
  return defineEventHandler<T>(async (event) => {
    if (!event.context.loggedIn) {
      console.error("Unauthorized");
      throw createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      });
    }

    const response = await handler(event);
    return response;
  });
};
