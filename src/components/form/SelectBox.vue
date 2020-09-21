<template>
  <div>
    <span v-if="label" class="text-subtitle-2 font-weight-light">
      {{ label }}
    </span>
    <v-select
      :value="value"
      :class="{ disabled: disabled || readonly }"
      :disabled="disabled || readonly"
      :items="items"
      :item-text="itemText"
      :item-value="itemValue"
      :clearable="clearable"
      no-data-text="データがありません"
      hide-details
      solo
      dense
      @change="$emit('select', $event)"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "select-box",
  model: {
    prop: "value",
    event: "select",
  },
  mixins: [],
  props: {
    value: undefined,
    readonly: Boolean,
    disabled: Boolean,
    clearable: Boolean,
    dark: Boolean,
    dense: Boolean,
    label: String,
    items: Array,
    itemText: {
      type: String,
      default: "value",
    },
    itemValue: {
      type: String,
      default: "id",
    },
  },
  data: () => ({}),
  methods: {},
  created() {},
  computed: {},
  watch: {},
  components: {},
};
</script>

<style scoped></style>
