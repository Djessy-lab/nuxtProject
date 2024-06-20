<template>
  <div class="h-[100vh] flex justify-center items-center align-middle">
    <div class="rounded-md shadow-lg w-[50%] h-[70vh]">
      <div class="">
        <div>
          <h1 class="text-2xl font-bold text-center mt-10">
            {{ $route.query.name }}
          </h1>
          <p class="font-thin text-sm text-center mt-4">Le {{ $route.query.date }}</p>
        </div>
        <div class="flex justify-center p-4 mx-auto mt-10 border rounded-md h-64 w-96">
          <p>
            {{ $route.query.content }}
          </p>
        </div>
        <div class="flex justify-center mt-10">
          <Button text="Retour" color="gray" @click="handleClick()" />
        </div>
      </div>
    </div>
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
