<template>
  <div>
    <div class="bg-white shadow-md rounded p-4 min-h-32 max-h-32">
      <div class="flex justify-between">
        <div class="truncate">
          <h2 class="text-lg font-bold">Rapport de {{ name }}</h2>
          <p class="text-sm text-gray-500">{{ content }}</p>
        </div>
        <div>
          <Button text="Voir" color="gray" @click="buttonClick" />
          <p class="text-xs">
            {{ date }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      default: "John Doe",
    },
    content: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    date: {
      type: String,
      default: "",
    },
    buttonClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
