export default defineEventHandler(async (event) => {
  return {
    report: await prisma.report.findFirst()
  };
});
