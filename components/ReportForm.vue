<template>
  <div>
    <div class="h-[100vh] flex justify-center items-center align-middle">
      <div class="rounded-md shadow-lg w-[50%] h-[70vh] max-lg:w-full max-lg:h-full">
        <div class="">
          <div>
            <h1 class="text-2xl font-bold text-center mt-10">
              {{ legend }}
            </h1>
          </div>
          <div class="flex justify-center p-4 mx-auto mt-10 border rounded-md h-80 w-96">
            <p>
              <input v-model="name" @input="report.name = $event.target.value" type="text"
                class="border rounded-md w-full h-10 p-2" placeholder="Nom" />
              <input v-model="date" @input="report.date = $event.target.value" type="date"
                class="border rounded-md w-full h-10 mt-4 p-2" placeholder="Date" />
              <textarea v-model="report.content" @input="report.content = $event.target.value"
                class="border rounded-md w-full h-40 mt-4 p-2 resize-none" placeholder="Contenu"></textarea>
            </p>
          </div>
          <div class="flex justify-center mt-10">
            <Button v-if="buttons[1]" v-for="(button, index) in buttons" :key="index" :text="button.text"
              :variant="button.variant" @click="button.click" />
            <Button v-else text="Ajouter" variant="3" @click="submitReport" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReportForm",
  data() {
    return {
      date: null,
      name: "",
      contentForm: `FAIT :

EN COURS :

A FAIRE :
`,
    }
  },
  props: {
    report: {
      type: Object,
      default: {
        name: "John Doe", date: new Date().toLocaleDateString(), content: `FAIT :

EN COURS :

A FAIRE :
`}
    },
    buttons: { type: Array, default: () => [] },
    legend: { type: String, default: '' }
  },
  methods: {
    submitReport() {
      this.$emit('report', this.report)
    },
  },
}
</script>
