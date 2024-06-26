<template>
  <div class="flex justify-center mt-10">
    <div class="mr-10 border p-2 rounded">
      <select v-model="selectedName" @change="applyFilters">
        <option :value="selectedName">Filtrer par nom</option>
        <option v-for="(name, index) in uniqueNames" :key="index">{{ name }}</option>
      </select>
    </div>
    <div class="mr-10 border p-2 rounded">
      <input type="date" v-model="selectedDate" @change="applyFilters">
    </div>
    <div>
      <Button v-if="selectedName || selectedDate" text="Effacer les filtres" variant="5"
        @click="() => clearFilters()" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      reports: [],
      selectedName: '',
      selectedDate: null,
    }
  },
  mounted() {
    this.getReports()
  },
  computed: {
    uniqueNames() {
      const uniqueNames = new Set(this.reports.map(report => report.name));
      return Array.from(uniqueNames);
    }
  },
  methods: {
    async getReports() {
      try {
        const response = await $fetch('/api/reports')
        this.reports = response
      } catch (error) {
        console.error(error);
      }
    },
    applyFilters() {
      let filteredReports = this.reports;

      if (this.selectedName) {
        filteredReports = filteredReports.filter(report => report.name === this.selectedName);
      }

      if (this.selectedDate) {
        filteredReports = filteredReports.filter(report => report.createdAt.includes(this.selectedDate));
      }
      this.$emit('filteredReports', filteredReports);
    },
    clearFilters() {
      this.selectedName = '';
      this.selectedDate = null;
      this.$emit('filteredReports', this.reports);
    }
  },
}
</script>
