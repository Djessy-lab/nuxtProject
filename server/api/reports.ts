export default defineEventHandler(async (event) => {
  const reports = await prisma.report.findMany();
  return reports;
});
