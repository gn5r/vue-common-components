<template>
  <v-container fluid>
    <v-row align="center" justify="start" no-gutters>
      <v-col cols="3" lg="2">
        <date-picker v-model="date" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DatePicker from "@/components/form/DatePicker"

export default {
  name: "",
  mixins: [],
  props: {},
  data: () => ({
    date: ""
  }),
  methods: {},
  created() {},
  computed: {},
  watch: {},
  components: {
    DatePicker
  },
};
</script>

<style scoped>
</style>