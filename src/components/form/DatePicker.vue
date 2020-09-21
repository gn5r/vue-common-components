<template>
  <div>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-bind="attrs"
          v-on="on"
          :value="value"
          :clearable="clearable"
          prepend-icon="event"
          readonly
          solo
          dense
          @click:prepend="menu = true"
        ></v-text-field>
      </template>
      <v-date-picker :value="parseDate(value)" @input="input" :show-current="showCurrentDay" />
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "date-picker",
  model: {
    prop: "value",
    event: "input",
  },
  mixins: [],
  props: {
    value: undefined,
    disabled: Boolean,
    clearable: Boolean,
    format: {
      type: String,
      default: "slash",
      validator: (v) => {
        // slash, hyphenを許可
        return ["slash", "hyphen"].indexOf(v) !== -1;
      },
    },
    showCurrentDay: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    menu: false,
  }),
  methods: {
    input(v) {
      this.menu = false;
      this.$emit("input", this.dateFormat(v));
    },

    dateFormat(date) {
      if (!date) return null;

      // formatがslashの場合はハイフンを変換する
      if (this.format === "slash") {
        const [year, month, day] = date.split("-");
        return `${year}/${month}/${day}`;
      }
      return date;
    },

    parseDate(date) {
      if (!date) return null;

      // formatがslashの場合はスラッシュをハイフンに変換する
      if (this.format === "slash") {
        const [year, month, day] = date.split("/");
        return `${year}-${month.padStart(2, "0")}-${day}`;
      }
      return date;
    },
  },
  created() {},
  computed: {},
  watch: {},
  components: {},
};
</script>

<style scoped>
</style>