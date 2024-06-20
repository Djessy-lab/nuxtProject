<template>
  <div>
    <button :class="`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded`">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Button'
    },
    color: {
      type: String,
      default: 'blue'
    }
  },
}
</script>
