export default defineEventHandler(async (event) => {
  const id = event.context.params?.id

  const report = await prisma.report.delete({
    where: { id }
  })
  return report
})
