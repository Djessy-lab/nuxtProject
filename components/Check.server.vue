<script setup>
  const prisma = usePrismaClient()
  const report = await prisma.report.findFirst()
  console.log(report);
</script>

<template>

</template>
