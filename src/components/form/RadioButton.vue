<template>
  <div>
    <v-radio-group
      :value="value"
      :class="{ disabled: disabled || readonly }"
      :dark="dark"
      :dense="dense"
      :disabled="disabled || readonly"
      :row="row"
      @change="$emit('change', $event)"
    >
      <!-- ラジオボタングループのラベル -->
      <template v-if="subTitle" v-slot:label>
        {{ subTitle }}
      </template>
      <v-radio v-for="(item, idx) in items" :key="idx" :value="item.value">
        <template v-slot:label>
          {{ item.label }}
        </template>
      </v-radio>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: "radio-button",
  model: {
    prop: "value",
    event: "change",
  },
  mixins: [],
  props: {
    value: [String, Number],
    subTitle: String,
    items: Array,
    required: Boolean,
    row: Boolean,
    light: Boolean,
    dark: Boolean,
    dense: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
    readonly: Boolean,
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
