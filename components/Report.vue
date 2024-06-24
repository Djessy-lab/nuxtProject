<template>
  <div class="h-[100vh] flex justify-center items-center align-middle">
    <div class="rounded-md shadow-lg w-[50%] h-[70vh] max-lg:w-full max-lg:h-full">
      <div class="">
        <div>
          <h1 class="text-2xl font-bold text-center mt-10">
            {{ name }}
          </h1>
          <p class="font-thin text-sm text-center mt-4">Le {{ new Date(date).toLocaleDateString() }}</p>
        </div>
        <div class="p-4 leading-8 mx-auto mt-10 border rounded-md h-64 w-96 bg-white">
          <p v-for="(line, index) in content" :key="index">
            {{ line }}
          </p>
        </div>
        <div class="flex justify-around mt-10">
          <Button v-for="(button, index) in buttons" :key="index" :text="button.text" :variant="button.variant" @click="button.click" />
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
      type: [String, Array],
      default: ""
    },
    date: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    buttons: { type: Array, default: () => [] }
  },
}
</script>
