export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  if (body.password === config.appPassword) {
    await updateSession(
      event,
      { password: config.sessionPassword },
      { loggedIn: true }
    );
    return { message: "ok" };
  } else {
    console.error("Invalid password:", body.password);
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid password",
    });
  }
});
