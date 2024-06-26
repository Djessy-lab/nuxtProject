<template>
  <div>
    <div class="h-[100vh] flex justify-center items-center align-middle">
      <div class="rounded-md shadow-lg w-[50%] h-[70vh] max-lg:w-full max-lg:h-full">
        <div>
          <div>
            <h1 class="text-2xl font-bold text-center mt-10">
              {{ legend }}
            </h1>
          </div>
          <div class="flex justify-center p-4 mx-auto mt-10 border rounded-md h-80 w-96">
            <p>
              <input v-model="report.name" @input="report.name = $event.target.value" type="text"
                class="border rounded-md w-full h-10 p-2" placeholder="Nom" />
              <input v-model="formattedDate" type="date"
                class="border rounded-md w-full h-10 mt-4 p-2" placeholder="Date" />
              <textarea v-model="report.content"
                class="border rounded-md w-full h-40 mt-4 p-2 resize-none" placeholder="Contenu"></textarea>
            </p>
          </div>
          <div class="flex justify-evenly mt-8">
            <Button v-for="(button, index) in buttons" :key="index" :text="button.text"
              :variant="button.variant" @click="handleButtonClick(button)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReportForm",
  props: {
    report: {
      type: Object,
      default: () => ({
        name: "",
        createdAt: new Date().toISOString().slice(0, 10),
        content: `FAIT :

EN COURS :

A FAIRE :
`
      })
    },
    buttons: { type: Array, default: () => [] },
    legend: { type: String, default: '' }
  },
  data() {
    return {
      date: this.report.createdAt,
    }
  },
  computed: {
    formattedDate: {
      get() {
        return this.date ? this.date.slice(0, 10) : '';
      },
      set(value) {
        this.date = value;
        this.report.createdAt = new Date(value).toISOString();
      }
    }
  },
  methods: {
    handleButtonClick(button) {
      if (button.click) {
        button.click(this.report);
      }
    }
  },
  watch: {
    report: {
      handler(newReport) {
        this.date = newReport.createdAt;
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
