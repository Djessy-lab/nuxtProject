<template>
  <div class="h-[100vh] flex justify-center items-center align-middle">
    <div class="rounded-md shadow-lg w-[50%] h-[70vh] max-lg:w-full max-lg:h-full">
      <div class="">
        <div>
          <h1 class="text-2xl font-bold text-center mt-10">
            {{ name }}
          </h1>
          <p class="font-thin text-sm text-center mt-4">Le {{ date }}</p>
        </div>
        <div class="flex justify-center p-4 mx-auto mt-10 border rounded-md h-64 w-96">
          <p>
            {{ content }}
          </p>
        </div>
        <div class="flex justify-center mt-10">
          <Button text="Retour" variant="2" @click="handleClick()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Report",
  data() {
    return {
    }
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    },
  },
  methods: {
    handleClick() {
      this.$router.push('/')
    },
  },
}
</script>
