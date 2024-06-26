<template>
  <div>
    <ReportForm :report="report" :buttons="buttons" legend="Modifier le rapport" @report="updateReport" />
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
    this.getReport();
  },
  methods: {
    async getReport() {
      try {
        const response = await fetch(`http://localhost:3000/api/${this.$route.params.id}`);
        const report = await response.json();
        report.createdAt = new Date(report.createdAt).toISOString().slice(0, 10); 
        this.report = report;
      } catch (error) {
        console.error(error);
      }
    },
    async updateReport(report) {
      try {
        await fetch(`/api/update/${report.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(report)
        });
        this.$router.back();
      } catch (error) {
        console.error('Error updating the report:', error);
      }
    }
  }
}
</script>
