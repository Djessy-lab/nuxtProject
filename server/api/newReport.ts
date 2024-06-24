export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const reports = await prisma.report.create({
    data: {
      name: body.name,
      content: body.content,
    },
  });
  return reports;
});
