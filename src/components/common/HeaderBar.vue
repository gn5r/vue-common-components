<template>
  <v-app-bar app :color="color" :dark="dark" :dense="dense">
    <v-toolbar-title>{{titleText}}</v-toolbar-title>
    <v-spacer v-if="spacer" />
    <slot name="tool-bar-items" />
  </v-app-bar>
</template>
<script>
export default {
  name: "header-bar",
  props: {
    titleText: String,
    color: {
      type: String,
      default: "primary",
    },
    dark: {
      type: Boolean,
      default: true,
    },
    dense: Boolean,
    spacer: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
