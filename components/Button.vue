<template>
  <div>
    <button :class="buttonClasses">
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
  computed: {
    buttonClasses() {
      return [
        `bg-${this.color}-500`,
        `hover:bg-${this.color}-700`,
        'text-white',
        'font-bold',
        'py-2',
        'px-4',
        'rounded'
      ]
    }
  }
}
</script>
