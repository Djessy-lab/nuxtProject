<template>
  <div>
    <Report :id="report.id" :name="report.name" :content="reportContent" :date="report.createdAt" :buttons="buttons" />
  </div>
</template>

<script>
export default {
  name: "[id]",
  data() {
    return {
      report: {},
      reportContent: [],
      buttons: [
        { text: 'Retour', variant: '5', click: () => this.handleHome() },
        { text: 'Supprimer', variant: '2', click: () => this.deleteReport(this.$route.query.id) },
        { text: 'Modifier', variant: '1', click: () => this.updateReport(this.$route.query.id) },
      ]
    }
  },
  mounted() {
    this.getReport()
  },
  methods: {
    async getReport() {
      try {
        const response = await fetch(`http://localhost:3000/api/${this.$route.query.id}`)
        const report = await response.json()
        this.report = report
        this.reportContent = report.content.split('\n')
      } catch (error) {
        console.error(error);
      }
    },
    handleHome() {
      this.$router.push('/')
    },
    async deleteReport(id) {
      try {
        await $fetch(`/api/delete/${id}`)
        this.$router.push('/')
      } catch (error) {
        console.error(error);
      }
    },
    async updateReport(id) {
      this.$router.push(`/update-report/${id}`)
    }
  },
}
</script>
