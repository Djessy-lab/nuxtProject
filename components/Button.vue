<template>
  <div>
    <button v-if="variant === '1'" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
      {{ text }}
    </button>
    <button v-if="variant === '2'" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
      {{ text }}
    </button>
    <button v-if="variant === '3'" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      {{ text }}
    </button>
    <button v-if="variant === '4'" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
      {{ text }}
    </button>
    <button v-if="variant === '5'" class="border hover:bg-slate-100 font-bold py-2 px-4 rounded">
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
    variant: {
      type: String,
      default: '1'
    }
  },
}
</script>
