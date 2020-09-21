<template>
  <div>
    <span v-if="label" class="text-subtitle-2 font-weight-light">{{ label }}</span>
    <v-text-field
      v-if="!password"
      :class="{disabled:disabled || readonly}"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled || readonly"
      :clearable="clearable"
      :rules="rules"
      solo
      dense
      @input="$emit('input', $event)"
    >
      <template v-for="(value, name) in $slots" v-slot:[name]>
        <slot :name="name" />
      </template>
    </v-text-field>
    <v-text-field
      v-else
      :class="{disabled:disabled || readonly}"
      :value="value"
      :placeholder="placeholder"
      :clearable="clearable"
      :disabled="disabled || readonly"
      :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
      :type="visible ? 'text' : 'password'"
      :rules="rules"
      solo
      dense
      @click:append="visible = !visible"
      @input="$emit('input', $event)"
    >
      <template v-for="(value, name) in $slots" v-slot:[name]>
        <slot :name="name" />
      </template>
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: "text-field",
  model: {
    prop: "value",
    event: "input",
  },
  mixins: [],
  props: {
    value: undefined,
    label: String,
    rules: Array,
    placeholder: String,
    readonly: Boolean,
    solo: Boolean,
    clearable: Boolean,
    password: Boolean,
    disabled: Boolean,
  },
  data: () => ({
    visible: false,
  }),
  methods: {},
  created() {},
  watch: {},
  computed: {},
};
</script>

<style scoped></style>
