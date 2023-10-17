export default defineEventHandler(async (event) => {
  const config = await useRuntimeConfig();
  const session = await getSession(event, {
    password: config.sessionPassword,
  });
  event.context.loggedIn = session.data?.loggedIn || false;
});
