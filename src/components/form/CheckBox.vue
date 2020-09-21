<template>
  <div>
    <v-checkbox
      v-model="checked"
      :class="{ disabled: disabled || readonly }"
      :disabled="disabled || readonly"
      :label="label"
      :indeterminate="indeterminate"
    >
    </v-checkbox>
  </div>
</template>

<script>
export default {
  name: "check-box",
  model: {
    prop: "value",
    event: "change",
  },
  mixins: [],
  props: {
    value: [String, Number, Boolean],
    disabled: Boolean,
    required: Boolean,
    readonly: Boolean,
    label: String,
    indeterminate: Boolean,
    type: {
      type: String,
      default: "bool",
      validator: (v) => {
        // Number,Boolean,numStrを許可
        return ["num", "bool", "numStr"].indexOf(v) !== -1;
      },
    },
  },
  data: () => ({}),
  methods: {
    convertValue(v, type) {
      if (typeof v === "number" || typeof v === "string") {
        let tmp = Number(v);
        switch (type) {
          case "num":
            return tmp;
          case "numStr":
            return String(tmp);
          default:
            return tmp === 1 ? true : false;
        }
      } else if (typeof v === "boolean") {
        switch (type) {
          case "num":
            return v === true ? 1 : 0;
          case "numStr":
            return v === true ? "1" : "0";
          default:
            return v;
        }
      }
    },
  },
  created() {},
  computed: {
    checked: {
      set(v) {
        this.$emit("change", this.convertValue(v, this.type));
      },
      get() {
        return this.convertValue(this.value, this.type);
      },
    },
  },
  watch: {},
  components: {},
};
</script>

<style scoped></style>
