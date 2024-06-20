<template>
  <div>
    <Button text="Retour" color="gray" @click="handleClick()" />
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
