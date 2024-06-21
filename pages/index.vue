<template>
  <div>
    <h1 class="text-center font-mono text-4xl mt-10">Vos rapports d'activité</h1>
    <div class="flex justify-center mt-36">
      <Button text="Ajouter un rapport" variant="1" @click="handleClick()" />
    </div>
    <div class="grid grid-cols-4 gap-4 max-lg:grid-cols-1 mt-20 p-10">
      <div v-for="(card, index) in cards" :key="index">
        <Card :buttonClick="() => buttonClick(card)" :key="index" :name="card.name" :date="card.date"
          :content="card.content" />
      </div>
    </div>
  </div>
</template>
<script>
import { createWebHistory } from 'vue-router';

export default {
  data() {
    return {
      cards: [
        { id: 1, name: 'Djessy C', date: '20/06/2024', content: 'Projet formulaires + début de projet nuxt' },
        { id: 2, name: 'Nicolas H', date: '20/06/2024', content: 'Formation CliR' },
        { id: 3, name: 'Nicolas F', date: '20/06/2024', content: 'Formation CliR' },
        { id: 4, name: 'Pascal O', date: '20/06/2024', content: 'Supervision des petits jeunes' },
        { id: 5, name: 'Faten M', date: '20/06/2024', content: 'Issues : 145, 456, 678, 987, 09, 567, 345, 0987, 43567, 267863' },
        { id: 6, name: 'Thomas P', date: '20/06/2024', content: 'Projet formulaires' },
        { id: 7, name: 'Nino L', date: '20/06/2024', content: "J'ai fais tout le design pour les impôts en même temps que mes petites cartes de jeuxJ'ai fais tout le design pour les impôts en même temps que mes petites cartes de jeuxJ'ai fais tout le design pour les impôts en même temps que mes petites cartes de jeuxJ'ai fais tout le design pour les impôts en même temps que mes petites cartes de jeux" },
        { id: 8, name: 'Alexandre S', date: '20/06/2024', content: 'Support/Carton de déménagement' },
      ]
    }
  },
  mounted() {
    const { name, date, content } = this.$route.query;
    if (name && date && content) {
      this.cards.push({ id: this.cards.length + 1, name, date, content });
    }
    this.getReports();
  },
  watch: {
    cards(){
      this.$router.push({ query: {} });
    }
  },
  methods: {
    handleClick() {
      this.$router.push('/add-report')
    },
    buttonClick(card) {
      this.$router.push({
        path: `/report/${card.id}`,
        query: {
          name: card.name,
          date: card.date,
          content: card.content
        }
      });
    },
    async getReports(){
      const response = await fetch('http://localhost:3000/api/reports');
      const data = await response.json();
      console.log(data);
      // this.cards = data;
    }
  },
}
</script>
