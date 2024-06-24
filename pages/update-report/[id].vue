<template>
  <div>
    <ReportForm :report="report" :buttons="buttons" legend="Modifier le rapport" />
  </div>
</template>

<script>
export default {
  name: "[id]",
  data() {
    return {
      report: {},
      buttons: [
        { text: 'Annuler', variant: '5', click: () => this.$router.back() },
        { text: 'Valider', variant: '3', click: () => this.updateReport(this.report) },
      ],
    }
  },
  mounted() {
    this.getReport()
  },
  methods: {
    async getReport() {
      try {
        const response = await fetch(`http://localhost:3000/api/${this.$route.params.id}`)
        const report = await response.json()
        this.report = report
      } catch (error) {
        console.error(error);
      }
    },
    async updateReport(report) {
      try {
        const response = await $fetch(`/api/update/${report.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(report)
        });
        this.$router.back();
      } catch (error) {
        console.error('Error adding the report:', error);
      }
    }
  }
}
</script>
