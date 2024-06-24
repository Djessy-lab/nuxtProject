export default defineEventHandler(async (event) => {
  const id = event.context.params?.id

  const report = await prisma.report.findFirst({
    where: { id }
  })
  return report
})
