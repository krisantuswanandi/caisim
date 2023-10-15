export default defineEventHandler(async (event) => {
  await updateSession(event, {
    password: "7e654943-25e6-46de-b94a-6e64b81d7ef7",
  }, {
    id: "foobar",
  });
  return { message: "ok" };
});
