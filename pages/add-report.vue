<template>
  <div>
    <Button text="Retour" variant="3" @click="handleClick()" />
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
    }
  },
}
</script>
