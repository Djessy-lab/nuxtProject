<template>
  <div>
    {{ id }}
    {{ $route.query.name }}
    {{ $route.query.date }}
    {{ $route.query.content }}
    <Button text="Retour" color="gray" @click="handleClick()" />
  </div>
</template>

<script>
export default {
  name: "[id]",
  data() {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    handleClick() {
      this.$router.push('/')
    },
  },
}
</script>
