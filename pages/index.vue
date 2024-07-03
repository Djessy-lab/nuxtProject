<template>
  <div>
    <h1
      class='mt-10 text-center text-7xl font-normal bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text'>
      Activity Reports </h1>
    <div class="flex justify-center mt-20">
      <Button text="Ajouter un rapport" variant="1" @click="handleClick()" />
    </div>
    <div class="mt-40">
      <Filters @filteredReports="updateFilteredReports" />
    </div>
    <div class="flex justify-center">
      <div class="grid grid-cols-2 gap-4 max-lg:grid-cols-1 mt-10 p-10 w-[80%]">
        <div v-for="(report, index) in sortedReports" :key="index">
          <Card :buttonClick="() => buttonClick(report)" :key="index" :name="report.name" :date="report.createdAt"
            :content="report.content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reports: [],
      filteredReports: []
    }
  },
  mounted() {
    this.getReports();
  },
  computed: {
    sortedReports() {
      return this.filteredReports.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
  },
  watch: {
    reports() {
      this.$router.push({ query: {} });
    }
  },
  methods: {
    handleClick() {
      this.$router.push('/add-report');
    },
    buttonClick(report) {
      this.$router.push({
        path: `/report/${report.id}`,
        query: {
          id: report.id,
        }
      });
    },
    async getReports() {
      const reports = await $fetch('/api/reports');
      this.reports = reports;
      this.filteredReports = reports;
    },
    updateFilteredReports(filteredReports) {
      this.filteredReports = filteredReports;
    }
  },
}
</script>
