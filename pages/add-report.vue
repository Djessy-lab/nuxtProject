<template>
  <div>
    <Button text="Retour" variant="3" @click="handleClick()" />
    <ReportForm @report="handleNewReport" legend="Ajouter un rapport d'activités" />
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
