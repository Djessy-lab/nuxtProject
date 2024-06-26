<template>
  <div>
    <ReportForm :buttons="buttons" legend="Ajouter un rapport d'activités" />
  </div>
</template>

<script>
export default {
  name: "add-report",
  data() {
    return {
      buttons: [
        { text: 'Annuler', variant: '5', click: () => this.handleClick() },
        { text: 'Ajouter', variant: '3', click: (report) => this.handleNewReport(report) },
      ]
    }
  },
  methods: {
    handleClick() {
      this.$router.push('/')
    },
    async handleNewReport(report) {
      try {
        const response = await $fetch('/api/newReport', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(report)
        });
        this.$router.push('/');
      } catch (error) {
        console.error('Error adding the report:', error);
      }
    }
  },
}
</script>
