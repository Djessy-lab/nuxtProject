<template>
  <div>
    <h1
      class='text-center text-7xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text font-mono'>
      Activity Reports</h1>
    <div class="flex justify-center mt-36">
      <Button text="Ajouter un rapport" variant="1" @click="handleClick()" />
    </div>
    <div class="grid grid-cols-4 gap-4 max-lg:grid-cols-1 mt-20 p-10">
      <div v-for="(card, index) in sortedCards" :key="index">
        <Card :buttonClick="() => buttonClick(card)" :key="index" :name="card.name" :date="card.createdAt"
          :content="card.content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: []
    }
  },
  mounted() {
    this.getReports();
  },
  computed: {
    sortedCards() {
      return this.cards.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
  },
  watch: {
    cards() {
      this.$router.push({ query: {} });
    }
  },
  methods: {
    handleClick() {
      this.$router.push('/add-report');
    },
    buttonClick(card) {
      this.$router.push({
        path: `/report/${card.id}`,
        query: {
          id: card.id,
        }
      });
    },
    async getReports() {
      const reports = await $fetch('/api/reports');
      this.cards = reports;
    }
  },
}
</script>
