export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const reports = await prisma.report.create({
    data: {
      name: body.name || "John Doe",
      content: body.content,
      createdAt: new Date(body.createdAt).toISOString()
    },
  });
  return reports;
});
