<template>
  <div>
    <Report :name="$route.query.name" :content="$route.query.content" :date="$route.query.date" />
  </div>
</template>

<script>
export default {
  name: "[id]",
  data() {
    return {

    }
  },
}
</script>
