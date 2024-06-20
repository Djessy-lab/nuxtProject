<template>
  <div>
    <Button text="Retour" variant="3" @click="handleClick()" />
    <NewReportForm @newReport="handleNewReport" />
  </div>
</template>

<script>
export default {
  name: "add-report",
  data() {
    return {

    }
  },
  methods: {
    handleClick() {
      this.$router.push('/')
    },
    handleNewReport(report) {
      console.log(report);
      this.$router.push({
        path: '/',
        query: {
          name: report.name,
          date: report.date,
          content: report.content
        }
      });
    }
  },
}
</script>
