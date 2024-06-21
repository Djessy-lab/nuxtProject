export default defineEventHandler(async (event) => {
  return {
    reports: await prisma.report.findMany()
  };
});
