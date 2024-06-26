<template>
  <div>
    <button v-if="variant === '1'" class="bg-green-400 hover:bg-green-500 text-white font-medium py-2 px-4 rounded">
      {{ text }}
    </button>
    <button v-if="variant === '2'" class="bg-slate-400 hover:bg-slate-500 text-white font-medium py-2 px-4 rounded">
      {{ text }}
    </button>
    <button v-if="variant === '3'" class="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded">
      {{ text }}
    </button>
    <button v-if="variant === '4'" class="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded">
      {{ text }}
    </button>
    <button v-if="variant === '5'" class="border-[0.01px] hover:bg-slate-100  py-2 px-4 rounded">
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
