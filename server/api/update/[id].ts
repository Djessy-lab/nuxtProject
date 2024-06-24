export default defineEventHandler(async (event) => {
  const id = event.context.params?.id

  const body = await readBody(event)

  const report = await prisma.report.update({
    where: {
      id
    },
    data: {
      name: body.name,
      content: body.content,
    }
  })
  return report
})
