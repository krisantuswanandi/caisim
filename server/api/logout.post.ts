export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  await updateSession(
    event,
    { password: config.sessionPassword },
    { loggedIn: false }
  );
  return { message: "ok" };
});
